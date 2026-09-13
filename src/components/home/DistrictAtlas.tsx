"use client";

import { useState } from "react";
import Link from "next/link";
import { districts } from "@/lib/districts";
import { site } from "@/lib/site";
import { AreaMap } from "@/components/AreaMap";
import { SectionLabel } from "@/components/SectionLabel";
import { CornerTicks } from "@/components/CornerTicks";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

export function DistrictAtlas({ no = "09" }: { no?: string }) {
  const [selected, setSelected] = useState<string>("yesilkoy");
  const activeSlug = selected;
  const active = districts.find((district) => district.slug === activeSlug);

  return (
    <section className="cv-auto border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel no={no}>Hizmet bölgeleri</SectionLabel>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight lg:text-5xl">
              Bakırköy ve çevresinde, yerinde hizmet
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted">
            Merkezimiz Bakırköy&apos;de; ekiplerimiz beş ilçede aynı gün keşfe
            gelir. Haritada bir bölgeye dokunarak çalışma alanını görün.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <div className="relative border border-ink/15 bg-ivory p-3">
              <CornerTicks className="text-brass/60" />

              <AreaMap
                highlight={activeSlug}
                className="h-[300px] w-full text-ink/70 sm:h-[400px] lg:h-[440px]"
              />

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 px-1 pb-1 pt-3">
                <span className="eyebrow text-muted">Hizmet alanı · 5 ilçe</span>
                <span className="eyebrow text-brass-deep">
                  Merkez: Bakırköy
                </span>
              </div>

              <div className="pointer-events-none absolute bottom-16 right-6 hidden w-60 border border-ink/12 bg-paper/95 p-4 sm:block">
                <p className="eyebrow text-muted">Seçili bölge</p>
                <p className="mt-2 font-display text-2xl leading-none">
                  {active?.name ?? "—"}
                </p>
                <p className="mt-2 text-[12px] tracking-wide text-brass-deep">
                  {active?.role}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {active?.highlights.slice(0, 2).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[12px] leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-brass"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 border border-ink/12 px-5 py-4 sm:hidden">
              <p className="eyebrow text-muted">Seçili bölge</p>
              <p className="mt-2 font-display text-2xl leading-none">
                {active?.name ?? "—"}
              </p>
              <p className="mt-2 text-[12px] tracking-wide text-brass-deep">
                {active?.role}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {active?.headline}
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            <ul className="border-t border-ink/15">
              {districts.map((district, index) => {
                const isActive = district.slug === activeSlug;

                return (
                  <li key={district.slug} className="border-b border-ink/10">
                    <Link
                      href={`/bolgeler/${district.slug}`}
                      onMouseEnter={() => setSelected(district.slug)}
                      onFocus={() => setSelected(district.slug)}
                      onBlur={() => setSelected(district.slug)}
                      className="group relative flex items-center justify-between gap-5 py-5"
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 top-0 h-px bg-brass ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                      <span className="flex min-w-0 items-baseline gap-4 lg:gap-6">
                        <span
                          className={`shrink-0 text-[11px] font-semibold tracking-[0.18em] ${
                            isActive ? "text-brass-deep" : "text-muted"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0">
                          <span
                            className={`block font-display text-2xl lg:text-3xl ${
                              isActive ? "text-brass-deep" : ""
                            }`}
                          >
                            {district.name}
                          </span>
                          <span className="mt-1.5 block text-[13px] leading-relaxed text-muted">
                            {district.role} ·{" "}
                            {district.landmarks.slice(0, 3).join(" · ")}
                          </span>
                        </span>
                      </span>
                      <span className="flex shrink-0 items-center gap-4">
                        <Icon
                          name="arrowUpRight"
                          className={`h-4 w-4 shrink-0 ${
                            isActive ? "text-brass" : "text-muted"
                          }`}
                        />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <p className="mt-3 text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted">
              Bölge listesi güncel hizmet alanlarını gösterir; temsili yapı
              görseli kullanılmaz
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border border-ink/12 px-5 py-4">
              <div>
                <p className="eyebrow text-muted">Merkez ofis</p>
                <p className="mt-2 text-[14px] leading-relaxed">
                  {site.address.street}
                </p>
                <p className="text-[14px] text-muted">
                  {site.address.district} · {site.address.city}
                </p>
              </div>
              <Link
                href="/iletisim"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em]"
              >
                Yol tarifi
                <Icon
                  name="arrowRight"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
