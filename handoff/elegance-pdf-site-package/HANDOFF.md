# Uygulama Talimatı

## Hedef

Mevcut Elegance Next.js sitesini, şirket sunumundaki gerçek geçmiş projeler ve doğrulanabilir kurumsal/teknik içerikle güncelle. Mevcut görsel tasarım dilini koru; bu iş bir sıfırdan site tasarımı değildir.

## Önce oku

- Repo kökündeki `AGENTS.md`
- Bu klasördeki `START_HERE.md`
- `CONTENT_INVENTORY.md`
- `ASSET_MANIFEST.json`
- `IMAGEGEN_LOG.md`

Next.js koduna dokunmadan önce repo talimatında belirtildiği üzere kurulu Next.js sürümünün ilgili `node_modules/next/dist/docs/` rehberini oku.

## Temel içerik modeli

İki farklı coğrafya kavramını ayır:

1. `serviceAreas`: Bakırköy, Yeşilköy, Ataköy, Yeşilyurt, Florya.
2. `projectLocation`: geçmiş projenin gerçek yeri; Etiler veya Karaburun.

Bir proje konumunu hizmet bölgesi listesine otomatik ekleme. Hizmet bölgelerini geçmiş proje konumlarıyla değiştirme.

## Varlıkların projeye alınması

Bu paketteki uygulama varlıklarını örneğin şu hedefe kopyala:

```text
public/media/elegance-projects/
  enhanced/
  originals/
```

- `assets/imagegen-enhanced/**/*.webp` -> `enhanced/`
- `assets/web-original/**/*.webp` -> `originals/<project>/`
- PNG kaynaklarını `public` altına kopyalama; yalnızca gerekirse yeniden işleme için pakette bırak.
- `assets/source` ve `review` uygulama varlığı değildir.

## Faz 1 - Veri modelini gerçek portföye geçir

Öncelikli dosya: `src/lib/projects.ts`.

Mevcut doğrulanmamış/temsili altı projeyi, `CONTENT_INVENTORY.md` içindeki yedi geçmiş proje kaydıyla değiştir:

- Proje Çiçek
- Proje Mercan
- Proje Ametist
- Proje Kuvars
- Proje Topaz
- Terrace House
- Hill Stone

Önerilen minimum model:

```ts
type ProjectMedia = {
  src: string;
  alt: string;
  caption: string;
  kind: "photo" | "render" | "enhanced-photo";
  sourcePage: number;
  sourceAsset?: string;
};

type Project = {
  slug: string;
  name: string;
  buildingName?: string;
  location: "Etiler" | "Karaburun";
  city: "İstanbul" | "İzmir";
  contractYear: string;
  occupancyYear: string;
  duration: string;
  area?: string;
  status?: string;
  cover?: string;
  mobileCover?: string;
  media: ProjectMedia[];
};
```

- PDF'de olmayan daire sayısı, özellik, timeline, yapı yöntemi veya proje hikâyesi üretme.
- Alan belirtilmeyen projelerde alanı gizle.
- Proje Çiçek için kesin eşleşen tekil görsel olmadığı için tipografik/görselsiz kart kullan.
- Proje Topaz durumunu teyit edilmiş gibi gösterme; tabloda iskan 2021, görsel sayfasında `Devam Ediyor` çelişkisi var.

## Faz 2 - Ana sayfa hero

Öncelikli dosyalar:

- `src/lib/hero-projects.ts`
- `src/components/HeroCarousel.tsx`

Carousel sırası ve dosyaları:

| Sıra | Slayt | Desktop | Mobile | Link |
| --- | --- | --- | --- | --- |
| 01 | Proje Ametist / Etiler | `proje-ametist--hero-enhanced.webp` | `proje-ametist--hero-mobile-enhanced.webp` | `/projeler/proje-ametist` |
| 02 | Proje Mercan / Etiler | `proje-mercan--hero-enhanced.webp` | `proje-mercan--hero-mobile-enhanced.webp` | `/projeler/proje-mercan` |
| 03 | Terrace House / Karaburun | `terrace-house--hero-enhanced.webp` | `terrace-house--hero-mobile-enhanced.webp` | `/projeler/terrace-house` |

- Bunlar hayali hizmet bölgesi görselleri değil; gerçek PDF fotoğraflarından hazırlanmış yayın varyantlarıdır.
- Slayt künyesinde gerçek proje adı ve konumu göster.
- Ana hero metninde Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya hizmet vaadi korunabilir.
- “Bakırköy projesi” gibi yanlış bir görsel/proje eşlemesi yapma.
- HTML metni görsel içine gömme.
- Mevcut responsive `<picture>`/Next Image davranışını ve LCP önceliğini koru.

## Faz 3 - Proje liste ve detay sayfaları

Öncelikli dosyalar:

- `src/app/projeler/page.tsx`
- `src/app/projeler/[slug]/page.tsx`
- `src/components/ProjectCard.tsx`
- `src/components/Gallery.tsx`

Liste:

- Yedi gerçek kayıt.
- Filtreler: Tümü, Etiler, Karaburun. Durum filtresi Topaz teyidinden sonra eklenebilir.
- Kart: proje adı, konum, alan varsa alan, sözleşme/iskan yılları, süre.
- `photo`, `render` ve `enhanced-photo` ayrımını veri modelinde koru.

Detay:

- Hero'da varsa ilgili `enhanced-photo` kullan.
- Galeride tüm gerçek `web-original` görselleri kullan.
- Render için görünür `Mimari render` etiketi.
- Gerçek fotoğraf için `Proje fotoğrafı`; iyileştirilmiş hero için iç metadata'da `enhanced-photo`.
- Topaz için `Şantiye / uygulama aşaması`; tamamlanmış proje gibi gösterme.
- Proje Çiçek sayfasında görsel yoksa SVG/uydurma yapı üretme; tipografik kapak kullan.
- Mevcut uydurma timeline ve önce/sonra içeriklerini kaldır.

Önerilen slug'lar:

- `proje-cicek`
- `proje-mercan`
- `proje-ametist`
- `proje-kuvars`
- `proje-topaz`
- `terrace-house`
- `hill-stone`

## Faz 4 - Teknik standartlar

Yeni rota: `src/app/teknik-standartlar/page.tsx`.

`CONTENT_INVENTORY.md` bölüm 6'daki tüm maddeleri aktar:

- Genel yapı
- Kapı ve pencereler
- Antre ve hol
- Salon ve odalar
- Banyo ve WC
- Mutfak
- Mekanik ve elektrik tesisatı
- Ortak alanlar ve peyzaj

Sunum metnini dev paragraf olarak basma. Masaüstünde içerik navigasyonu, mobilde erişilebilir accordion veya açık başlık grupları kullan. Marka adlarını ikincil seviyede göster; teknik performans anlatımını öne çıkar.

Bu rotayı ana menüye zorunlu olarak yeni bir ana madde eklemek yerine Hizmetler veya footer altında `Teknik Standartlar` bağlantısıyla erişilebilir yap.

## Faz 5 - Hakkımızda ve ana sayfa içerikleri

Öncelikli dosyalar:

- `src/app/hakkimizda/page.tsx`
- `src/app/page.tsx`
- `src/lib/site.ts`

- `CONTENT_INVENTORY.md` bölüm 3'teki kurumsal profili kullan.
- Toplu konut/rezidans, oteller, endüstriyel tesisler, ticaret/yönetim binalarını çalışma profili olarak ekle.
- `150+`, `900+` gibi sunumla doğrulanmayan sayaçları kaldır veya içerik sahibinin doğrulamasına kadar gizle.
- “Çeyrek asır” ifadesini kuruluş yılına dönüştürme.
- Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya hizmet bölgesi içeriğini koru.
- PDF projelerini bu bölgelerde yapılmış gibi göstermeden geçmiş iş kanıtı olarak kullan.

## Faz 6 - Metadata ve iç bağlantılar

- Proje metadata, canonical URL, Open Graph ve JSON-LD yeni gerçek proje isimleri/konumlarıyla güncellensin.
- `src/app/sitemap.ts` yeni proje slug'larını ve `/teknik-standartlar` rotasını içersin.
- Eski sahte/temsili proje slug'larına gerekiyorsa kalıcı yönlendirme ekle; rastgele eşleme yapma.
- Görsel alt metinleri gerçek proje adı + görünüm türüyle yaz.

## Kullanılmaması gereken varlık

`public/photos/hero/editorial-2026` önceki yanlış yorumdan üretilmiş hayali/temsili bina paketidir. Bu uygulamada hiçbir yerde kullanma.

## Görsel ve içerik doğruluğu kuralları

- Enhanced görseli yalnızca kendi kaynak projesinde kullan.
- Bir görseldeki bina başka proje adıyla gösterilemez.
- Render fotoğraf gibi etiketlenemez.
- Şantiye fotoğrafı bitmiş proje gibi gösterilemez.
- Kaynak PDF'de bulunmayan bilgi yazılamaz.
- İletişim alanlarında gerçek bilgi sağlanmadıysa yeni numara/adres üretme.

## QA

- 390, 768, 1024 ve 1440 px kontrolleri.
- Mobile hero gerçekten mobile WebP indirmeli.
- Galeri klavye, Escape, ok tuşları ve focus davranışı korunmalı.
- `prefers-reduced-motion` davranışı korunmalı.
- Görsellerde varsayılan sepia/ağır filtre olmamalı.
- Hero `sizes`, `priority`, aspect ratio ve CLS kontrolü.
- `npm run lint`.
- `npm run build`.

## Bitiş raporu

Uygulama sonunda şunları raporla:

- Değişen dosyalar
- Eklenen proje ve rotalar
- Kullanılan enhanced/original görsel sayısı
- Bilinçli olarak gösterilmeyen teyitsiz bilgiler
- Lint/build sonucu
- 390 ve 1440 px görsel QA sonucu

