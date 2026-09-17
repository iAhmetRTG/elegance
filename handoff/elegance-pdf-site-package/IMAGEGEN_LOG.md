# ImageGen Üretim ve Kaynak Kaydı

## Yöntem

- Araç: built-in ImageGen
- İşlem türü: `precise-object-edit`
- Amaç: PDF'den çıkarılan gerçek proje fotoğraflarını web hero kullanımına hazırlamak
- Temel kural: yapı geometrisi, kat sayısı, cephe, pencere, balkon, çatı ve malzeme değişmeyecek
- İzin verilen işlemler: çevresel genişletme, yayın kadrajı, hafif perspektif düzeltme, pozlama, beyaz ayarı, renk ve highlight düzenlemesi
- PNG: yüksek kaliteli ImageGen çıktısı
- WebP: uygulamada kullanılacak optimize sürüm

## Desktop çıktıları

| Çıktı | Kaynak |
| --- | --- |
| `assets/imagegen-enhanced/desktop/proje-ametist--hero-enhanced.webp` | `assets/source/proje-ametist/proje-ametist--facade-03--p16.png` |
| `assets/imagegen-enhanced/desktop/proje-kuvars--hero-enhanced.webp` | `assets/source/proje-kuvars/proje-kuvars--facade-02--p17.png` |
| `assets/imagegen-enhanced/desktop/proje-mercan--hero-enhanced.webp` | `assets/source/proje-mercan/proje-mercan--facade-02--p18.png` |
| `assets/imagegen-enhanced/desktop/proje-topaz--hero-enhanced.webp` | `assets/source/proje-topaz/proje-topaz--construction-02--p19.png` |
| `assets/imagegen-enhanced/desktop/terrace-house--hero-enhanced.webp` | `assets/source/terrace-house/terrace-house--photo-02--p21.png` |
| `assets/imagegen-enhanced/desktop/hill-stone--hero-enhanced.webp` | `assets/source/hill-stone/hill-stone--photo-01--p23.png` |
| `assets/imagegen-enhanced/desktop/proje-kuvars--hero-facade-enhanced.webp` | `assets/source/proje-kuvars/proje-kuvars--facade-03--client-2026.jpg` (2026 revizyonu) |

## Mobile çıktıları

| Çıktı | Kaynak |
| --- | --- |
| `assets/imagegen-enhanced/mobile/proje-ametist--hero-mobile-enhanced.webp` | Ametist desktop enhanced PNG |
| `assets/imagegen-enhanced/mobile/proje-mercan--hero-mobile-enhanced.webp` | Mercan desktop enhanced PNG |
| `assets/imagegen-enhanced/mobile/terrace-house--hero-mobile-enhanced.webp` | Terrace House desktop enhanced PNG |
| `assets/imagegen-enhanced/mobile/proje-kuvars--hero-facade-mobile-enhanced.webp` | Kuvars cephe desktop enhanced PNG (2026 revizyonu) |

## Ortak desktop prompt çerçevesi

```text
Use case: precise-object-edit
Asset type: real completed-project website hero, wide landscape
Input images: Image 1: edit target, verified project photograph extracted from the company PDF
Primary request: create a restrained professional architectural-photography presentation of this exact building by improving only framing, vertical perspective, exposure, white balance and peripheral canvas
Composition/framing: wide landscape suitable for a website project hero; retain the same viewpoint and show the complete primary structure; extend only peripheral sky, street, lawn or neighboring context where required
Lighting/mood: natural daylight with realistic dynamic range; correct strong cyan/green casts without cinematic relighting
Constraints: preserve the exact building identity, massing, floor count, roof, windows, balconies, railings, facade colors and materials, entrance, installed elements, landscaping and all architectural proportions; no redesign; no new architectural elements; no text; no logo; no watermark
Avoid: changing camera side, inventing windows or balconies, changing materials, adding amenities, luxury staging, dramatic sunset, obvious CGI
```

Proje özelinde promptta ayrıca şu değişmezler tekrarlandı:

- Ametist: cornices, shutters, garage opening.
- Kuvars: long facade, window rhythm, dark panels, enclosed/open balconies, garden-level doors.
- Mercan: roof canopy, dark-gray facade, terracotta bands, glass balconies and installed facade elements.
- Topaz: scaffolding, unfinished surfaces and construction state; only readable third-party phone signage neutralized.
- Terrace House: villa count/layout, roofs, terraces, railings, lawns, paths, neighboring buildings and hill.
- Hill Stone: stone wall, timber sections, pergola, pool geometry, lawn and all landscaping.

## Ortak mobile prompt çerçevesi

```text
Use case: precise-object-edit
Asset type: mobile homepage hero, portrait 4:5
Input images: Image 1: edit target, approved enhanced photograph of the real project
Primary request: recompose this exact photograph for a portrait mobile hero by changing only the outer framing and peripheral canvas
Composition/framing: keep the complete primary building or development readable; preserve the same viewpoint; retain modest sky and ground context for HTML overlay
Constraints: preserve the exact identity, geometry, floor count, roofs, facade divisions, windows, balconies, railings, materials, landscaping and proportions; extend only peripheral environment; no redesign; no additions/removals; no text; no logo; no watermark
Avoid: adding floors, balconies, windows, amenities or buildings; changing materials; cinematic relighting; obvious CGI
```

## 2026 revizyonu — Proje Kuvars cephe fotoğrafı

Kuvars'ın ana sayfa hero görseli, müşteri tarafından sağlanan yeni bir cephe
fotoğrafıyla değiştirildi. Eski `proje-kuvars--hero-enhanced.webp` (üç çeyrek
açı) dosyası silinmedi; proje kartı ve detay sayfası kapağı onu kullanmaya
devam eder.

- Kaynak: `assets/source/proje-kuvars/proje-kuvars--facade-03--client-2026.jpg`
  (1600×1066, müşteri çekimi; PDF paketinden değil)
- Desktop çıktısı: `assets/imagegen-enhanced/desktop/proje-kuvars--hero-facade-enhanced.webp` (1672×941, 16:9)
- Mobile çıktısı: `assets/imagegen-enhanced/mobile/proje-kuvars--hero-facade-mobile-enhanced.webp` (1122×1402, 4:5)
- Uygulama yolu: `public/media/elegance-projects/enhanced/`

İstenen düzeltmeler ve değişmezler:

- Kamera açısı, bakış noktası ve bina kimliği birebir korunur; kat sayısı,
  saçak, pencere ritmi, koyu düşey paneller, balkonlar, bahçe katı ve çit
  çizgisi değişmez.
- Kadraja müdahale yalnızca kamera kalitesini düzeltmekle sınırlıdır:
  pozlama, beyaz ayarı, netlik, düşey perspektif doğrultusu ve gökyüzü
  rengi iyileştirilir.
- Kaldırılan öğeler: cephedeki `SATILIK / OTURMAYA HAZIR DAİRELER` tabelası
  (üçüncü taraf ilan ve telefon numarası) ve sağ taraftaki büyük ağaç ile
  kuru dallar.
- Yasaklar: açı/bakış değişikliği, kat-pencere-balkon ekleme ya da çıkarma,
  malzeme değişimi, render/CGI görünümü, HDR halesi, aşırı doygunluk, yeni
  insan, araç veya bina ekleme, metin/logo/filigran.

```text
Use case: precise-object-edit
Asset type: real completed-project website hero, wide landscape (homepage project carousel slide)
Input images: Image 1: edit target — real photograph of Proje Kuvars, straight-on facade view
Primary request: turn this casually shot phone snapshot into a professionally photographed architectural hero of the exact same building, keeping the identical camera angle, viewpoint and distance
Constraints: preserve the exact building identity (storey count, roof form, window rhythm, dark vertical panels, balconies, garden level, fence line, proportions); remove only the facade SATILIK banner and the tree plus leafless branches on the right; keep the neighbouring building at the far left edge; tidy, well-maintained ground; no text, no logos, no watermarks
Avoid: changing the camera angle or building side; adding or removing floors, windows or balconies; changing materials; CGI look; HDR halos; oversaturation; added people, cars or furniture
```

```text
Use case: precise-object-edit
Asset type: mobile homepage hero, portrait 4:5
Input images: Image 1: edit target — approved enhanced Kuvars facade photograph
Primary request: recompose this exact photograph for a portrait mobile hero by changing only the outer framing and peripheral canvas
Composition/framing: keep the full building readable from roofline to garden level; extend only sky above and ground below; keep the lower third calm for overlaid white text
Constraints: preserve identity, geometry, storey count, roofline, facade divisions, window rhythm, balconies, materials and landscaping; extend only peripheral environment; no text, no logo, no watermark
Avoid: adding floors, windows, balconies or buildings; changing materials; cinematic relighting; CGI look; added people, cars or furniture
```

## Yayın sınıflandırması

- Bu çıktılar `enhanced-photo` olarak veri modelinde izlenmelidir.
- Kaynağı gerçek proje fotoğrafıdır; sıfırdan üretilmiş temsili bina değildir.
- Render kaynaklarından ImageGen hero üretilmedi.
- Topaz çıktısı şantiye fotoğrafıdır ve bu şekilde kalmalıdır.
- Kaynakla karşılaştırma için `review/` contact sheet'leri ve `assets/source/` dosyaları pakette tutulmuştur.
