import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Çerez ve Dış Bağlantılar",
  description:
    "Elegance İnşaat web sitesindeki çerez kullanımı ve dış hizmet bağlantıları hakkında bilgi.",
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHeader
        label="Site kullanımı"
        breadcrumbs={[{ label: "Çerez ve Dış Bağlantılar" }]}
        title="Çerez ve Dış Bağlantılar"
        intro="Sitedeki teknik veri akışlarını ve dış hizmetlere geçişi açıkça anlatıyoruz."
      />
      <article className="border-b border-ink/10">
        <div className="mx-auto max-w-4xl space-y-10 px-5 py-16 text-[15px] leading-7 text-muted lg:px-8 lg:py-24">
          <section>
            <h2 className="font-display text-2xl text-ink">Çerez kullanımı</h2>
            <p className="mt-4">
              Bu sitede reklam, kişiselleştirme veya ziyaretçi analitiği amacıyla çerez yerleştiren bir araç kullanılmıyor. Site, bu amaçlarla tarayıcınızda veri saklamıyor. Bu nedenle bu amaçlara yönelik bir çerez rızası istenmiyor. Barındırma altyapısı, sitenin sunulması ve güvenliği için teknik erişim kayıtları oluşturabilir.
            </p>
            <p className="mt-4">
              İleride analitik veya reklam teknolojisi eklenirse, bu sayfa güncellenecek ve gerekli durumlarda söz konusu teknoloji çalışmadan önce ayrı bir tercih mekanizması sunulacaktır.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">Dış hizmetler</h2>
            <p className="mt-4">
              WhatsApp ve Google Haritalar siteye gömülü değildir. Bu hizmetlere yalnızca ilgili bağlantıya tıkladığınızda geçersiniz; açılan hizmetin kendi gizlilik ve çerez kuralları geçerlidir. Telefon bağlantısı cihazınızın arama uygulamasını açar.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">Kişisel veriler</h2>
            <p className="mt-4">
              İletişim talepleri ve teknik erişim kayıtlarına ilişkin ayrıntılar için <Link className="text-ink underline underline-offset-4" href="/kvkk-aydinlatma-metni">KVKK Aydınlatma Metni</Link>&apos;ni okuyabilirsiniz.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
