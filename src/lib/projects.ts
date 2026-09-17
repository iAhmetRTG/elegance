/* Geçmiş proje arşivi.

   İçerik kaynağı: handoff/elegance-pdf-site-package/CONTENT_INVENTORY.md
   (ELEGANCE-SUNUM-DOSYASI.pdf sayfa 4-5 tablosu), ASSET_MANIFEST.json ve
   şirket proje arşivinden 2026'da iletilen yeni proje klasörleri.

   Proje coğrafyası ve hizmet bölgeleri ayrı tutulur:
   - serviceAreas: Bakırköy, Yeşilköy, Ataköy, Yeşilyurt, Florya (hedef bölgeler)
   - location: projenin gerçek yeri
   Proje konumları hizmet bölgesi listesine eklenmez.

   Medya kuralları:
   - "render"         : mimari render; fotoğraf gibi etiketlenemez.
   - "photo"          : tamamlanmış yapıyı gösteren gerçek fotoğraf.
   - "construction"   : şantiye / uygulama aşaması; bitmiş proje gibi gösterilemez.
   - "enhanced-photo" : gerçek fotoğraftan yalnızca kadraj ve pozlama düzeltmesiyle
                        üretilmiş yayın varyantı. Yalnızca kendi kaynak projesinde
                        kullanılır (bkz. IMAGEGEN_LOG.md).
   PNG kaynakları public altına kopyalanmaz. */

export type MediaKind =
  | "photo"
  | "render"
  | "construction"
  | "enhanced-photo";

export type ProjectMedia = {
  src: string;
  alt: string;
  caption: string;
  kind: MediaKind;
  /** Yalnızca şirket sunum dosyasından gelen karelerde bulunur; proje
      arşivinden eklenen fotoğraflarda tanımsızdır. */
  sourcePage?: number;
  sourceAsset?: string;
};

export type ProjectLocation = "Etiler" | "Karaburun" | "Hadımköy" | "Pelitli";

export type ProjectStatus = "completed" | "ongoing";

export type Project = {
  slug: string;
  name: string;
  buildingName: string;
  location: ProjectLocation;
  city: "İstanbul" | "İzmir" | "Kocaeli";
  contractYear: string;
  occupancyYear?: string;
  duration?: string;
  status?: ProjectStatus;
  /** Sunum tablosunda alanı belirtilmeyen projelerde tanımsızdır. */
  area?: string;
  /** Yalnızca kaynak kayıtta açıkça belirtilmişse kullanılır. Eski sunum
      kayıtlarında durum alanı çelişkili olduğu için tanımsız bırakılır. */
  cover?: string;
  coverAlt?: string;
  coverKind?: MediaKind;
  mobileCover?: string;
  media: ProjectMedia[];
};

const enhanced = (file: string) => `/media/elegance-projects/enhanced/${file}`;

const original = (project: string, file: string) =>
  `/media/elegance-projects/originals/${project}/${file}`;

/** Görsel etiketleri veri modelinde açıkça ayrılır. */
export const MEDIA_LABELS: Record<MediaKind, string> = {
  photo: "Proje fotoğrafı",
  render: "Mimari render",
  construction: "Şantiye / uygulama aşaması",
  "enhanced-photo": "Proje fotoğrafı",
};

const projectArchive: Project[] = [
  {
    slug: "cem-erel",
    name: "Cem Erel",
    buildingName: "Cem Erel Kalıp Teknolojileri",
    location: "Pelitli",
    city: "Kocaeli",
    contractYear: "2026",
    status: "ongoing",
    area: "15.000 m²",
    cover: original("cem-erel", "cem-erel--construction-01.webp"),
    coverAlt:
      "Cem Erel Kalıp Teknolojileri tesisinin betonarme yapı uygulaması",
    coverKind: "construction",
    media: [
      {
        src: original("cem-erel", "cem-erel--construction-01.webp"),
        alt: "Cem Erel Kalıp Teknolojileri tesisinin betonarme taşıyıcı sistemi",
        caption: "Betonarme yapı uygulaması",
        kind: "construction",
        sourceAsset: "1789594259041.jpeg",
      },
      {
        src: original("cem-erel", "cem-erel--construction-02.webp"),
        alt: "Cem Erel Kalıp Teknolojileri tesisinin çelik çatı montajı",
        caption: "Çelik çatı montajı",
        kind: "construction",
        sourceAsset: "1789594259079.jpg",
      },
    ],
  },
  {
    slug: "flokser-lojistik",
    name: "Flokser Lojistik",
    buildingName: "Flokser Lojistik Depo",
    location: "Hadımköy",
    city: "İstanbul",
    contractYear: "2021",
    occupancyYear: "2024",
    duration: "32 ay",
    status: "completed",
    area: "120.000 m²",
    cover: original("flokser-lojistik", "flokser-lojistik--render-01.webp"),
    coverAlt:
      "Flokser Lojistik Depo tamamlanmış tasarımını gösteren ön cephe mimari renderı",
    coverKind: "render",
    media: [
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-01.webp",
        ),
        alt: "Flokser Lojistik Depo şantiyesinin genel görünümü",
        caption: "Şantiye genel görünümü",
        kind: "construction",
        sourceAsset: "1789594365874.JPG",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-02.webp",
        ),
        alt: "Flokser Lojistik Depo betonarme perde ve kolon kalıp uygulaması",
        caption: "Perde ve kolon kalıbı · 01",
        kind: "construction",
        sourceAsset: "1789594449676.jpg",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-03.webp",
        ),
        alt: "Flokser Lojistik Depo temel ve bodrum kat imalatı",
        caption: "Temel ve bodrum kat",
        kind: "construction",
        sourceAsset: "1789594449693.jpg",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-04.webp",
        ),
        alt: "Flokser Lojistik Depo kolon ve perde kalıp montajı",
        caption: "Perde ve kolon kalıbı · 02",
        kind: "construction",
        sourceAsset: "1789594449711.jpg",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-05.webp",
        ),
        alt: "Flokser Lojistik Depo bodrum kat donatı çalışmaları",
        caption: "Bodrum kat donatısı",
        kind: "construction",
        sourceAsset: "1789594449727.jpg",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-06.webp",
        ),
        alt: "Flokser Lojistik Depo perde donatısı uygulaması",
        caption: "Perde donatısı",
        kind: "construction",
        sourceAsset: "1789594449746.jpg",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-07.webp",
        ),
        alt: "Flokser Lojistik Depo kolon kalıbı montajı",
        caption: "Kolon kalıbı · 01",
        kind: "construction",
        sourceAsset: "1789594449766.jpg",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-08.webp",
        ),
        alt: "Flokser Lojistik Depo perde kalıbı saha çalışması",
        caption: "Perde kalıbı",
        kind: "construction",
        sourceAsset: "1789594449808.jpg",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-09.webp",
        ),
        alt: "Flokser Lojistik Depo kolon donatısı vinçle montajı",
        caption: "Kolon donatısı montajı",
        kind: "construction",
        sourceAsset: "1789594449829.jpg",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-10.webp",
        ),
        alt: "Flokser Lojistik Depo temel döşemesi ve kolon filizleri",
        caption: "Temel döşemesi",
        kind: "construction",
        sourceAsset: "1789594449848.jpg",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-11.webp",
        ),
        alt: "Flokser Lojistik Depo kolon donatısı imalatı",
        caption: "Kolon donatısı",
        kind: "construction",
        sourceAsset: "1789594449871.jpg",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-12.webp",
        ),
        alt: "Flokser Lojistik Depo istinat perdesi yalıtım uygulaması",
        caption: "İstinat perdesi ve yalıtım",
        kind: "construction",
        sourceAsset: "1789594449895.jpg",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-13.webp",
        ),
        alt: "Flokser Lojistik Depo kolon beton dökümü",
        caption: "Kolon beton dökümü",
        kind: "construction",
        sourceAsset: "1789594449931.jpg",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-14.webp",
        ),
        alt: "Flokser Lojistik Depo istinat duvarı kalıp uygulaması",
        caption: "İstinat duvarı kalıbı",
        kind: "construction",
        sourceAsset: "1789594449948.jpg",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-15.webp",
        ),
        alt: "Flokser Lojistik Depo kolon kalıbı saha uygulaması",
        caption: "Kolon kalıbı · 02",
        kind: "construction",
        sourceAsset: "1789594449965.jpg",
      },
      {
        src: original(
          "flokser-lojistik",
          "flokser-lojistik--construction-16.webp",
        ),
        alt: "Flokser Lojistik Depo gece beton dökümü",
        caption: "Gece beton dökümü",
        kind: "construction",
        sourceAsset: "1789594449984.jpg",
      },
      {
        src: original("flokser-lojistik", "flokser-lojistik--render-01.webp"),
        alt: "Flokser Lojistik Depo ön cephe mimari renderı",
        caption: "Mimari render · 01",
        kind: "render",
        sourceAsset: "1789594450002.jpg",
      },
      {
        src: original("flokser-lojistik", "flokser-lojistik--render-02.webp"),
        alt: "Flokser Lojistik Depo giriş yapısı mimari renderı",
        caption: "Mimari render · 02",
        kind: "render",
        sourceAsset: "1789594450025.jpg",
      },
      {
        src: original("flokser-lojistik", "flokser-lojistik--render-03.webp"),
        alt: "Flokser Lojistik Depo yükleme cephesi mimari renderı",
        caption: "Mimari render · 03",
        kind: "render",
        sourceAsset: "1789594450045.jpg",
      },
      {
        src: original("flokser-lojistik", "flokser-lojistik--render-04.webp"),
        alt: "Flokser Lojistik Depo yerleşkesi kuşbakışı mimari renderı",
        caption: "Mimari render · 04",
        kind: "render",
        sourceAsset: "1789594450063.jpg",
      },
    ],
  },
  {
    slug: "proje-mercan",
    name: "Proje Mercan",
    buildingName: "Dilmen Apt.",
    location: "Etiler",
    city: "İstanbul",
    contractYear: "2016",
    occupancyYear: "2017",
    duration: "12 ay",
    area: "2.400 m²",
    cover: enhanced("proje-mercan--hero-enhanced.webp"),
    coverAlt: "Proje Mercan dış cephesinin tamamlanmış hâli",
    coverKind: "enhanced-photo",
    mobileCover: enhanced("proje-mercan--hero-mobile-enhanced.webp"),
    media: [
      {
        src: original("proje-mercan", "proje-mercan--facade-02--p18.webp"),
        alt: "Proje Mercan dış cephesi, tamamlanmış bina fotoğrafı",
        caption: "Dış cephe · 01",
        kind: "photo",
        sourcePage: 18,
      },
      {
        src: original("proje-mercan", "proje-mercan--facade-01--p18.webp"),
        alt: "Proje Mercan dış cephesi, tamamlanmış bina fotoğrafı",
        caption: "Dış cephe · 02",
        kind: "photo",
        sourcePage: 18,
      },
      {
        src: original(
          "proje-mercan",
          "proje-mercan--interior-entry-01--p25.webp",
        ),
        alt: "Proje Mercan giriş holü fotoğrafı",
        caption: "Giriş holü",
        kind: "photo",
        sourcePage: 25,
      },
      {
        src: original("proje-mercan", "proje-mercan--interior-01--p26.webp"),
        alt: "Proje Mercan iç mekân fotoğrafı",
        caption: "İç mekân · 01",
        kind: "photo",
        sourcePage: 26,
      },
      {
        src: original("proje-mercan", "proje-mercan--interior-02--p26.webp"),
        alt: "Proje Mercan iç mekân fotoğrafı",
        caption: "İç mekân · 02",
        kind: "photo",
        sourcePage: 26,
      },
      {
        src: original("proje-mercan", "proje-mercan--interior-03--p26.webp"),
        alt: "Proje Mercan iç mekân fotoğrafı",
        caption: "İç mekân · 03",
        kind: "photo",
        sourcePage: 26,
      },
    ],
  },
  {
    slug: "proje-ametist",
    name: "Proje Ametist",
    buildingName: "Boncuk Apt.",
    location: "Etiler",
    city: "İstanbul",
    contractYear: "2017",
    occupancyYear: "2018",
    duration: "11 ay",
    area: "1.850 m²",
    cover: enhanced("proje-ametist--hero-enhanced.webp"),
    coverAlt: "Proje Ametist dış cephesinin tamamlanmış hâli",
    coverKind: "enhanced-photo",
    mobileCover: enhanced("proje-ametist--hero-mobile-enhanced.webp"),
    media: [
      {
        src: original(
          "proje-ametist",
          "proje-ametist--facade-03--p16.webp",
        ),
        alt: "Proje Ametist dış cephesi, tamamlanmış bina fotoğrafı",
        caption: "Dış cephe · 01",
        kind: "photo",
        sourcePage: 16,
      },
      {
        src: original(
          "proje-ametist",
          "proje-ametist--facade-02--p16.webp",
        ),
        alt: "Proje Ametist dış cephesi, tamamlanmış bina fotoğrafı",
        caption: "Dış cephe · 02",
        kind: "photo",
        sourcePage: 16,
      },
      {
        src: original(
          "proje-ametist",
          "proje-ametist--interior-entry-01--p27.webp",
        ),
        alt: "Proje Ametist giriş fotoğrafı",
        caption: "Giriş · 01",
        kind: "photo",
        sourcePage: 27,
      },
      {
        src: original(
          "proje-ametist",
          "proje-ametist--interior-entry-02--p27.webp",
        ),
        alt: "Proje Ametist giriş fotoğrafı",
        caption: "Giriş · 02",
        kind: "photo",
        sourcePage: 27,
      },
      {
        src: original("proje-ametist", "proje-ametist--interior-01--p28.webp"),
        alt: "Proje Ametist iç mekân fotoğrafı",
        caption: "İç mekân · 01",
        kind: "photo",
        sourcePage: 28,
      },
      {
        src: original("proje-ametist", "proje-ametist--interior-02--p28.webp"),
        alt: "Proje Ametist iç mekân fotoğrafı",
        caption: "İç mekân · 02",
        kind: "photo",
        sourcePage: 28,
      },
      {
        src: original("proje-ametist", "proje-ametist--interior-03--p28.webp"),
        alt: "Proje Ametist iç mekân fotoğrafı",
        caption: "İç mekân · 03",
        kind: "photo",
        sourcePage: 28,
      },
      {
        src: original("proje-ametist", "proje-ametist--interior-04--p28.webp"),
        alt: "Proje Ametist iç mekân fotoğrafı",
        caption: "İç mekân · 04",
        kind: "photo",
        sourcePage: 28,
      },
    ],
  },
  {
    slug: "proje-kuvars",
    name: "Proje Kuvars",
    buildingName: "Pirelli Siteleri A-B-C Blok",
    location: "Etiler",
    city: "İstanbul",
    contractYear: "2017",
    occupancyYear: "2019",
    duration: "21 ay",
    area: "6.500 m²",
    cover: enhanced("proje-kuvars--hero-enhanced.webp"),
    coverAlt: "Proje Kuvars bloklarının tamamlanmış dış cephesi",
    coverKind: "enhanced-photo",
    media: [
      /* Proje arşivinden eklenen güncel dış mekân fotoğrafları. */
      {
        src: original("proje-kuvars", "proje-kuvars--facade-03.webp"),
        alt: "Proje Kuvars bloklarının dış cephesi, tamamlanmış yapı fotoğrafı",
        caption: "Dış cephe · 01",
        kind: "photo",
        sourceAsset: "1789594049837.jpg",
      },
      {
        src: original("proje-kuvars", "proje-kuvars--facade-04.webp"),
        alt: "Proje Kuvars bloklarının cephesinden detay fotoğrafı",
        caption: "Dış cephe · 02",
        kind: "photo",
        sourceAsset: "1789594049858.jpg",
      },
      {
        src: original("proje-kuvars", "proje-kuvars--bahce-01.webp"),
        alt: "Proje Kuvars bloklarının bahçesi ve çevre düzenlemesi fotoğrafı",
        caption: "Bahçe ve yerleşke",
        kind: "photo",
        sourceAsset: "1789594049882.jpg",
      },
      {
        src: original("proje-kuvars", "proje-kuvars--facade-02--p17.webp"),
        alt: "Proje Kuvars blokları, tamamlanmış bina fotoğrafı",
        caption: "Dış cephe · 03",
        kind: "photo",
        sourcePage: 17,
      },
      {
        src: original("proje-kuvars", "proje-kuvars--facade-01--p17.webp"),
        alt: "Proje Kuvars blokları, tamamlanmış bina fotoğrafı",
        caption: "Dış cephe · 04",
        kind: "photo",
        sourcePage: 17,
      },
      {
        src: original(
          "proje-kuvars",
          "proje-kuvars--interior-living-01--p29.webp",
        ),
        alt: "Proje Kuvars salon ve mutfak fotoğrafı",
        caption: "Salon · 01",
        kind: "photo",
        sourcePage: 29,
      },
      {
        src: original(
          "proje-kuvars",
          "proje-kuvars--interior-living-02--p29.webp",
        ),
        alt: "Proje Kuvars salon ve mutfak fotoğrafı",
        caption: "Salon · 02",
        kind: "photo",
        sourcePage: 29,
      },
      {
        src: original(
          "proje-kuvars",
          "proje-kuvars--interior-bathroom-01--p30.webp",
        ),
        alt: "Proje Kuvars banyo fotoğrafı",
        caption: "Banyo · 01",
        kind: "photo",
        sourcePage: 30,
      },
      {
        src: original(
          "proje-kuvars",
          "proje-kuvars--interior-bathroom-02--p30.webp",
        ),
        alt: "Proje Kuvars banyo fotoğrafı",
        caption: "Banyo · 02",
        kind: "photo",
        sourcePage: 30,
      },
    ],
  },
  {
    slug: "proje-topaz",
    name: "Proje Topaz",
    buildingName: "Villa Dalmaz",
    location: "Etiler",
    city: "İstanbul",
    contractYear: "2020",
    occupancyYear: "2021",
    duration: "10 ay",
    /* Sunumda proje adı sayfa 2'de "Topoz", sayfa 4 ve 19'da "Topaz" geçer.
       Durum bilgisi sayfalarda çeliştiği için hiçbir yerde yayınlanmaz. */
    cover: enhanced("proje-topaz--hero-enhanced.webp"),
    coverAlt: "Proje Topaz şantiye fotoğrafı, uygulama aşaması",
    coverKind: "construction",
    media: [
      /* Proje arşivinden eklenen tamamlanmış iç mekân fotoğrafları. */
      {
        src: original("proje-topaz", "proje-topaz--salon-01.webp"),
        alt: "Proje Topaz iç mekânı, salon fotoğrafı",
        caption: "Salon",
        kind: "photo",
        sourceAsset: "1789594109730.jpg",
      },
      {
        src: original("proje-topaz", "proje-topaz--giris-01.webp"),
        alt: "Proje Topaz iç mekânı, giriş holü ve merdiven fotoğrafı",
        caption: "Giriş holü",
        kind: "photo",
        sourceAsset: "1789594109768.jpg",
      },
      {
        src: original("proje-topaz", "proje-topaz--mutfak-01.webp"),
        alt: "Proje Topaz iç mekânı, mutfak fotoğrafı",
        caption: "Mutfak",
        kind: "photo",
        sourceAsset: "1789594109807.jpg",
      },
      {
        src: original("proje-topaz", "proje-topaz--banyo-01.webp"),
        alt: "Proje Topaz iç mekânı, banyo fotoğrafı",
        caption: "Banyo",
        kind: "photo",
        sourceAsset: "1789594109749.jpg",
      },
      {
        src: original("proje-topaz", "proje-topaz--balkon-01.webp"),
        alt: "Proje Topaz balkonundan çevre görünümü",
        caption: "Balkon ve çevre",
        kind: "photo",
        sourceAsset: "1789594109787.jpg",
      },
      {
        src: original(
          "proje-topaz",
          "proje-topaz--construction-02--p19.webp",
        ),
        alt: "Proje Topaz şantiye fotoğrafı, uygulama aşaması",
        caption: "Şantiye · 01",
        kind: "construction",
        sourcePage: 19,
      },
      {
        src: original(
          "proje-topaz",
          "proje-topaz--construction-01--p19.webp",
        ),
        alt: "Proje Topaz şantiye fotoğrafı, uygulama aşaması",
        caption: "Şantiye · 02",
        kind: "construction",
        sourcePage: 19,
      },
    ],
  },
  {
    slug: "terrace-house",
    name: "Terrace House",
    buildingName: "Terrace House",
    location: "Karaburun",
    city: "İzmir",
    contractYear: "2022",
    occupancyYear: "2024",
    duration: "21 ay",
    area: "4.200 m²",
    cover: enhanced("terrace-house--hero-enhanced.webp"),
    coverAlt: "Terrace House yerleşkesinin tamamlanmış hâli",
    coverKind: "enhanced-photo",
    mobileCover: enhanced("terrace-house--hero-mobile-enhanced.webp"),
    media: [
      {
        src: original("terrace-house", "terrace-house--render-01--p20.webp"),
        alt: "Terrace House yerleşkesi mimari render görseli",
        caption: "Mimari render · 01",
        kind: "render",
        sourcePage: 20,
      },
      {
        src: original("terrace-house", "terrace-house--render-02--p20.webp"),
        alt: "Terrace House yerleşkesi mimari render görseli",
        caption: "Mimari render · 02",
        kind: "render",
        sourcePage: 20,
      },
      {
        src: original("terrace-house", "terrace-house--photo-01--p21.webp"),
        alt: "Terrace House yerleşkesi, tamamlanmış yapının fotoğrafı",
        caption: "Proje fotoğrafı · 01",
        kind: "photo",
        sourcePage: 21,
      },
      {
        src: original("terrace-house", "terrace-house--photo-02--p21.webp"),
        alt: "Terrace House yerleşkesi, tamamlanmış yapının fotoğrafı",
        caption: "Proje fotoğrafı · 02",
        kind: "photo",
        sourcePage: 21,
      },
    ],
  },
  {
    slug: "hill-stone",
    name: "Hill Stone",
    buildingName: "Hill Stone",
    location: "Karaburun",
    city: "İzmir",
    contractYear: "2022",
    occupancyYear: "2024",
    duration: "21 ay",
    area: "5.250 m²",
    cover: enhanced("hill-stone--hero-enhanced.webp"),
    coverAlt: "Hill Stone yerleşkesinin tamamlanmış hâli",
    coverKind: "enhanced-photo",
    media: [
      /* Proje arşivinden eklenen dış ve iç mekân fotoğrafları. */
      {
        src: original("hill-stone", "hill-stone--bahce-01.webp"),
        alt: "Hill Stone villasının bahçesi ve avlusu fotoğrafı",
        caption: "Bahçe ve avlu",
        kind: "photo",
        sourceAsset: "1789594194675.jpg",
      },
      {
        src: original("hill-stone", "hill-stone--photo-01--p23.webp"),
        alt: "Hill Stone yerleşkesi, tamamlanmış yapının fotoğrafı",
        caption: "Proje fotoğrafı · 01",
        kind: "photo",
        sourcePage: 23,
      },
      {
        src: original("hill-stone", "hill-stone--photo-02--p23.webp"),
        alt: "Hill Stone yerleşkesi, tamamlanmış yapının fotoğrafı",
        caption: "Proje fotoğrafı · 02",
        kind: "photo",
        sourcePage: 23,
      },
      {
        src: original("hill-stone", "hill-stone--salon-01.webp"),
        alt: "Hill Stone villa iç mekânı, salon ve mutfak fotoğrafı",
        caption: "Salon ve mutfak",
        kind: "photo",
        sourceAsset: "1789594194654.jpg",
      },
      {
        src: original("hill-stone", "hill-stone--merdiven-01.webp"),
        alt: "Hill Stone villa iç mekânı, merdiven ve hol fotoğrafı",
        caption: "Merdiven ve hol",
        kind: "photo",
        sourceAsset: "1789594194639.jpg",
      },
      {
        src: original("hill-stone", "hill-stone--banyo-01.webp"),
        alt: "Hill Stone villa iç mekânı, banyo fotoğrafı",
        caption: "Banyo",
        kind: "photo",
        sourceAsset: "1789594194623.jpg",
      },
      {
        src: original("hill-stone", "hill-stone--render-01--p22.webp"),
        alt: "Hill Stone yerleşkesi mimari render görseli",
        caption: "Mimari render · 01",
        kind: "render",
        sourcePage: 22,
      },
      {
        src: original("hill-stone", "hill-stone--render-02--p22.webp"),
        alt: "Hill Stone yerleşkesi mimari render görseli",
        caption: "Mimari render · 02",
        kind: "render",
        sourcePage: 22,
      },
    ],
  },
  {
    slug: "proje-cicek",
    name: "Proje Çiçek",
    buildingName: "Çiçek Apt.",
    location: "Etiler",
    city: "İstanbul",
    contractYear: "2014",
    occupancyYear: "2014",
    duration: "10 ay",
    /* Sunum sayfa 2'deki dört görselden hangisinin bu projeye ait olduğu kesin
       olmadığı için tekil görsel atanmaz; kart tipografik kalır. Görselsiz
       kayıt tipografik kapakla gösterilir. */
    media: [],
  },
];

/* Yeni arşiv kayıtları, mevcut referans sırasını bozmadan listenin sonunda
   gösterilir. Detay sayfaları ve sitemap aynı tekil veri kaynağını kullanır. */
const tailProjectSlugs = ["flokser-lojistik", "cem-erel"];

export const projects: Project[] = [
  ...projectArchive.filter(
    (project) => !tailProjectSlugs.includes(project.slug),
  ),
  ...tailProjectSlugs.flatMap((slug) =>
    projectArchive.filter((project) => project.slug === slug),
  ),
];

export const projectLocations: ProjectLocation[] = [
  "Etiler",
  "Karaburun",
  "Hadımköy",
  "Pelitli",
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
