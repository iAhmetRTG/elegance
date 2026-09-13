import type { Metadata } from "next";
import { site, telHref, waLink } from "@/lib/site";
import { waTopicLink, waTopics } from "@/lib/wa";
import { districts } from "@/lib/districts";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/Icon";
import { AreaMap } from "@/components/AreaMap";
import { CornerTicks } from "@/components/CornerTicks";

export const metadata: Metadata = {
  title: "İletişim | Ücretsiz Keşif ve Teklif",
  description:
    "Elegance İnşaat ile iletişime geçin: telefon, WhatsApp ve adres bilgileri. Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya'da aynı gün keşif.",
  alternates: { canonical: "/iletisim" },
};

export default function ContactPage() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.address.street}, ${site.address.postalCode} ${site.address.district} ${site.address.city}`,
  )}`;

  return (
    <>
      <PageHeader
        label="İletişim"
        breadcrumbs={[{ label: "İletişim" }]}
        title={
          <>
            Ücretsiz keşif için{" "}
            <em className="italic text-brass-deep">bir adım</em> kaldı.
          </>
        }
        intro="Telefonla arayın ya da WhatsApp'tan yazın; projenizin durumunu dinleyip en kısa sürede keşif randevusu oluşturuyoruz."
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

              <a href={`mailto:${site.email}`} className="group block">
                <span className="eyebrow flex items-center gap-2.5 text-muted">
                  <Icon name="mail" className="h-4 w-4 text-brass" />
                  E-posta
                </span>
                <span className="mt-2 block text-lg transition-colors group-hover:text-brass-deep">
                  {site.email}
                </span>
              </a>

              <div>
                <span className="eyebrow flex items-center gap-2.5 text-muted">
                  <Icon name="pin" className="h-4 w-4 text-brass" />
                  Adres
                </span>
                <p className="mt-2 text-lg leading-relaxed">
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.district} /{" "}
                  {site.address.city}
                </p>
              </div>

              <div>
                <span className="eyebrow flex items-center gap-2.5 text-muted">
                  <Icon name="clock" className="h-4 w-4 text-brass" />
                  Çalışma saatleri
                </span>
                <p className="mt-2 text-lg">{site.hours}</p>
              </div>
            </div>

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
            <div className="relative overflow-hidden border border-ink/15 bg-ink p-8 text-paper lg:p-10">
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
                    Keşif yaptığımız bölgeler
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

      {/* Konum: ofis ve hizmet alani haritasi. */}
      <section className="border-b border-ink/10 bg-paper-deep/40">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-28">
          <div className="lg:col-span-5">
            <SectionLabel no="02">Konum</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight lg:text-5xl">
              Ofisimiz Bakırköy merkezde.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.district} /{" "}
              {site.address.city}
            </p>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              Ofise gelmek isterseniz önceden bir telefon yeterli; şantiyede
              olduğumuz günlerde de aynı gün dönüş yapıyoruz.
            </p>
            <Button
              href={mapsHref}
              variant="outline"
              icon="pin"
              external
              className="mt-9"
            >
              Yol tarifi al
            </Button>
          </div>

          <div className="lg:col-span-7">
            <div className="relative border border-ink/15 bg-ivory p-3">
              <CornerTicks className="text-brass/60" />
              <AreaMap
                highlight="bakirkoy"
                className="h-72 w-full text-ink/70 sm:h-80"
              />
              <div className="flex items-center justify-between border-t border-ink/10 px-1 pb-1 pt-3">
                <span className="eyebrow text-muted">Hizmet alanı · 5 ilçe</span>
                <span className="eyebrow text-brass-deep">
                  Merkez: Bakırköy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
