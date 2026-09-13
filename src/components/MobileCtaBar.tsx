"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site, telHref } from "@/lib/site";
import { waContextFor, waLinkFor } from "@/lib/wa";
import { CornerTicks } from "./CornerTicks";
import { Icon } from "./Icon";

/**
 * Mobilde ekranın altına oturan hızlı iletişim plakası.
 * Masaüstü paneliyle aynı dili taşır: mürekkep zemin, pirinç çizgi,
 * köşe tırnakları ve pafta tipografisi.
 * Ana sayfada hero görünürken gizli kalır; hero geçildikten sonra belirir,
 * böylece ilk ekranda fotoğrafın üzerine ikinci bir katman binmez.
 */
export function MobileCtaBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  /* Hero geçildiği sayfa burada tutulur; rota değişince kendiliğinden sıfırlanır. */
  const [heroClearedOn, setHeroClearedOn] = useState<string | null>(null);
  const context = waContextFor(pathname);
  const waHref = waLinkFor(pathname);
  /* Kısa bölge/hizmet adı sığıyorsa buton sayfaya göre konuşur. */
  const waNote =
    context?.short && context.short.length <= 16
      ? `${context.short} için yaz`
      : "Hemen yaz";

  useEffect(() => {
    /* Yalnızca ana sayfada hero vardır; diğer sayfalarda panel hemen görünür. */
    if (!isHome) return;
    /* Hero akış içinde geç de gelebilir: tek seferlik sorgu yerine her kaydırmada
       ölçülür, böylece panel hiçbir zaman gizli kalmaz. */
    let frame = 0;
    const measure = () => {
      frame = 0;
      const hero = document.querySelector("[data-hero]");
      const cleared = !hero || hero.getBoundingClientRect().bottom <= 0;
      setHeroClearedOn(cleared ? pathname : null);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [isHome, pathname]);

  const visible = !isHome || heroClearedOn === pathname;

  return (
    <nav
      aria-label="Hızlı iletişim"
      aria-hidden={visible ? undefined : true}
      className={`fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] transition-[opacity,translate] duration-500 ease-out motion-reduce:transition-none lg:hidden ${
        visible
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-4 opacity-0"
      }`}
    >
      <div className="relative border border-brass/45 bg-ink shadow-[0_24px_60px_-26px_rgba(18,16,10,0.95)] backdrop-blur-md">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/80 to-transparent"
        />
        <CornerTicks className="text-brass/45" />

        {/* 360px altındaki dar ekranlarda ara tarafı biraz daha pay alır,
            böylece numara kırpılmadan tek satırda kalır. */}
        <div className="grid grid-cols-[1.16fr_1fr] items-stretch min-[360px]:grid-cols-[1.06fr_1fr]">
          <a
            href={telHref}
            className="relative flex items-center gap-2 overflow-hidden bg-[linear-gradient(152deg,#d0a262_0%,#b1833f_48%,#966c2f_100%)] px-2.5 py-3.5 text-ink transition-opacity duration-300 active:opacity-90 min-[360px]:gap-2.5 min-[360px]:px-3"
          >
            <span
              aria-hidden="true"
              className="blueprint-light pointer-events-none absolute inset-0 opacity-70"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.3),transparent)]"
            />
            <Icon
              name="phone"
              className="relative h-[19px] w-[19px] shrink-0"
            />
            <span className="relative min-w-0">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/70">
                Hemen ara
              </span>
              <span className="mt-1 block truncate font-display text-[14px] leading-none tabular-nums min-[360px]:text-[15px]">
                {site.phoneDisplay}
              </span>
            </span>
          </a>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 overflow-hidden border-l border-paper/15 px-2.5 py-3.5 text-paper transition-colors duration-300 active:bg-ink-soft min-[360px]:gap-2.5 min-[360px]:px-3"
          >
            <span
              aria-hidden="true"
              className="blueprint-dark pointer-events-none absolute inset-0 opacity-45"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-8 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(177,131,63,0.34),transparent_68%)]"
            />
            <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brass text-ink shadow-[0_8px_18px_-8px_rgba(0,0,0,0.95)] ring-1 ring-brass-soft/40 min-[360px]:h-9 min-[360px]:w-9">
              <Icon
                name="whatsapp"
                className="h-[17px] w-[17px] min-[360px]:h-[19px] min-[360px]:w-[19px]"
              />
            </span>
            <span className="relative min-w-0">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-brass-soft">
                WhatsApp
              </span>
              <span className="mt-1 block truncate text-[13px] font-semibold leading-none">
                {waNote}
              </span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
