import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { site, workProfile } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Hizmetler | Kentsel Dönüşüm ve İnşaat Çözümleri",
  description:
    "Kentsel dönüşüm, endüstriyel yapılar, özel taahhüt projeleri, villa ve müstakil yapılar, deprem güçlendirme ve kat karşılığı inşaat hizmetleri. Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya.",
  alternates: { canonical: "/hizmetler" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Hizmetler"
        breadcrumbs={[{ label: "Hizmetler" }]}
        title={
          <>
            Kentsel dönüşümden anahtar teslime,{" "}
            <em className="italic text-brass-deep">tek muhatap</em>.
          </>
        }
        intro={`${site.legalName}; planlamadan ruhsata, inşaattan teslime kadar tüm süreci tek çatı altında yürütür. Hizmet kapsamınızı seçin, gerisini bize bırakın.`}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 80}>
              <Link
                href={`/hizmetler/${service.slug}`}
                className="group flex h-full flex-col border border-ink/15 bg-ivory transition-colors duration-500 hover:border-brass/70"
              >
                <span className="relative block aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.cover}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-brass/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <span className="absolute left-3 top-3 flex items-center gap-2.5">
                    <span className="bg-ink/85 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-paper backdrop-blur-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex h-9 w-9 items-center justify-center border border-paper/30 bg-ink/55 text-brass-soft backdrop-blur-sm">
                      <Icon name={service.icon} className="h-4 w-4" />
                    </span>
                  </span>
                </span>

                <span className="flex flex-1 flex-col p-7">
                  <h2 className="font-display text-2xl leading-tight transition-colors duration-300 group-hover:text-brass-deep lg:text-3xl">
                    {service.name}
                  </h2>
                  <p className="mt-3.5 flex-1 text-[15px] leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-deep">
                    Detayları gör
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-deep/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
          <div className="lg:col-span-4">
            <SectionLabel no="02">Çalışma profili</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight">
              Deneyim alanlarımız
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
              Şirket sunum dosyasında tanımlanan çalışma profili.
            </p>
            <Button href="/teknik-standartlar" variant="outline" className="mt-8">
              Teknik standartlar
            </Button>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="grid gap-px overflow-hidden border border-ink/15 bg-ink/10 sm:grid-cols-2">
              {workProfile.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 bg-paper px-6 py-7 text-[15px] leading-relaxed"
                >
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[var(--measure)] text-[13px] leading-relaxed text-muted">
              Hizmet bölgelerimiz Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve
              Florya&apos;dır. Arşivdeki projelerin konumları Etiler (İstanbul)
              ve Karaburun (İzmir) olup bu bölgelerde yürütülmüş iş olarak
              gösterilmez.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
