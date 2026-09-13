"use client";

import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import {
  constructionFrames,
  constructionStages,
} from "@/lib/construction-sequence";

const FRAME_COUNT = constructionStages.length;
const LAST_INDEX = FRAME_COUNT - 1;
const AUTOPLAY_STEP_MS = 260;

const PLAY_ICON = (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M4 2.5v11l9-5.5-9-5.5z" />
  </svg>
);

const PAUSE_ICON = (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" />
  </svg>
);

export function ConstructionSequence({
  no = "01",
  className = "",
}: {
  no?: string;
  className?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRefs = useRef<Array<HTMLImageElement | null>>([]);
  const indexRef = useRef(0);
  const playingRef = useRef(false);
  const failedRef = useRef<Set<number>>(new Set());
  const timerRef = useRef(0);
  const syncRef = useRef<() => void>(() => {});
  const controlsRef = useRef({ toggle: () => {} });

  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let staticMode = false;

    /* Kare inmeden sahnede boşluk göstermeyelim: hazır olmayan hedefe geçilmez,
       kare indiğinde sync() yeniden çağrılır. */
    const isReady = (index: number) => {
      const image = frameRefs.current[index];
      if (!image) return false;
      if (failedRef.current.has(index)) return true;
      return image.complete && image.naturalWidth > 0;
    };

    const show = (value: number) => {
      const target = Math.max(0, Math.min(LAST_INDEX, Math.round(value)));
      if (target === indexRef.current || !isReady(target)) return;
      indexRef.current = target;
      setActiveIndex(target);
    };

    const indexFromScroll = () => {
      const span = section.offsetHeight - window.innerHeight;
      const progress =
        span <= 0
          ? 1
          : Math.min(
              1,
              Math.max(0, -section.getBoundingClientRect().top / span),
            );
      return progress * LAST_INDEX;
    };

    /* Oynatma sırasında scroll'dan gelen senkronizasyon kareyi ileri atlamasın. */
    const sync = () => {
      if (playingRef.current) return;
      show(staticMode ? LAST_INDEX : indexFromScroll());
    };
    syncRef.current = sync;

    const stop = () => {
      playingRef.current = false;
      setPlaying(false);
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = 0;
    };

    const start = () => {
      stop();
      playingRef.current = true;
      setPlaying(true);
      show(0);
      timerRef.current = window.setInterval(() => {
        if (indexRef.current >= LAST_INDEX) {
          stop();
          return;
        }
        show(indexRef.current + 1);
      }, AUTOPLAY_STEP_MS);
    };

    controlsRef.current.toggle = () => (playingRef.current ? stop() : start());

    let raf = 0;
    const schedule = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        sync();
      });
    };

    const onScroll = () => {
      if (playingRef.current) stop();
      schedule();
    };

    if (reducedMotion.matches) {
      staticMode = true;
      section.classList.add("sequence-section--static");
      schedule();
      return stop;
    }

    schedule();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
      stop();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-tone="dark"
      className={`sequence-section ${className}`.trim()}
      aria-label="İnşaat süreci"
    >
      <div className="sequence-section__stage">
        <div className="sequence-section__backdrop" aria-hidden="true" />
        <div
          className="blueprint-dark sequence-section__grid"
          aria-hidden="true"
        />
        <div className="sequence-section__ground" aria-hidden="true" />

        <div className="sequence-section__frames" aria-hidden="true">
          {constructionStages.map((stage, index) => (
            /* Tüm kareler sayfa açılışında inmeye başlar: loading varsayılan
               olarak eager, sonraki kareler düşük öncelikle indirilir. */
            <picture key={stage.file} className="sequence-section__frame">
              <source
                media={`(max-width: ${constructionFrames.breakpoint}px)`}
                srcSet={`${constructionFrames.mobile.path}${stage.file}.webp`}
              />
              <img
                ref={(element) => {
                  frameRefs.current[index] = element;
                }}
                src={`${constructionFrames.desktop.path}${stage.file}.webp`}
                alt=""
                width={constructionFrames.desktop.width}
                height={constructionFrames.desktop.height}
                decoding="async"
                fetchPriority={index === 0 ? "auto" : "low"}
                className={index === activeIndex ? "is-active" : undefined}
                onLoad={() => syncRef.current()}
                onError={() => {
                  failedRef.current.add(index);
                  syncRef.current();
                }}
              />
            </picture>
          ))}
        </div>

        <div className="sequence-section__hud">
          <div className="sequence-section__row">
            <SectionLabel no={no} tone="light">
              Sahada
            </SectionLabel>
          </div>

          <div className="sequence-section__row">
            <p className="sequence-section__counter font-display">
              {String(activeIndex + 1).padStart(2, "0")}
              <small className="font-sans">/ {FRAME_COUNT}</small>
            </p>
            <p className="sequence-section__stage-name font-display">
              {constructionStages[activeIndex].label}
            </p>
          </div>

          <div className="sequence-section__controls">
            <div className="sequence-section__rail">
              <span
                className="sequence-section__rail-fill"
                style={{ width: `${(activeIndex / LAST_INDEX) * 100}%` }}
              />
            </div>
            <button
              type="button"
              className="sequence-section__play"
              onClick={() => controlsRef.current.toggle()}
              aria-label={playing ? "Duraklat" : "Oynat"}
            >
              {playing ? PAUSE_ICON : PLAY_ICON}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
