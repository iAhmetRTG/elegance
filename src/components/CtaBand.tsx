import Image from "next/image";
import { proofPoints, site, telHref, waLink } from "@/lib/site";
import { Button } from "./Button";
import { SectionLabel } from "./SectionLabel";

export function CtaBand({
  label = "Ücretsiz keşif",
  title = "Projenizi konuşalım.",
  text = "Yapınızı yerinde inceleyelim; riskli yapı, kat karşılığı ya da anahtar teslim seçeneklerini rakamlarıyla birlikte değerlendirelim.",
  showMarks = false,
}: {
  label?: string;
  title?: string;
  text?: string;
  showMarks?: boolean;
}) {
  return (
    <section
      data-tone="dark"
      data-fab-hide
      className="relative overflow-hidden bg-ink text-paper"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/photos/cta-istanbul.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink" />
      </div>
      <div className="blueprint-dark absolute inset-0" aria-hidden="true" />
      <div className="vignette absolute inset-0 opacity-70" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="ghost pointer-events-none absolute -bottom-[0.24em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display italic text-[24vw] leading-none"
      >
        Elegance
      </span>

      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <SectionLabel no="—" tone="light">
            {label}
          </SectionLabel>

          {showMarks ? (
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {proofPoints.slice(0, 3).map((stat) => (
                <li key={stat.label} className="flex items-baseline gap-2.5">
                  <span className="font-display text-xl text-brass-soft">
                    {stat.value}
                  </span>
                  <span className="tag text-paper/55">{stat.label}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <h2 className="mt-8 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/65">
          {text}
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow text-paper/60">Hemen arayın</span>
            <a
              href={telHref}
              className="foil mt-4 block font-display text-4xl leading-none tracking-tight sm:text-5xl lg:text-7xl"
            >
              {site.phoneDisplay}
            </a>
            <p className="mt-5 text-[13px] tracking-wide text-paper/60">
              {site.hours}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Button href={telHref} icon="phone">
              Hemen ara
            </Button>
            <Button
              href={waLink()}
              variant="outlineLight"
              icon="whatsapp"
              external
            >
              {"WhatsApp'tan yaz"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
