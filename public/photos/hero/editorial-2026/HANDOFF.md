# Elegance Görsel Paketi - Uygulama Handoff

## Amaç

Bu klasör ana sayfanın üst bölümü ve hizmet bölgesi kartları için hazırlanmış temsili mimari görselleri içerir. Görseller üretken yapay zekâ ile oluşturulmuştur; geçmişte tamamlanmış gerçek Elegance projeleri olarak sunulamaz.

## İşletme ve portföy ayrımı

- Hedef hizmet bölgeleri korunacak: **Bakırköy, Yeşilköy, Ataköy, Yeşilyurt, Florya**.
- Şirket sunumundaki Etiler ve Karaburun yapıları geçmiş proje/referans portföyüdür.
- Hedef bölge metinlerini Etiler/Karaburun ile değiştirme.
- Etiler/Karaburun proje kayıtlarını “geçmiş projeler” bölümünde gerçek sunum fotoğraflarıyla kullan.
- Bu klasördeki görsellerin tamamını “temsili mimari görsel” olarak etiketle.
- Ayrıntılı içerik ve geçmiş proje planı: `docs/sunum-site-entegrasyon-plani.md`.

## Kullanılacak dosyalar

Uygulamada `.webp` dosyalarını kullan. `.png` dosyaları yüksek kaliteli kaynak/yeniden kırpma sürümüdür.

### Ana sayfa hero carousel

| Sıra | Bölge | Desktop | Mobile | Önerilen tür |
| --- | --- | --- | --- | --- |
| 01 | Bakırköy | `/photos/hero/editorial-2026/desktop/bakirkoy-urban-renewal.webp` | `/photos/hero/editorial-2026/mobile/bakirkoy-urban-renewal-mobile.webp` | Kentsel dönüşüm |
| 02 | Yeşilköy | `/photos/hero/editorial-2026/desktop/yesilkoy-residential.webp` | `/photos/hero/editorial-2026/mobile/yesilkoy-residential-mobile.webp` | Nitelikli konut |
| 03 | Ataköy | `/photos/hero/editorial-2026/desktop/atakoy-residential.webp` | `/photos/hero/editorial-2026/mobile/atakoy-residential-mobile.webp` | Konut / kat karşılığı |

Alt metinler:

- `Bakırköy hizmet bölgesi için temsili çağdaş kentsel dönüşüm yapısı`
- `Yeşilköy hizmet bölgesi için temsili nitelikli konut yapısı`
- `Ataköy hizmet bölgesi için temsili çağdaş konut projesi`

Görünür küçük etiket: `Temsili mimari görsel`.

### Bölge kartları

| Bölge | Dosya | Kullanım |
| --- | --- | --- |
| Yeşilyurt | `/photos/hero/editorial-2026/regions/yesilyurt-family-residential.webp` | `/bolgeler`, bölge kartı veya ana sayfa bölge seçkisi |
| Florya | `/photos/hero/editorial-2026/regions/florya-boutique-villa.webp` | `/bolgeler`, bölge kartı veya ana sayfa bölge seçkisi |

Alt metinler:

- `Yeşilyurt hizmet bölgesi için temsili aile konutu`
- `Florya hizmet bölgesi için temsili butik villa yapısı`

## Uygulama kapsamı

### 1. Mevcut hero verisini değiştir

Dosya: `src/lib/hero-projects.ts`

- Mevcut üç desktop/mobile görsel yolunu yukarıdaki WebP dosyalarıyla değiştir.
- Sıralamayı Bakırköy, Yeşilköy, Ataköy yap.
- Mevcut `HeroProject` tipini ve responsive görsel davranışını koru.
- Her kaydın `alt` değerinde “temsili” kelimesi bulunmalı.
- `href` gerçek proje detayına gidiyormuş gibi davranmamalı. Uygun bölge sayfasına yönlendir:
  - Bakırköy: `/bolgeler/bakirkoy`
  - Yeşilköy: `/bolgeler/yesilkoy`
  - Ataköy: `/bolgeler/atakoy`

### 2. Hero etiketini koru

Dosya: `src/components/HeroCarousel.tsx`

- Görsel üzerinde veya görsel bilgisinde `Temsili mimari görsel` etiketi kalmalı.
- Görsellerin içine metin bindirme; tüm başlık, CTA ve bölge bilgisi HTML olarak kalmalı.
- Desktop ve mobile için ayrı kaynakları mevcut mekanizma üzerinden kullan.
- Yeni slider kütüphanesi ekleme.

### 3. Yeşilyurt ve Florya kartlarını bağla

Öncelikli dosyalar:

- `src/lib/districts.ts`
- `src/app/bolgeler/page.tsx`
- mevcut tasarıma göre gerekirse `src/components/home/DistrictAtlas.tsx`

- Veri modelinde bölge görsel alanı zaten varsa yalnızca yolu güncelle.
- Yoksa minimum alan ekle: `image?: string` ve `imageAlt?: string`.
- Harita/atlas tasarımını kaldırma; görselleri büyük yeni bir bölüm açmadan kart veya hover/focus önizlemesi olarak kullan.
- Bakırköy, Yeşilköy ve Ataköy bölge kartları gerekiyorsa hero dosyalarının desktop sürümlerini yeniden kullan.

### 4. Sunumdaki geçmiş projeleri ayrı tut

- Bu görselleri Proje Mercan, Ametist, Kuvars, Topaz, Terrace House veya Hill Stone kapakları olarak kullanma.
- Geçmiş projeler için PDF'den çıkarılan gerçek fotoğraflar kullanılmalı.
- Sunumdaki render'lar açıkça `Mimari render`, tamamlanmış fotoğraflar `Tamamlanmış proje` olarak etiketlenmeli.
- Veri ve içerik tablosu `docs/sunum-site-entegrasyon-plani.md` içinde hazırdır.

## Görsel davranış

- Desktop hero kaynak oranı yaklaşık 16:9, `object-fit: cover`.
- Mobile kaynak oranı 4:5; bina cephesini kaybetmemek için desktop görseli mobilde kullanma.
- Ana hero LCP görseli `priority`/preload davranışını korumalı.
- Yeni ağır JS, slider veya animasyon bağımlılığı ekleme.
- Ekstra sepia filtresi kullanma; renkler zaten marka diline uyumlu.
- Sol taraftaki ağaç/gölge alanı açık renk hero metni için tasarlandı.
- Görselin okunurluğu gerekiyorsa tek, hafif soldan sağa koyu gradient kullan; ağır renk filtresi ekleme.

## Değiştirilmemesi gerekenler

- İşletmenin hedef hizmet bölgesi anlatısı.
- Mevcut Fraunces + Archivo tipografi sistemi.
- Header, CTA, galeri erişilebilirliği ve reduced-motion davranışı.
- Kullanıcının çalışma ağacındaki diğer değişiklikler.
- Görsellerin mimarisini tekrar üretme veya yeniden tasarlama.

## Kabul kriterleri

1. Hero'da Bakırköy, Yeşilköy ve Ataköy için yeni desktop/mobile çiftleri kullanılır.
2. 390 px görünümde desktop dosyası indirilmez ve bina kadraj dışında kalmaz.
3. Tüm üretilmiş görseller `Temsili mimari görsel` olarak tanımlanır.
4. Hero bağlantıları sahte proje detaylarına değil ilgili bölge sayfalarına gider.
5. Yeşilyurt ve Florya görselleri bölge seçkisinde kullanılır.
6. Hedef hizmet bölgeleri ile geçmiş proje bölgeleri birbirine karıştırılmaz.
7. Varsayılan sepia veya ağır renk filtresi uygulanmaz.
8. `npm run lint` ve `npm run build` başarılı olur.
9. 390 px ve 1440 px ekran görüntüleri alınarak hero metni, CTA ve kadraj kontrol edilir.

## Modele verilecek kısa görev

> `public/photos/hero/editorial-2026/HANDOFF.md` talimatlarını uygula. Yalnızca belirtilen görselleri mevcut hero ve bölge verisine bağla; siteyi yeniden tasarlama. Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya hedef hizmet bölgeleridir. Sunumdaki Etiler/Karaburun projeleri ayrı geçmiş portföydür. Üretilmiş görselleri gerçek proje fotoğrafı gibi gösterme. Kullanıcının mevcut değişikliklerini koru. Sonunda lint/build çalıştır ve 390/1440 px hero ekran görüntülerini kontrol et.

