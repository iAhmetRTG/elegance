# Navbar ve Hizmetler Menüsü Uygulama Brifi

> **Öncelik notu:** Bu belge, `docs/musteri-feedback-uygulama-brifi.md` dosyasından sonra gelen daha güncel müşteri kararlarını içerir. İki belge arasında navbar yapısı, hizmet adları veya hizmet sırası bakımından çelişki varsa **bu belge geçerlidir**. Önceki belgedeki mobil mavi CTA ve hero sloganı gibi çelişmeyen maddeler geçerliliğini korur.

## Başka modele verilecek hazır prompt

```text
C:\dev\elegance reposunda navbar ve Hizmetler menüsünü bu belgedeki güncel müşteri kararlarına göre düzenle. Önce AGENTS.md dosyasını ve kullanılan Next.js 16.3.4 sürümüyle ilgili node_modules/next/dist/docs altındaki gerekli rehberleri oku. Mevcut lüks/editoryal Elegance tasarım dilini koru; yeni bağımlılık ekleme, ilgisiz refactor yapma.

Ekli fotoğraflar bir arayüz tasarımı değildir. Basılı kâğıttaki logo, kareli zemin, tarih alanı ve el yazısının fiziksel yerleşimi siteye kopyalanmayacak. Fotoğraflar yalnızca navbar ve hizmet adları için içerik geri bildirimidir.

Güncel kararlar:
1. Üst navbar yalnızca Hizmetler, Projeler, Hakkımızda ve İletişim öğelerini içerecek.
2. Bölgeler yalnızca üst navbardan çıkarılacak; /bolgeler sayfaları, sitemap ve footer erişimi silinmeyecek.
3. Hizmetler menüsü ve hizmet veri sırası tam olarak şu olacak: Endüstriyel Yapılar, Kentsel Dönüşüm, Özel Taahhüt Projeleri, Villa ve Müstakil Yapılar, Deprem Güçlendirme, Kat Karşılığı İnşaat.
4. Hizmetler alt menüsü ana sayfa dahil tüm desktop header durumlarında çalışacak; mobil menüde de aynı alt hizmetler erişilebilir olacak.
5. Önceki uygulamadaki doğrudan üst seviye Kentsel Dönüşüm/neon linkini kaldır. Kentsel Dönüşüm artık Hizmetler alt menüsünde yer alacak.
6. Anahtar Teslim İnşaat hizmet kaydını Özel Taahhüt Projeleri olarak gerçek anlamda dönüştür; yalnızca etiketi değiştirme. Eski URL'yi yeni rotaya kalıcı yönlendir.

Aşağıdaki ayrıntılı kapsam ve kabul kriterlerini uygula. Sonunda npm run lint ve npm run build çalıştır. Desktop ve mobil menüyü mouse, klavye ve dokunma davranışlarıyla kontrol et; yeni ve eski hizmet rotalarını doğrula. Başarısız kontrolleri düzeltmeden işi tamamlanmış sayma.
```

## Kaynak notların doğru transkripsiyonu

### Sol fotoğraf — üst navbar

Navbar içeriği:

1. **Hizmetler**
2. **Projeler**
3. **Hakkımızda**
4. **İletişim**

Alt not: **“Bölgeleri buradan kaldıralım, üst satırdan.”**

Buradaki “sol tarafta” ifadesi, soldaki fotoğrafı anlatır; navbar öğelerinin arayüzde fiziksel olarak sola hizalanması gerektiği anlamına gelmez. Mevcut header kompozisyonu korunabilir.

### Sağ fotoğraf — Hizmetler listesi

Hizmetler tam olarak şu ad ve sırayla gösterilecek:

1. **Endüstriyel Yapılar**
2. **Kentsel Dönüşüm**
3. **Özel Taahhüt Projeleri**
4. **Villa ve Müstakil Yapılar**
5. **Deprem Güçlendirme**
6. **Kat Karşılığı İnşaat**

Fotoğraftaki liste içerik ve sıra referansıdır. El yazısı font, kâğıt dokusu veya dikey fiziksel yerleşim birebir taklit edilmeyecek.

## Mevcut repo durumu

- Üst navigasyon verileri `src/lib/site.ts` içindeki `nav` ve `homeNav` dizilerinden geliyor.
- Ana sayfa ve alt sayfa header davranışları `src/components/Header.tsx` içinde ayrı dallarda render ediliyor.
- Alt sayfa desktop header'ında Hizmetler mega menüsü mevcut; ana sayfa desktop header'ında ve mobil menüde aynı hizmet alt menüsü henüz yok.
- Hizmetlerin tek veri kaynağı `src/lib/services.ts`; bu dizi ana sayfa hizmet alanını, `/hizmetler` sayfasını, header mega menüsünü, footer'ı, sitemap'i ve dinamik detay sayfalarını besliyor.
- `Endüstriyel Yapı` kaydı mevcut, fakat yeni müşteri notundaki görünür ad **Endüstriyel Yapılar** olmalı.
- `Anahtar Teslim İnşaat` kaydı hâlâ mevcut ve **Özel Taahhüt Projeleri** ile değiştirilmeli.
- Önceki geri bildirim nedeniyle ana sayfada `Kentsel Dönüşüm` doğrudan üst seviye ve neon vurgulu olarak gösteriliyor. Yeni dört öğeli navbar kararı bunu geçersiz kılıyor.

## 1. Üst navbar yapısı

### Ana dosyalar

- `src/lib/site.ts`
- `src/components/Header.tsx`
- Gereksiz hale gelirse `src/app/globals.css` içindeki eski nav glow stilleri

### Uygulama gereksinimleri

- Ana sayfa ve alt sayfalarda görünen üst seviye navigasyon aynı bilgi mimarisini kullanmalı:
  1. Hizmetler
  2. Projeler
  3. Hakkımızda
  4. İletişim
- `Bölgeler` üst navigasyondan çıkarılmalı.
- `Kentsel Dönüşüm` doğrudan üst seviye navbar öğesi olmamalı; Hizmetler alt menüsünde yer almalı.
- `homeNavSpotlightHref` ve yalnız bu eski üst seviye bağlantı için eklenmiş `nav-glow` / `nav-glow-ink` kodları artık kullanılmıyorsa temizlenmeli. Kullanılmayan import, değişken, CSS ve animasyon bırakma.
- Ana sayfadaki ayrı “Bize ulaşın” butonu ile `İletişim` linkini aynı anda göstererek aynı rotayı iki kez tekrarlama. Son görünür üst navigasyonda tek bir **İletişim** öğesi olmalı. Bu öğe mevcut yuvarlak CTA stilini kullanabilir; ancak görünür etiketi müşteri notundaki gibi “İletişim” olmalı.
- Üst navbarın logo, şeffaf/koyu hero durumu, kaydırınca açık zemine geçişi, sticky/fixed davranışı ve mevcut responsive ölçüleri korunmalı.
- `Bölgeler` sayfasını veya içeriğini silme. Yalnızca üst satırdan çıkar.

### Footer ve Bölgeler erişimi

- `footerNav` şu anda `nav` dizisini yaydığı için `Bölgeler` navdan çıkarıldığında footer'dan da istemeden kaybolabilir. Footer verisini gerekirse ayrıştır ve **Bölgeler** bağlantısını footer'da koru.
- `/bolgeler` ve `/bolgeler/[slug]` rotaları, sitemap kayıtları ve sayfa içi bölge bağlantıları korunmalı.

### Kabul kriterleri

- Ana sayfa ve alt sayfa desktop header'larında üst seviye öğeler aynı sıradadır: Hizmetler, Projeler, Hakkımızda, İletişim.
- Mobil menüde aynı dört üst seviye başlık bulunur.
- Üst navbarın hiçbir durumunda `Bölgeler` veya doğrudan üst seviye `Kentsel Dönüşüm` görünmez.
- `İletişim` aynı menüde iki kez tekrarlanmaz.
- Bölgeler footer'dan ve doğrudan URL üzerinden erişilebilir kalır.

## 2. Hizmetler alt menüsü

### Ana dosyalar

- `src/components/Header.tsx`
- `src/lib/services.ts`

### Desktop davranışı

- `Hizmetler` navbarın ilk öğesi ve `/hizmetler` sayfasına giden gerçek bir link olmalı.
- Hover ve klavye focus ile açılan alt menü/mega menü, ana sayfa header'ında da alt sayfa header'ıyla aynı içerikle çalışmalı.
- Alt menü `services` veri kaynağından üretilmeli; hizmet adları `Header.tsx` içinde ikinci kez elle yazılmamalı.
- Hizmetler DOM ve okuma sırası aşağıdaki kesin sırayı izlemeli:
  1. Endüstriyel Yapılar
  2. Kentsel Dönüşüm
  3. Özel Taahhüt Projeleri
  4. Villa ve Müstakil Yapılar
  5. Deprem Güçlendirme
  6. Kat Karşılığı İnşaat
- Mevcut premium, açık renkli panel ve editoryal tipografi korunabilir. Fotoğraftaki kâğıt veya el yazısı görünümü taklit edilmemeli.
- Panel viewport dışına taşmamalı ve header'ın açık/koyu durumlarında okunaklı olmalı.
- Kullanıcı mouse'u linkten panele geçirirken menü istemeden kapanmamalı.
- Klavyeyle `Tab` kullanıldığında Hizmetler bağlantısı ve tüm alt hizmet linkleri erişilebilir olmalı; focus paneli açık tutmalı.

### Mobil davranışı

- Mobil menüde `Hizmetler` altında aynı altı hizmete ulaşılabilmeli.
- Uygulama erişilebilir bir açılır bölüm, `details/summary` yapısı veya ayrı bir toggle kullanabilir. Toggle kullanılacaksa `aria-expanded` ve `aria-controls` doğru olmalı.
- Kullanıcı hem `/hizmetler` genel sayfasına hem her hizmet detayına gidebilmeli.
- Alt hizmet seçildiğinde mobil menü kapanmalı; body scroll kilidi temizlenmeli.
- Uzun hizmet adları 320 px genişlikte kesilmemeli veya yatay taşma oluşturmamalı.

### Kabul kriterleri

- Hizmetler alt menüsü ana sayfa ve tüm alt sayfalarda aynı altı bağlantıyı, aynı sırada gösterir.
- Mouse, klavye ve dokunmatik kullanımda tüm linkler erişilebilirdir.
- Menünün açılıp kapanması mevcut header geçişlerini bozmaz.
- `/hizmetler` genel sayfasına erişim kaybolmaz.

## 3. Hizmet veri setinin güncellenmesi

### Ana dosyalar

- `src/lib/services.ts`
- `src/components/art/ServiceSheetArt.tsx`
- `src/app/hizmetler/page.tsx`
- `src/lib/wa.ts` yalnızca veri dışı özel eşleşme varsa
- `next.config.ts`

### Kanonik hizmet listesi ve rotalar

| Sıra | Görünür ad | Kanonik slug |
|---:|---|---|
| 01 | Endüstriyel Yapılar | `endustriyel-yapi` |
| 02 | Kentsel Dönüşüm | `kentsel-donusum` |
| 03 | Özel Taahhüt Projeleri | `ozel-taahhut-projeleri` |
| 04 | Villa ve Müstakil Yapılar | `villa-mustakil-yapi` |
| 05 | Deprem Güçlendirme | `deprem-guclendirme` |
| 06 | Kat Karşılığı İnşaat | `kat-karsiligi-insaat` |

URL değişimini minimumda tutmak için mevcut `endustriyel-yapi` ve `villa-mustakil-yapi` slug'ları korunmalı; müşterinin istediği çoğul ifadeler görünür `name` alanında kullanılmalı. Yeni slug kesin olarak `ozel-taahhut-projeleri` olmalı.

### Uygulama gereksinimleri

- `services` dizisini yukarıdaki kesin sıraya getir. Bu sıra ana sayfadaki sıra numaralarını, Hizmetler sayfasını, header menüsünü ve footer hizmet listesini de belirleyecek.
- Görünür adları tam olarak güncelle:
  - `Endüstriyel Yapı` → `Endüstriyel Yapılar`
  - `Villa ve Müstakil Yapı` → `Villa ve Müstakil Yapılar`
- `Anahtar Teslim İnşaat` hizmet kaydını kaldır ve aynı veri modelinde gerçek bir **Özel Taahhüt Projeleri** kaydı oluştur.
- Bu yalnızca isim değişikliği değildir. Yeni hizmetin `tagline`, `summary`, `description` ve `features` içerikleri özel taahhüt iş modelini anlatmalı: işverene özel proje, kapsam ve keşif, sözleşme/bütçe/takvim yönetimi, disiplin koordinasyonu, kalite kontrolü ve teslim süreci. Doğrulanmamış sayı, sertifika veya proje iddiası ekleme.
- “Anahtar teslim” ifadesi bir teslim modeli olarak açıklama metinlerinde gerçekten gerekiyorsa kalabilir; ancak artık bağımsız üst seviye hizmet adı olarak gösterilmemeli.
- `Özel Taahhüt Projeleri` için uygun mevcut ikon kullanılmalı veya `Icon` sistemi minimum değişiklikle genişletilmeli. Başka hizmetle anlamsız biçimde aynı ikon bırakılmamalı.
- `ServiceSheetArt.tsx` içindeki `anahtar-teslim-insaat` varyantını yeni `ozel-taahhut-projeleri` varyantına dönüştür. Kod tabanlı SVG; proje dosyası, sözleşme/keşif paftası, koordineli disiplinler veya taahhüt akışını anlatan, mevcut çizim diliyle uyumlu bir kompozisyon olmalı.
- `/hizmetler` metadata ve açıklamalarında eski hizmet listesini açıkça sayan metinler varsa yeni adlarla güncelle.
- `site.title` veya site açıklaması “Anahtar Teslim İnşaat”ı bağımsız ana hizmet olarak sunuyorsa yeni bilgi mimarisine göre gözden geçir. Genel teslim biçimini anlatan doğru kullanımları körlemesine silme.

### Eski URL uyumluluğu

- Eski `/hizmetler/anahtar-teslim-insaat` adresini kalıcı olarak `/hizmetler/ozel-taahhut-projeleri` adresine yönlendir.
- Mevcut `/hizmetler/tadilat-renovasyon` → `/hizmetler/endustriyel-yapi` yönlendirmesini koru; yeni müşteri notu bunu iptal etmiyor.
- Yönlendirmeleri projedeki Next.js 16.3.4 rehberine uygun şekilde uygula.

### Kabul kriterleri

- Sitede gösterilen hizmet sayısı altıdır.
- Tüm veri odaklı hizmet listeleri aynı adları ve aynı sırayı gösterir.
- `/hizmetler/ozel-taahhut-projeleri` doğru metadata ve içerikle açılır.
- Eski `/hizmetler/anahtar-teslim-insaat` yeni rotaya kalıcı yönlenir.
- `Anahtar Teslim İnşaat` hiçbir menüde veya hizmet başlığında bağımsız hizmet olarak kalmaz.
- Endüstriyel ve villa hizmet adları müşteri notundaki çoğul biçimde görünür.

## Kapsam dışı

- El yazısı font, defter/kâğıt dokusu veya fotoğraftaki basılı logoyu navbar tasarımına taşımak.
- Bölgeler sayfalarını, bölge içeriklerini veya sitemap kayıtlarını silmek.
- Header'ı fiziksel olarak sola hizalamak veya tüm yerleşimi baştan tasarlamak.
- Önceki geri bildirimdeki mobil mavi CTA ve büyütülmüş hero sloganını geri almak.
- Hizmet sayısını altının üzerine çıkarmak.
- Yeni paket, UI framework veya animasyon kütüphanesi eklemek.

## Doğrulama listesi

1. `rg -n "homeNavSpotlightHref|nav-glow|Bölgeler|Anahtar Teslim İnşaat|anahtar-teslim-insaat" src next.config.ts` ile eski navbar ve hizmet kalıntılarını incele; her kalan eşleşmenin neden gerekli olduğunu doğrula.
2. `npm run lint`
3. `npm run build`
4. Ana sayfa header'ını koyu hero üzerinde ve kaydırma sonrası açık zeminde kontrol et.
5. En az 1024, 1280 ve 1440 px genişliklerde Hizmetler mega menüsünü mouse ve klavyeyle test et.
6. 320, 375 ve 430 px genişliklerde mobil menüyü, hizmet alt listesini ve uzun adların sarılmasını test et.
7. `/hizmetler`, altı güncel hizmet rotası, `/hizmetler/anahtar-teslim-insaat` ve `/hizmetler/tadilat-renovasyon` adreslerini kontrol et.
8. `/bolgeler` ve en az bir `/bolgeler/[slug]` sayfasının çalıştığını, Bölgeler bağlantısının footer'da kaldığını doğrula.
9. Footer, sitemap, WhatsApp hazır mesajları ve hizmet detay metadata'sının güncel `services` verisiyle tutarlı olduğunu kontrol et.

## Tamamlanma tanımı

İş; ana ve alt sayfa header'larında aynı dört üst seviye öğe gösterildiğinde, Bölgeler yalnızca üst navdan kaldırıldığında, Hizmetler alt menüsü her cihazda erişilebilir olduğunda, altı hizmet doğru ad ve sırada veri kaynağından üretildiğinde, eski URL'ler güvenli biçimde yönlendirildiğinde ve lint/build kontrolleri geçtiğinde tamamlanmıştır.
