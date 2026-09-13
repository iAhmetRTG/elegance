import Link from "next/link";
import { standardGroups } from "@/lib/standards";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

/* Teknik şartnamenin ana sayfa özeti: sekiz başlık, tam metin
   /teknik-standartlar rotasında. */
const totalItems = standardGroups.reduce(
  (sum, group) => sum + group.items.length,
  0,
);

export function StandardsBrief({ no = "04" }: { no?: string }) {
  return (
    <section className="cv-auto relative border-b border-ink/10 bg-ink text-paper">
      <div
        className="blueprint-dark pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 sm:gap-8">
          <div>
            <SectionLabel no={no} tone="light">
              Teknik standartlar
            </SectionLabel>
            <h2 className="mt-4 max-w-xl text-balance font-display text-[1.75rem] leading-[1.14] sm:mt-5 sm:text-4xl sm:leading-tight lg:text-5xl">
              Teslimi ölçülebilir kılan şartname
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-paper/65 sm:text-[15px] sm:text-paper/70">
            Yapıdan tesisata sekiz başlıkta toplanan standartlar; performans
            esası öne çıkarılarak listelenir.
          </p>
        </div>

        {/* Mobil: tek satırlık dizin; her başlık kendi kartı yerine
            başlık numarası + ad + yönlendirme okuyla listelenir. */}
        <div className="mt-8 border border-paper/15 bg-paper/[0.035] sm:hidden">
          <div className="flex items-center justify-between gap-4 border-b border-paper/15 px-4 py-3">
            <span className="tag whitespace-nowrap text-paper/55">
              Şartname dizini
            </span>
            <span className="tag whitespace-nowrap text-brass">
              {totalItems} kalem
            </span>
          </div>

          <ol className="divide-y divide-paper/12">
            {standardGroups.map((group) => (
              <li key={group.id}>
                <Link
                  href={`/teknik-standartlar#${group.id}`}
                  className="flex items-center gap-4 px-4 py-3.5 transition-colors duration-200 active:bg-paper/[0.06]"
                >
                  <span className="tag w-6 shrink-0 text-brass">
                    {group.no}
                  </span>
                  <span className="min-w-0 flex-1 font-display text-[17px] leading-snug">
                    {group.title}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-paper/20 text-paper/70">
                    <Icon name="arrowRight" className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>

        {/* Masaüstü: dört kolonlu pafta ızgarası. */}
        <ol className="mt-14 hidden gap-px overflow-hidden border border-paper/15 bg-paper/10 sm:grid sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="mt-8 flex flex-col items-start gap-4 sm:mt-12 sm:flex-row sm:items-center">
          <Link
            href="/teknik-standartlar"
            className="group flex w-full items-center justify-between gap-3 border border-paper/35 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink sm:inline-flex sm:w-auto sm:justify-start sm:px-6"
          >
            Teknik standartların tamamı
            <Icon
              name="arrowRight"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
          <p className="text-[11px] leading-relaxed text-paper/50 sm:text-[12px] sm:text-paper/55">
            İçerik, şirket sunum dosyasındaki teknik şartname bölümünden
            aktarılmıştır.
          </p>
        </div>
      </div>
    </section>
  );
}
