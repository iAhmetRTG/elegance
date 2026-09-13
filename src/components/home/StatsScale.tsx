import { proofPoints } from "@/lib/site";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

/* Göstergeler mobilde tek çerçeveli bir ölçü tablosunda toplanır; masaüstünde
   dört kolonlu seride yayılır. Değer kutusu iki satır yüksekliğinde sabitlenir
   ve değerler alt hizaya oturur; böylece tek satırlık sayılar ile dar ekranda
   iki satıra taşan "Çeyrek asır" aynı çizgide durur, etiketler hizalanır. */
export function StatsScale() {
  return (
    <section className="cv-auto border-b border-ink/10 bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-8 lg:py-20">
        <ul className="grid grid-cols-2 gap-px overflow-hidden border border-ink/15 bg-ink/15 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-12 lg:overflow-visible lg:border-0 lg:bg-transparent">
          {proofPoints.map((stat, index) => {
            /* Sayı sayaçları ile "Çeyrek asır" gibi metin değerleri mobilde
               farklı ölçeklenir; metin değeri kendi hücresine sığar. */
            const isTextValue = !/^\d/.test(stat.value);
            const valueSize = isTextValue
              ? "text-[1.66rem] sm:text-[1.9rem] lg:text-6xl"
              : "text-[2.4rem] sm:text-[2.75rem] lg:text-6xl";

            return (
              <li key={stat.label}>
                <Reveal delay={index * 70} className="h-full">
                  <div className="flex h-full flex-col bg-paper p-4 sm:p-5 lg:border-t lg:border-ink/15 lg:bg-transparent lg:p-0 lg:pt-6">
                    <span aria-hidden="true" className="block h-1 w-8 bg-brass" />
                    <p
                      className={`mt-4 flex min-h-[3.55rem] items-end font-display leading-[1.05] sm:min-h-[4rem] lg:mt-6 lg:min-h-0 lg:text-6xl ${valueSize}`}
                    >
                      <Counter value={stat.value} />
                    </p>
                    <p className="mt-2.5 text-[10.5px] font-semibold uppercase leading-snug tracking-[0.14em] text-muted lg:mt-4 lg:text-[13px] lg:font-normal lg:leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
