import type { Metadata } from "next";
import Link from "next/link";
import { districts } from "@/lib/districts";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Hizmet Bölgeleri | Bakırköy, Yeşilköy, Ataköy, Yeşilyurt, Florya",
  description:
    "Elegance İnşaat; Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya'da kentsel dönüşüm, kat karşılığı ve anahtar teslim inşaat hizmeti verir. Aynı gün keşif.",
  alternates: { canonical: "/bolgeler" },
};

export default function DistrictsPage() {
  return (
    <>
      <PageHeader
        label="Bölgeler"
        breadcrumbs={[{ label: "Bölgeler" }]}
        title={
          <>
            Bakırköy&apos;den Florya&apos;ya,{" "}
            <em className="italic text-brass-deep">yerinde</em> hizmet.
          </>
        }
        intro="Merkezimiz Bakırköy'de; ekiplerimiz beş bölgede aynı gün keşfe gelir. Her bölgenin imar koşullarını, yapı stokunu ve beklentilerini ayrı ayrı biliyoruz."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="max-w-[var(--measure)] text-[15px] leading-relaxed text-muted">
          Aşağıdaki beş bölge güncel hizmet kapsamımızdır. Geçmiş proje
          fotoğrafları Etiler (İstanbul) ve Karaburun (İzmir) konumlarına
          aittir; bu bölgelerde yapılmış iş gibi gösterilmez.
        </p>
        <div className="mt-10 border-b border-ink/10">
          {districts.map((district, index) => (
            <Reveal key={district.slug}>
              <Link
                href={`/bolgeler/${district.slug}`}
                className="group relative -mx-4 grid gap-5 border-t border-ink/10 px-4 py-8 transition-colors duration-500 hover:border-brass/40 hover:bg-paper-deep/40 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:py-10"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-px left-0 h-px w-0 bg-brass transition-[width] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full"
                />
                <div className="flex items-baseline gap-5 lg:min-w-[14rem]">
                  <span className="eyebrow text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="font-display text-3xl transition-colors duration-300 group-hover:text-brass-deep">
                      {district.name}
                    </span>
                    <p className="eyebrow mt-2 text-brass-deep">
                      {district.role}
                    </p>
                  </div>
                </div>

                <p className="text-[15px] leading-relaxed text-muted lg:max-w-3xl">
                  {district.summary}
                </p>

                <span className="hidden h-10 w-10 items-center justify-center border border-ink/20 transition-colors duration-300 group-hover:border-brass group-hover:bg-brass group-hover:text-ink lg:inline-flex">
                  <Icon name="arrowUpRight" className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        label="Bölgenizde keşif"
        title="Bölgenizdeki yapıyı yerinde inceleyelim."
        text="Bulunduğunuz sokaktaki yapı stokunu ve imar durumunu biliyoruz. Ücretsiz keşif için bir telefon yeterli."
      />
    </>
  );
}
