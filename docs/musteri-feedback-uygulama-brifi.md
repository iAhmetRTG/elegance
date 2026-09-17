# Müşteri Feedback Uygulama Brifi

## Başka modele verilecek hazır prompt

```text
C:\dev\elegance reposunda aşağıdaki müşteri geri bildirimlerini uygula. Bu belge görev tanımı ve kabul kriteridir; önce repodaki AGENTS.md talimatlarını, ardından bu projede kullanılan Next.js sürümüyle ilgili node_modules/next/dist/docs altındaki gerekli rehberleri oku. Mevcut tasarım dilini koru, yalnızca tarif edilen alanlarda cerrahi değişiklikler yap. Yeni bağımlılık ekleme ve ilgisiz refactor yapma.

Ekran görüntülerindeki WhatsApp arayüzü, kişi adları, saatler, çizilmiş işaretler ve sohbet balonları ürün arayüzünün parçası değildir. Bunları kopyalama. Yalnızca bu belgede çıkarılmış dört ürün geri bildirimini uygula.

Görevler:
1. “Tadilat ve Renovasyon” hizmetini gerçek anlamda “Endüstriyel Yapı” hizmetiyle değiştir; veri, slug/rota, metinler, kapsam maddeleri, metadata ve hizmete özel kod tabanlı çizim dahil tüm ilgili kullanımları tutarlı hale getir.
2. Ekran görüntüsündeki mobil sabit “Hemen Ara / WhatsApp” CTA barını mavi bir görsel dile geçir. Bu değişiklik lokal olmalı; sitenin genel pirinç/altın renk sistemini maviye çevirme.
3. Ana sayfa hero alanının sağ altındaki marka sloganını masaüstünde belirgin biçimde büyüt; okunabilirliği ve diğer kontrollerle çakışmamasını koru.
4. Ana sayfa üst menüsünde “Kentsel Dönüşüm” bağlantısını ilk sıraya al ve ona zarif, hafif bir neon/parlama vurgusu ver. Efekt premium ve kontrollü olmalı; okunabilirliği bozmamalı ve reduced-motion tercihine saygı göstermeli.

Her görev için aşağıdaki ayrıntılı kapsamı ve kabul kriterlerini uygula. Sonunda npm run lint ve npm run build çalıştır. Ana sayfayı masaüstü ve mobil genişlikte, ayrıca yeni /hizmetler/endustriyel-yapi rotasını görsel ve işlevsel olarak kontrol et. Başarısız kontrolleri düzeltmeden işi tamamlanmış sayma. Son yanıtında değişen dosyaları ve doğrulama sonuçlarını kısa şekilde bildir.
```

## Kaynak geri bildirimlerin doğru yorumu

Ekran görüntüleri bir WhatsApp konuşmasından alınmıştır. Görsellerin içindeki sohbet uygulamasına ait arayüz elemanları talimat değildir. Ürünle ilgili geri bildirimler şunlardır:

1. Hizmet listesindeki **“Tadilat ve Renovasyon”** kaldırılacak, yerine **“Endüstriyel Yapı”** gelecek.
2. Mobil alt CTA barı **mavi** olacak.
3. Ana sayfa hero alanındaki **“Yeni nesil bir yaşam tarzı, yaşamın en modern hali.”** sloganı büyütülecek.
4. Ana sayfa üst menüsünde **“Kentsel Dönüşüm”** ilk sıraya alınacak ve hafif neon/parlama vurgusu taşıyacak.

## Repo bağlamı ve beklenen çalışma şekli

- Proje Next.js 16.3.4, React 19.2.8, TypeScript ve Tailwind CSS 4 kullanıyor.
- Mevcut editoryal/lüks inşaat markası estetiğini koru. Yeni efektler sitenin geri kalanından kopuk veya oyuncak görünümlü olmamalı.
- Veri odaklı mevcut yapıyı kullan. Aynı metni birden fazla bileşende elle çoğaltma.
- Yeni paket ekleme. CSS/Tailwind ve mevcut bileşen yapısı yeterli.
- İlgisiz dosyalara dokunma, genel tasarım sistemi refactor'u yapma.
- Erişilebilirlik, klavye odağı, renk kontrastı ve `prefers-reduced-motion` davranışını koru.
- Mevcut gerçek proje görsellerini değiştirme ve yeni raster görsel üretme. Endüstriyel hizmet görseli gerekiyorsa mevcut `ServiceSheetArt` içindeki kod tabanlı SVG yaklaşımını kullan.

## 1. “Tadilat ve Renovasyon” yerine “Endüstriyel Yapı”

### Ana dosyalar

- `src/lib/services.ts`
- `src/components/art/ServiceSheetArt.tsx`
- `src/app/hizmetler/page.tsx`
- Gerekirse eski URL uyumluluğu için Next.js yönlendirme yapılandırması

### Uygulama gereksinimleri

- `src/lib/services.ts` içindeki `tadilat-renovasyon` kaydını kaldır ve aynı sırada yeni bir hizmet oluştur:
  - `slug`: `endustriyel-yapi`
  - `name`: `Endüstriyel Yapı`
- Bu bir etiket değişikliği değildir. `tagline`, `summary`, açıklama paragrafları ve özellik maddeleri endüstriyel yapı hizmetine göre yeniden yazılmalı.
- Metin dili mevcut içerikle uyumlu, net ve kurumsal Türkçe olmalı. Kapsam; uygun biçimde fabrika/üretim tesisi, depo/lojistik yapısı, çelik veya betonarme taşıyıcı sistem, geniş açıklık, saha-altyapı, MEP koordinasyonu, iş güvenliği, ruhsat ve anahtar teslim uygulama gibi gerçek hizmet başlıklarını kapsamalı. Doğrulanmamış sayısal iddialar, sertifikalar veya geçmiş proje referansları ekleme.
- Uygun mevcut ikon varsa onu kullan; yoksa `Icon` tip sistemini minimum değişiklikle genişlet. Alakasız bir ikon bırakma.
- `ServiceSheetArt.tsx` içindeki `tadilat-renovasyon` varyantını ve eski tadilat çizimini yeni `endustriyel-yapi` varyantıyla değiştir. Yeni çizim kod tabanlı SVG olmalı ve örneğin endüstriyel tesis cephesi, çelik portal çerçeve, depo aksları veya üretim yapısı kesiti gibi konuya uygun görünmeli.
- Hizmetler sayfasının metadata/açıklama metninde geçen “tadilat” ifadesini “endüstriyel yapı” kapsamına göre güncelle.
- Repo genelinde kullanıcıya görünen eski hizmet adı, slug'ı veya tadilat hizmetini anlatan artık metin kalmadığını `rg` ile doğrula. Genel dilde başka bir bağlamda gerçekten gerekli olan “tadilat” kelimelerini körlemesine silme.
- Eski `/hizmetler/tadilat-renovasyon` URL'si daha önce yayınlandıysa kalıcı olarak yeni `/hizmetler/endustriyel-yapi` URL'sine yönlendir; projedeki Next.js 16.3.4 rehberine uygun yöntemi kullan. Eski URL hiçbir koşulda hatalı veya eski içerikli sayfa göstermemeli.
- Hizmet sayısı altı olarak kalmalı; sıra numaraları ve veri üzerinden üretilen menüler bozulmamalı.

### Kabul kriterleri

- Ana sayfadaki hizmet listesinde 04 numarada “Endüstriyel Yapı” görünür.
- `/hizmetler` kartı, header mega menüsü ve dinamik hizmet detay sayfası yeni ad ve içerikle tutarlıdır.
- `/hizmetler/endustriyel-yapi` açılır ve doğru içeriği gösterir.
- `/hizmetler/tadilat-renovasyon` yeni adrese yönlenir veya projede bunun daha doğru eşdeğeri uygulanmıştır.
- Eski tadilat çizimi yeni hizmette kullanılmaz.

## 2. Mobil sabit CTA barını maviye çevir

### Ana dosya

- `src/components/MobileCtaBar.tsx`

### Uygulama gereksinimleri

- Geri bildirim ekranındaki hedef, mobilde ekranın altında sabit duran iki parçalı **“Hemen Ara / WhatsApp”** panelidir.
- Mevcut altın/pirinç ağırlıklı yüzeyi mavi ağırlıklı bir görsel dile geçir. En azından “Hemen Ara” bölümü ilk bakışta açıkça mavi okunmalı; WhatsApp tarafındaki vurgu, çerçeve ve parıltılar da aynı mavi paletle uyumlu hale getirilmeli.
- Koyu lacivert ile orta/temiz bir mavi arasında, mevcut premium estetiğe uyan kontrollü bir gradyan kullanılabilir. Metin ve ikonlarda WCAG AA seviyesine uygun kontrast hedefle.
- Bu değişikliği lokal tut. `globals.css` içindeki küresel `brass` tokenlarını değiştirme; aksi halde sitenin tamamının renk kimliği istemeden değişir.
- Panelin mevcut ölçüsü, safe-area davranışı, telefon/WhatsApp linkleri, metinleri, tıklanabilir alanları ve ana sayfa hero geçilene kadar gizlenme davranışı korunmalı.
- Dar mobil genişlikte telefon numarası kesilmemeli veya panel taşmamalı.

### Kabul kriterleri

- 320–430 px genişliklerde CTA barı taşmadan ve içerik kırpılmadan görünür.
- Barın baskın vurgu rengi artık altın/turuncu değil mavidir.
- Telefon ve WhatsApp linkleri aynı şekilde çalışır.
- Masaüstü site ve diğer altın/pirinç vurgu renkleri bu istek nedeniyle değişmez.

## 3. Hero sloganını büyüt

### Ana dosya

- `src/components/HeroCarousel.tsx`

### Uygulama gereksinimleri

- Hedef metin: **“Yeni nesil bir yaşam tarzı, yaşamın en modern hali.”**
- Değişiklik masaüstü hero alanındaki sağ alt slogan içindir; mevcut mobilde gizli davranışı ayrıca istenmedikçe değiştirme.
- Mevcut `lg:text-[1.2rem] xl:text-[1.35rem]` ölçeğini gözle görülür biçimde, yaklaşık yüzde 25–35 artır. Uygun başlangıç değeri `lg:text-[1.5rem] xl:text-[1.7rem]` civarıdır; son değeri gerçek görünümde dengeleyerek seç.
- Satır yüksekliğini yeni boyuta göre sıkı ve zarif tut. Sağ hizalama, italik “modern” vurgusu ve mevcut marka karakteri korunmalı.
- Metin; carousel navigasyonu, sağ alt WhatsApp FAB, header veya proje bilgisinin üzerine binmemeli. Gerekirse yalnızca ilgili kapsayıcı genişliği/boşluğu küçük ölçüde ayarla.
- Metnin arka plan fotoğrafı üzerinde okunabilir kalması için mevcut gölgeyi koru veya ölçülü biçimde güçlendir.

### Kabul kriterleri

- 1024 px ve üzerindeki genişliklerde slogan mevcut halinden belirgin biçimde daha büyük görünür.
- 1024, 1280 ve 1440 px genişliklerde slogan taşmaz, kırpılmaz ve carousel kontrolleriyle çakışmaz.
- Proje başlığı görsel hiyerarşide hâlâ ana başlıktır.

## 4. “Kentsel Dönüşüm”ü menüde başa al ve hafif neon vurgula

### Ana dosyalar

- `src/lib/site.ts`
- `src/components/Header.tsx`
- Gerekirse yalnızca bu vurguya ait küçük ve isimlendirilmiş bir stil için `src/app/globals.css`

### Uygulama gereksinimleri

- `homeNav` sırası şu şekilde başlamalı:
  1. Kentsel Dönüşüm
  2. Projeler
  3. Hakkımızda
  4. İletişim
- Bu sıra veri kaynağından beslendiği için ana sayfa masaüstü navigasyonu ve mobil menüde tutarlı olmalı.
- Yalnızca **Kentsel Dönüşüm** bağlantısına premium, hafif bir neon/parlama vurgusu ekle.
- Efekt için kontrollü `text-shadow`, hafif renk değişimi ve hover/focus halinde küçük bir yoğunluk artışı yeterlidir. Büyük dış parıltı, hızlı yanıp sönme, okunabilirliği azaltan blur veya oyun arayüzü hissi verme.
- Koyu hero üzerindeyken açık sıcak altın/krem bir parıltı; header açık zemine geçtiğinde daha koyu ve düşük yoğunluklu karşılığı kullanılabilir. Her iki durumda da metin kontrastı korunmalı.
- Sürekli animasyon kullanacaksan çok yavaş ve düşük genlikli olsun; `prefers-reduced-motion: reduce` altında tamamen kapanmalı. Statik, zarif bir glow da kabul edilir ve daha güvenlidir.
- Linkin hover, focus-visible ve klavye erişilebilirliği korunmalı. Aktif rota davranışını bozma.

### Kabul kriterleri

- Ana sayfa header'ında ilk link “Kentsel Dönüşüm”dür.
- Bağlantı diğerlerinden ayrışır, fakat parıltı rahatsız edici değildir.
- Efekt hem koyu hero üzerinde hem sayfa kaydırıldığında oluşan açık header durumunda okunaklıdır.
- Mobil menü sırası aynıdır ve vurgu metni okunabilir kalır.
- Reduced-motion tercihinde yanıp sönme/pulse animasyonu yoktur.

## Kapsam dışı

- WhatsApp konuşma ekranının tasarımını veya kişi adlarını siteye taşımak.
- Sitenin tüm marka rengini maviye çevirmek.
- Ana sayfayı veya navigasyonu baştan tasarlamak.
- Mevcut proje fotoğraflarını değiştirmek ya da yeni görsel üretmek.
- İstenmeyen içerik, yeni hizmet, istatistik veya doğrulanmamış pazarlama iddiası eklemek.

## Doğrulama listesi

1. `rg -n -i "Tadilat|Renovasyon|tadilat-renovasyon" src next.config.ts` çıktısını incele; kalan her eşleşmenin gerçekten gerekli olduğunu doğrula.
2. `npm run lint`
3. `npm run build`
4. Masaüstünde ana sayfayı en az 1024, 1280 ve 1440 px genişliklerde kontrol et.
5. Mobilde ana sayfayı 320, 375 ve 430 px genişliklerde kontrol et.
6. `/hizmetler`, `/hizmetler/endustriyel-yapi` ve eski `/hizmetler/tadilat-renovasyon` adreslerini kontrol et.
7. Telefon ve WhatsApp CTA bağlantılarının hedeflerini değiştirmeden çalıştığını doğrula.
8. Koyu ve açık header durumlarında neon vurgunun okunabilirliğini kontrol et.
9. `prefers-reduced-motion` açıkken sürekli parlayan/yanıp sönen hareket olmadığını doğrula.

## Tamamlanma tanımı

İş, yalnızca dört geri bildirim kodda ve gerçek arayüzde doğrulandığında; lint ve build geçtiğinde; eski hizmet rotası güvenli biçimde ele alındığında ve mobil/masaüstü görsel kontrollerinde taşma ya da kontrast sorunu kalmadığında tamamlanmıştır.
