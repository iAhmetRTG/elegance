import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MEDIA_LABELS, getProject, projects } from "@/lib/projects";
import { site, telHref, waLink } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Gallery } from "@/components/Gallery";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projeler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Proje bulunamadı" };
  }

  const title = `${project.name} | ${project.buildingName} · ${project.location}`;
  const description = `${project.name} (${project.buildingName}); ${project.location}, ${project.city}. Sözleşme ${project.contractYear}, iskân ${project.occupancyYear}, süre ${project.duration}.`;

  return {
    title,
    description,
    alternates: { canonical: `/projeler/${project.slug}` },
    openGraph: {
      title: `${project.name} | ${site.legalName}`,
      description,
      url: `${site.url}/projeler/${project.slug}`,
      images: project.cover ? [{ url: project.cover }] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projeler/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  const renderCount = project.media.filter((m) => m.kind === "render").length;
  const constructionCount = project.media.filter(
    (m) => m.kind === "construction",
  ).length;

  /* Künye yalnızca sunumda doğrulanan alanları taşır. */
  const specs = [
    { label: "Yapı", value: project.buildingName },
    { label: "Konum", value: `${project.location}, ${project.city}` },
    { label: "Alan", value: project.area },
    { label: "Sözleşme", value: project.contractYear },
    { label: "İskân", value: project.occupancyYear },
    { label: "Süre", value: project.duration },
  ].filter((spec) => Boolean(spec.value));

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    alternateName: project.buildingName,
    description: `${project.name} (${project.buildingName}); ${project.location}, ${project.city}.`,
    dateCreated: project.contractYear,
    url: `${site.url}/projeler/${project.slug}`,
    creator: {
      "@type": "GeneralContractor",
      name: site.legalName,
      url: site.url,
    },
    locationCreated: {
      "@type": "Place",
      name: `${project.location}, ${project.city}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: project.location,
        addressRegion: project.city,
        addressCountry: "TR",
      },
    },
  };

  return (
    <>
      <JsonLd data={projectJsonLd} />

      {/* Proje künyesi doğrudan görselin üzerinde durur; ayrı bir başlık
          bloğu akışı bölmez. Görsel yoksa kayıt, aynı düzende tipografik
          zemine oturur. */}
      <section
        data-tone="dark"
        className="relative overflow-hidden bg-ink text-paper"
      >
        <div
          className={`relative ${
            project.cover
              ? "h-[58svh] min-h-[460px] lg:h-[74svh] lg:min-h-[560px]"
              : "h-[46svh] min-h-[380px] lg:h-[54svh] lg:min-h-[440px]"
          }`}
        >
          {project.cover ? (
            <>
              <Image
                src={project.cover}
                alt={project.coverAlt ?? `${project.name} görseli`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,16,10,0.86)_0%,rgba(18,16,10,0.52)_38%,rgba(18,16,10,0.2)_66%,rgba(18,16,10,0)_100%)]"
              />
            </>
          ) : (
            <div
              aria-hidden="true"
              className="blueprint-dark absolute inset-0 opacity-70"
            />
          )}

          <div className="relative mx-auto flex h-full max-w-[var(--page-max)] flex-col justify-end gap-7 px-[var(--page-gutter)] pb-[calc(4.5rem_+_env(safe-area-inset-bottom))] pt-24 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:pb-14">
            <div className="max-w-3xl [text-shadow:0_1px_18px_rgba(18,16,10,0.75)]">
              <Breadcrumbs
                tone="light"
                items={[
                  { label: "Projeler", href: "/projeler" },
                  { label: project.name },
                ]}
              />

              <p className="eyebrow mt-7 text-paper/70">
                Geçmiş proje ·{" "}
                {project.coverKind
                  ? MEDIA_LABELS[project.coverKind]
                  : "Görsel eşleştirilmedi"}
              </p>
              <h1 className="mt-4 font-display text-[2.7rem] leading-none tracking-tight sm:text-[3.25rem] lg:text-[4rem]">
                {project.name}
              </h1>
              <p className="mt-4 text-sm tracking-wide text-paper/85 lg:text-base">
                {project.buildingName} · {project.location}, {project.city}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-paper/65">
                Sözleşme {project.contractYear} · İskân{" "}
                {project.occupancyYear} · {project.duration}
                {project.area ? ` · ${project.area}` : ""}
              </p>
            </div>

            {/* Mobilde sabit iletişim çubuğu zaten var; burada yalnızca
                masaüstünde ikincil eylemler gösterilir. */}
            <div className="hidden gap-3 lg:flex lg:shrink-0">
              <Button href={telHref} icon="phone">
                Benzer proje için ara
              </Button>
              <Button
                href={waLink(
                  `Merhaba, ${project.name} benzeri bir proje hakkında bilgi almak istiyorum.`,
                )}
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

      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-7">
            <div className="space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
              <p>
                {project.name} ({project.buildingName}), {project.contractYear}{" "}
                sözleşme yılında {project.location}&apos;de başlanan ve{" "}
                {project.duration} süren bir {site.legalName} işidir.
                {` Künyedeki iskân yılı ${project.occupancyYear} olarak kayıtlıdır.`}
              </p>
              {constructionCount > 0 ? (
                <p>
                  Bu proje için arşivde şantiye / uygulama aşaması fotoğrafları
                  yer alır. Görseller bitmiş yapı fotoğrafı olarak
                  sunulmaz.
                </p>
              ) : null}
              {renderCount > 0 ? (
                <p>
                  Galerideki mimari render görseller, uygulama öncesi tasarım
                  anlatımıdır; aynı galeride yer alan gerçek fotoğraflardan
                  etiketleriyle ayrılır.
                </p>
              ) : null}
              {project.media.length === 0 ? (
                <p>
                  Sunum dosyasındaki genel kolajda bu kayda kesin olarak
                  atanabilen tekil bir görsel bulunmadığı için proje görselsiz
                  arşiv kaydı olarak listelenir.
                </p>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionLabel no="—">Proje künyesi</SectionLabel>
              <dl className="mt-7 border-b border-ink/10">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between gap-6 border-t border-ink/10 py-4"
                  >
                    <dt className="eyebrow text-muted">{spec.label}</dt>
                    <dd className="text-right text-sm font-medium">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 border border-ink/15 bg-ivory p-6">
                <p className="eyebrow text-brass-deep">İlgili standartlar</p>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  Projelerde uygulanan yapı, cephe, iç mekân, tesisat ve ortak
                  alan standartları teknik şartnamede toplanmıştır.
                </p>
                <Link
                  href="/teknik-standartlar"
                  className="link-underline mt-5 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink"
                >
                  Teknik standartlar
                  <Icon name="arrowRight" className="h-4 w-4 text-brass" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.media.length > 0 ? (
        <section className="border-b border-ink/10 bg-paper-deep/40">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <SectionLabel no="01">Galeri</SectionLabel>
                <h2 className="mt-5 font-display text-4xl lg:text-5xl">
                  Projeden kareler
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                Görseller şirket sunum dosyasından alınmıştır. Her kare,
                fotoğraf / mimari render / şantiye ayrımıyla etiketlenir.
              </p>
            </div>
            <div className="mt-12">
              <Gallery items={project.media} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel no="02">Devamı</SectionLabel>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl">
                Diğer projeler
              </h2>
            </div>
            <Link
              href="/projeler"
              className="link-underline text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-deep"
            >
              Tüm projeleri gör
            </Link>
          </div>

          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            {otherProjects.map((item, index) => (
              <Reveal key={item.slug} delay={index * 90}>
                <ProjectCard project={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        label="Benzer bir proje"
        title="Sizin yapınız için de aynı disiplin."
        text="Mevcut yapınızı yerinde inceleyelim; dönüşüm, güçlendirme veya yenileme seçeneklerini rakamlarıyla değerlendirelim."
      />
    </>
  );
}
