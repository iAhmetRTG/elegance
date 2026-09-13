export type ConstructionStage = {
  /** Uzantısız kare adı; desktop/ ve mobile/ klasörlerinde aynıdır. */
  file: string;
  /** Sahne üzerinde okunan aşama adı. */
  label: string;
};

/* Kareler 1536×1400 kanvasta, taban çizgisi y = 1299 ve yatay merkez x = 768
   hizasında üretildi. Sıra korunduğu sürece yapı scroll boyunca yerinde yükselir. */
export const constructionStages: ConstructionStage[] = [
  { file: "01-excavation", label: "Kazı ve hafriyat" },
  { file: "02-pilecaps-rebar", label: "Kazık başlıkları ve donatı" },
  { file: "03-foundation", label: "Radye temel" },
  { file: "04-ground-columns", label: "Zemin kat kolonları" },
  { file: "05-lower-structure", label: "Kaba yapı · ilk katlar" },
  { file: "06-two-floor-structure", label: "Kaba yapı · iki kat" },
  { file: "07-mid-structure", label: "Kaba yapı · üç kat" },
  { file: "08-four-floor-structure", label: "Kaba yapı · dört kat" },
  { file: "09-full-structure", label: "Taşıyıcı sistem tamam" },
  { file: "10-infill-installations", label: "Dolgu duvar ve tesisat" },
  { file: "11-facade-start", label: "Cephe başlangıcı" },
  { file: "12-facade-progress", label: "Cephe kaplaması" },
  { file: "13-near-complete", label: "Bitişe yakın" },
  { file: "14-complete", label: "Anahtar teslim" },
];

export const constructionFrames = {
  /** Bu genişliğin altında mobil kare seti kullanılır. */
  breakpoint: 720,
  desktop: {
    path: "/sequences/construction/desktop/",
    width: 1536,
    height: 1400,
  },
  mobile: {
    path: "/sequences/construction/mobile/",
    width: 768,
    height: 700,
  },
} as const;
