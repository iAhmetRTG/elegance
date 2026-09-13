/* Geçmiş proje arşivi.

   İçerik kaynağı: handoff/elegance-pdf-site-package/CONTENT_INVENTORY.md
   (ELEGANCE-SUNUM-DOSYASI.pdf sayfa 4-5 tablosu) ve ASSET_MANIFEST.json.

   İki coğrafya ayrı tutulur:
   - serviceAreas: Bakırköy, Yeşilköy, Ataköy, Yeşilyurt, Florya (hedef bölgeler)
   - location: geçmiş projenin gerçek yeri (Etiler veya Karaburun)
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
  sourcePage: number;
  sourceAsset?: string;
};

export type ProjectLocation = "Etiler" | "Karaburun";

export type Project = {
  slug: string;
  name: string;
  buildingName: string;
  location: ProjectLocation;
  city: "İstanbul" | "İzmir";
  contractYear: string;
  occupancyYear: string;
  duration: string;
  /** Sunum tablosunda alanı belirtilmeyen projelerde tanımsızdır. */
  area?: string;
  /* Durum bilgisi (tamamlandı / devam ediyor) bilinçli olarak taşınmaz:
     sunum dosyasındaki kayıtlarla çelişiyor ve arayüzde gösterilmez. */
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

export const projects: Project[] = [
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
      {
        src: original("proje-kuvars", "proje-kuvars--facade-02--p17.webp"),
        alt: "Proje Kuvars blokları, tamamlanmış bina fotoğrafı",
        caption: "Dış cephe · 01",
        kind: "photo",
        sourcePage: 17,
      },
      {
        src: original("proje-kuvars", "proje-kuvars--facade-01--p17.webp"),
        alt: "Proje Kuvars blokları, tamamlanmış bina fotoğrafı",
        caption: "Dış cephe · 02",
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
       kayıt, listede en sonda tutulur. */
    media: [],
  },
];

export const projectLocations: ProjectLocation[] = ["Etiler", "Karaburun"];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
