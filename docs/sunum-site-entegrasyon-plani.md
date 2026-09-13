# Elegance Sunum Dosyası - Site Entegrasyon ve Görsel Üretim Planı

## 1. Amaç

31 sayfalık şirket sunumundaki doğrulanabilir kurumsal bilgileri, proje kayıtlarını, teknik standartları ve gerçek proje görsellerini mevcut Elegance sitesine aktarmak.

Çalışmanın ana ilkesi: **temsili bir inşaat sitesi yerine, kanıt gösteren gerçek bir proje arşivi** oluşturmak. Sunumdaki içerik doğrudan web sayfasına kopyalanmayacak; kısa, taranabilir ve kaynağı belli bir bilgi mimarisine dönüştürülecek.

## 2. Kritik İçerik Ayrımı

Mevcut site ile sunum farklı amaçlara hizmet eden iki coğrafya grubu içeriyor:

- **Hedef hizmet bölgeleri:** Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya. Sitenin pazarlama, keşif ve bölge sayfaları bu beş bölgeyi koruyacak.
- **Geçmiş proje bölgeleri:** sunumda belgelenen Etiler/İstanbul ve Karaburun/İzmir. Bunlar hizmet bölgesi menüsü değil, geçmiş referans portföyünün konumlarıdır.
- Mevcut `src/lib/projects.ts` içindeki altı temsili proje sunumdaki yedi gerçek referans projeyle eşleşmiyor; proje arşivi sunum verileriyle yenilenecek.
- Mevcut telefon numarası yer tutucu: `0500 000 00 00`.
- `150+ tamamlanan proje`, `900+ teslim edilen konut` ve bazı mevcut proje hikayeleri sunum tarafından doğrulanmıyor.
- Sunum şirketi “çeyrek asırdan beri” faaliyet gösteren, mimar ve mühendislerle kurulmuş bir inşaat firması olarak tanımlıyor.

Veri modelinde `hizmet bölgesi` ve `proje konumu` aynı alan üzerinden bağlanmamalı. Bir projenin Etiler veya Karaburun'da yapılmış olması, işletmenin güncel hedef hizmet bölgelerini değiştirmez.

## 3. Sunumdan Çıkan Doğrulanabilir İçerik Envanteri

### Kurumsal profil

- Gayrimenkul ve inşaat sektöründe çeyrek asırlık deneyim.
- Mimarlar ve mühendislerden oluşan yapı.
- Çalışma profili: toplu konut/rezidans, oteller, endüstriyel tesisler, ticaret ve yönetim binaları.
- Marka yaklaşımı: kente, kentliye, çevreye ve doğaya saygı; kalite ve estetik odağı.

### Proje kayıtları

| Proje | Bölge | Alan | Sözleşme | İskan | Süre | Sunumdaki görsel |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| Proje Çiçek / Çiçek Apt. | Etiler | Belirtilmemiş | 2014 | 2014 | 10 ay | Yalnızca genel proje kolajında |
| Proje Mercan / Dilmen Apt. | Etiler | 2.400 m² | 2016 | 2017 | 12 ay | Dış cephe + giriş, mutfak ve banyo |
| Proje Ametist / Boncuk Apt. | Etiler | 1.850 m² | 2017 | 2018 | 11 ay | Dış cephe + giriş ve iç mekânlar |
| Proje Kuvars / Pirelli Siteleri A-B-C | Etiler | 6.500 m² | 2017 | 2019 | 21 ay | Dış cephe + salon, mutfak ve banyo |
| Proje Topaz / Villa Dalmaz | Etiler | Belirtilmemiş | 2020 | 2021 | 10 ay | İnşaat halindeki dış cephe |
| Terrace House | Karaburun | 4.200 m² | 2022 | 2024 | 21 ay | Render + tamamlanmış saha fotoğrafları |
| Hill Stone | Karaburun | 5.250 m² | 2022 | 2024 | 21 ay | Render + tamamlanmış saha fotoğrafları |

### Yayından önce doğrulanması gereken tutarsızlıklar

- Sayfa 2'de “Topoz”, diğer sayfalarda “Topaz” yazıyor. Kanonik ad teyit edilmeli.
- Proje Topaz sayfasında “devam ediyor” yazarken ruhsat/iskan tablosunda 2021 iskan tarihi bulunuyor. Güncel durum teyit edilmeli.
- Etiler tablosu “son 5 projemiz” başlığını taşıyor; İzmir tablosunda yalnızca iki satır var. Bu ifade webde toplam proje sayısı olarak kullanılmamalı.
- Çeyrek asırlık deneyim, sabit bir başlangıç yılına dönüştürülmeden önce şirket kuruluş yılı teyit edilmeli.
- Telefon, e-posta, açık adres, ticaret unvanı ve sosyal medya adresleri sunumda bulunmuyor; marka sahibinden alınmalı.

### Teknik şartname başlıkları

- Genel yapı ve taşıyıcı sistem
- Kapı ve pencereler
- Antre ve hol
- Salon ve odalar
- Banyo ve WC
- Mutfak
- Mekanik ve elektrik tesisatı
- Vitrifiye ve armatürler
- Ortak alanlar ve peyzaj

Marka listeleri uzun bir metin halinde gösterilmemeli. Her başlık altında performans standardı önce, örnek marka grupları ise ikincil bilgi olarak sunulmalı. “Veya muadili” ve projeye göre değişiklik koşulları hukuk/teknik ekip tarafından onaylanmadan eklenmemeli.

## 4. Önerilen Site Bilgi Mimarisi

### Ana sayfa

1. **Gerçek proje hero'su:** Terrace House veya Hill Stone tamamlanmış fotoğrafı; ikinci ve üçüncü slayt Mercan ve Kuvars.
2. **Kurumsal güven cümlesi:** çeyrek asırlık deneyim + mimar/mühendis ekip yapısı.
3. **Seçili projeler:** yedi referanstan 4 öne çıkan proje; “temsili” görsel ibaresi kaldırılır.
4. **Teslim performansı:** sözleşme, iskan ve süre tablosunun sadeleştirilmiş görsel anlatımı.
5. **Çalışma alanları:** konut/rezidans, otel, endüstriyel, ticaret/yönetim.
6. **Teknik standart özeti:** dokuz başlıktan en güçlü dört tanesi ve “tüm standartları incele” bağlantısı.
7. **İç mekân kalitesi:** Mercan, Ametist ve Kuvars'tan gerçek iç mekân seçkisi.
8. **Tek final CTA:** doğrulanmış telefon ve WhatsApp bilgisi geldikten sonra etkinleştirilir.

### `/projeler`

- Yedi doğrulanmış proje tek arşivde listelenir.
- Filtreler geçmiş proje konumuna göre `Tümü`, `Etiler`, `Karaburun`; güncel durumlar doğrulandıktan sonra `Tamamlandı` ve `Devam ediyor` eklenebilir.
- Kart alanları: proje adı, bölge, alan, iskan yılı ve görsel türü.
- Render kullanılan kartta açıkça `Mimari render`; gerçek fotoğrafta `Tamamlanmış proje` etiketi yer alır.
- Proje Çiçek yeterli görsel gelene kadar fotoğrafsız tipografik kayıt veya arşiv satırı olarak gösterilir.

### `/projeler/[slug]`

Her proje sayfası aynı doğrulanabilir iskeleti kullanır:

1. Gerçek fotoğraf veya açıkça etiketlenmiş render ile hero.
2. Proje künyesi: bölge, alan, sözleşme yılı, iskan yılı, süre, durum.
3. Kısa proje özeti; sunumda bulunmayan hikâye, daire sayısı veya teknik uygulama uydurulmaz.
4. Galeri; `Dış cephe`, `İç mekân`, `Render`, `Tamamlanmış fotoğraf` grupları.
5. İlgili teknik standartlar.
6. En fazla iki ilgili proje ve tek CTA.

Önerilen slug'lar:

- `/projeler/proje-cicek`
- `/projeler/proje-mercan`
- `/projeler/proje-ametist`
- `/projeler/proje-kuvars`
- `/projeler/proje-topaz`
- `/projeler/terrace-house`
- `/projeler/hill-stone`

### `/teknik-standartlar`

- Sunumun 7-14. sayfalarındaki şartname için yeni ve bağımsız sayfa.
- Dokuz accordion başlığı; mobilde tek kolon, masaüstünde sticky içindekiler navigasyonu.
- Marka isimleri, okunabilir kısa listeler halinde ikincil seviyede.
- Üstte “projeye göre nihai teknik şartname sözleşme ekinde belirlenir” açıklaması; metin hukuk/teknik ekipçe onaylanır.

### `/hakkimizda`

- Mevcut Bakırköy merkezli hikâye yerine sunumdaki doğrulanabilir şirket profili.
- “Mimarlar ve mühendislerle kurulmuş ekip”, “çeyrek asırlık deneyim” ve dört çalışma alanı.
- Şirketin gerçek ekip/şantiye fotoğrafı gelene kadar stok fotoğraf kullanılmaması tercih edilir.
- Doğrulanmamış `150+`, `900+` ve bölgesel uzmanlık sayaçları kaldırılır ya da kaynakla doğrulanır.

### `/hizmetler` ve `/bolgeler`

- Hizmetler, sunumdaki çalışma profiline göre yeniden adlandırılır; mevcut kentsel dönüşüm teklifi ayrıca gerçekten sunulan bir hizmetse korunur.
- `Bölgeler` ana menü maddesi ve Bakırköy, Yeşilköy, Ataköy, Yeşilyurt, Florya sayfaları korunur.
- Bölge sayfalarında bu çalışma için üretilen ve açıkça temsili olarak tanımlanan mimari görseller kullanılabilir.
- Etiler ve Karaburun, ana hizmet bölgesi sayfasına eklenmez; yalnızca proje arşivinde konum/filtredir.

## 5. Görsel Varlık Planı

### 5.1 Önce kaynak çıkarımı

PDF içindeki gömülü görseller ekran görüntüsü alınarak değil, orijinal görüntü akışlarından çıkarılmalı. Sunumdaki proje görsellerinin çoğu 1200-1600 px aralığında; iç mekân kolajlarından biri 3694 x 1600 px. Web için yeterli kaynak var.

Önerilen klasör yapısı:

```text
public/media/projects/
  proje-ametist/
    source/
    web/
  proje-kuvars/
  proje-mercan/
  proje-topaz/
  terrace-house/
  hill-stone/
```

- `source/`: PDF'den çıkarılmış, yayın öncesi arşiv; uygulama tarafından doğrudan kullanılmaz.
- `web/`: sRGB, yönü düzeltilmiş, WebP/AVIF ve gerekli JPEG fallback'leri.
- Dosya adları: `hero-desktop`, `hero-mobile`, `facade-01`, `interior-kitchen-01`, `render-01` gibi anlamsal isimler.

### 5.2 Doğrudan kullanılacak gerçek görseller

- Ametist: sayfa 16 dış cephe, sayfa 27-28 giriş ve iç mekânlar.
- Kuvars: sayfa 17 dış cephe, sayfa 29-30 salon, mutfak ve banyo.
- Mercan: sayfa 18 dış cephe, sayfa 25-26 giriş, mutfak ve banyo.
- Topaz: sayfa 19 yalnızca şantiye/devam eden yapı kaydı.
- Terrace House: sayfa 21 tamamlanmış dış mekân; sayfa 20 yalnızca render olarak.
- Hill Stone: sayfa 23 tamamlanmış dış mekân; sayfa 22 yalnızca render olarak.

### 5.3 ImageGen kullanım sınırı

ImageGen gerçek proje kanıtını değiştirmek için değil, yayın varyantı üretmek için kullanılacak.

Uygun kullanımlar:

- Portre/4:3 cephe fotoğrafını 16:9 masaüstü hero'ya genişletmek.
- Aynı fotoğrafın 4:5 mobil varyantında eksik çevreyi doğal biçimde tamamlamak.
- Yalnızca gökyüzü, kaldırım veya kenardaki boş çevreyi genişletmek.
- Renk sıcaklığı, pozlama ve perspektif hissini seri içinde yakınlaştırmak.
- Görselin üzerindeki sunum etiketi/çerçevesi kaynak fotoğrafa gömülüyse çevreyi koruyarak temizlemek.

Yasak kullanımlar:

- Binanın kat sayısını, cephesini, balkonunu, malzemesini veya peyzajını değiştirmek.
- Render'ı tamamlanmış proje fotoğrafı gibi göstermek.
- Topaz'ın şantiye fotoğrafından bitmiş bina üretmek.
- Olmayan havuz, daire, otopark, insan, tabela veya manzara eklemek.
- Üretilmiş görseli etiketsiz biçimde “gerçek fotoğraf” olarak sunmak.

### 5.4 ImageGen prompt şablonları

#### Dış cephe - masaüstü hero genişletme

```text
Use case: precise-object-edit
Asset type: architecture portfolio website hero, 16:9 landscape
Input images: Image 1: edit target, verified real project photograph
Primary request: extend the canvas laterally to create a natural wide website hero
Subject: the existing building in Image 1
Composition/framing: keep the building dominant and fully recognizable; add only peripheral sky, street and neighboring context needed for the wider crop
Lighting/mood: preserve the original daylight, shadows and camera character
Constraints: change only the outer canvas; preserve the exact building geometry, floor count, facade materials, windows, balconies, roofline, landscaping and camera perspective; no text; no logo; no watermark
Avoid: redesigning architecture, adding amenities, adding floors, replacing materials, cinematic fantasy lighting, fake signage
```

#### Dış cephe - mobil varyant

```text
Use case: precise-object-edit
Asset type: architecture portfolio website hero, 4:5 portrait
Input images: Image 1: edit target, verified real project photograph
Primary request: produce a portrait composition from the same photograph by extending only missing peripheral environment
Composition/framing: keep the complete primary facade visible and centered with safe space for a small UI label
Constraints: preserve the exact architecture and all visible building details; modify only the outer sky/street context required by the crop; no text; no logo; no watermark
Avoid: new floors, new balconies, new vegetation, new vehicles, changed facade colors, invented background buildings
```

#### İç mekân yayın temizliği

```text
Use case: precise-object-edit
Asset type: real project interior gallery image
Input images: Image 1: edit target, verified real interior photograph
Primary request: make a restrained web-ready editorial version by correcting only exposure, white balance and minor lens perspective
Constraints: preserve the exact room layout, cabinetry, stone, sanitary ware, lighting fixtures, doors, windows and finishes; remove nothing except presentation borders or labels if present; no styling additions; no text; no logo; no watermark
Avoid: virtual staging, new furniture, material replacement, room expansion, luxury embellishment, over-sharpening
```

Her üretilen varyant görsel incelemeye alınmalı. Mimari ayrıntıda sapma varsa o varyant reddedilip daha dar kapsamlı prompt ile yeniden üretilmeli.

### 5.5 Yayın etiketi ve şeffaflık

Veri modelinde her medya için şu alanlar tutulmalı:

```ts
type ProjectMedia = {
  src: string;
  alt: string;
  caption: string;
  kind: "photo" | "render" | "generated-edit";
  sourcePage: number;
  generatedFrom?: string;
};
```

- `photo`: sunumdan çıkarılan gerçek fotoğraf.
- `render`: sunumda render olarak etiketlenen görsel.
- `generated-edit`: gerçek fotoğraftan üretilen yayın varyantı; caption veya medya bilgisinde açıklanır.

## 6. Kod ve Veri Değişiklikleri

### Veri katmanı

- `src/lib/projects.ts`: yedi gerçek proje ve `ProjectMedia` modeli.
- `src/lib/hero-projects.ts`: gerçek proje hero varyantları.
- `src/lib/site.ts`: doğrulanmış unvan, iletişim, deneyim ve konum bilgileri.
- `src/lib/services.ts`: sunumdaki çalışma profiline göre içerik eşlemesi.
- `src/lib/districts.ts`: güncel hedef hizmet bölgeleri olan Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya korunur.
- `src/lib/projects.ts`: `district` bağımlılığı yerine geçmiş proje konumunu bağımsız taşıyan `location`/`locationSlug` alanı eklenir; Etiler ve Karaburun burada tutulur.
- Yeni `src/lib/technical-standards.ts`: şartname başlıkları ve maddeleri.

### Sayfa ve bileşenler

- `src/components/HeroCarousel.tsx`: “temsili” ibaresi yerine gerçek proje/medya türü.
- `src/components/home/ProjectsBoard.tsx`: `coverOverrides` ve stok/temsili görseller kaldırılır.
- `src/components/ProjectCard.tsx`: gerçek fotoğraf, render ve generated-edit etiketi.
- `src/components/Gallery.tsx`: medya türüne göre caption ve lightbox bilgisi.
- `src/app/projeler/page.tsx`: gerçek portföy filtreleri ve metadata.
- `src/app/projeler/[slug]/page.tsx`: sözleşme/iskan/süre künyesi; uydurma timeline kaldırılır.
- `src/app/hakkimizda/page.tsx`: sunumdaki kurumsal profil ve doğrulanmış sayaçlar.
- Yeni `src/app/teknik-standartlar/page.tsx`.
- `src/app/sitemap.ts`, JSON-LD ve Open Graph görselleri yeni rota/verilerle güncellenir.

Mevcut CC lisanslı stok fotoğraflar gerçek proje görselleriyle değiştirildikçe `public/photos/CREDITS.txt` temizlenir; sunum kaynaklı görseller için şirketin yayın hakkı ayrıca teyit edilir.

## 7. Uygulama Fazları

### Faz 0 - İçerik onayı ve yedekleme (0,5 gün)

- Beş hedef hizmet bölgesi ile geçmiş proje konumlarının veri modelinde ayrılması.
- Proje adları, Topaz durumu ve iletişim bilgilerinin onayı.
- PDF görsellerinin web yayın hakkının teyidi.
- Mevcut kullanıcı değişikliklerine dokunmadan çalışma ağacı baz çizgisinin kaydı.

### Faz 1 - Görsel çıkarım ve katalog (1 gün)

- PDF'den orijinal gömülü görselleri çıkar.
- CMYK kaynakları sRGB'ye dönüştür.
- Proje, oda ve medya türüne göre adlandır.
- Kaynak sayfa numarası ve hak bilgisini manifest dosyasına kaydet.
- Düşük çözünürlüklü/tekrarlı görselleri ele.

### Faz 2 - Veri ve içerik geçişi (1 gün)

- Gerçek proje şemasını uygula.
- Sunumdan doğrulanmayan açıklama, timeline ve sayıları kaldır.
- Teknik standart verisini oluştur.
- Metadata ve JSON-LD'yi yeni coğrafya/projelerle eşleştir.

### Faz 3 - Temel sayfalar (1,5-2 gün)

- Önce `/projeler` ve tek bir referans detay sayfası: `/projeler/proje-mercan`.
- Galeri ve medya türü etiketlerini doğrula.
- Ardından kalan altı proje sayfası, ana sayfa seçkisi, hakkımızda ve teknik standartlar.

### Faz 4 - ImageGen yayın varyantları (1-1,5 gün)

- Öncelik: ana hero için Terrace House/Hill Stone, proje liste hero'su için Mercan veya Kuvars.
- Her varlık için masaüstü ve mobil ayrı edit çağrısı.
- Her çıktıda mimari invariants kontrolü; sapmalı çıktılar kullanılmaz.
- Seçilen çıktılar workspace içindeki `public/media/projects/.../web/` klasörüne alınır.
- Kullanılan final prompt ve kaynak ilişkisi manifestte saklanır.

### Faz 5 - QA ve performans (1 gün)

- 390, 768, 1024 ve 1440 px ekran görüntüsü.
- Gerçek fotoğraf/render/generated-edit etiket kontrolü.
- Klavye ile galeri, focus, kontrast ve reduced-motion kontrolü.
- `next/image` `sizes`, LCP `priority`, aspect-ratio ve CLS kontrolü.
- AVIF/WebP kalite karşılaştırması; ana hero hedefi yaklaşık 250-450 KB.
- `npm run lint` ve `npm run build`.

Toplam tahmin: **6-7 iş günü**, içerik onayı ve ImageGen revizyon sayısına bağlı.

## 8. Kabul Kriterleri

1. Sitede “gerçek proje” olarak görünen her kayıt sunumdaki veya ayrıca sağlanan kaynakla doğrulanır.
2. Yedi referans projenin ad, bölge, alan ve tarih bilgileri kaynakla eşleşir; eksik bilgi uydurulmaz.
3. Render, gerçek fotoğraf ve üretken düzenleme birbirinden görünür biçimde ayrılır.
4. ImageGen çıktılarında bina geometrisi, kat sayısı, cephe ve malzeme değişmez.
5. Mevcut temsili proje görselleri gerçek portföy kartlarından kaldırılır.
6. Teknik şartname dokuz okunabilir grupta sunulur; mobilde uzun metin duvarı oluşmaz.
7. Telefon/adres gibi yer tutucular yayına çıkmaz.
8. Ana sayfanın LCP görseli masaüstü ve mobil için ayrı optimize edilir.
9. Proje galerisi klavye ve dokunmatik kullanımda erişilebilirdir.
10. Lint ve production build hatasız tamamlanır.

## 9. İlk Uygulama Dilimi

En güvenli ilk dilim:

1. Mercan, Ametist, Kuvars, Terrace House ve Hill Stone görsellerini PDF'den çıkar.
2. `proje-mercan` veri kaydını gerçek bilgilerle oluştur.
3. Mercan detay sayfasını gerçek dış cephe + iç mekân galerisiyle referans sayfa olarak bitir.
4. Mercan dış cephe fotoğrafından ImageGen ile yalnızca bir 16:9 hero varyantı üret ve mimari sapma kontrolü yap.
5. Referans sayfa onaylandıktan sonra şemayı diğer projelere uygula.

Bu sıra, tüm siteyi aynı anda değiştirmeden içerik doğruluğunu, görsel kaliteyi ve veri modelini erken aşamada doğrular.
