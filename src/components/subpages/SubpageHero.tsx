import Image from "next/image";
import { Breadcrumbs } from "../Breadcrumbs";

export type SubpageHeroMedia = {
  src: string;
  alt: string;
  caption?: string;
};

export type SubpageHeroVariant = "listing" | "detail" | "contact";

/**
 * Alt sayfalarin ortak giris kompozisyonu.
 * Masaustunde metin solda, fotograf sagda tam yukseklikte; mobilde metin,
 * fotograf ve filtreler tek kolonda akar. Blueprint zemin kullanilmaz.
 */
export function SubpageHero({
  variant = "listing",
  label,
  note,
  title,
  intro,
  breadcrumbs,
  media,
  filters,
  actions,
  meta,
}: {
  variant?: SubpageHeroVariant;
  label: string;
  note?: string;
  title: React.ReactNode;
  intro?: string;
  breadcrumbs?: { label: string; href?: string }[];
  media?: SubpageHeroMedia;
  filters?: React.ReactNode;
  actions?: React.ReactNode;
  meta?: { label: string; value: string }[];
}) {
  const dense = variant === "contact";

  return (
    <section
      aria-labelledby="subpage-hero-title"
      className="relative border-b border-ink/10 bg-ivory"
    >
      <div className="page-shell relative">
        <div
          className={`flex flex-col pb-8 pt-6 lg:grid lg:min-h-[var(--hero-h)] lg:grid-cols-[minmax(0,45%)_minmax(0,1fr)] lg:content-center lg:gap-x-16 lg:gap-y-9 lg:py-14 ${
            dense ? "lg:py-11" : ""
          }`}
        >
          <div className="lg:col-start-1 lg:row-start-1">
            {breadcrumbs?.length ? (
              <Breadcrumbs items={breadcrumbs} />
            ) : null}

            <p className="mt-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              <span aria-hidden="true" className="h-px w-8 shrink-0 bg-brass" />
              <span className="text-brass-deep">{label}</span>
              {note ? (
                <>
                  <span aria-hidden="true" className="text-brass">
                    ·
                  </span>
                  <span>{note}</span>
                </>
              ) : null}
            </p>

            <h1
              id="subpage-hero-title"
              className="mt-5 max-w-[24ch] font-display text-[2.5rem] leading-[1.06] tracking-tight sm:text-[3rem] lg:text-[clamp(3rem,4.4vw,4.25rem)] lg:leading-[1.03]"
            >
              {title}
            </h1>

            {intro ? (
              <p className="mt-5 max-w-[var(--measure)] text-[15px] leading-relaxed text-muted sm:text-base lg:text-[17px]">
                {intro}
              </p>
            ) : null}

            {meta?.length ? (
              <dl className="mt-6 flex flex-wrap gap-x-9 gap-y-4">
                {meta.map((item) => (
                  <div key={item.label}>
                    <dt className="tag text-muted">{item.label}</dt>
                    <dd className="mt-1.5 font-display text-lg leading-none">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          {media ? (
            <figure className="mt-6 lg:absolute lg:inset-y-0 lg:left-[52%] lg:right-0 lg:mt-0">
              <div className="relative aspect-[16/10] overflow-hidden bg-paper-deep/70 lg:aspect-auto lg:h-full">
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
              {media.caption ? (
                <figcaption className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted lg:absolute lg:bottom-5 lg:left-5 lg:mt-0 lg:bg-ivory/90 lg:px-2.5 lg:py-1.5">
                  {media.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          {filters ? (
            <div className="mt-7 border-t border-ink/10 pt-3 lg:col-start-1 lg:row-start-2 lg:mt-0 lg:border-t-0 lg:pt-0">
              {filters}
            </div>
          ) : null}

          {actions ? (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:col-start-1 lg:row-start-3">
              {actions}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
