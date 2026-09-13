import type { ReactElement } from "react";

export type ServiceSheetVariant =
  | "kentsel-donusum"
  | "kat-karsiligi-insaat"
  | "anahtar-teslim-insaat"
  | "tadilat-renovasyon"
  | "villa-mustakil-yapi"
  | "deprem-guclendirme";

const ink = {
  stroke: "currentColor",
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const brass = { ...ink, stroke: "var(--color-brass)" };

/* Pafta zemini: olcek kareleri, ic cerceve ve tesviye nisanlari. */
function SheetFrame() {
  return (
    <>
      <g stroke="currentColor" strokeWidth={0.75} opacity={0.13}>
        {[56, 112, 168, 224, 280, 336, 392, 448, 504].map((x) => (
          <line key={`v-${x}`} x1={x} y1={18} x2={x} y2={342} />
        ))}
        {[74, 130, 186, 242, 298].map((y) => (
          <line key={`h-${y}`} x1={28} y1={y} x2={532} y2={y} />
        ))}
      </g>
      <rect
        x={28}
        y={18}
        width={504}
        height={324}
        stroke="currentColor"
        strokeWidth={1}
        opacity={0.26}
      />
      <g stroke="currentColor" strokeWidth={1} opacity={0.42}>
        {[
          [44, 34],
          [516, 34],
          [44, 326],
          [516, 326],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <line x1={x - 5} y1={y} x2={x + 5} y2={y} />
            <line x1={x} y1={y - 5} x2={x} y2={y + 5} />
          </g>
        ))}
      </g>
    </>
  );
}

function Label({
  x,
  y,
  children,
  size = 8,
  tone = "ink",
  anchor = "start",
}: {
  x: number;
  y: number;
  children: string;
  size?: number;
  tone?: "ink" | "brass";
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      letterSpacing={1.7}
      textAnchor={anchor}
      fill={tone === "brass" ? "var(--color-brass)" : "currentColor"}
      opacity={tone === "brass" ? 0.95 : 0.68}
      stroke="none"
    >
      {children}
    </text>
  );
}

function CheckMark({ x, y }: { x: number; y: number }) {
  return (
    <path
      d={`M${x} ${y} l4 4 l8 -9`}
      stroke="var(--color-brass)"
      strokeWidth={1.4}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

/* 01 · Kentsel donusum: mevcut yapi, donusum oku ve yeni yapi. */
function KentselDonusum() {
  const newFloors = [150, 188, 226, 264];

  return (
    <>
      <line
        x1={48}
        y1={300}
        x2={512}
        y2={300}
        {...ink}
        strokeWidth={1}
        opacity={0.4}
      />

      <rect
        x={70}
        y={196}
        width={110}
        height={104}
        {...ink}
        strokeWidth={1.25}
        strokeDasharray="7 5"
        opacity={0.8}
      />
      <line x1={70} y1={248} x2={180} y2={248} {...ink} opacity={0.35} />
      {[0, 1].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`old-${row}-${col}`}
            x={80 + col * 32}
            y={208 + row * 52}
            width={18}
            height={22}
            {...ink}
            opacity={0.35}
          />
        )),
      )}
      <polyline
        pathLength={1}
        className="draw"
        points="124,198 116,228 130,254 118,292"
        {...brass}
        strokeWidth={1.3}
      />
      <Label x={70} y={186}>
        MEVCUT YAPI
      </Label>

      <g {...brass} strokeWidth={1.4}>
        <line x1={206} y1={244} x2={282} y2={244} />
        <path d="M282 244 l-9 -5 M282 244 l-9 5" />
      </g>
      <Label x={208} y={232} tone="brass">
        6306
      </Label>
      <Label x={208} y={266} tone="brass">
        DÖNÜŞÜM
      </Label>

      <rect
        x={312}
        y={112}
        width={150}
        height={188}
        {...ink}
        strokeWidth={1.5}
      />
      <line x1={302} y1={112} x2={472} y2={112} {...ink} strokeWidth={1.5} />
      <line x1={312} y1={104} x2={462} y2={104} {...ink} opacity={0.5} />
      {newFloors.map((y) => (
        <line
          key={`slab-${y}`}
          x1={312}
          y1={y}
          x2={462}
          y2={y}
          {...ink}
          opacity={0.28}
        />
      ))}
      {[126, 164, 202, 240, 278].map((y) => (
        <g key={`balcony-${y}`}>
          <rect
            x={462}
            y={y}
            width={26}
            height={16}
            {...ink}
            opacity={0.5}
          />
          <line x1={471} y1={y} x2={471} y2={y + 16} {...ink} opacity={0.35} />
          <line x1={479} y1={y} x2={479} y2={y + 16} {...ink} opacity={0.35} />
        </g>
      ))}
      <rect
        x={368}
        y={272}
        width={38}
        height={28}
        {...brass}
        strokeWidth={1.2}
      />
      <line x1={387} y1={272} x2={387} y2={300} {...brass} strokeWidth={1} />
      <Label x={312} y={96}>
        YENİ YAPI
      </Label>

      <g {...brass} strokeWidth={1.2} opacity={0.9}>
        <line x1={492} y1={300} x2={492} y2={62} />
        <line x1={492} y1={62} x2={408} y2={62} />
        <line x1={492} y1={62} x2={516} y2={74} />
        <line x1={408} y1={62} x2={408} y2={112} />
        <rect x={402} y={112} width={12} height={9} />
        <line x1={484} y1={300} x2={500} y2={300} />
      </g>

      <g {...ink} opacity={0.45}>
        <line x1={70} y1={322} x2={462} y2={322} />
        <line x1={70} y1={316} x2={70} y2={328} />
        <line x1={462} y1={316} x2={462} y2={328} />
      </g>
      <Label x={266} y={338} anchor="middle">
        DÖNÜŞÜM TAKVİMİ · 24–30 AY
      </Label>
    </>
  );
}

/* 02 · Kat karsiligi: parsel, pay oranlari ve blok izi. */
function KatKarsiligi() {
  return (
    <>
      <polygon
        points="72,74 500,66 508,286 64,296"
        {...brass}
        strokeWidth={1.2}
        strokeDasharray="8 6"
        opacity={0.85}
      />
      <polygon
        points="72,74 500,66 508,286 64,296"
        fill="var(--color-brass)"
        opacity={0.05}
        stroke="none"
      />

      <line
        x1={286}
        y1={70}
        x2={292}
        y2={291}
        {...brass}
        strokeWidth={1.1}
        opacity={0.7}
      />

      <Label x={104} y={116}>
        MALİK PAYI
      </Label>
      <text
        x={102}
        y={152}
        fontSize={26}
        fill="currentColor"
        opacity={0.8}
        letterSpacing={1}
      >
        40%
      </text>
      <Label x={332} y={116}>
        YÜKLENİCİ PAYI
      </Label>
      <text
        x={330}
        y={152}
        fontSize={26}
        fill="var(--color-brass)"
        letterSpacing={1}
      >
        60%
      </text>

      <rect
        x={186}
        y={196}
        width={128}
        height={78}
        {...ink}
        strokeWidth={1.5}
      />
      <rect
        x={234}
        y={214}
        width={32}
        height={60}
        {...brass}
        strokeWidth={1}
        strokeDasharray="4 4"
      />
      <line x1={186} y1={236} x2={314} y2={236} {...ink} opacity={0.3} />
      <Label x={186} y={188}>
        BLOK İZİ · 28 DAİRE
      </Label>
      <g {...ink} opacity={0.5}>
        <line x1={330} y1={214} x2={386} y2={214} />
        <line x1={386} y1={214} x2={386} y2={232} />
      </g>
      <Label x={392} y={210}>
        KAKS 2.07
      </Label>
      <Label x={392} y={224}>
        6 KAT
      </Label>

      <g {...ink} opacity={0.45}>
        <line x1={72} y1={50} x2={500} y2={42} />
        <line x1={72} y1={44} x2={72} y2={56} />
        <line x1={500} y1={36} x2={500} y2={48} />
      </g>
      <Label x={286} y={34} anchor="middle">
        PARSEL · 20.00 m
      </Label>

      <g {...ink} opacity={0.45}>
        <line x1={524} y1={66} x2={524} y2={286} />
        <line x1={518} y1={66} x2={530} y2={66} />
        <line x1={518} y1={286} x2={530} y2={286} />
      </g>
      <text
        x={538}
        y={176}
        fontSize={8}
        letterSpacing={1.7}
        fill="currentColor"
        opacity={0.68}
        transform="rotate(-90 538 176)"
        textAnchor="middle"
      >
        30.00 m
      </text>

      <g {...ink} opacity={0.6}>
        <line x1={60} y1={330} x2={108} y2={330} />
        {[60, 76, 92, 108].map((x) => (
          <line key={x} x1={x} y1={326} x2={x} y2={334} />
        ))}
      </g>
      <Label x={120} y={334}>
        NOTER ONAYLI SÖZLEŞME
      </Label>
    </>
  );
}

/* 03 · Anahtar teslim: bina kesiti, teslim listesi ve anahtar plakasi. */
function AnahtarTeslim() {
  return (
    <>
      <line
        x1={48}
        y1={300}
        x2={512}
        y2={300}
        {...ink}
        strokeWidth={1}
        opacity={0.4}
      />

      <rect
        x={70}
        y={148}
        width={206}
        height={152}
        {...ink}
        strokeWidth={1.5}
      />
      <line x1={60} y1={148} x2={286} y2={148} {...ink} strokeWidth={1.5} />
      <line x1={70} y1={140} x2={276} y2={140} {...ink} opacity={0.5} />
      <line x1={70} y1={198} x2={276} y2={198} {...ink} opacity={0.3} />
      <line x1={70} y1={248} x2={276} y2={248} {...ink} opacity={0.3} />

      {[0, 1, 2].map((floor) =>
        [0, 1].map((col) => (
          <rect
            key={`win-${floor}-${col}`}
            x={88 + col * 42}
            y={164 + floor * 50}
            width={26}
            height={22}
            {...ink}
            opacity={0.4}
          />
        )),
      )}

      <polyline
        points="186,300 186,264 214,264 214,228 242,228 242,300"
        {...ink}
        strokeWidth={1}
        opacity={0.5}
      />

      <rect
        x={92}
        y={272}
        width={26}
        height={28}
        {...brass}
        strokeWidth={1.3}
      />
      <path
        pathLength={1}
        className="draw"
        d="M118 272 A 26 26 0 0 0 92 246"
        {...brass}
        strokeWidth={1.1}
      />
      <g {...brass} strokeWidth={1} opacity={0.7}>
        <line x1={118} y1={286} x2={166} y2={286} />
        <line x1={166} y1={286} x2={166} y2={276} />
      </g>
      <Label x={172} y={282} tone="brass">
        TESLİM
      </Label>

      <rect
        x={396}
        y={54}
        width={104}
        height={62}
        {...brass}
        strokeWidth={1}
        strokeDasharray="5 5"
        opacity={0.7}
      />
      <g {...brass} strokeWidth={1.4}>
        <circle cx={424} cy={76} r={9} />
        <line x1={433} y1={76} x2={478} y2={76} />
        <line x1={466} y1={76} x2={466} y2={86} />
        <line x1={474} y1={76} x2={474} y2={84} />
      </g>
      <Label x={448} y={106} anchor="middle" tone="brass">
        ANAHTAR
      </Label>

      <Label x={396} y={148}>
        TESLİM LİSTESİ
      </Label>
      <g opacity={0.75}>
        {["MİMARİ", "ELEKTRİK", "TESİSAT", "İNCE İŞLER"].map((item, index) => (
          <g key={item}>
            <CheckMark x={396} y={168 + index * 32} />
            <Label x={420} y={174 + index * 32} size={9}>
              {item}
            </Label>
            <line
              x1={392}
              y1={186 + index * 32}
              x2={506}
              y2={186 + index * 32}
              {...ink}
              strokeWidth={0.75}
              opacity={0.2}
            />
          </g>
        ))}
      </g>

      <g {...ink} opacity={0.45}>
        <line x1={52} y1={148} x2={52} y2={300} />
        <line x1={46} y1={148} x2={58} y2={148} />
        <line x1={46} y1={300} x2={58} y2={300} />
      </g>
      <text
        x={40}
        y={224}
        fontSize={8}
        letterSpacing={1.7}
        fill="currentColor"
        opacity={0.68}
        transform="rotate(-90 40 224)"
        textAnchor="middle"
      >
        9.60 m
      </text>
    </>
  );
}

/* 04 · Tadilat: katmanlara ayrilmis duvar ve plan parçasi. */
function Tadilat() {
  const hatch = Array.from({ length: 9 }, (_, i) => 120 + i * 10);

  return (
    <>
      <line
        x1={48}
        y1={296}
        x2={512}
        y2={296}
        {...ink}
        strokeWidth={1}
        opacity={0.4}
      />

      <rect
        x={104}
        y={96}
        width={86}
        height={200}
        {...ink}
        strokeWidth={1.4}
      />
      <g {...ink} strokeWidth={0.75} opacity={0.35}>
        {hatch.map((x, index) => (
          <line
            key={`h-${x}`}
            x1={x}
            y1={index % 2 === 0 ? 96 : 296}
            x2={x + 30}
            y2={index % 2 === 0 ? 126 : 266}
          />
        ))}
      </g>
      <Label x={104} y={86}>
        MEVCUT DUVAR
      </Label>

      <rect
        x={214}
        y={78}
        width={54}
        height={200}
        {...ink}
        strokeWidth={1.2}
        strokeDasharray="6 5"
        opacity={0.8}
      />
      <Label x={206} y={68}>
        YALITIM
      </Label>

      <rect
        x={300}
        y={62}
        width={28}
        height={200}
        {...brass}
        strokeWidth={1.5}
      />
      <rect
        x={300}
        y={62}
        width={28}
        height={200}
        fill="var(--color-brass)"
        opacity={0.14}
        stroke="none"
      />
      <Label x={292} y={52} tone="brass">
        YENİ YÜZEY
      </Label>

      <g {...ink} strokeWidth={0.9} opacity={0.4}>
        <line x1={190} y1={110} x2={104} y2={110} />
        <line x1={268} y1={92} x2={214} y2={92} />
        <line x1={328} y1={72} x2={392} y2={72} />
      </g>

      <rect
        x={376}
        y={132}
        width={126}
        height={92}
        {...ink}
        strokeWidth={1.3}
      />
      <line x1={376} y1={178} x2={436} y2={178} {...ink} opacity={0.45} />
      <line x1={436} y1={132} x2={436} y2={224} {...ink} opacity={0.45} />
      <rect
        x={436}
        y={178}
        width={66}
        height={46}
        fill="var(--color-brass)"
        opacity={0.12}
        stroke="none"
      />
      <Label x={444} y={206} tone="brass">
        MUTFAK
      </Label>
      <Label x={376} y={124}>
        UYGULAMA PLANI
      </Label>

      <g {...ink} strokeWidth={1.3}>
        <line x1={392} y1={266} x2={424} y2={246} />
        <rect x={416} y={234} width={30} height={16} />
        <line x1={446} y1={242} x2={470} y2={242} />
      </g>
      <Label x={392} y={288}>
        YIKIM VE UYGULAMA
      </Label>

      <g {...ink} opacity={0.45}>
        <line x1={104} y1={320} x2={328} y2={320} />
        <line x1={104} y1={314} x2={104} y2={326} />
        <line x1={328} y1={314} x2={328} y2={326} />
      </g>
      <Label x={216} y={336} anchor="middle" tone="brass">
        0–8 HAFTA
      </Label>
    </>
  );
}

/* 05 · Villa: vaziyet plani, havuz ve bahce. */
function Villa() {
  const trees = [
    [92, 100],
    [120, 268],
    [468, 108],
    [486, 262],
    [66, 190],
  ];

  return (
    <>
      <rect
        x={56}
        y={56}
        width={432}
        height={242}
        {...brass}
        strokeWidth={1}
        strokeDasharray="9 7"
        opacity={0.6}
      />
      <Label x={56} y={46} tone="brass">
        ARSA SINIRI · 4.100 m²
      </Label>

      <path
        pathLength={1}
        className="draw"
        d="M56 250 C 120 240, 150 214, 176 196"
        {...ink}
        strokeWidth={1}
        opacity={0.5}
      />
      <Label x={64} y={238}>
        TAŞIT YOLU
      </Label>

      <rect
        x={168}
        y={118}
        width={148}
        height={86}
        {...ink}
        strokeWidth={1.6}
      />
      <g {...ink} strokeWidth={0.75} opacity={0.3}>
        {[0, 1, 2, 3].map((i) => (
          <line
            key={`roof-${i}`}
            x1={180 + i * 34}
            y1={118}
            x2={158 + i * 34}
            y2={204}
          />
        ))}
      </g>
      <rect
        x={316}
        y={150}
        width={54}
        height={54}
        {...ink}
        strokeWidth={1}
        strokeDasharray="5 4"
        opacity={0.7}
      />
      <Label x={304} y={142}>
        TERAS
      </Label>

      <rect
        x={394}
        y={188}
        width={74}
        height={44}
        rx={8}
        {...brass}
        strokeWidth={1.3}
      />
      <g {...brass} strokeWidth={1} opacity={0.65}>
        <path d="M404 202 q8 -6 16 0 t16 0 t16 0" />
        <path d="M404 216 q8 -6 16 0 t16 0 t16 0" />
      </g>
      <Label x={394} y={180} tone="brass">
        HAVUZ
      </Label>

      {trees.map(([cx, cy]) => (
        <g key={`${cx}-${cy}`} {...ink} opacity={0.5}>
          <circle cx={cx} cy={cy} r={13} />
          <circle cx={cx} cy={cy} r={4} opacity={0.6} />
        </g>
      ))}

      <g {...ink} opacity={0.55}>
        <line x1={548} y1={92} x2={548} y2={44} />
        <path d="M548 44 L542 58 L554 58 Z" fill="currentColor" opacity={0.8} />
      </g>
      <Label x={548} y={110} anchor="middle">
        K
      </Label>

      <g {...ink} opacity={0.45}>
        <line x1={56} y1={330} x2={488} y2={330} />
        <line x1={56} y1={324} x2={56} y2={336} />
        <line x1={488} y1={324} x2={488} y2={336} />
      </g>
      <Label x={272} y={344} anchor="middle">
        6 VİLLA · PEYZAJ VE HAVUZ DAHİL
      </Label>
    </>
  );
}

/* 06 · Guclendirme: karkas, perde ve kapasite egrisi. */
function Guclendirme() {
  const columns = [70, 170, 270, 370];
  const beams = [90, 160, 230, 300];

  return (
    <>
      <g {...ink} strokeWidth={1.25} opacity={0.65}>
        {columns.map((x) => (
          <line key={`col-${x}`} x1={x} y1={90} x2={x} y2={300} />
        ))}
        {beams.map((y) => (
          <line key={`beam-${y}`} x1={70} y1={y} x2={370} y2={y} />
        ))}
      </g>

      <rect
        x={70}
        y={230}
        width={100}
        height={70}
        fill="var(--color-brass)"
        opacity={0.14}
        stroke="none"
      />
      <g {...brass} strokeWidth={1} opacity={0.7}>
        {Array.from({ length: 6 }, (_, i) => (
          <line
            key={`wall-${i}`}
            x1={70 + i * 17}
            y1={300}
            x2={87 + i * 17}
            y2={230}
          />
        ))}
      </g>
      <rect
        x={70}
        y={230}
        width={100}
        height={70}
        {...brass}
        strokeWidth={1.4}
      />
      <Label x={70} y={320} tone="brass">
        PERDE TAKVİYESİ
      </Label>

      <g {...brass} strokeWidth={1} opacity={0.75}>
        {[110, 130, 150].map((y) => (
          <g key={`wrap-${y}`}>
            <line x1={258} y1={y} x2={282} y2={y + 20} />
            <line x1={282} y1={y} x2={258} y2={y + 20} />
          </g>
        ))}
      </g>
      <g {...ink} strokeWidth={0.9} opacity={0.45}>
        <line x1={282} y1={132} x2={318} y2={120} />
      </g>
      <Label x={322} y={118}>
        KARBON SARIM
      </Label>

      <g {...brass} strokeWidth={1.3} opacity={0.85}>
        {[110, 250, 350].map((x) => (
          <g key={`force-${x}`}>
            <line x1={x} y1={36} x2={x} y2={74} />
            <path d={`M${x} 78 l-5 -9 M${x} 78 l5 -9`} />
          </g>
        ))}
      </g>
      <Label x={70} y={28}>
        DEPREM YÜKÜ
      </Label>

      <g {...ink} strokeWidth={1} opacity={0.5}>
        <line x1={408} y1={300} x2={512} y2={300} />
        <line x1={408} y1={300} x2={408} y2={196} />
      </g>
      <path
        pathLength={1}
        className="draw"
        d="M408 300 C 432 296, 452 268, 470 240 S 500 204, 510 200"
        {...brass}
        strokeWidth={1.5}
      />
      <circle cx={408} cy={300} r={3} fill="currentColor" opacity={0.6} />
      <circle cx={510} cy={200} r={3} fill="var(--color-brass)" />
      <Label x={408} y={188}>
        KAPASİTE EĞRİSİ
      </Label>
      <text
        x={398}
        y={250}
        fontSize={8}
        letterSpacing={1.6}
        fill="currentColor"
        opacity={0.6}
        transform="rotate(-90 398 250)"
        textAnchor="middle"
      >
        TABAN KESME
      </text>
      <Label x={460} y={318} anchor="middle">
        DEPLASMAN
      </Label>
    </>
  );
}

const variants: Record<ServiceSheetVariant, () => ReactElement> = {
  "kentsel-donusum": KentselDonusum,
  "kat-karsiligi-insaat": KatKarsiligi,
  "anahtar-teslim-insaat": AnahtarTeslim,
  "tadilat-renovasyon": Tadilat,
  "villa-mustakil-yapi": Villa,
  "deprem-guclendirme": Guclendirme,
};

export function ServiceSheetArt({
  variant,
  className = "",
}: {
  variant: ServiceSheetVariant;
  className?: string;
}) {
  const Drawing = variants[variant] ?? KentselDonusum;

  return (
    <svg
      viewBox="0 0 560 360"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <SheetFrame />
      <Drawing />
    </svg>
  );
}
