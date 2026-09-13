import Link from "next/link";
import { corporateProfile, site, workProfile } from "@/lib/site";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/Icon";

/* Kurumsal profil ve çalışma profili, şirket sunum dosyasındaki
   doğrulanabilir içerikten aktarılır (CONTENT_INVENTORY.md § 3). */
export function CompanyProfile({ no = "02" }: { no?: string }) {
  return (
    <section className="cv-auto border-b border-ink/10 bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionLabel no={no}>Kurumsal profil</SectionLabel>
            <h2 className="mt-6 max-w-lg font-display text-4xl leading-tight lg:text-5xl">
              Mimarlar ve mühendisler tarafından kurulmuş bir{" "}
              <em className="italic text-brass-deep">inşaat firması</em>.
            </h2>

            <Link
              href="/hakkimizda"
              className="group mt-9 inline-flex items-center gap-3 border border-ink/25 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:border-ink"
            >
              Hakkımızda
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="max-w-[var(--measure)] space-y-5 text-base leading-relaxed text-muted sm:text-[17px]">
              <p className="text-ink/85">{corporateProfile.lead}</p>
              <p>{corporateProfile.body}</p>
            </div>

            <div className="mt-10 border-t border-ink/15 pt-8">
              <p className="eyebrow text-muted">Çalışma profili</p>
              <ul className="mt-6 grid gap-px overflow-hidden border border-ink/15 bg-ink/10 sm:grid-cols-2">
                {workProfile.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 bg-paper px-5 py-4 text-[14px] leading-relaxed"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brass"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[12px] leading-relaxed text-muted">
                {site.legalName}; {site.districts.join(", ")} bölgelerinde
                kentsel dönüşüm, kat karşılığı ve anahtar teslim inşaat
                hizmeti verir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
