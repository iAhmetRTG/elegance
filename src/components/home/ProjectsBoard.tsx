import Link from "next/link";
import Image from "next/image";
import { MEDIA_LABELS, projects } from "@/lib/projects";
import { SectionLabel } from "@/components/SectionLabel";
import { CornerTicks } from "@/components/CornerTicks";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

/* Ana sayfa seçkisi gerçek geçmiş projelerden oluşur; görseller şirket
   sunum dosyasındaki gerçek proje kayıtlarından alınır. */
const featuredSlugs = [
  "proje-ametist",
  "proje-kuvars",
  "proje-mercan",
  "terrace-house",
];

const board = featuredSlugs.flatMap((slug) =>
  projects.filter((project) => project.slug === slug),
);

const feature = board[0] ?? projects[0];
const rest = board.slice(1);

const featureMeta = [
  { label: "Alan", value: feature.area ?? "—" },
  { label: "Sözleşme", value: feature.contractYear },
  { label: "Süre", value: feature.duration },
];

export function ProjectsBoard({ no = "05" }: { no?: string }) {
  return (
    <section className="cv-auto border-b border-ink/10 bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel no={no}>Geçmiş projeler</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight lg:text-5xl">
              Geçmiş işlerimizden
            </h2>
          </div>

          <div className="flex items-end gap-6">
            <Link
              href="/projeler"
              className="group inline-flex items-center gap-3 border border-ink/25 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:border-ink"
            >
              Tüm projeler
              <Icon
                name="arrowUpRight"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <Link href={`/projeler/${feature.slug}`} className="group block">
              <div className="relative border border-ink/15 bg-ivory p-2.5 transition-colors duration-500 group-hover:border-brass/60">
                <CornerTicks className="text-brass/25 transition-colors duration-500 group-hover:text-brass" />

                <div className="relative aspect-[4/3] overflow-hidden bg-paper-deep/60 lg:aspect-[4/3]">
                  {feature.cover ? (
                    <Image
                      src={feature.cover}
                      alt={feature.coverAlt ?? `${feature.name} görseli`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover"
                    />
                  ) : null}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
                  />

                  <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <span className="tag text-paper/70">
                        {feature.location} · {feature.contractYear}—
                        {feature.occupancyYear}
                      </span>
                      <h3 className="mt-2 font-display text-2xl leading-snug text-paper lg:text-3xl">
                        {feature.name}
                      </h3>
                    </div>
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-paper/40 text-paper transition-colors duration-300 group-hover:border-brass group-hover:bg-brass group-hover:text-ink">
                      <Icon name="arrowUpRight" className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <dl className="mt-2.5 grid grid-cols-3 border border-ink/10">
                  {featureMeta.map((item, index) => (
                    <div
                      key={item.label}
                      className={`px-4 py-3 ${
                        index > 0 ? "border-l border-ink/10" : ""
                      }`}
                    >
                      <dt className="tag text-muted">{item.label}</dt>
                      <dd className="mt-1.5 font-display text-lg">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-8 lg:col-span-5 lg:content-start">
            {rest.map((project, index) => (
              <Reveal key={project.slug} delay={(index + 1) * 90}>
                <Link
                  href={`/projeler/${project.slug}`}
                  className="group block border-t border-ink/15 pt-6"
                >
                  <div className="flex items-start gap-5">
                    <div className="relative aspect-[4/3] w-[42%] shrink-0 overflow-hidden border border-ink/12 bg-paper-deep/60">
                      {project.cover ? (
                        <Image
                          src={project.cover}
                          alt={project.coverAlt ?? `${project.name} görseli`}
                          fill
                          sizes="(max-width: 1024px) 40vw, 220px"
                          className="object-cover"
                        />
                      ) : null}
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="flex items-center gap-3">
                        <span className="tag text-brass-deep">
                          {String(index + 2).padStart(2, "0")}
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-px w-8 bg-brass/50"
                        />
                      </span>
                      <h3 className="mt-3 font-display text-xl leading-snug transition-colors duration-300 group-hover:text-brass-deep lg:text-2xl">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-muted">
                        {project.location} ·{" "}
                        {project.coverKind
                          ? MEDIA_LABELS[project.coverKind]
                          : "Görsel eşleştirilmedi"}
                      </p>
                      <p className="tag mt-4 text-muted">
                        {project.area ? `${project.area} · ` : ""}
                        {project.contractYear}—{project.occupancyYear} ·{" "}
                        {project.duration}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={260}>
              <div className="flex items-center justify-between gap-4 border-t border-ink/15 pt-6">
                <p className="max-w-xs text-[13px] leading-relaxed text-muted">
                  Görseller şirket sunum dosyasındaki gerçek proje
                  kayıtlarından alınmıştır. Mimari render ve şantiye fotoğrafları
                  etiketlenir; bitmiş yapı gibi sunulmaz.
                </p>
                <Link
                  href="/projeler"
                  className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink"
                >
                  Arşiv
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
