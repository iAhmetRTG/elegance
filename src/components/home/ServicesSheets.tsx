"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/services";
import { SectionLabel } from "@/components/SectionLabel";
import { ServiceSheetArt } from "@/components/art/ServiceSheetArt";
import { Icon } from "@/components/Icon";

const TOTAL = services.length;

export function ServicesSheets({ no = "03" }: { no?: string }) {
  const [active, setActive] = useState(0);
  const service = services[active];
  const sheetNo = String(active + 1).padStart(2, "0");

  return (
    <section className="cv-auto drafting border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 lg:gap-y-8">
          <div>
            <SectionLabel no={no}>Hizmetler</SectionLabel>
            <h2 className="mt-4 max-w-xl font-display text-[2rem] leading-[1.12] lg:mt-5 lg:text-5xl lg:leading-tight">
              Uçtan uca inşaat çözümleri
            </h2>
          </div>
          <p className="max-w-sm text-[13px] leading-relaxed text-muted lg:text-[15px]">
            Altı hizmet kalemi; kapsamı, süreci ve teslim biçimiyle birlikte
            aşağıda özetlenmiştir.
          </p>
        </div>

        <div className="mt-8 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <ul className="border-t border-ink/15">
              {services.map((item, index) => {
                const isActive = index === active;

                return (
                  <li key={item.slug} className="border-b border-ink/10">
                    <button
                      type="button"
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      aria-pressed={isActive}
                      className="group relative flex w-full items-center gap-4 py-3.5 text-left lg:py-4"
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 top-0 h-px bg-brass ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                      <span
                        className={`tag shrink-0 ${
                          isActive ? "text-brass-deep" : "text-muted"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block font-display text-[1.125rem] leading-snug lg:text-2xl ${
                            isActive ? "text-ink" : "text-ink/65"
                          }`}
                        >
                          {item.name}
                        </span>
                        <span
                          className="mt-1 hidden text-[13px] leading-relaxed text-muted lg:block"
                        >
                          {item.tagline}
                        </span>
                      </span>
                      <Icon
                        name="arrowRight"
                        className={`h-4 w-4 shrink-0 ${
                          isActive ? "text-brass-deep" : "text-muted/50"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Mobilde seçili hizmetin özeti: dizinin hemen altında açılan pafta.
                Çizimli büyük pafta yalnızca geniş ekranda gösterilir. */}
            <article key={service.slug} className="sheet sheet-in mt-5 lg:hidden">
              <div className="flex items-center justify-between gap-3 border-b border-ink/10 px-4 py-3">
                <span className="flex min-w-0 items-center gap-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center border border-ink/15 text-brass">
                    <Icon name={service.icon} className="h-4 w-4" />
                  </span>
                  <span className="truncate font-display text-[15px]">
                    {service.name}
                  </span>
                </span>
                <span className="shrink-0 text-[12px] tracking-wide text-muted">
                  {sheetNo} / {String(TOTAL).padStart(2, "0")}
                </span>
              </div>

              <div className="px-4 pb-5 pt-4">
                <p className="font-display text-[15px] italic leading-snug text-brass-deep">
                  {service.tagline}
                </p>
                <p className="mt-2.5 text-[13px] leading-relaxed text-muted">
                  {service.summary}
                </p>

                <p className="tag mt-4 flex items-center gap-2.5 text-muted">
                  Kapsam
                  <span aria-hidden="true" className="leader-dots flex-1" />
                </p>
                <ul className="mt-2.5 space-y-1.5 sm:columns-2 sm:gap-x-8 sm:space-y-0 sm:[&>li]:break-inside-avoid sm:[&>li]:py-0.5">
                  {service.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[13px] leading-snug text-muted"
                    >
                      <Icon
                        name="check"
                        className="mt-[3px] h-3.5 w-3.5 shrink-0 text-brass"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="group mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink"
                >
                  Detayları gör
                  <Icon
                    name="arrowUpRight"
                    className="h-3.5 w-3.5 text-brass transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>

            <Link
              href="/hizmetler"
              className="group mt-5 flex w-full items-center justify-between gap-3 border border-ink/25 px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-300 active:bg-ink active:text-paper sm:w-fit sm:justify-start sm:gap-4 sm:px-6 lg:mt-6 lg:inline-flex lg:border-0 lg:px-0 lg:py-0 lg:active:bg-transparent lg:active:text-ink"
            >
              Tüm hizmetler
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>

          <div className="hidden lg:col-span-8 lg:block">
            <article key={service.slug} className="sheet">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 px-5 py-4 lg:px-7">
                <span className="font-display text-lg">{service.name}</span>
                <span className="text-[12px] tracking-wide text-muted">
                  {sheetNo} / {String(TOTAL).padStart(2, "0")}
                </span>
              </div>

              <div className="grid lg:grid-cols-2">
                <div className="flex flex-col gap-6 border-b border-ink/10 bg-paper/60 px-4 py-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
                  <div className="flex flex-1 items-center">
                    <ServiceSheetArt
                      variant={service.slug}
                      className="h-auto w-full text-ink/70"
                    />
                  </div>
                </div>

                <div className="flex flex-col p-6 lg:p-8">
                  <h3 className="font-display text-3xl leading-tight lg:text-4xl">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    {service.summary}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {service.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 border-t border-ink/10 pt-3 text-[14px] leading-relaxed text-muted"
                      >
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-brass"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="group mt-auto inline-flex items-center gap-3 pt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink"
                  >
                    Detayları gör
                    <Icon
                      name="arrowUpRight"
                      className="h-4 w-4 text-brass transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
