import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getService, services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { site, telHref, waLink } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CornerTicks } from "@/components/CornerTicks";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/hizmetler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Hizmet bulunamadı" };
  }

  return {
    title: `${service.name} | Bakırköy ve İstanbul`,
    description: service.summary,
    alternates: { canonical: `/hizmetler/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${site.legalName}`,
      description: service.summary,
      url: `${site.url}/hizmetler/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  /* Hizmet–proje eşleştirmesi sunumda doğrulanmadığı için arşiv kayıtları
     "bu hizmetle yapıldı" iddiası kurulmadan, geçmiş iş kanıtı olarak
     gösterilir. Konumları Etiler (İstanbul) ve Karaburun (İzmir)'dir. */
  const archiveProjects = projects.slice(-3).reverse();
  const otherServices = services.filter((item) => item.slug !== service.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.summary,
    url: `${site.url}/hizmetler/${service.slug}`,
    provider: {
      "@type": "GeneralContractor",
      name: site.legalName,
      telephone: site.phone,
      url: site.url,
    },
    areaServed: site.districts.map((district) => ({
      "@type": "City",
      name: district,
    })),
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />

      <PageHeader
        label="Hizmet"
        breadcrumbs={[
          { label: "Hizmetler", href: "/hizmetler" },
          { label: service.name },
        ]}
        title={service.name}
        intro={service.tagline}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={telHref} icon="phone">
            Ücretsiz keşif için ara
          </Button>
          <Button
            href={waLink(
              `Merhaba, ${service.name} hizmeti hakkında bilgi almak istiyorum.`,
            )}
            variant="outline"
            icon="whatsapp"
            external
          >
            {"WhatsApp'tan sor"}
          </Button>
        </div>
      </PageHeader>

      {/* Hizmete ait saha gorseli: sayfanin gorsel capasi. */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-5 pt-14 lg:px-8 lg:pt-16">
          <Reveal variant="mask">
            <div className="relative border border-ink/15 bg-ivory p-3">
              <CornerTicks className="text-brass/60" />
              <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[21/9]">
                <Image
                  src={service.cover}
                  alt={`${service.name} hizmeti için temsili görsel`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 px-1 pb-1 pt-3">
                <span className="eyebrow text-muted">
                  {service.name} · Temsili görsel
                </span>
                <span className="eyebrow text-brass-deep">
                  Kendi sahamızdan fotoğraf değildir
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
          <div className="lg:col-span-7">
            <SectionLabel no="01">Hizmet detayı</SectionLabel>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted sm:text-lg">
              {service.description.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-ink/15 bg-ink p-8 text-paper lg:sticky lg:top-28">
              <span className="eyebrow text-brass">Hizmet kapsamı</span>
              <ul className="mt-7 space-y-4">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3.5 text-sm leading-relaxed text-paper/75"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brass"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-paper/15 pt-6 text-xs leading-relaxed text-paper/50">
                Kapsam, keşif sonrası hazırlanan sözleşmede kalem kalem
                netleştirilir.
              </p>
              <Link
                href="/teknik-standartlar"
                className="mt-5 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:text-brass"
              >
                Teknik standartlar
                <Icon name="arrowRight" className="h-4 w-4 text-brass" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {service.slug === "kentsel-donusum" ? (
        <section className="border-b border-ink/10 bg-paper-deep/40">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-28">
            <div className="lg:col-span-5">
              <SectionLabel no="02">Dönüşüm</SectionLabel>
              <h2 className="mt-5 font-display text-4xl leading-tight lg:text-5xl">
                Eski yapıdan{" "}
                <em className="italic text-brass-deep">yeni yaşama</em>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted">
                Riskli yapınızın yerine gelen yeni yapı; güncel yönetmeliğe
                uygun statiği, yalıtımı ve ortak alanlarıyla hem güvenli hem de
                daha değerli olur.
              </p>
              <Button href={telHref} className="mt-9">
                Ücretsiz keşif için ara
              </Button>
            </div>
            <div className="lg:col-span-7">
              <BeforeAfter />
            </div>
          </div>
        </section>
      ) : null}

      {archiveProjects.length > 0 ? (
        <section className="border-b border-ink/10">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <SectionLabel no="03">Geçmiş iş kanıtı</SectionLabel>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl">
              Arşivden projeler
            </h2>
            <p className="mt-6 max-w-[var(--measure)] text-[15px] leading-relaxed text-muted">
              Sunum dosyasındaki tamamlanmış proje kayıtları. Bu projeler
              Etiler (İstanbul) ve Karaburun (İzmir) konumlarındadır; ayrıca
              her hizmet kalemiyle birebir eşleştirilmez.
            </p>
            <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
              {archiveProjects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 90}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionLabel no="04">Diğer hizmetler</SectionLabel>
          <div className="mt-8 border-b border-ink/10">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/hizmetler/${item.slug}`}
                className="group flex items-center justify-between gap-6 border-t border-ink/10 py-5"
              >
                <div className="flex items-baseline gap-6 lg:gap-10">
                  <Icon
                    name={item.icon}
                    className="h-5 w-5 self-center text-brass"
                  />
                  <span className="font-display text-2xl transition-colors duration-300 group-hover:text-brass-deep">
                    {item.name}
                  </span>
                </div>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-ink/20 transition-colors duration-300 group-hover:border-brass group-hover:bg-brass group-hover:text-ink">
                  <Icon name="arrowUpRight" className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        label="Bu hizmet için keşif"
        title={`${service.name} için ücretsiz keşif.`}
        text="Yapınızı yerinde inceleyelim; kapsamı, takvimi ve bütçeyi net biçimde konuşalım. Aynı gün dönüş yapıyoruz."
      />
    </>
  );
}
