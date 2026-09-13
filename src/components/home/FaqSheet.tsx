import { faqs } from "@/lib/faqs";
import { site, telHref, waLink } from "@/lib/site";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/Icon";

export function FaqSheet({ no = "10" }: { no?: string }) {
  return (
    <section className="cv-auto border-b border-ink/10 bg-paper-deep/45">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionLabel no={no}>Sık sorulan sorular</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight">
              Merak edilenler
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
              Aradığınız yanıt burada yoksa telefonla ya da WhatsApp üzerinden
              yazın; aynı gün dönüş yapıyoruz.
            </p>

            <div className="sheet mt-9 p-6">
              <p className="tag text-muted">Keşif randevusu</p>
              <a
                href={telHref}
                className="mt-3 block font-display text-2xl leading-tight transition-colors duration-300 hover:text-brass-deep"
              >
                {site.phoneDisplay}
              </a>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {site.hours}
              </p>
              <div className="dim-line my-5" aria-hidden="true" />
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink"
              >
                <Icon name="whatsapp" className="h-4 w-4 text-brass" />
                WhatsApp&apos;tan yaz
                <Icon
                  name="arrowUpRight"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="divide-y divide-ink/10">
              {faqs.map((item, index) => (
                <details key={item.question} className="group py-5">
                  <summary className="flex cursor-pointer items-center gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center border border-ink/15 font-display text-sm text-brass-deep transition-colors duration-300 group-open:border-brass group-open:bg-brass/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg leading-snug sm:text-xl">
                      {item.question}
                    </span>
                    <span className="ml-auto inline-flex h-8 w-8 shrink-0 items-center justify-center border border-ink/15 transition-colors duration-300 group-open:border-brass group-open:bg-brass group-open:text-ink">
                      <Icon
                        name="plus"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-open:rotate-45"
                      />
                    </span>
                  </summary>
                  <div className="mt-4 border-l border-brass/50 pl-5 sm:ml-[3.25rem]">
                    <span className="tag text-brass-deep">Yanıt</span>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
