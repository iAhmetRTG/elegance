/* Teknik şartname içeriği.

   Kaynak: ELEGANCE-SUNUM-DOSYASI.pdf sayfa 6-14, web için normalize edilmiş
   hâliyle handoff/elegance-pdf-site-package/CONTENT_INVENTORY.md bölüm 6.

   Kullanım notları:
   - Teknik kapsam değiştirilmedi; yalnızca okunabilirlik için başlık ve
     açıklama olarak ayrıldı.
   - Marka adları reklam rozeti gibi sıralanmaz; performans standardı öne
     çıkar, örnek markalar `brands` alanında ikincil metin olur.
   - Şartnamenin proje ve sözleşmeye göre belirlendiğine dair hukuki metin
     firma onayı olmadan eklenmez. */

export type StandardItem = {
  title: string;
  detail: string;
  /** Örnek ürün/marka listesi; ikincil seviyede gösterilir. */
  brands?: string;
};

export type StandardGroup = {
  id: string;
  no: string;
  title: string;
  lead: string;
  items: StandardItem[];
};

export const standardGroups: StandardGroup[] = [
  {
    id: "genel-yapi",
    no: "01",
    title: "Genel yapı",
    lead: "Taşıyıcı sistemden çatıya kadar yapının tamamında uygulanan temel standartlar.",
    items: [
      {
        title: "Taşıyıcı sistem",
        detail:
          "Güncel deprem yönetmeliğine uygun radye temel ve betonarme karkas.",
      },
      {
        title: "Temel ve çevre perdelerinde su yalıtımı",
        detail:
          "Bohçalama sistemi; sürme esaslı uygulamada zemin altında kalan perde duvarlarda sisteme uygun, pozitif su yalıtımı.",
        brands: "Hyfix, Xypex veya membran bohçalama",
      },
      {
        title: "Dış duvarlar",
        detail: "Gazbeton veya izotuğla esaslı duvar.",
      },
      {
        title: "Dış cephe mantolama",
        detail: "Isı yalıtımlı dış cephe mantolama sistemi.",
        brands: "Capatect, DYO Klimatherm, Weber, Alsecco",
      },
      {
        title: "Dış cephe kaplamaları",
        detail: "Mimari projeye göre kısmi dış cephe kaplaması.",
        brands:
          "Alüminyum kompozit, kompakt laminat, Kalesinterflex veya benzeri",
      },
      {
        title: "Çatı",
        detail:
          "Çelik konstrüksiyon üzerinde OSB ve ısı yalıtımı; kiremit ya da boyalı metal kenet çatı seçeneği.",
        brands: "Dow Roofmate, Yalteks · Braas, Başak, Kılıçoğlu",
      },
      {
        title: "İç sıva",
        detail: "Betonarme perde ve bölücü duvarlarda alçı sıva.",
        brands: "Knauf, Lafarge, Rigips",
      },
      {
        title: "Daireler arası ses yalıtımı",
        detail: "Daireler arasında çift duvar ve taş yünü ile ses yalıtımı.",
      },
    ],
  },
  {
    id: "kapi-pencere",
    no: "02",
    title: "Kapı ve pencereler",
    lead: "Daire girişinden doğramaya; güvenlik, ısı ve ses performansı birlikte ele alınır.",
    items: [
      {
        title: "Oda kapıları",
        detail: "Lake ya da doğal ahşap kaplama.",
        brands: "Artella, Dortek/Dorstil veya özel üretim",
      },
      {
        title: "Daire giriş kapısı",
        detail: "Doğal ahşap kaplamalı çelik kapı.",
        brands: "Stil Door, Emadoor veya Kale",
      },
      {
        title: "Giriş kapısı mekanizması",
        detail: "Yüksek güvenlikli kilit mekanizması.",
        brands: "Kale Kilit veya Mul-T-Lock",
      },
      {
        title: "Doğramalar",
        detail: "Mimari projeye göre PVC doğrama.",
        brands: "Rehau, Schüco veya Asaş",
      },
      {
        title: "Panjur",
        detail: "Motorlu panjur sistemi.",
      },
      {
        title: "Camlar",
        detail: "Isı yalıtımlı cam.",
        brands: "Isıcam Konfor serisi",
      },
    ],
  },
  {
    id: "antre-hol",
    no: "03",
    title: "Antre ve hol",
    lead: "Daireye girişte karşılanan yüzeyler ve sabit mobilya standardı.",
    items: [
      {
        title: "Zemin",
        detail: "Porselen veya granit seramik.",
        brands: "Vitra, Çanakkale Seramik, Seranit",
      },
      {
        title: "Duvar",
        detail: "Alçı ve saten sıva üzerinde saten boya.",
        brands: "Jotun, Capatect, Betek/Filli Boya, Polisan, DYO",
      },
      {
        title: "Tavan",
        detail: "Alçı panel asma tavan ve gömme LED spotlar.",
      },
      {
        title: "Mobilya",
        detail:
          "İç kapılarla uyumlu, MDF gövdeli lake veya ahşap kaplama portmanto.",
      },
    ],
  },
  {
    id: "salon-odalar",
    no: "04",
    title: "Salon ve odalar",
    lead: "Yaşam alanlarında zemin, duvar ve tavan bitişleri.",
    items: [
      {
        title: "Zemin",
        detail: "Üç şerit lamine parke.",
        brands: "Hüni, Dempar, BVT, Tarkett, Şerifoğlu",
      },
      {
        title: "Duvar",
        detail: "Alçı ve saten sıva üzerinde saten boya.",
        brands: "Jotun, Capatect, Polisan, DYO",
      },
      {
        title: "Tavan",
        detail: "Alçı sıva üzerinde plastik boya.",
        brands: "Jotun, Capatect, Polisan, DYO",
      },
    ],
  },
  {
    id: "banyo-wc",
    no: "05",
    title: "Banyo ve WC",
    lead: "Islak hacimlerde yüzey, vitrifiye ve armatür standardı.",
    items: [
      {
        title: "Zemin",
        detail: "Porselen veya granit seramik.",
        brands: "Vitra, Çanakkale Seramik, Seranit",
      },
      {
        title: "Duvar",
        detail:
          "Aynı grupta porselen/granit seramik; cam tekstili üzerinde su bazlı boya kullanılan alanlar.",
      },
      {
        title: "Tavan",
        detail: "Alçı panel asma tavan.",
      },
      {
        title: "Vitrifiye",
        detail: "Gömme rezervuar ile birlikte vitrifiye grubu.",
        brands: "Vitra, Duravit, Kale, Serel, Creavit",
      },
      {
        title: "Armatürler",
        detail: "Seri banyo armatürleri.",
        brands: "Artema, ECA, Kale",
      },
      {
        title: "Banyo dolabı ve ayna",
        detail: "MDF gövdeli banyo dolapları ve Flotal ayna.",
      },
      {
        title: "Duş kabini",
        detail: "Panelduş temperli cam duş kabini.",
      },
    ],
  },
  {
    id: "mutfak",
    no: "06",
    title: "Mutfak",
    lead: "Mutfakta yüzeyler, dolap ve ankastre ürün standardı.",
    items: [
      {
        title: "Zemin",
        detail: "Porselen veya granit seramik.",
        brands: "Vitra, Çanakkale Seramik, Seranit",
      },
      {
        title: "Duvar ve tavan",
        detail: "Belirtilen boya sistemleriyle alçı ve saten sıva.",
      },
      {
        title: "Dolaplar",
        detail: "Mutfak dolabı.",
        brands: "Vanucci veya özel üretim",
      },
      {
        title: "Tezgâh",
        detail: "Kompozit taş tezgâh.",
        brands: "Çimstone",
      },
      {
        title: "Eviye",
        detail: "Mutfak eviyesi.",
        brands: "Teka veya Franke",
      },
      {
        title: "Batarya",
        detail: "Paslanmaz çelik veya krom batarya.",
        brands: "Artema, ECA, Kale, Teka, Franke",
      },
      {
        title: "Ankastre ürünler",
        detail: "Fırın, ocak ve davlumbaz.",
        brands: "Bosch, Siemens veya Franke",
      },
    ],
  },
  {
    id: "mekanik-elektrik",
    no: "07",
    title: "Mekanik ve elektrik tesisatı",
    lead: "Isıtma, sıhhi tesisat, elektrik, güvenlik ve asansör altyapısı.",
    items: [
      {
        title: "Isıtma",
        detail: "Hermetik kombi.",
        brands: "Buderus, Vaillant, Daikin, Viessmann, Baymak, Demirdöküm",
      },
      {
        title: "Kalorifer tesisatı",
        detail: "PEX kılıflı kalorifer borusu.",
        brands: "Dizayn Grup, Fırat, Kalde",
      },
      {
        title: "Radyatörler",
        detail: "Panel radyatör; banyolarda krom havlupan.",
        brands: "Copa veya Demirdöküm",
      },
      {
        title: "Klima",
        detail: "Salon için multi sistem klima.",
        brands: "Daikin veya Airfel",
      },
      {
        title: "Sıhhi tesisat",
        detail: "Sessiz atık su boruları ve PPRC sıhhi tesisat.",
        brands: "Wavin, Dizayn Grup, Fırat, Kalde",
      },
      {
        title: "Hidrofor",
        detail: "Bina hidrofor sistemi.",
        brands: "Wilo, Grundfos, Standart, Mas, Etna, Baymak",
      },
      {
        title: "Elektrik aksesuarları",
        detail: "Anahtar, priz ve tesisat aksesuarları.",
        brands:
          "Legrand, Siemens, Eaton, Makar, Pelsan, İkizler, Pedaş, Wiko, Schneider Electric",
      },
      {
        title: "Kablolar",
        detail: "Halojensiz kablo.",
        brands: "HES, Nexans, Prysmian, Siemens, Özgür, Vatan",
      },
      {
        title: "Jeneratör",
        detail: "Tüm bina ve daireleri besleyen jeneratör.",
        brands: "Aksa veya Teksan",
      },
      {
        title: "Görüntülü interkom",
        detail:
          "Daire–ana kapı, daire–garaj ve apartman görevlisi görüşmelerini destekleyen renkli görüntülü dijital interkom.",
      },
      {
        title: "Güvenlik sistemleri",
        detail:
          "Hırsız alarm sistemi altyapısı; bina ve otopark girişlerinde CCTV izleme ve kayıt sistemi.",
      },
      {
        title: "TV ve telefon altyapısı",
        detail:
          "Merkezi uydu TV ve kablo TV altyapısı; her daireye iki telefon hattı altyapısı.",
      },
      {
        title: "Asansör",
        detail: "Otomatik kapılı yeni nesil asansör.",
        brands: "Thyssen, Otis, Schindler veya Kone",
      },
    ],
  },
  {
    id: "ortak-alanlar",
    no: "08",
    title: "Ortak alanlar ve peyzaj",
    lead: "Otopark, giriş, merdiven ve dış mekân düzenlemesi.",
    items: [
      {
        title: "Garaj kapısı",
        detail: "Uzaktan kumandalı seksiyonel garaj kapısı.",
      },
      {
        title: "Tesisat odaları",
        detail: "Seramik zeminli elektrik ve mekanik tesisat odası.",
      },
      {
        title: "Ortak alan kaplamaları",
        detail:
          "Doğal taş kaplama bina girişi, kat sahanlıkları ve merdivenler.",
      },
      {
        title: "Korkuluklar",
        detail:
          "Dekoratif korkuluk: satine paslanmaz çelik, elektrostatik boyalı kutu profil, alüminyum veya ahşap küpeşte.",
      },
      {
        title: "Peyzaj",
        detail:
          "Özel peyzaj projesine göre sert zemin ve bahçe düzenlemesi.",
      },
      {
        title: "Su deposu",
        detail: "Ortak modüler su deposu.",
      },
    ],
  },
];
