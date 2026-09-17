import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { districts, getDistrict } from "@/lib/districts";
import { projects } from "@/lib/projects";
import { coverage, site, telHref, waLink } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { AreaMap } from "@/components/AreaMap";
import { CornerTicks } from "@/components/CornerTicks";

/* Hizmet bölgesi sayfalarında gösterilen geçmiş iş kanıtı. Bu projeler
   Etiler (İstanbul) ve Karaburun (İzmir) konumlarındadır; sayfanın
   anlattığı hizmet bölgesinde yapılmış gibi sunulmaz. */
const referenceSlugs = ["proje-kuvars", "proje-ametist", "terrace-house"];

export function generateStaticParams() {
  return districts.map((district) => ({ slug: district.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/bolgeler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const district = getDistrict(slug);

  if (!district) {
    return { title: "Bölge bulunamadı" };
  }

  return {
    title: `${district.name} İnşaat ve Kentsel Dönüşüm`,
    description: district.summary,
    alternates: { canonical: `/bolgeler/${district.slug}` },
    openGraph: {
      title: `${district.name} İnşaat ve Kentsel Dönüşüm | ${site.legalName}`,
      description: district.summary,
      url: `${site.url}/bolgeler/${district.slug}`,
    },
  };
}

export default async function DistrictPage({
  params,
}: PageProps<"/bolgeler/[slug]">) {
  const { slug } = await params;
  const district = getDistrict(slug);

  if (!district) {
    notFound();
  }

  const districtProjects = projects.filter(
    (project) => referenceSlugs.includes(project.slug),
  );
  const otherDistricts = districts.filter((item) => item.slug !== district.slug);

  const districtJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${district.name} İnşaat ve Kentsel Dönüşüm`,
    description: district.summary,
    url: `${site.url}/bolgeler/${district.slug}`,
    provider: {
      "@type": "GeneralContractor",
      name: site.legalName,
      telephone: site.phone,
      url: site.url,
    },
    areaServed: {
      "@type": "Place",
      name: district.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: district.name,
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
    },
  };

  return (
    <>
      <JsonLd data={districtJsonLd} />

      <PageHeader
        label="Hizmet bölgesi"
        breadcrumbs={[
          { label: "Bölgeler", href: "/bolgeler" },
          { label: district.name },
        ]}
        title={district.headline}
        intro={district.summary}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={telHref} icon="phone">
            {district.name}&apos;de keşif için ara
          </Button>
          <Button
            href={waLink(
              `Merhaba, ${district.name}'deki yapım için keşif randevusu almak istiyorum.`,
            )}
            variant="outline"
            icon="whatsapp"
            external
          >
            {"WhatsApp'tan yaz"}
          </Button>
        </div>
      </PageHeader>

      {/* Konum: bolge, hizmet alani haritasinda vurgulanir. */}
      <section className="border-b border-ink/10 bg-paper-deep/40">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-28">
          <div className="lg:col-span-5">
            <SectionLabel no="—">Konum</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight lg:text-5xl">
              {district.name} nerede?
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Merkezimiz Bakırköy&apos;de; {district.name} dahil beş bölgeye aynı
              gün keşfe geliyoruz. Haritada {district.name} işaretli.{" "}
              {coverage.widerNote}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {district.landmarks.map((landmark) => (
                <li
                  key={landmark}
                  className="border border-ink/15 bg-ivory px-3.5 py-2 text-xs uppercase tracking-[0.14em] text-muted"
                >
                  {landmark}
                </li>
              ))}
            </ul>
            <Button href="/iletisim" variant="outline" className="mt-9">
              Keşif için iletişime geçin
            </Button>
          </div>

          <div className="lg:col-span-7">
            <div className="relative border border-ink/15 bg-ivory p-3">
              <CornerTicks className="text-brass/60" />
              <AreaMap
                highlight={district.slug}
                className="h-72 w-full text-ink/70 sm:h-80"
              />
              <div className="flex items-center justify-between border-t border-ink/10 px-1 pb-1 pt-3">
                <span className="eyebrow text-muted">Hizmet alanı</span>
                <span className="eyebrow text-brass-deep">{district.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
          <div className="lg:col-span-7">
            <SectionLabel no="01">{district.name} yaklaşımımız</SectionLabel>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted sm:text-lg">
              {district.description.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-ink/15 bg-ink p-8 text-paper">
              <span className="eyebrow text-brass">Öne çıkanlar</span>
              <ul className="mt-7 space-y-4">
                {district.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3.5 text-sm leading-relaxed text-paper/75"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brass"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-paper/15 pt-6">
                <span className="eyebrow text-paper/45">
                  Öne çıkan noktalar
                </span>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {district.landmarks.map((landmark) => (
                    <li
                      key={landmark}
                      className="border border-paper/20 px-3.5 py-1.5 text-xs tracking-wide text-paper/75"
                    >
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {districtProjects.length > 0 ? (
        <section className="border-b border-ink/10 bg-paper-deep/40">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <SectionLabel no="02">Geçmiş iş kanıtı</SectionLabel>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl">
              Arşivimizden referans projeler
            </h2>
            <p className="mt-6 max-w-[var(--measure)] text-[15px] leading-relaxed text-muted">
              Aşağıdaki kayıtlar Etiler (İstanbul) ve Karaburun (İzmir)
              konumlarındaki tamamlanmış projelerimizdir.{" "}
              {district.name} hizmet bölgemizde yürütülmüş işler olarak
              gösterilmez; uygulama ve teslim disiplinimizi belgelemek için
              paylaşılır.
            </p>
            <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
              {districtProjects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 90}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <SectionLabel no="03">Yakın bölgeler</SectionLabel>
          <div className="mt-8 flex flex-wrap gap-3">
            {otherDistricts.map((item) => (
              <Link
                key={item.slug}
                href={`/bolgeler/${item.slug}`}
                className="group inline-flex items-center gap-3 border border-ink/20 px-5 py-3 text-sm transition-colors duration-300 hover:border-brass hover:bg-ink hover:text-paper"
              >
                {item.name}
                <Icon
                  name="arrowUpRight"
                  className="h-4 w-4 text-brass transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>

          <p className="mt-8 text-[13px] leading-relaxed text-muted">
            {coverage.promptLabel}{" "}
            <Link href="/iletisim" className="link-underline text-ink">
              Kapsamı birlikte değerlendirelim
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand
        label={`${district.name} · Ücretsiz keşif`}
        title={`${district.name}'de yapınızı yerinde inceleyelim.`}
        text="Bölgeye aynı gün keşfe geliyor; riskli yapı, kat karşılığı ve anahtar teslim seçeneklerini rakamlarıyla değerlendiriyoruz."
      />
    </>
  );
}
