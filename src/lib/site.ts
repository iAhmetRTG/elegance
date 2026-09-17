export const site = {
  brand: "Elegance",
  brandSuffix: "İnşaat",
  legalName: "Elegance İnşaat",
  url: "https://www.eleganceinsaat.com",
  title:
    "Elegance İnşaat | İstanbul Kentsel Dönüşüm ve Özel Taahhüt Projeleri",
  description:
    "İstanbul'da kentsel dönüşüm, kat karşılığı ve özel taahhüt projeleri. Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya'da aynı gün keşif; İstanbul'un diğer ilçelerinde ve şehir dışında da proje üstleniyoruz.",
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

/* Pazarlama odağı bu beş ilçedir; liste hizmet sınırı değildir. Geçmiş
   projelerin gerçek konumları (Etiler, Karaburun) bu listenin yerine geçmez,
   kapsam cümleleri için `coverage` kaydı kullanılır. */
export const serviceAreas = [
  { slug: "bakirkoy", name: "Bakırköy" },
  { slug: "yesilkoy", name: "Yeşilköy" },
  { slug: "atakoy", name: "Ataköy" },
  { slug: "yesilyurt", name: "Yeşilyurt" },
  { slug: "florya", name: "Florya" },
];

/* Bölge kapsamı: bu beş ilçe hizmet sınırı değil, merkeze yakın olduğu için
   aynı gün keşif yapılan yoğun çalışma alanlarıdır. Bölge bloğunun geçtiği
   her yerde bu cümleler tek kaynaktan kullanılır; aksi halde liste dışında
   kalan ziyaretçi "burada iş yapmıyorlar" sonucuna varıyor. */
export const coverage = {
  sameDayLabel: "Aynı gün keşif yaptığımız bölgeler",
  coreNote:
    "Bu beş ilçe, merkezimize yakın olduğu için aynı gün keşfe geldiğimiz yoğun çalışma alanlarımız.",
  widerNote:
    "Kapsamımız bu listeyle sınırlı değil: İstanbul'un diğer ilçelerinde ve şehir dışında da proje üstleniyoruz.",
  promptLabel: "Bölgeniz listede yok mu?",
  promptText:
    "Listede olmayan ilçe ve illerden gelen talepleri de değerlendiriyoruz. Yapınızı veya arsanızı anlatın; kapsamı keşifle birlikte netleştirelim.",
};

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

export type NavItem = {
  label: string;
  href: string;
  /* Yalnızca Kentsel Dönüşüm bağı foy dokulu vurguyu taşır. */
  spotlight?: boolean;
};

/* Üst menü ana sayfa ve alt sayfalarda aynı sırayı kullanır. Müşteri kararıyla
   Kentsel Dönüşüm ilk sırada doğrudan bağlantı olarak kalır; Bölgeler üst
   satırdan çıkarıldı, sayfaları footer ve doğrudan URL üzerinden erişilebilir. */
export const nav: NavItem[] = [
  {
    label: "Kentsel Dönüşüm",
    href: "/hizmetler/kentsel-donusum",
    spotlight: true,
  },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Projeler", href: "/projeler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

/* Footer'da hizmet bağlantıları kendi kolonunda listelenir; bu yüzden sayfa
   listesi ayrı tutulur. Teknik standartlar ana menüye girmez, footer'da kalır. */
export const footerNav: NavItem[] = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Projeler", href: "/projeler" },
  { label: "Bölgeler", href: "/bolgeler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Teknik Standartlar", href: "/teknik-standartlar" },
];

/* Yalnızca sunumla doğrulanabilen göstergeler.
   "150+ proje", "900+ konut" gibi sayaçlar PDF ile doğrulanmadığı için
   içerik sahibi onaylayana kadar gösterilmez. */
export const proofPoints = [
  { value: "Çeyrek asır", label: "İnşaat deneyimi" },
  { value: "7", label: "Belgelenen geçmiş proje" },
  { value: "5", label: "Aynı gün keşif bölgesi" },
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
