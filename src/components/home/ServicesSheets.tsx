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
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel no={no}>Hizmetler</SectionLabel>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight lg:text-5xl">
              Uçtan uca inşaat çözümleri
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted">
            Altı hizmet kalemi; kapsamı, süreci ve teslim biçimiyle birlikte
            aşağıda özetlenmiştir.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
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
                      className="group relative flex w-full items-center gap-4 py-4 text-left"
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
                          className={`block font-display text-xl leading-snug lg:text-2xl ${
                            isActive ? "text-ink" : "text-ink/65"
                          }`}
                        >
                          {item.name}
                        </span>
                        <span
                          className="mt-1 block text-[13px] leading-relaxed text-muted"
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

            <Link
              href="/hizmetler"
              className="group mt-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink"
            >
              Tüm hizmetler
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>

          <div className="lg:col-span-8">
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
