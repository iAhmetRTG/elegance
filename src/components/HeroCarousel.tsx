"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getImageProps } from "next/image";
import { heroProjects, type HeroProject } from "@/lib/hero-projects";
import { Icon } from "./Icon";

const TRANSITION_MS = 800;
const AUTOPLAY_MS = 8000;
const SWIPE_THRESHOLD = 48;

/* Marka slogani: masaustunde sag altta, proje basligiyla yarismayan olcekte.
   Fotografin ustunde okunakli kalmasi icin cift katmanli golge tasir. */
function Slogan({ className = "" }: { className?: string }) {
  return (
    <p
      className={`font-display text-paper [text-shadow:0_2px_8px_rgba(18,16,10,0.52),0_3px_30px_rgba(18,16,10,0.66)] ${className}`.trim()}
    >
      <span className="block tracking-[-0.01em]">Yeni nesil bir yaşam tarzı,</span>
      <span className="mt-1 block pr-[1.1em] tracking-[-0.01em] text-paper/80">
        yaşamın en <em className="italic text-brass-soft">modern</em> hali.
      </span>
    </p>
  );
}

/* Kunye satiri: konum ve yil tek satirda birlesir. Yil, mevcut not alaninin
   son parcasindan turetilir; boylece proje veri modeli degismez. */
function metaLine(project: HeroProject) {
  const period = project.note.split("·").pop()?.trim();
  return period ? `${project.location} · ${period}` : project.location;
}

function SlideImage({
  project,
  priority,
}: {
  project: HeroProject;
  priority: boolean;
}) {
  const common = { alt: project.alt, sizes: "100vw" };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    width: 1536,
    height: 1024,
    src: project.desktopImage,
  });
  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({
    ...common,
    width: 941,
    height: 1672,
    src: project.mobileImage,
  });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
      <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
      <img
        {...imgProps}
        alt={project.alt}
        className="hero-slide-img absolute inset-0 h-full w-full object-cover"
        style={
          {
            ...imgProps.style,
            "--hero-pos-desktop": project.desktopPosition,
            "--hero-pos-mobile": project.mobilePosition,
          } as React.CSSProperties
        }
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}

export function HeroCarousel() {
  const count = heroProjects.length;
  const [index, setIndex] = useState(0);
  const [interacted, setInteracted] = useState(false);
  const [inView, setInView] = useState(true);
  const [reduced, setReduced] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const pointerRef = useRef({ x: 0, y: 0, down: false });
  const draggedRef = useRef(false);

  const step = useCallback(
    (delta: number) => {
      setInteracted(true);
      setIndex((prev) => (prev + delta + count) % count);
    },
    [count],
  );

  const goTo = useCallback(
    (next: number) => {
      setInteracted(true);
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.5),
      { threshold: [0, 0.5, 1] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (interacted || reduced || !inView) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [interacted, reduced, inView, count]);

  useEffect(() => {
    if (!inView) return;
    const onKey = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
      ) {
        return;
      }
      const target = event.target as HTMLElement | null;
      if (
        target?.closest(
          "input, textarea, select, [contenteditable='true']",
        )
      ) {
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inView, step]);

  const onPointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerRef.current = {
      x: event.clientX,
      y: event.clientY,
      down: true,
    };
    draggedRef.current = false;
  };

  const onPointerUp = (event: React.PointerEvent<HTMLElement>) => {
    if (!pointerRef.current.down) return;
    pointerRef.current.down = false;
    const dx = event.clientX - pointerRef.current.x;
    const dy = event.clientY - pointerRef.current.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    draggedRef.current = true;
    step(dx < 0 ? 1 : -1);
  };

  const onPointerCancel = () => {
    pointerRef.current.down = false;
  };

  const onClickCapture = (event: React.MouseEvent<HTMLElement>) => {
    if (!draggedRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    draggedRef.current = false;
  };

  const active = heroProjects[index];
  const counter = `${active.id} / ${String(count).padStart(2, "0")}`;

  return (
    <section
      ref={sectionRef}
      data-hero
      data-tone="dark"
      aria-roledescription="carousel"
      aria-label="Seçili projeler"
      className="relative h-[100svh] min-h-[560px] overflow-hidden bg-ink text-paper lg:min-h-[720px] [touch-action:pan-y_pinch-zoom]"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onClickCapture={onClickCapture}
    >
      <h1 className="sr-only">
        Elegance İnşaat · Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya&apos;da
        kentsel dönüşüm projeleri
      </h1>

      {heroProjects.map((project, i) => {
        const isActive = i === index;
        const offset = i - index;
        return (
          <div
            key={project.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${count}: ${project.name}`}
            aria-hidden={!isActive}
            className="hero-slide absolute inset-0"
            style={{
              transform: `translate3d(${
                isActive ? "0%" : offset < 0 ? "-6%" : "6%"
              }, 0, 0)`,
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 2 : 1,
              transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms ease`,
              pointerEvents: "none",
            }}
          >
            <SlideImage project={project} priority={i === 0} />
          </div>
        );
      })}

      {/* Fotografin ust ve orta alani dogal kalir: golge yalnizca metnin
          arkasinda, alt seritte ve iki alt kosede toplanir. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[50%] bg-[linear-gradient(to_top,rgba(18,16,10,0.8)_0%,rgba(18,16,10,0.66)_25%,rgba(18,16,10,0.52)_45%,rgba(18,16,10,0.3)_72%,rgba(18,16,10,0)_100%)] lg:h-[42%] lg:bg-[linear-gradient(to_top,rgba(18,16,10,0.72)_0%,rgba(18,16,10,0.46)_24%,rgba(18,16,10,0.24)_52%,rgba(18,16,10,0.07)_78%,rgba(18,16,10,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(118%_42%_at_6%_100%,rgba(18,16,10,0.66),transparent_76%)] lg:bg-[radial-gradient(52%_52%_at_0%_100%,rgba(18,16,10,0.68),transparent_76%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 hidden bg-[radial-gradient(34%_38%_at_100%_100%,rgba(18,16,10,0.48),transparent_78%)] lg:block"
      />

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 pb-[calc(1.75rem_+_env(safe-area-inset-bottom))] lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-14 lg:pb-12 xl:px-16">
          <div
            aria-live={interacted ? "polite" : "off"}
            className="max-w-md [text-shadow:0_1px_2px_rgba(18,16,10,0.9),0_2px_20px_rgba(18,16,10,0.65)] lg:max-w-lg"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-paper/90 lg:text-[11px]">
              {"Proje / "}
              {active.id}
            </p>
            <p className="mt-3 font-display text-[2.1rem] leading-[1.05] lg:mt-4 lg:text-[3.6rem] xl:text-[4rem]">
              {active.name}
            </p>
            <p className="mt-3 text-[13px] tracking-wide text-paper/90 lg:mt-4 lg:text-[15px]">
              {metaLine(active)}
            </p>
            <Link
              href={active.href}
              className="mt-5 inline-flex items-center gap-3 border-b border-paper/50 pb-1.5 text-[13px] tracking-wide text-paper transition-colors duration-300 hover:border-paper lg:mt-6 lg:text-sm"
            >
              Projeyi incele
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </Link>
          </div>

          {/* lg:mr-10 sag alttaki WhatsApp butonunun kapladigi alani acik birakir. */}
          <div className="flex flex-col gap-8 lg:mr-10 lg:w-auto lg:items-end lg:gap-16">
            <div className="hidden lg:block">
              <Slogan className="text-right text-[1.9rem] leading-[1.22] xl:text-[2.15rem]" />
            </div>

            <div className="flex items-center justify-between gap-6 lg:justify-end lg:gap-7">
              <div
                className="flex items-center gap-2"
                role="group"
                aria-label="Slayt seçimi"
              >
                {heroProjects.map((project, i) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`${project.id} · ${project.name} projesine git`}
                    aria-current={i === index ? "true" : undefined}
                    className="group/bar py-3"
                  >
                    <span
                      className={`block h-[2px] w-7 transition-colors duration-500 lg:w-9 ${
                        i === index
                          ? "bg-paper"
                          : "bg-paper/30 group-hover/bar:bg-paper/60"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <span className="eyebrow text-paper/85 tabular-nums">
                {counter}
              </span>

              <div className="hidden items-center gap-2 lg:flex">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Önceki proje"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-paper/25 text-paper/75 transition-colors duration-300 hover:border-paper/60 hover:text-paper"
                >
                  <Icon name="arrowRight" className="h-3.5 w-3.5 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Sonraki proje"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-paper/25 text-paper/75 transition-colors duration-300 hover:border-paper/60 hover:text-paper"
                >
                  <Icon name="arrowRight" className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
