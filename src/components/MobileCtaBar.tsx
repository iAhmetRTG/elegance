"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site, telHref } from "@/lib/site";
import { waContextFor, waLinkFor } from "@/lib/wa";
import { Icon } from "./Icon";

/**
 * Mobilde başparmakla erişilen hızlı iletişim barı.
 * Marka yüzeyi üzerinde arama ve öncelikli WhatsApp eylemini bir araya getirir.
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
      : "Ücretsiz keşif";

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
      className={`fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-md px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
        visible
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-4 opacity-0"
      }`}
    >
      <div className="rounded-2xl bg-ivory p-1.5 shadow-[0_6px_32px_-8px_rgba(18,16,10,0.3)]">
        <div className="grid grid-cols-[1fr_1.15fr] items-stretch gap-1.5">
          <a
            href={telHref}
            aria-label={`Hemen ara: ${site.phoneDisplay}`}
            className="flex min-h-14 min-w-0 items-center justify-center gap-2 rounded-xl px-1.5 py-2 text-ink transition-colors duration-200 hover:bg-paper-deep active:bg-paper-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-deep motion-reduce:transition-none min-[360px]:gap-2.5 min-[360px]:px-2.5"
          >
            <Icon
              name="phone"
              className="h-[18px] w-[18px] shrink-0 text-brass-deep"
            />
            <span className="min-w-0">
              <span className="block text-sm font-semibold leading-5">
                Hemen ara
              </span>
              <span className="mt-0.5 block whitespace-nowrap text-[11px] leading-4 tabular-nums text-muted min-[360px]:text-xs">
                {site.phoneDisplay}
              </span>
            </span>
          </a>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp'tan yaz: ${waNote}`}
            className="flex min-h-14 min-w-0 items-center justify-center gap-2.5 rounded-xl bg-[#175c45] px-2.5 py-2 text-white transition-colors duration-200 hover:bg-[#104b38] active:bg-[#0c3d2d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#175c45] motion-reduce:transition-none"
          >
            <Icon name="whatsapp" className="h-6 w-6 shrink-0" />
            <span className="min-w-0">
              <span className="block text-[15px] font-semibold leading-5">
                WhatsApp
              </span>
              <span className="mt-0.5 block text-xs leading-4 text-[#d9eee4] [overflow-wrap:anywhere]">
                {waNote}
              </span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
