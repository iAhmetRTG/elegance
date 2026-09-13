import type { Metadata } from "next";
import { standardGroups } from "@/lib/standards";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Teknik Standartlar | Yapı, Cephe ve Tesisat Şartnamesi",
  description:
    "Elegance İnşaat teknik şartnamesi: genel yapı, kapı ve pencereler, antre, salon ve odalar, banyo, mutfak, mekanik ve elektrik tesisatı ile ortak alan standartları.",
  alternates: { canonical: "/teknik-standartlar" },
};

const standardsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Teknik standartlar",
  inLanguage: "tr-TR",
  url: `${site.url}/teknik-standartlar`,
  author: { "@type": "GeneralContractor", name: site.legalName, url: site.url },
};

export default function StandardsPage() {
  return (
    <>
      <JsonLd data={standardsJsonLd} />

      <PageHeader
        label="Teknik şartname"
        breadcrumbs={[{ label: "Teknik Standartlar" }]}
        title={
          <>
            Yapıdan tesisata,{" "}
            <em className="italic text-brass-deep">yazılı</em> standartlar.
          </>
        }
        intro="Şirket sunum dosyasındaki teknik şartname bölümü, sekiz başlıkta toplanmıştır. Her başlıkta performans standardı öne çıkarılır; ürün ve marka adları örnek grup olarak ikincil seviyede listelenir."
      />

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Masaüstünde içerik navigasyonu; mobilde başlık grupları açık akar. */}
            <nav
              aria-label="Teknik şartname içeriği"
              className="hidden lg:col-span-3 lg:sticky lg:top-28 lg:block lg:self-start"
            >
              <p className="eyebrow text-muted">İçerik</p>
              <ol className="mt-6 border-t border-ink/15">
                {standardGroups.map((group) => (
                  <li key={group.id} className="border-b border-ink/10">
                    <a
                      href={`#${group.id}`}
                      className="group flex items-baseline gap-3 py-3.5 text-[14px] leading-snug text-muted transition-colors duration-300 hover:text-ink"
                    >
                      <span className="shrink-0 text-[11px] font-semibold tracking-[0.16em] text-brass-deep">
                        {group.no}
                      </span>
                      <span className="group-hover:underline">
                        {group.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="lg:col-span-8 lg:col-start-5">
              {standardGroups.map((group) => (
                <section
                  key={group.id}
                  id={group.id}
                  className="scroll-mt-28 border-t border-ink/15 pt-10 first:border-t-0 first:pt-0 [&+section]:mt-16 [&+section]:lg:mt-20"
                >
                  <SectionLabel no={group.no}>Teknik şartname</SectionLabel>
                  <h2 className="mt-5 font-display text-3xl leading-tight lg:text-4xl">
                    {group.title}
                  </h2>
                  <p className="mt-4 max-w-[var(--measure)] text-[15px] leading-relaxed text-muted">
                    {group.lead}
                  </p>

                  <ul className="mt-9 border-t border-ink/10">
                    {group.items.map((item) => (
                      <li
                        key={item.title}
                        className="border-b border-ink/10 py-5"
                      >
                        <h3 className="font-display text-xl leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-[var(--measure)] text-[14px] leading-relaxed text-muted">
                          {item.detail}
                        </p>
                        {item.brands ? (
                          <p className="mt-3 text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted/75">
                            Örnek ürün grubu · {item.brands}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        label="Teknik görüşme"
        title="Standartları projenizle eşleştirelim."
        text="Yapınızın durumunu yerinde inceleyip uygulanacak teknik kapsamı ve malzeme seçeneklerini birlikte netleştirelim."
      />
    </>
  );
}
