/* Hizmet bölgeleri: Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya.

   Bu bölgeler pazarlama ve hizmet kapsamıdır; geçmiş projelerin gerçek
   konumları (Etiler, Karaburun) değildir. Bölge sayfalarında temsili yapı
   görseli kullanılmaz: elde gerçek bir bölge fotoğrafı olmadığı için
   görsel yerine tipografik ve harita tabanlı anlatım tercih edilir. */
export const districts = [
  {
    slug: "bakirkoy",
    name: "Bakırköy",
    role: "Merkez",
    headline: "Bakırköy merkezde kentsel dönüşümün güvenilir adresi.",
    summary:
      "Zuhuratbaba'dan Kartaltepe'ye, Bakırköy'ün eski yapı stokunu güncel deprem yönetmeliğine uygun yapılara dönüştürüyoruz.",
    description: [
      "Bakırköy merkez; yoğun konut dokusu, ticari hareketliliği ve ulaşım akslarıyla bölgenin kalbi. İlçedeki pek çok apartman, yürürlükteki deprem yönetmeliğinden önce inşa edilmiş durumda. Bu yapıların güvenli ve değerli hale getirilmesi, bizim en yoğun çalıştığımız alan.",
      "Merkezde arsa bulmanın maliyeti göz önüne alındığında, mevcut yapıların dönüştürülmesi hem malikler hem de bölge için en verimli yol. Süreç planlamasından malik görüşmelerine kadar tüm detayları yerinde yönetiyoruz.",
    ],
    landmarks: ["Zuhuratbaba", "Kartaltepe", "Osmaniye", "İncirli", "Şenlikköy"],
    highlights: [
      "Yoğun apartman dokusunda kat karşılığı deneyimi",
      "Ticari alan ve ofis projeleri",
      "Maliklerle birebir müzakere",
    ],
  },
  {
    slug: "yesilkoy",
    name: "Yeşilköy",
    role: "Sahil",
    headline: "Yeşilköy'de tarihi dokuya saygılı, modern yapılaşma.",
    summary:
      "Sahil hattındaki eski yapıları, Yeşilköy'ün dokusuna uyumlu ve depreme dayanıklı projelere dönüştürüyoruz.",
    description: [
      "Yeşilköy; sahil hattı, tarihi yapıları ve düşük katlı dokusuyla Bakırköy'ün en özel bölgelerinden biri. Burada yürütülen her projede, bölgenin estetik kimliğini korumak bizim için öncelik.",
      "Deniz manzarasını en verimli kullanan plan çözümleri, yalıtım ve malzeme kalitesiyle birlikte uzun ömürlü bir yaşam alanına dönüşüyor. Sahil hattındaki dönüşüm projelerinde yapı ruhsatı ve imar kısıtlarına hâkimiz.",
    ],
    landmarks: ["Yeşilköy Sahili", "Yeşilköy Çarşı", "Çekmece Cad.", "Ayamama"],
    highlights: [
      "Düşük katlı, nitelikli konut projeleri",
      "Tarihi dokuya uyumlu cephe tasarımı",
      "Sahil hattı imar süreçlerine hâkimiyet",
    ],
  },
  {
    slug: "atakoy",
    name: "Ataköy",
    role: "Modern",
    headline: "Ataköy'de site yönetimleriyle uyumlu dönüşüm yönetimi.",
    summary:
      "Ataköy'ün site ve blok yapısına uygun, yönetim planlarıyla uyumlu kentsel dönüşüm çözümleri sunuyoruz.",
    description: [
      "Ataköy; farklı dönemlerde inşa edilmiş site ve bloklarıyla, dönüşüm sürecinin en teknik planlanması gereken bölgesi. Site yönetimleri, ortak alanlar ve blok bazlı kararların koordinasyonu burada belirleyici oluyor.",
      "Blok bazında riskli yapı süreci, malikler arası paylaşım ve kira yardımı planlamasında geniş deneyime sahibiz. Projelerde otopark, depo ve sosyal donatı dengesini bölgenin standartlarına uygun kuruyoruz.",
    ],
    landmarks: ["Ataköy 1. Kısım", "Ataköy Marina", "Atrium", "Ataköy 5. Kısım"],
    highlights: [
      "Site ve blok bazlı dönüşüm planlaması",
      "Yönetim planlarına uygun süreç yönetimi",
      "Otopark ve sosyal donatı çözümleri",
    ],
  },
  {
    slug: "yesilyurt",
    name: "Yeşilyurt",
    role: "Sakin",
    headline: "Yeşilyurt'un sakin sokaklarında kaliteli yapı.",
    summary:
      "Yeşilyurt'un düşük yoğunluklu dokusunda, aile yaşamına uygun ve değer kazanan konut projeleri.",
    description: [
      "Yeşilyurt; sahile yakınlığı, sakin sokakları ve okul çevresine konumuyla ailelerin tercih ettiği bir bölge. Buradaki dönüşüm ve yenileme projelerinde yaşam kalitesini merkeze alıyoruz.",
      "Daire planlarını günümüz ihtiyaçlarına göre büyütüyor, asansör, kapalı otopark ve depo gibi eksikleri projeye dahil ediyoruz. Süreç boyunca komşuluk ilişkilerini gözeten bir çalışma düzeni kuruyoruz.",
    ],
    landmarks: ["Yeşilyurt Sahili", "Yeşilyurt Çarşı", "Şenlikköy", "Florya yolu"],
    highlights: [
      "Aile odaklı konut planlaması",
      "Daire büyütme ve modernizasyon",
      "Düşük yoğunluklu proje deneyimi",
    ],
  },
  {
    slug: "florya",
    name: "Florya",
    role: "Yeşil",
    headline: "Florya'da bahçeli yaşam ve müstakil yapı uzmanlığı.",
    summary:
      "Florya'nın yeşil dokusuna uyumlu villa, müstakil yapı ve butik konut projeleri geliştiriyoruz.",
    description: [
      "Florya; orman hattı, sahil ve düşük yoğunluklu yapısıyla müstakil yaşamın öne çıktığı bir bölge. Arsa analizinden konsept tasarıma, ruhsattan peyzaja kadar bütüncül proje yürütüyoruz.",
      "Bahçe, havuz ve akıllı ev altyapısını standart kapsamımıza dahil ediyor; yapıyı çevresiyle birlikte teslim ediyoruz. Bölgedeki imar ve yapılaşma koşullarına dair güncel bilgiyle hareket ediyoruz.",
    ],
    landmarks: ["Florya Sahili", "Florya Ormanı", "Atatürk Ormanı", "Florya Caddesi"],
    highlights: [
      "Villa ve müstakil yapı projeleri",
      "Peyzaj ve havuz uygulamaları",
      "Arsa analizi ve konsept tasarım",
    ],
  },
] as const;

export type District = (typeof districts)[number];

export function getDistrict(slug: string) {
  return districts.find((district) => district.slug === slug);
}
