"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { waLinkFor } from "@/lib/wa";
import { Icon } from "./Icon";

/* Buton yerleştikten sonra açılan tanıtım balonu. */
const BUBBLE_DELAY_MS = 4200;
const BUBBLE_LIFE_MS = 12000;

/**
 * Sağ altta duran klasik WhatsApp köşe butonu.
 * Klasik yeşil yerine marka paleti: pirinç daire, mürekkep ikon.
 * Sayfa açılışında belirir, footer ve CTA bandı ekrana girince çekilir.
 * Ardından "Bize ulaşın" balonuyla kendini hatırlatır; kapatılırsa
 * sayfa yenilenene kadar susar.
 */
export function WhatsAppFab() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [heroCleared, setHeroCleared] = useState(false);
  const [bubble, setBubble] = useState(false);
  const hideRef = useRef(0);

  useEffect(() => {
    let mounted = false;
    const covered = new Set<Element>();

    const sync = () => setVisible(mounted && covered.size === 0);

    const targets = Array.from(document.querySelectorAll("[data-fab-hide]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.08) {
            covered.add(entry.target);
          } else {
            covered.delete(entry.target);
          }
        });
        sync();
      },
      { threshold: [0, 0.08, 0.3] },
    );
    targets.forEach((target) => observer.observe(target));

    /* Sayfa boyanırken zıplamasın: kısa bir girişten sonra yerleşir. */
    const intro = window.setTimeout(() => {
      mounted = true;
      sync();
    }, 900);

    return () => {
      observer.disconnect();
      window.clearTimeout(intro);
    };
  }, []);

  /* Ana sayfada hero'daki sloganı kapatmamak için biraz kaydırma beklenir. */
  useEffect(() => {
    const check = () =>
      setHeroCleared(pathname !== "/" || window.scrollY > 260);

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [pathname]);

  /* Balon her sayfa açılışında gelir; kapatmak yalnızca o görüntülemeyi susturur. */
  useEffect(() => {
    if (!visible || !heroCleared) return undefined;

    const timer = window.setTimeout(() => setBubble(true), BUBBLE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [visible, heroCleared]);

  const holdBubble = useCallback(() => {
    window.clearTimeout(hideRef.current);
  }, []);

  const scheduleHide = useCallback(() => {
    window.clearTimeout(hideRef.current);
    hideRef.current = window.setTimeout(() => setBubble(false), BUBBLE_LIFE_MS);
  }, []);

  useEffect(() => {
    if (!bubble) return undefined;
    scheduleHide();
    return () => window.clearTimeout(hideRef.current);
  }, [bubble, scheduleHide]);

  return (
    <div
      className={`fixed bottom-7 right-6 z-40 hidden transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none lg:block ${
        visible
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-3 opacity-0"
      }`}
    >
      {bubble ? (
        <div
          onMouseEnter={holdBubble}
          onMouseLeave={scheduleHide}
          onFocus={holdBubble}
          onBlur={scheduleHide}
          className="wa-bubble absolute bottom-[calc(100%+1.35rem)] right-0 w-64 rounded-[26px] border border-brass/25 bg-ink drop-shadow-[0_22px_45px_rgba(18,16,10,0.55)]"
        >
          {/* Bulutumsu kuyruk: govde kenarindaki pirinc hattini kavisli bicimde surdurur. */}
          <svg
            viewBox="0 0 32 26"
            aria-hidden="true"
            className="absolute -bottom-[1.35rem] right-4 h-[26px] w-8"
          >
            <path
              d="M32 0C30.5 13 22 23.5 6 26 13.5 18.5 16.5 9.5 16.5 0Z"
              className="fill-ink"
            />
            <path
              d="M32 0C30.5 13 22 23.5 6 26"
              className="stroke-brass/25"
              fill="none"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
          <button
            type="button"
            onClick={() => setBubble(false)}
            aria-label="Tanıtım balonunu kapat"
            className="absolute right-2.5 top-2.5 grid h-7 w-7 place-items-center rounded-full text-paper/45 transition-colors duration-300 hover:bg-paper/10 hover:text-paper"
          >
            <Icon name="close" className="h-3.5 w-3.5" />
          </button>

          <a
            href={waLinkFor(pathname)}
            target="_blank"
            rel="noopener noreferrer"
            className="group/bubble flex items-start gap-3 p-4 pr-11"
          >
            <span className="relative mt-0.5 h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-paper/15">
              <Image
                src="/brand/logo-light.png"
                alt=""
                width={443}
                height={96}
                unoptimized
                className="h-full w-full object-cover object-left"
              />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[17px] leading-tight text-paper">
                Bize ulaşın
              </span>
              <span className="mt-1 block text-[12px] leading-snug text-paper/60">
                Ücretsiz keşif için yazın
              </span>
              <span className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brass transition-colors duration-300 group-hover/bubble:text-brass-soft">
                WhatsApp
                <Icon
                  name="arrowUpRight"
                  className="h-3 w-3 transition-transform duration-300 group-hover/bubble:translate-x-0.5 group-hover/bubble:-translate-y-0.5"
                />
              </span>
            </span>
          </a>
        </div>
      ) : null}

      <a
        href={waLinkFor(pathname)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan yaz"
        className="group/fab relative grid h-14 w-14 place-items-center rounded-full bg-brass text-ink shadow-[0_16px_38px_-14px_rgba(18,16,10,0.6)] ring-1 ring-ink/20 transition-[background-color,color,box-shadow,transform] duration-300 hover:bg-brass-deep hover:text-paper hover:shadow-[0_20px_44px_-14px_rgba(18,16,10,0.7)] active:scale-95 motion-reduce:transition-none"
      >
        <Icon name="whatsapp" className="h-[26px] w-[26px]" />
        {bubble ? (
          <span
            aria-hidden="true"
            className="wa-ring pointer-events-none absolute inset-0 rounded-full border border-brass-soft"
          />
        ) : (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-[calc(100%+0.85rem)] -translate-x-1 whitespace-nowrap rounded-full border border-brass/40 bg-ink px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-paper opacity-0 shadow-[0_16px_35px_-18px_rgba(18,16,10,0.9)] transition-[opacity,transform] duration-300 group-hover/fab:translate-x-0 group-hover/fab:opacity-100 group-focus-visible/fab:translate-x-0 group-focus-visible/fab:opacity-100 motion-reduce:transition-none"
          >
            WhatsApp&apos;tan yaz
          </span>
        )}
      </a>
    </div>
  );
}
