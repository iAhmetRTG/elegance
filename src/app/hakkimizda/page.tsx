import type { Metadata } from "next";
import Link from "next/link";
import {
  corporateProfile,
  processSteps,
  proofPoints,
  site,
  telHref,
  workProfile,
} from "@/lib/site";
import { projects } from "@/lib/projects";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Counter } from "@/components/Counter";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Hakkımızda | Mimarlar ve Mühendisler Tarafından Kurulmuş İnşaat Firması",
  description:
    "Elegance; gayrimenkul ve inşaat sektöründe çeyrek asırlık deneyime sahip, mimarlar ve mühendisler tarafından kurulmuş bir inşaat firmasıdır. Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya'da hizmet verir.",
  alternates: { canonical: "/hakkimizda" },
};

const values = [
  {
    title: "Yerinde uzmanlık",
    text: "Merkezimiz Bakırköy'de. Bölgenin imar durumunu, zeminini ve yapı stokunu sokak sokak tanıyoruz.",
  },
  {
    title: "Şeffaf bütçe",
    text: "Teklif kalem kalem açıklanır; süreç boyunca sürpriz maliyet çıkmaz, her harcama kayıt altındadır.",
  },
  {
    title: "Sözleşmeli güvence",
    text: "Kat karşılığı ve anahtar teslim işlerde noter onaylı sözleşme, net teslim takvimi ve eksik listesi güvencesi.",
  },
  {
    title: "Tek muhatap",
    text: "Proje, ruhsat, inşaat ve teslim boyunca tek kişiyle görüşürsünüz: şantiye şefiniz.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Hakkımızda"
        breadcrumbs={[{ label: "Hakkımızda" }]}
        title={
          <>
            Mimarlar ve mühendisler tarafından kurulmuş bir{" "}
            <em className="italic text-brass-deep">inşaat firması</em>.
          </>
        }
        intro={corporateProfile.lead}
      />

      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
          <div className="lg:col-span-5">
            <SectionLabel no="01">Kurumsal profil</SectionLabel>
            <h2 className="mt-6 font-display text-4xl leading-tight lg:text-5xl">
              Kente ve kentliye saygılı projeler.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg lg:col-span-6 lg:col-start-7">
            <p className="text-ink/85">{corporateProfile.lead}</p>
            <p>{corporateProfile.body}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper-deep/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <SectionLabel no="02">Çalışma profili</SectionLabel>
              <h2 className="mt-5 font-display text-4xl leading-tight">
                Hangi işlerde
                <br />
                çalışıyoruz?
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
                Sunum dosyasında tanımlanan çalışma profili; konuttan ticari
                yapıya uzanan bir yelpazeyi kapsar.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="grid gap-px overflow-hidden border border-ink/15 bg-ink/10 sm:grid-cols-2">
                {workProfile.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 bg-paper px-6 py-7 text-[15px] leading-relaxed"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brass"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border border-ink/15 bg-ivory p-6">
                <p className="eyebrow text-brass-deep">Güncel hizmet bölgeleri</p>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {site.districts.map((district) => (
                    <li
                      key={district}
                      className="border border-ink/15 px-3.5 py-2 text-xs uppercase tracking-[0.14em] text-muted"
                    >
                      {district}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[12px] leading-relaxed text-muted">
                  Hedef hizmet bölgelerimiz bu beş bölgedir. Arşivdeki projelerin
                  konumları farklıdır ve aşağıda ayrıca belirtilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-tone="dark"
        className="relative overflow-hidden bg-ink text-paper"
      >
        <div
          className="blueprint-dark absolute inset-0 opacity-60"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 px-5 py-14 lg:grid-cols-4 lg:px-8 lg:py-16">
          {proofPoints.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 70}>
              <div className="group relative border-t border-paper/15 pt-6">
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-px w-10 bg-brass transition-[width] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full"
                />
                <p className="font-display text-3xl text-brass lg:text-4xl">
                  <Counter value={stat.value} />
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-paper/60">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel no="03">Geçmiş projeler</SectionLabel>
              <h2 className="mt-5 font-display text-4xl leading-tight lg:text-5xl">
                Sunum dosyasındaki kayıtlar
              </h2>
            </div>
            <Link
              href="/projeler"
              className="link-underline text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-deep"
            >
              Proje arşivi
            </Link>
          </div>

          <ul className="mt-12 border-t border-ink/15">
            {projects.map((project, index) => (
              <li key={project.slug} className="border-b border-ink/10">
                <Link
                  href={`/projeler/${project.slug}`}
                  className="group grid gap-3 py-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-baseline sm:gap-8"
                >
                  <span className="eyebrow text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-xl leading-snug transition-colors duration-300 group-hover:text-brass-deep lg:text-2xl">
                      {project.name}
                    </span>
                    <span className="mt-1.5 block text-[13px] leading-relaxed text-muted">
                      {project.buildingName} · {project.location},{" "}
                      {project.city}
                    </span>
                  </span>
                  <span className="text-[12px] uppercase tracking-[0.14em] text-muted sm:text-right">
                    {project.contractYear}—{project.occupancyYear}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-[var(--measure)] text-[13px] leading-relaxed text-muted">
            Bu kayıtlar Etiler (İstanbul) ve Karaburun (İzmir) konumlarındadır;
            yukarıdaki hizmet bölgelerinde yürütülmüş işler olarak
            gösterilmez.
          </p>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper-deep/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionLabel no="04">Çalışma ilkelerimiz</SectionLabel>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 70}>
                <div className="flex h-full flex-col border-t border-ink/20 pt-6">
                  <Icon name="check" className="h-5 w-5 text-brass" />
                  <h3 className="mt-5 font-display text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionLabel no="05">Nasıl çalışırız</SectionLabel>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight lg:text-5xl">
            İlk görüşmeden teslim gününe
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.no} className="bg-paper p-7 lg:p-8">
                <span className="font-display text-4xl text-brass-deep">
                  {step.no}
                </span>
                <h3 className="mt-6 font-display text-xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href={telHref} icon="phone">
              Bizi arayın
            </Button>
            <Button href="/teknik-standartlar" variant="outline">
              Teknik standartlar
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
