import type { Metadata } from "next";
import Link from "next/link";
import { coverage, site, telHref, mailHref, waLink } from "@/lib/site";
import { waTopicLink, waTopics } from "@/lib/wa";
import { districts } from "@/lib/districts";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/Icon";
import { LocationMap, officeMapsHref } from "@/components/LocationMap";
import { JsonLd } from "@/components/JsonLd";

const contactTitle = "Bakırköy İletişim ve Yol Tarifi";
const contactDescription =
  `Elegance İnşaat: ${site.address.street}, ${site.address.postalCode} Bakırköy/İstanbul. Tel: ${site.phoneDisplay}. Ücretsiz keşif ve yol tarifi.`;

export const metadata: Metadata = {
  title: contactTitle,
  description: contactDescription,
  alternates: { canonical: "/iletisim" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.displayName,
    title: `${contactTitle} | ${site.displayName}`,
    description: contactDescription,
    url: `${site.url}/iletisim`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${contactTitle} | ${site.displayName}`,
    description: contactDescription,
  },
};

export default function ContactPage() {


  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${site.url}/iletisim#webpage`,
        url: `${site.url}/iletisim`,
        name: `${contactTitle} | ${site.displayName}`,
        description: contactDescription,
        inLanguage: "tr-TR",
        mainEntity: { "@id": `${site.url}/#business` },
      }} />
      <PageHeader
        label="İletişim"
        breadcrumbs={[{ label: "İletişim" }]}
        title={
          <>
            Ücretsiz keşif için{" "}
            <em className="italic text-brass-deep">bir adım</em> kaldı.
          </>
        }
        intro="Telefonla arayın, WhatsApp'tan yazın veya e-posta gönderin; projenizin durumunu dinleyip en kısa sürede keşif randevusu oluşturuyoruz."
      />

      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
          <div className="lg:col-span-5">
            <SectionLabel no="01">İletişim bilgileri</SectionLabel>

            <div className="mt-9 space-y-8">
              <a href={telHref} className="group block">
                <span className="eyebrow flex items-center gap-2.5 text-muted">
                  <Icon name="phone" className="h-4 w-4 text-brass" />
                  Telefon
                </span>
                <span className="mt-2 block font-display text-3xl transition-colors group-hover:text-brass-deep lg:text-4xl">
                  {site.phoneDisplay}
                </span>
              </a>

              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <span className="eyebrow flex items-center gap-2.5 text-muted">
                  <Icon name="whatsapp" className="h-4 w-4 text-brass" />
                  WhatsApp
                </span>
                <span className="mt-2 block font-display text-2xl transition-colors group-hover:text-brass-deep">
                  Hızlı yanıt için yazın
                </span>
              </a>

              <a href={mailHref} className="group block">
                <span className="eyebrow flex items-center gap-2.5 text-muted">
                  <Icon name="mail" className="h-4 w-4 text-brass" />
                  E-posta
                </span>
                <span className="mt-2 block text-xl transition-colors [overflow-wrap:anywhere] group-hover:text-brass-deep sm:text-2xl">
                  {site.email}
                </span>
              </a>

              <div>
                <span className="eyebrow flex items-center gap-2.5 text-muted">
                  <Icon name="pin" className="h-4 w-4 text-brass" />
                  İş adresi
                </span>
                <address className="mt-2 text-lg not-italic leading-relaxed">
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.district} / {site.address.city}
                </address>
                <a
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brass-deep underline-offset-4 hover:underline"
                >
                  Google Haritalar’da görüntüle
                  <Icon name="arrowUpRight" className="h-4 w-4" />
                </a>
              </div>

              <div>
                <span className="eyebrow flex items-center gap-2.5 text-muted">
                  <Icon name="clock" className="h-4 w-4 text-brass" />
                  Çalışma saatleri
                </span>
                <ul className="mt-2 space-y-1 text-lg">
                  {site.openingHours.map((hours) => (
                    <li key={hours.label}>
                      {hours.label} · {hours.opens} – {hours.closes}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
              Telefon, WhatsApp ve e-posta üzerinden ilettiğiniz taleplerin
              işlenmesine ilişkin bilgi için{" "}
              <Link
                href="/kvkk-aydinlatma-metni"
                className="underline decoration-brass/60 underline-offset-4 transition-colors hover:text-ink"
              >
                Aydınlatma Metni’ni inceleyin.
              </Link>
            </p>

            <div className="sheet mt-10 p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="tag text-muted">WhatsApp · hazır mesaj</p>
                <Icon name="whatsapp" className="h-4 w-4 text-brass" />
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                Konunuzu seçin; mesaj yazmaya gerek kalmadan sohbet hazır
                açılır.
              </p>
              <ul className="mt-5 border-t border-ink/10">
                {waTopics.map((topic, index) => (
                  <li key={topic.id} className="border-b border-ink/10">
                    <a
                      href={waTopicLink(topic)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3.5 py-3.5"
                    >
                      <span className="tag text-brass-deep">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-sm leading-snug transition-colors duration-300 group-hover:text-brass-deep">
                        {topic.label}
                      </span>
                      <Icon
                        name="arrowUpRight"
                        className="h-4 w-4 shrink-0 text-muted/60 transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brass-deep"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative overflow-hidden border border-ink/15 bg-brand p-8 text-paper lg:p-10">
              <div
                className="blueprint-dark absolute inset-0 opacity-70"
                aria-hidden="true"
              />
              <div className="relative">
                <span className="eyebrow text-brass">Hemen başlayın</span>
                <h2 className="mt-5 font-display text-3xl leading-tight lg:text-4xl">
                  Bir telefon, net bir yol haritası.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-paper/65">
                  Görüşmede yapınızın durumunu dinliyor; riskli yapı, kat
                  karşılığı veya anahtar teslim seçeneklerinden hangisinin size
                  uygun olduğunu anlatıyoruz. Keşif ve ilk değerlendirme
                  ücretsizdir.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button href={telHref} icon="phone">
                    Hemen ara
                  </Button>
                  <Button
                    href={waLink()}
                    variant="outlineLight"
                    icon="whatsapp"
                    external
                  >
                    {"WhatsApp'tan yaz"}
                  </Button>
                </div>

                <div className="mt-10 border-t border-paper/15 pt-7">
                  <span className="eyebrow text-paper/45">
                    {coverage.sameDayLabel}
                  </span>
                  <ul className="mt-4 flex flex-wrap gap-2.5">
                    {districts.map((district) => (
                      <li
                        key={district.slug}
                        className="border border-paper/20 px-3.5 py-1.5 text-xs tracking-wide text-paper/75"
                      >
                        {district.name}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[12px] leading-relaxed text-paper/60">
                    {coverage.widerNote}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted">
              Keşif talepleri aynı gün içinde yanıtlanır; randevular bölge
              yoğunluğuna göre 24–48 saat içinde planlanır.
            </p>
          </div>
        </div>
      </section>

      {/* Doğrulanmış iş adresi ve hizmet alanı haritası. */}
      <section className="border-b border-ink/10 bg-paper-deep/40">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-28">
          <div className="lg:col-span-5">
            <SectionLabel no="02">Konum</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight lg:text-5xl">
              Zuhuratbaba&apos;daki merkez ofisimiz.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.district} / {site.address.city}
            </p>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              {coverage.coreNote} {coverage.widerNote}
            </p>
            <Button
              href={officeMapsHref}
              variant="outline"
              icon="pin"
              external
              className="mt-9"
            >
              Yol tarifi al
            </Button>
          </div>

          <div className="lg:col-span-7">
            <LocationMap />
          </div>
        </div>
      </section>
    </>
  );
}
