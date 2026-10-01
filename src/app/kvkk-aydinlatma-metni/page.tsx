import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Elegance İnşaat web sitesi ve iletişim taleplerine ilişkin kişisel veri aydınlatma metni.",
  alternates: { canonical: "/kvkk-aydinlatma-metni" },
};

export default function KvkkNoticePage() {
  return (
    <>
      <PageHeader
        label="Kişisel veriler"
        breadcrumbs={[{ label: "KVKK Aydınlatma Metni" }]}
        title="KVKK Aydınlatma Metni"
        intro="Sitemizi ziyaret ettiğinizde ve bize bir proje talebi ilettiğinizde hangi verilerin, hangi amaçlarla işlendiğini açıklıyoruz."
      />

      <article className="border-b border-ink/10">
        <div className="mx-auto max-w-4xl space-y-10 px-5 py-16 text-[15px] leading-7 text-muted lg:px-8 lg:py-24">
          <section>
            <h2 className="font-display text-2xl text-ink">Veri sorumlusu</h2>
            <p className="mt-4">
              Veri sorumlusu {site.legalName}&apos;dir. Bize <a className="text-ink underline underline-offset-4" href={telHref}>{site.phoneDisplay}</a>
              {" "}numarasından ulaşabilirsiniz. İş adresimiz: {site.address.street}, {site.address.district}/{site.address.city}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">İşlenen veriler ve toplama yöntemi</h2>
            <p className="mt-4">
              Telefon veya WhatsApp üzerinden bizimle iletişime geçtiğinizde paylaştığınız ad, telefon numarası, proje ve taşınmaza ilişkin açıklamalar ile görüşme veya yazışma içeriği işlenebilir. Bu bilgiler, seçtiğiniz iletişim kanalı üzerinden elektronik veya sözlü olarak doğrudan sizden alınır. Lütfen ilk iletişimde gerekli olmayan kimlik belgesi, sağlık bilgisi veya başka hassas bilgileri göndermeyin.
            </p>
            <p className="mt-4">
              Site ziyaretinde barındırma ve güvenlik altyapısında IP adresi, ziyaret zamanı, istenen sayfa ve teknik erişim kayıtları oluşabilir. Sitede kullanıcı hesabı veya bilgi toplayan bir iletişim formu bulunmaz.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Amaçlar ve hukuki sebepler</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>İletişim talebinizi yanıtlamak, keşif randevusu ve teklif sürecini yürütmek için paylaştığınız iletişim ve proje bilgileri, 6698 sayılı Kanun&apos;un 5/2-c maddesindeki sözleşme kurulmasıyla doğrudan ilgili olma şartına dayanılarak işlenir.</li>
              <li>Siteyi çalışır ve güvenli tutmak, kötüye kullanımı tespit etmek için teknik erişim kayıtları, Kanun&apos;un 5/2-f maddesindeki meşru menfaat şartına dayanılarak işlenebilir.</li>
              <li>Bir uyuşmazlık veya resmî talep doğarsa ilgili kayıtlar, bir hakkın tesisi, kullanılması veya korunması ya da hukuki yükümlülüğün yerine getirilmesi için gerekli olduğu ölçüde işlenebilir.</li>
            </ul>
            <p className="mt-4">Bu iletişim kanallarını kullanmanız, reklam veya pazarlama mesajları için onay verdiğiniz anlamına gelmez.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Aktarım ve saklama</h2>
            <p className="mt-4">
              Verileriniz, talebin yanıtlanması ve sistemlerin işletilmesi için kullanılan mesajlaşma ve barındırma hizmet sağlayıcılarıyla; kanuni zorunluluk halinde yetkili kamu kurumlarıyla, yalnızca gerekli olduğu ölçüde paylaşılabilir. WhatsApp&apos;ı seçerseniz mesajlarınız ayrıca WhatsApp hizmeti üzerinden iletilir. Google Haritalar bağlantısını açarsanız bu ayrı hizmetin veri işleme koşulları geçerli olur.
            </p>
            <p className="mt-4">
              İletişim kayıtları talebin sonuçlandırılması ve olası hukuki hakların korunması için gerekli süre boyunca; teknik kayıtlar ise güvenlik ve işletim ihtiyacı sürdüğü müddetçe tutulur. Süre sonunda ilgili kayıtlar mevzuata uygun şekilde silinir, yok edilir veya anonim hale getirilir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Haklarınız ve başvuru</h2>
            <p className="mt-4">
              Kanun&apos;un 11. maddesi kapsamındaki haklarınız için talebinizi, kimliğinizi doğrulamaya elverişli bilgilerle birlikte yukarıdaki iş adresimize yazılı olarak iletebilirsiniz. Başvurular, niteliğine göre en kısa sürede ve en geç 30 gün içinde yanıtlanır.
            </p>
            <p className="mt-4">
              Çerezler ve dış bağlantılar hakkında bilgi için <Link className="text-ink underline underline-offset-4" href="/cerez-politikasi">Çerez ve Dış Bağlantılar</Link> sayfasına bakabilirsiniz.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
