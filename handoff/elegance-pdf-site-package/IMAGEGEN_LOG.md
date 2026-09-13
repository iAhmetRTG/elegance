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

## Mobile çıktıları

| Çıktı | Kaynak |
| --- | --- |
| `assets/imagegen-enhanced/mobile/proje-ametist--hero-mobile-enhanced.webp` | Ametist desktop enhanced PNG |
| `assets/imagegen-enhanced/mobile/proje-mercan--hero-mobile-enhanced.webp` | Mercan desktop enhanced PNG |
| `assets/imagegen-enhanced/mobile/terrace-house--hero-mobile-enhanced.webp` | Terrace House desktop enhanced PNG |

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

## Yayın sınıflandırması

- Bu çıktılar `enhanced-photo` olarak veri modelinde izlenmelidir.
- Kaynağı gerçek proje fotoğrafıdır; sıfırdan üretilmiş temsili bina değildir.
- Render kaynaklarından ImageGen hero üretilmedi.
- Topaz çıktısı şantiye fotoğrafıdır ve bu şekilde kalmalıdır.
- Kaynakla karşılaştırma için `review/` contact sheet'leri ve `assets/source/` dosyaları pakette tutulmuştur.

