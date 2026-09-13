export const site = {
  brand: "Elegance",
  brandSuffix: "İnşaat",
  legalName: "Elegance İnşaat",
  url: "https://www.eleganceinsaat.com",
  title:
    "Elegance İnşaat | Bakırköy Kentsel Dönüşüm ve Anahtar Teslim İnşaat",
  description:
    "Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya'da kentsel dönüşüm, kat karşılığı ve anahtar teslim inşaat. Ücretsiz keşif ve şeffaf teklif için hemen arayın.",
  phoneDisplay: "0500 000 00 00",
  phone: "+905000000000",
  whatsappNumber: "905000000000",
  email: "info@eleganceinsaat.com",
  address: {
    street: "Zuhuratbaba Mah. İnci Sok. No: 1",
    district: "Bakırköy",
    city: "İstanbul",
    postalCode: "34147",
  },
  hours: "Pazartesi – Cumartesi · 09:00 – 19:00",
  serviceRegion: "İstanbul, Bakırköy ve çevresi",
  districts: ["Bakırköy", "Yeşilköy", "Ataköy", "Yeşilyurt", "Florya"],
};

/* Hedef hizmet bölgeleri pazarlama odağıdır. Geçmiş projelerin gerçek
   konumları (Etiler, Karaburun) bu listenin yerine geçmez. */
export const serviceAreas = [
  { slug: "bakirkoy", name: "Bakırköy" },
  { slug: "yesilkoy", name: "Yeşilköy" },
  { slug: "atakoy", name: "Ataköy" },
  { slug: "yesilyurt", name: "Yeşilyurt" },
  { slug: "florya", name: "Florya" },
];

/* Sunum sayfa 3 kurumsal profili; anlam korunarak web metnine uyarlandı. */
export const corporateProfile = {
  lead: "Elegance, gayrimenkul ve inşaat sektöründe çeyrek asırlık deneyime sahip; mimarlar ve mühendisler tarafından kurulmuş bir inşaat firmasıdır.",
  body: "Kente ve kentliye saygılı, çevreye ve doğaya duyarlı; kalite ve estetik odağı yüksek projeler geliştirir.",
};

/* Sunumdaki çalışma profili (sayfa 3). */
export const workProfile = [
  "Toplu konut ve rezidans",
  "Oteller",
  "Endüstriyel tesisler",
  "Ticaret ve yönetim binaları",
];

export const telHref = `tel:${site.phone}`;

export function waLink(
  message = "Merhaba, inşaat projem hakkında bilgi almak istiyorum.",
) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Projeler", href: "/projeler" },
  { label: "Bölgeler", href: "/bolgeler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

/* Teknik standartlar ana menüye eklenmez; footer üzerinden erişilir. */
export const footerNav = [
  ...nav,
  { label: "Teknik Standartlar", href: "/teknik-standartlar" },
];

export const homeNav = [
  { label: "Projeler", href: "/projeler" },
  { label: "Kentsel Dönüşüm", href: "/hizmetler/kentsel-donusum" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

/* Yalnızca sunumla doğrulanabilen göstergeler.
   "150+ proje", "900+ konut" gibi sayaçlar PDF ile doğrulanmadığı için
   içerik sahibi onaylayana kadar gösterilmez. */
export const proofPoints = [
  { value: "Çeyrek asır", label: "İnşaat deneyimi" },
  { value: "7", label: "Belgelenen geçmiş proje" },
  { value: "5", label: "Hedef hizmet bölgesi" },
  { value: "2", label: "Referans verilen il" },
];

export const processSteps = [
  {
    no: "01",
    title: "Ücretsiz keşif ve analiz",
    text: "Yapınızı yerinde inceliyor, imar durumunu ve zemin koşullarını değerlendirip ihtiyaçları raporluyoruz.",
  },
  {
    no: "02",
    title: "Proje ve şeffaf teklif",
    text: "Mimari, statik ve maliyet çalışmasını kalem kalem açıklanmış teklifle sunuyoruz.",
  },
  {
    no: "03",
    title: "Sözleşme ve resmi süreçler",
    text: "Noter onaylı sözleşmeyle güvence altına alıyor; ruhsat, tapu ve belediye işlemlerini yürütüyoruz.",
  },
  {
    no: "04",
    title: "İnşaat ve anahtar teslimi",
    text: "Planlanan takvimde inşa ediyor, kalite kontrolünün ardından yapınızı eksiksiz teslim ediyoruz.",
  },
];
