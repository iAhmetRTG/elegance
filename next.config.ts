import type { NextConfig } from "next";

/* Önceki sürümde yer alan temsili/uydurma proje slug'ları kaldırıldı.
   Arama motorlarında kalan adresler rastgele bir gerçek projeye değil,
   proje arşivi listesine yönlendirilir. */
const retiredProjectSlugs = [
  "yesilkoy-sahil-rezidansi",
  "atakoy-modern-konut",
  "florya-bahce-villalari",
  "bakirkoy-merkez-ofis",
  "yesilyurt-apartman-donusumu",
  "bakirkoy-deprem-guclendirme",
];

/* Tadilat ve Renovasyon hizmeti kaldırıldı; yerini Endüstriyel Yapı aldı.
   Eski adres arama motorlarında kaldığı için kalıcı olarak yeni adrese taşınır. */
const retiredServiceSlugs = [
  { from: "tadilat-renovasyon", to: "endustriyel-yapi" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  /* Projedeki gorseller 1536px'e kadar; 2048/3840 varyantlari bosa uretiliyordu. */
  images: {
    deviceSizes: [480, 640, 828, 1080, 1280, 1536, 1920],
    imageSizes: [128, 256, 384],
  },
  async redirects() {
    return [
      ...retiredProjectSlugs.map((slug) => ({
        source: `/projeler/${slug}`,
        destination: "/projeler",
        permanent: true,
      })),
      ...retiredServiceSlugs.map(({ from, to }) => ({
        source: `/hizmetler/${from}`,
        destination: `/hizmetler/${to}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
