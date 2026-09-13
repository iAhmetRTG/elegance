import type { Metadata } from "next";
import Link from "next/link";
import { districts } from "@/lib/districts";
import { site, telHref, waLink } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Hizmet Bölgeleri | Bakırköy, Yeşilköy, Ataköy, Yeşilyurt, Florya",
  description:
    "Elegance İnşaat; Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya'da kentsel dönüşüm, kat karşılığı ve anahtar teslim inşaat hizmeti verir. Aynı gün keşif.",
  alternates: { canonical: "/bolgeler" },
};

/* Bölgeler sayfası bilinçli olarak tek ritimli ve sessizdir: teknik zemin,
   kart çerçevesi ve bölüm etiketi tekrarı kullanılmaz. Sayfanın kimliğini
   tipografi, ince ayraçlar ve tek bir keşif bloğu taşır. */
export default function DistrictsPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <div className="page-shell pb-11 pt-6 lg:pb-14 lg:pt-8">
          <Breadcrumbs items={[{ label: "Bölgeler" }]} />

          <h1
            className="mt-9 font-display text-[2.4rem] leading-[1.06] tracking-tight sm:max-w-[26ch] sm:text-[2.9rem] lg:mt-12 lg:text-[3.4rem]"
          >
            <span className="sm:block">Bakırköy&apos;den Florya&apos;ya,</span>{" "}
            <span className="sm:block">
              <em className="italic text-brass-deep">yerinde</em> hizmet.
            </span>
          </h1>

          <p className="mt-6 max-w-[var(--measure)] text-[15px] leading-relaxed text-muted sm:text-base">
            Merkezimiz Bakırköy&apos;de; ekiplerimiz beş bölgede aynı gün keşfe
            gelir. Her bölgenin imar koşullarını, yapı stokunu ve
            beklentilerini ayrı ayrı biliyoruz.
          </p>
        </div>
      </section>

      <section
        aria-label="Hizmet bölgeleri listesi"
        className="page-shell grid gap-12 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20"
      >
        <div className="lg:col-span-8">
          <ul className="border-t border-ink/10">
            {districts.map((district, index) => (
              <li key={district.slug} className="border-b border-ink/10">
                <Reveal delay={index * 60}>
                  <Link
                    href={`/bolgeler/${district.slug}`}
                    className="group grid gap-2 py-6 lg:grid-cols-[11rem_minmax(0,1fr)_1.25rem] lg:items-baseline lg:gap-10 lg:py-7"
                  >
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-[1.6rem] leading-none transition-colors duration-300 group-hover:text-brass-deep lg:text-[1.85rem]">
                        {district.name}
                      </span>
                      <Icon
                        name="arrowRight"
                        className="h-4 w-4 shrink-0 text-muted transition-colors duration-300 group-hover:text-brass lg:hidden"
                      />
                    </span>

                    <span className="text-[15px] leading-relaxed text-muted lg:pt-1">
                      {district.summary}
                    </span>

                    <Icon
                      name="arrowRight"
                      className="hidden h-4 w-4 text-muted/60 transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-brass lg:block"
                    />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[11px] leading-relaxed text-muted">
            Bu beş bölge güncel hizmet kapsamımızdır. Arşivdeki proje
            fotoğrafları Etiler (İstanbul) ve Karaburun (İzmir) konumlarına
            aittir; bu bölgelerde yürütülmüş iş olarak gösterilmez.
          </p>
        </div>

        <aside className="lg:col-span-4 lg:sticky lg:top-[calc(var(--header-h)_+_2.5rem)] lg:self-start">
          <p className="tag text-brass-deep">Ücretsiz keşif</p>
          <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-muted">
            Bölgenizdeki yapıyı yerinde inceleyelim. Keşif ve ön değerlendirme
            ücretsizdir.
          </p>

          <a
            href={telHref}
            className="link-underline mt-7 inline-block font-display text-[1.75rem] leading-none transition-colors duration-300 hover:text-brass-deep"
          >
            {site.phoneDisplay}
          </a>
          <p className="mt-3 text-[12px] tracking-wide text-muted">
            {site.hours}
          </p>

          <div className="mt-7 hidden flex-col gap-3 lg:flex">
            <Button href={telHref} icon="phone">
              Hemen ara
            </Button>
            <Button
              href={waLink()}
              variant="outline"
              icon="whatsapp"
              external
            >
              {"WhatsApp'tan yaz"}
            </Button>
          </div>
        </aside>
      </section>
    </>
  );
}
