import Link from "next/link";
import { standardGroups } from "@/lib/standards";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

/* Teknik şartnamenin ana sayfa özeti: sekiz başlık, tam metin
   /teknik-standartlar rotasında. */
export function StandardsBrief({ no = "04" }: { no?: string }) {
  return (
    <section className="cv-auto border-b border-ink/10 bg-ink text-paper">
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel no={no} tone="light">
              Teknik standartlar
            </SectionLabel>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight lg:text-5xl">
              Teslimi ölçülebilir kılan şartname
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-paper/70">
            Yapıdan tesisata sekiz başlıkta toplanan standartlar; performans
            esası öne çıkarılarak listelenir.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden border border-paper/15 bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {standardGroups.map((group, index) => (
            <li key={group.id} className="bg-ink">
              <Reveal delay={(index % 4) * 70}>
                <Link
                  href={`/teknik-standartlar#${group.id}`}
                  className="group flex h-full flex-col gap-4 p-6 transition-colors duration-300 hover:bg-paper/[0.06] lg:p-7"
                >
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-brass">
                    {group.no}
                  </span>
                  <span className="font-display text-xl leading-snug">
                    {group.title}
                  </span>
                  <span className="mt-auto flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/55 transition-colors duration-300 group-hover:text-paper">
                    Şartname
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href="/teknik-standartlar"
            className="group inline-flex items-center gap-3 border border-paper/35 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink"
          >
            Teknik standartların tamamı
            <Icon
              name="arrowRight"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
          <p className="text-[12px] leading-relaxed text-paper/55">
            İçerik, şirket sunum dosyasındaki teknik şartname bölümünden
            aktarılmıştır.
          </p>
        </div>
      </div>
    </section>
  );
}
