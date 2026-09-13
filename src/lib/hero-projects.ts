/* Ana sayfa hero carousel'i gerçek geçmiş projelerden oluşur.

   Görseller `public/photos/hero/editorial-2026` temsili paketinden değil,
   şirket sunumundan çıkarılan gerçek proje fotoğraflarının yayın
   varyantlarından gelir (bkz. IMAGEGEN_LOG.md). Kaynakla karşılaştırılabilir
   orijinaller `public/media/elegance-projects/originals/` altındadır.

   Her slaytın künyesi gerçek proje adını ve gerçek konumunu gösterir; hedef
   hizmet bölgeleri (Bakırköy, Yeşilköy, Ataköy, Yeşilyurt, Florya) yalnızca
   ana hero metninde anılır, slayt künyesine karıştırılmaz. */

export type HeroProject = {
  id: string;
  slug: string;
  /** Görselin veri modelindeki sınıfı; iyileştirilmiş hero için enhanced-photo. */
  mediaKind: "enhanced-photo";
  name: string;
  location: string;
  /** Slayt künyesinde görünen kısa açıklama. */
  note: string;
  desktopImage: string;
  mobileImage: string;
  desktopPosition: string;
  mobilePosition: string;
  alt: string;
  href: string;
};

const enhanced = (file: string) => `/media/elegance-projects/enhanced/${file}`;

export const heroProjects: HeroProject[] = [
  {
    id: "01",
    slug: "proje-ametist",
    mediaKind: "enhanced-photo",
    name: "Proje Ametist",
    location: "Etiler, İstanbul",
    note: "Tamamlanmış proje · 2017 — 2018",
    desktopImage: enhanced("proje-ametist--hero-enhanced.webp"),
    mobileImage: enhanced("proje-ametist--hero-mobile-enhanced.webp"),
    desktopPosition: "center center",
    mobilePosition: "center center",
    alt: "Proje Ametist dış cephesinin tamamlanmış hâli",
    href: "/projeler/proje-ametist",
  },
  {
    id: "02",
    slug: "proje-mercan",
    mediaKind: "enhanced-photo",
    name: "Proje Mercan",
    location: "Etiler, İstanbul",
    note: "Tamamlanmış proje · 2016 — 2017",
    desktopImage: enhanced("proje-mercan--hero-enhanced.webp"),
    mobileImage: enhanced("proje-mercan--hero-mobile-enhanced.webp"),
    desktopPosition: "center center",
    mobilePosition: "center center",
    alt: "Proje Mercan dış cephesinin tamamlanmış hâli",
    href: "/projeler/proje-mercan",
  },
  {
    id: "03",
    slug: "terrace-house",
    mediaKind: "enhanced-photo",
    name: "Terrace House",
    location: "Karaburun, İzmir",
    note: "Tamamlanmış proje · 2022 — 2024",
    desktopImage: enhanced("terrace-house--hero-enhanced.webp"),
    mobileImage: enhanced("terrace-house--hero-mobile-enhanced.webp"),
    desktopPosition: "center center",
    mobilePosition: "center center",
    alt: "Terrace House yerleşkesinin tamamlanmış hâli",
    href: "/projeler/terrace-house",
  },
];
