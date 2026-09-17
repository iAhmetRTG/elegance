"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site, telHref } from "@/lib/site";
import { waLinkFor } from "@/lib/wa";
import { services } from "@/lib/services";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

function istanbulOpenNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Istanbul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    weekday: "short",
  }).formatToParts(new Date());
  const get = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "";
  const weekday = get("weekday");
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));
  const workingDay = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].includes(
    weekday,
  );
  return workingDay && minutes >= 9 * 60 && minutes < 19 * 60;
}

/* Yalnizca Kentsel Donusum bagi foy vurgusunu tasir; diger baglantilar ince
   alt cizgi animasyonuyla kalir. Koyu hero uzerinde acik ton, header acik
   zemine gectiginde murekkep karsiligi kullanilir. */
function navItemClass(active: boolean, onLight: boolean, spotlight: boolean) {
  const base = "text-[13px] font-medium tracking-wide";

  if (spotlight) {
    return `${base} ${onLight ? "nav-spotlight-ink" : "nav-spotlight"}`;
  }

  return `${base} link-underline transition-colors ${
    onLight
      ? active
        ? "text-brass-deep"
        : "text-ink/80 hover:text-ink [text-shadow:none]"
      : "text-paper hover:text-paper [text-shadow:0_1px_14px_rgba(18,16,10,0.55)]"
  }`;
}

/* Hizmetler mega menusu: icerik tek veri kaynagindan (services) uretilir.
   Panel grup odaginda kaldigi icin fare linkten panele gecerken kapanmaz,
   klavye Tab sirasinda da acik kalir. */
function ServicesMegaMenu() {
  return (
    <div className="invisible absolute left-1/2 top-full z-40 w-[34rem] max-w-[calc(100vw-3rem)] -translate-x-1/2 translate-y-1 border border-ink/10 bg-paper p-4 text-ink opacity-0 shadow-[0_24px_60px_-34px_rgba(18,16,10,0.5)] transition-all duration-300 group-hover/mega:visible group-hover/mega:translate-y-0 group-hover/mega:opacity-100 group-focus-within/mega:visible group-focus-within/mega:translate-y-0 group-focus-within/mega:opacity-100">
      <ul className="grid gap-1 sm:grid-cols-2">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/hizmetler/${service.slug}`}
              className="flex min-h-11 items-center gap-3 px-3 py-2.5 transition-colors duration-300 hover:bg-paper-deep/50"
            >
              <Icon
                name={service.icon}
                className="h-[18px] w-[18px] shrink-0 text-brass"
              />
              <span className="font-display text-[1.05rem] leading-snug">
                {service.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Masaustu ust seviye menu; ana sayfa ve alt sayfa header'lari ayni veriyi
   kullanir. Ana sayfada İletişim tek kez, yuvarlak CTA olarak gosterilir. */
function DesktopNav({
  pathname,
  onLight,
  contactAsCta,
}: {
  pathname: string;
  onLight: boolean;
  contactAsCta: boolean;
}) {
  const items = contactAsCta
    ? nav.filter((item) => item.href !== "/iletisim")
    : nav;

  return (
    <nav
      className="hidden h-full items-center gap-6 lg:flex xl:gap-8"
      aria-label="Ana menü"
    >
      {items.map((item) => {
        const active = pathname.startsWith(item.href);
        const className = `${navItemClass(active, onLight, item.spotlight === true)} whitespace-nowrap`;

        if (item.href === "/hizmetler") {
          return (
            <div
              key={item.href}
              className="group/mega relative flex h-full items-center"
            >
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`${className} inline-flex items-center gap-1.5`}
              >
                {item.label}
                <Icon
                  name="plus"
                  className="h-3 w-3 text-brass transition-transform duration-300 group-hover/mega:rotate-45 group-focus-within/mega:rotate-45"
                />
              </Link>

              <ServicesMegaMenu />
            </div>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={className}
          >
            {item.label}
          </Link>
        );
      })}

      {contactAsCta ? (
        <Link
          href="/iletisim"
          className={`inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border px-6 py-3 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
            onLight
              ? "border-ink/25 text-ink hover:border-ink hover:bg-ink/5"
              : "border-paper/60 bg-ink/25 text-paper backdrop-blur-sm hover:border-paper hover:bg-ink/45"
          }`}
        >
          İletişim
          <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
        </Link>
      ) : null}
    </nav>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(true);
  const [openNow, setOpenNow] = useState<boolean | null>(null);
  const pathname = usePathname();
  const progressRef = useRef<HTMLSpanElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";
  /* Ana sayfada header, altındaki bölümün zeminine göre koyu ya da açık tona geçer. */
  const onLight = !isHome || !overDark;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const probe = 48;
      let darkBehind = false;
      document
        .querySelectorAll<HTMLElement>('[data-tone="dark"]')
        .forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top <= probe && rect.bottom > probe) darkBehind = true;
        });
      setOverDark(darkBehind);

      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const update = () => setOpenNow(istanbulOpenNow());
    update();
    const interval = window.setInterval(update, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    if (!menu) return;

    const focusables = () =>
      Array.from(
        menu.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );

    focusables()[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const mobileMenu = open ? (
    <div
      ref={menuRef}
      id="mobil-menu"
      className={`lg:hidden ${
        onLight
          ? "border-t border-ink/10 bg-paper"
          : "border-t border-paper/10 bg-ink/95 backdrop-blur-md"
      }`}
    >
      <nav
        className="mx-auto max-h-[calc(100svh-var(--header-h))] max-w-[var(--page-max)] overflow-y-auto px-[var(--page-gutter)] py-6"
        aria-label="Mobil menü"
      >
        <p
          className={`eyebrow flex items-center gap-2.5 ${
            onLight ? "text-muted" : "text-paper/60"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              openNow ? "bg-brass" : onLight ? "bg-ink/30" : "bg-paper/30"
            }`}
            aria-hidden="true"
          />
          {openNow === null
            ? "Çalışma saatleri · 09:00 – 19:00"
            : openNow
              ? "Şu an açık · 09:00 – 19:00"
              : "Şu an kapalı · 09:00 – 19:00"}
        </p>

        <ul
          className={`mt-4 divide-y ${
            onLight ? "divide-ink/10" : "divide-paper/10"
          }`}
        >
          {nav.map((item) => {
            const spotlight = item.spotlight === true;
            const rowClass = `font-display text-2xl ${
              spotlight
                ? onLight
                  ? "nav-spotlight-ink"
                  : "nav-spotlight"
                : onLight
                  ? ""
                  : "text-paper"
            }`;
            const arrowClass = `h-5 w-5 shrink-0 ${
              onLight ? "text-muted" : "text-paper/50"
            }`;

            /* Hizmetler: baslik /hizmetler sayfasina gider, ayri dugme alti
               hizmet listesini acar. Secilen baglanti menuyu kapatir. */
            if (item.href === "/hizmetler") {
              return (
                <li key={item.href}>
                  <div className="flex items-center gap-3">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-11 flex-1 items-center justify-between py-4"
                    >
                      <span className={rowClass}>{item.label}</span>
                      <Icon name="arrowUpRight" className={arrowClass} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((value) => !value)}
                      aria-expanded={servicesOpen}
                      aria-controls="mobil-hizmetler"
                      className={`grid h-11 w-11 shrink-0 place-items-center border ${
                        onLight
                          ? "border-ink/20 text-ink"
                          : "border-paper/25 text-paper"
                      }`}
                    >
                      <Icon
                        name="plus"
                        className={`h-4 w-4 transition-transform duration-300 ${
                          servicesOpen ? "rotate-45" : ""
                        }`}
                      />
                      <span className="sr-only">
                        {servicesOpen
                          ? "Hizmet alt menüsünü kapat"
                          : "Hizmet alt menüsünü aç"}
                      </span>
                    </button>
                  </div>

                  {servicesOpen ? (
                    <ul id="mobil-hizmetler" className="pb-4">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/hizmetler/${service.slug}`}
                            onClick={() => setOpen(false)}
                            className="flex min-h-11 items-start gap-3 py-2.5"
                          >
                            <Icon
                              name={service.icon}
                              className="mt-0.5 h-4 w-4 shrink-0 text-brass"
                            />
                            <span
                              className={`min-w-0 flex-1 text-[15px] leading-snug ${
                                onLight ? "text-ink/85" : "text-paper/85"
                              }`}
                            >
                              {service.name}
                            </span>
                            <Icon
                              name="arrowUpRight"
                              className={`mt-0.5 h-4 w-4 shrink-0 ${
                                onLight ? "text-muted" : "text-paper/50"
                              }`}
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center justify-between py-4"
                >
                  <span className={rowClass}>{item.label}</span>
                  <Icon name="arrowUpRight" className={arrowClass} />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 grid gap-3">
          <a
            href={telHref}
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2.5 bg-brass px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink"
          >
            <Icon name="phone" className="h-4 w-4" />
            {"Hemen ara · "}
            {site.phoneDisplay}
          </a>
          <a
            href={waLinkFor(pathname)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={`flex items-center justify-center gap-2.5 border px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] ${
              onLight ? "border-ink/25 text-ink" : "border-paper/25 text-paper"
            }`}
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            {"WhatsApp'tan yaz"}
          </a>
        </div>
      </nav>
    </div>
  ) : null;

  const menuToggle = (
    <button
      ref={toggleRef}
      type="button"
      onClick={() => setOpen((value) => !value)}
      className={`inline-flex h-11 min-w-11 items-center justify-center gap-2.5 lg:hidden ${
        isHome
          ? onLight
            ? "text-ink"
            : "text-paper"
          : "h-11 w-11 border border-ink/20"
      }`}
      aria-expanded={open}
      aria-controls="mobil-menu"
      aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
    >
      {isHome ? (
        <>
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          <span className="text-[13px] font-medium tracking-wide">Menü</span>
        </>
      ) : (
        <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
      )}
    </button>
  );

  if (isHome) {
    return (
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          onLight ? "text-ink" : "text-paper"
        }`}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(to_bottom,rgba(18,16,10,0.58)_0%,rgba(18,16,10,0.32)_30%,rgba(18,16,10,0.12)_60%,rgba(18,16,10,0)_100%)] transition-opacity duration-500 ${
            !onLight && !scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`relative transition-colors duration-500 ${
            onLight
              ? "bg-paper/90 backdrop-blur-md"
              : scrolled
                ? "bg-ink/55 backdrop-blur-md"
                : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-6 px-5 lg:h-24 lg:px-14 xl:px-16">
            <Logo tone={onLight ? "dark" : "light"} priority />

            <DesktopNav pathname={pathname} onLight={onLight} contactAsCta />

            {menuToggle}
          </div>

          {mobileMenu}
        </div>
      </header>
    );
  }

  return (
    <header
      className={`sticky top-0 z-50 h-[var(--header-h)] bg-paper/95 backdrop-blur-md transition-shadow duration-500 ${
        scrolled
          ? "shadow-[0_10px_30px_rgba(18,16,10,0.08)]"
          : "shadow-none"
      }`}
    >
      <span
        ref={progressRef}
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brass"
      />
      <div className="h-full border-b border-ink/10">
        <div className="mx-auto flex h-full max-w-[var(--page-max)] items-center justify-between gap-8 px-[var(--page-gutter)]">
          <Logo priority />

          <DesktopNav pathname={pathname} onLight contactAsCta={false} />

          <a href={telHref} className="hidden items-center gap-3 lg:flex">
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                openNow ? "bg-brass" : "bg-ink/25"
              }`}
            />
            <span className="text-right">
              <span className="tag block text-muted">
                Ücretsiz keşif
                {openNow !== null ? ` · ${openNow ? "Açık" : "Kapalı"}` : ""}
              </span>
              <span className="mt-1 block font-display text-[17px] leading-none">
                {site.phoneDisplay}
              </span>
            </span>
          </a>

          {menuToggle}
        </div>

        {mobileMenu}
      </div>
    </header>
  );
}
