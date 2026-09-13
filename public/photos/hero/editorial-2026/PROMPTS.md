# ImageGen Üretim Kaydı

## Üretim yöntemi

- Mod: built-in ImageGen
- Kullanım amacı: siteye bağlı üretim varlıkları
- Görsel sınıfı: `photorealistic-natural`
- Görseller: temsili hizmet bölgesi mimarisi; gerçek geçmiş proje fotoğrafı değildir
- Final uygulama formatı: WebP
- PNG dosyaları: yüksek kaliteli kaynak

## Desktop hero promptları

### Bakırköy

```text
Use case: photorealistic-natural
Asset type: Elegance construction company homepage hero, desktop landscape
Primary request: a highly realistic editorial architectural photograph representing a newly completed urban residential building in Bakirkoy, Istanbul
Scene/backdrop: a believable quiet Bakirkoy side street with mature street trees and restrained surrounding Istanbul apartment fabric
Subject: one refined contemporary mid-rise apartment building, approximately six floors, designed as a credible urban renewal project
Style/medium: photorealistic professional architecture photography, natural real-world detail, not a CGI render
Composition/framing: wide 16:9 cinematic landscape; building placed center-right; calm darker negative space on the left for white website headline and buttons; full facade and street-level entrance visible
Lighting/mood: warm late-afternoon daylight, elegant and trustworthy, realistic shadows
Color palette: warm limestone, charcoal metal, dark bronze details, muted greenery, natural sky
Materials/textures: believable stone, plaster, glass, metal railings, mature plants, slightly imperfect real street surfaces
Constraints: representative service-area visual only; no text; no logos; no watermark; no readable signs; no construction company branding; clean usable hero composition
Avoid: futuristic architecture, impossible cantilevers, excessive luxury, towers, skyline landmarks, fantasy landscaping, duplicated windows, warped cars, oversaturated colors, obvious CGI
```

### Yeşilköy

```text
Use case: photorealistic-natural
Asset type: Elegance construction company homepage hero, desktop landscape
Primary request: a highly realistic editorial architectural photograph representing a premium low-rise residential project in Yesilkoy, Istanbul
Scene/backdrop: a leafy low-density Yesilkoy neighborhood with mature trees and subtle coastal light, no visible landmark
Subject: one elegant five-storey residential building with generous balconies, family-oriented scale and a carefully landscaped entrance
Style/medium: photorealistic professional architecture photography, natural real-world detail, not a CGI render
Composition/framing: wide 16:9 landscape; building center-right; calm shaded negative space on the left for website headline and buttons; facade, entrance and landscaping clearly visible
Lighting/mood: soft golden-hour coastal daylight, serene, established and trustworthy
Color palette: light warm stone, off-white plaster, natural oak accents, dark window frames, restrained green planting
Materials/textures: realistic stone grain, glass reflections, wood, brushed metal and mature vegetation
Constraints: representative service-area visual only; no text; no logos; no watermark; no readable signs; no branded vehicles; architecture must be believable for Istanbul
Avoid: resort hotel look, Mediterranean villa, skyscrapers, sea view, iconic landmarks, impossible geometry, excessive plants on balconies, obvious CGI, glossy fantasy surfaces
```

### Ataköy

```text
Use case: photorealistic-natural
Asset type: Elegance construction company homepage hero, desktop landscape
Primary request: a highly realistic editorial architectural photograph representing a contemporary residential development in Atakoy, Istanbul
Scene/backdrop: a planned green Atakoy residential boulevard with broad setbacks, mature trees and restrained neighboring blocks
Subject: a sophisticated mid-rise apartment complex with strong horizontal balcony lines, generous glazing and landscaped common frontage
Style/medium: photorealistic professional architecture photography, natural lived-in detail, not a CGI render
Composition/framing: wide 16:9 landscape; main architecture center-right; quieter darker foreground and tree canopy on the left for website headline and buttons; street and main entrance visible
Lighting/mood: clear early-evening sunlight, calm confidence, realistic shadows and reflections
Color palette: pale mineral facade, warm beige stone, dark bronze frames, deep green landscape, subtle blue sky
Materials/textures: believable concrete, limestone, glass, metal, paving and mature trees
Constraints: representative service-area visual only; no text; no logos; no watermark; no readable signs; no branded cars; clean premium but credible Istanbul housing
Avoid: giant luxury towers, shopping mall aesthetic, futuristic shapes, marina or sea landmark, impossible balconies, repeated facade artifacts, oversaturation, obvious CGI
```

## Mobile varyant yöntemi

Her mobile görsel ilgili desktop PNG kullanılarak ayrı `precise-object-edit` çağrısıyla üretildi. Ortak kurallar:

```text
Use case: precise-object-edit
Asset type: Elegance construction company homepage hero, mobile portrait 4:5
Input images: Image 1: edit target, approved representative desktop hero
Primary request: recompose this exact scene as a portrait mobile hero while preserving the same building identity and photographic character
Composition/framing: 4:5 portrait; keep the main facade and entrance visible; retain tree canopy and street depth; allow a darker upper-left area for compact white UI copy
Constraints: preserve the exact architecture, floor count, facade materials, balconies, windows, roofline, landscaping, lighting and color; extend only peripheral sky, foliage or street as required; no text; no logo; no watermark
Avoid: redesigning the building, adding floors or amenities, new signs, fantasy lighting, obvious CGI
```

## Bölge kartı promptları

### Yeşilyurt

```text
Use case: photorealistic-natural
Asset type: Elegance construction company website service-area card, 4:3 landscape
Primary request: a realistic editorial architectural photograph representing a renewed family apartment building in Yesilyurt, Istanbul
Scene/backdrop: a calm residential street with mature trees, modest setbacks and believable neighboring homes
Subject: a refined five-storey family apartment with practical balconies, welcoming entrance and restrained landscaping
Style/medium: photorealistic professional architecture photography, natural and credible, not a CGI render
Composition/framing: 4:3 landscape, facade clearly readable, enough breathing room for a small external UI caption
Lighting/mood: soft morning daylight, calm, safe and family-oriented
Color palette: warm off-white plaster, subtle natural stone, dark bronze frames, muted green trees
Materials/textures: realistic plaster, stone, glass, metal and ordinary clean pavement
Constraints: representative service-area visual only; no text; no logos; no watermark; no readable signs; no branded vehicles
Avoid: oversized luxury, futuristic design, towers, pools, sea view, impossible balconies, excessive facade ornament, obvious CGI
```

### Florya

```text
Use case: photorealistic-natural
Asset type: Elegance construction company website service-area card, 4:3 landscape
Primary request: a realistic editorial architectural photograph representing a boutique detached home project in Florya, Istanbul
Scene/backdrop: a leafy low-density Florya residential street with a private garden and mature vegetation
Subject: one sophisticated contemporary detached villa or duplex home with a grounded human scale, natural stone and warm wood details
Style/medium: photorealistic professional architecture photography, understated and credible, not a CGI render
Composition/framing: 4:3 landscape, three-quarter street view, house and garden entrance clearly visible, clean edges for UI crop
Lighting/mood: gentle late-afternoon daylight, private, calm and refined
Color palette: pale limestone, warm timber, charcoal metal, deep natural greenery
Materials/textures: believable stone grain, timber slats, glass, dark metal and established garden planting
Constraints: representative service-area visual only; no text; no logos; no watermark; no readable signs; no people posing
Avoid: resort or mansion scale, visible pool, sea view, futuristic cantilevers, tropical vegetation, extreme luxury, obvious CGI
```

