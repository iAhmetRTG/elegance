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
    const hero = document.querySelector("[data-hero]");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroClearedOn(entry.isIntersecting ? null : pathname),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome, pathname]);

  const visible = !isHome || heroClearedOn === pathname;

  return (
    <nav
      aria-label="Hızlı iletişim"
      aria-hidden={visible ? undefined : true}
      className={`fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none lg:hidden ${
        visible
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-4 opacity-0"
      }`}
    >
      <div className="relative border border-brass/40 bg-ink/95 shadow-[0_24px_60px_-28px_rgba(18,16,10,0.95)] backdrop-blur-md">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/70 to-transparent"
        />
        <CornerTicks className="text-brass/40" />

        <div className="grid grid-cols-[1.15fr_1fr] items-stretch">
          <a
            href={telHref}
            className="flex items-center justify-center gap-2.5 bg-brass px-3 py-3 text-ink transition-colors duration-300 active:bg-brass-deep active:text-paper"
          >
            <Icon name="phone" className="h-[18px] w-[18px] shrink-0" />
            <span className="min-w-0">
              <span className="tag block">Hemen ara</span>
              <span className="mt-1 block font-display text-[15px] leading-none">
                {site.phoneDisplay}
              </span>
            </span>
          </a>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-2.5 overflow-hidden px-3 py-3 text-paper transition-colors duration-300 active:bg-ink-soft"
          >
            <span
              aria-hidden="true"
              className="blueprint-dark pointer-events-none absolute inset-0 opacity-60"
            />
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-px bg-paper/15"
            />
            <Icon
              name="whatsapp"
              className="relative h-[18px] w-[18px] shrink-0 text-brass"
            />
            <span className="relative min-w-0">
              <span className="tag block text-paper/60">WhatsApp</span>
              <span className="mt-1 block truncate text-[13px] font-medium leading-none">
                {waNote}
              </span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
