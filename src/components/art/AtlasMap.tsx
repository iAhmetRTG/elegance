export type AtlasPin = {
  slug: string;
  name: string;
  x: number;
  y: number;
  anchor: "start" | "end" | "middle";
  dx: number;
  dy: number;
};

export const atlasPins: AtlasPin[] = [
  { slug: "florya", name: "FLORYA", x: 120, y: 330, anchor: "start", dx: 20, dy: 5 },
  { slug: "yesilkoy", name: "YEŞİLKÖY", x: 222, y: 310, anchor: "start", dx: 20, dy: 5 },
  { slug: "atakoy", name: "ATAKÖY", x: 356, y: 290, anchor: "middle", dx: 0, dy: 30 },
  {
    slug: "yesilyurt",
    name: "YEŞİLYURT",
    x: 286,
    y: 224,
    anchor: "middle",
    dx: 0,
    dy: -20,
  },
];

export const atlasCentre: AtlasPin = {
  slug: "bakirkoy",
  name: "BAKIRKÖY",
  x: 492,
  y: 206,
  anchor: "middle",
  dx: 0,
  dy: -26,
};

/* Coastal road and seafront share the same line; the sea sits below it. */
const coast =
  "M0 352 C 130 340, 240 322, 360 302 C 480 282, 600 292, 720 272";

const surf =
  "M0 366 C 130 354, 240 336, 360 316 C 480 296, 600 306, 720 286";

const seaPath = `${coast} L720 460 L0 460 Z`;

const highway = "M0 212 C 150 198, 320 186, 460 176 C 590 166, 660 176, 720 168";

const streets = [
  "M40 268 C 180 256, 320 240, 470 228",
  "M120 200 C 150 246, 168 286, 178 344",
  "M300 150 C 318 196, 330 240, 336 296",
  "M470 140 C 480 176, 486 190, 490 212",
  "M600 200 C 606 226, 612 244, 618 276",
  "M240 160 C 250 190, 258 206, 264 236",
];

const blocks: Array<[number, number, number, number]> = [
  [62, 246, 34, 22],
  [104, 268, 28, 18],
  [150, 244, 40, 24],
  [196, 262, 30, 18],
  [248, 250, 36, 22],
  [300, 238, 28, 20],
  [382, 232, 34, 22],
  [430, 220, 30, 18],
  [508, 246, 36, 22],
  [556, 236, 28, 18],
  [614, 250, 34, 22],
  [214, 196, 30, 20],
  [344, 190, 34, 22],
  [432, 160, 30, 20],
  [520, 176, 36, 22],
  [596, 186, 28, 18],
  [92, 158, 28, 20],
  [148, 132, 34, 22],
  [280, 106, 30, 20],
  [336, 128, 26, 18],
  [400, 118, 32, 20],
  [470, 132, 28, 18],
  [544, 146, 32, 20],
  [612, 158, 26, 18],
  [250, 176, 24, 16],
  [660, 196, 30, 18],
];

const parks = [
  "M56 148 L166 116 L202 166 L92 200 Z",
  "M552 112 L646 92 L682 142 L584 168 Z",
  "M236 296 L330 282 L352 318 L244 332 Z",
];

const rail =
  "M0 262 C 150 250, 320 236, 470 224 C 600 214, 660 224, 720 216";

export function AtlasMap({
  className = "",
  active = null,
  onHover,
  onSelect,
}: {
  className?: string;
  active?: string | null;
  onHover?: (slug: string | null) => void;
  onSelect?: (slug: string) => void;
}) {
  const pins = [...atlasPins, atlasCentre];

  return (
    <svg
      viewBox="0 0 720 460"
      fill="none"
      className={className}
      role="img"
      aria-label="Bakırköy ve çevresindeki hizmet bölgeleri haritası"
    >
      <defs>
        <pattern
          id="atlas-sea-hatch"
          width="9"
          height="9"
          patternTransform="rotate(-45)"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="9"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.16"
          />
        </pattern>
        <pattern
          id="atlas-park"
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="0.9" fill="currentColor" opacity="0.35" />
        </pattern>
      </defs>

      <g stroke="currentColor" strokeWidth={0.75} opacity={0.12}>
        {[80, 160, 240, 320, 400, 480, 560, 640].map((x) => (
          <line key={`v-${x}`} x1={x} y1={0} x2={x} y2={460} />
        ))}
        {[70, 140, 210, 280, 350, 420].map((y) => (
          <line key={`h-${y}`} x1={0} y1={y} x2={720} y2={y} />
        ))}
      </g>

      <path d={seaPath} fill="var(--color-paper-deep)" opacity={0.75} />
      <path d={seaPath} fill="url(#atlas-sea-hatch)" />
      <path
        pathLength={1}
        className="draw"
        d={coast}
        stroke="currentColor"
        strokeWidth={1.75}
        opacity={0.85}
      />
      <path
        d={surf}
        stroke="var(--color-brass)"
        strokeWidth={1}
        strokeDasharray="6 8"
        opacity={0.5}
      />
      <text
        x={120}
        y={430}
        fontSize={11}
        letterSpacing={5}
        fill="currentColor"
        opacity={0.35}
      >
        MARMARA DENİZİ
      </text>

      <g stroke="currentColor" strokeWidth={0.9} opacity={0.22}>
        {streets.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      <g stroke="currentColor" strokeWidth={0.8} opacity={0.3}>
        {parks.map((d) => (
          <path key={d} d={d} fill="url(#atlas-park)" />
        ))}
      </g>

      <g stroke="currentColor" strokeWidth={0.9} opacity={0.42}>
        <path d={rail} />
        <path
          d="M0 266 C 150 254, 320 240, 470 228 C 600 218, 660 228, 720 220"
          opacity={0.7}
        />
      </g>
      <text
        x={556}
        y={238}
        fontSize={9}
        letterSpacing={2.6}
        fill="currentColor"
        opacity={0.5}
      >
        RAYLI SİSTEM
      </text>

      <g stroke="var(--color-brass)" strokeWidth={1.5} opacity={0.65}>
        <path pathLength={1} className="draw" d={highway} />
      </g>
      <g stroke="currentColor" strokeWidth={0.75} opacity={0.28}>
        {blocks.map(([x, y, width, height]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width={width} height={height} />
        ))}
      </g>
      <text
        x={14}
        y={204}
        fontSize={9}
        letterSpacing={3}
        fill="var(--color-brass)"
        opacity={0.75}
      >
        D100
      </text>

      <g stroke="var(--color-brass)" strokeWidth={1} opacity={0.55}>
        {pins.map((pin) => (
          <line
            key={`route-${pin.slug}`}
            x1={atlasCentre.x}
            y1={atlasCentre.y}
            x2={pin.x}
            y2={pin.y}
            strokeDasharray="3 7"
            opacity={active && active !== pin.slug ? 0.2 : 0.6}
          />
        ))}
      </g>

      {pins.map((pin) => {
        const isCentre = pin.slug === atlasCentre.slug;
        const isActive = active === pin.slug;
        const dimmed = Boolean(active) && !isActive;

        return (
          <g
            key={pin.slug}
            opacity={dimmed ? 0.32 : 1}
            className={onSelect ? "cursor-pointer" : undefined}
            role={onSelect ? "button" : undefined}
            tabIndex={onSelect ? 0 : undefined}
            aria-label={onSelect ? `${pin.name} bölgesini incele` : undefined}
            onMouseEnter={onHover ? () => onHover(pin.slug) : undefined}
            onMouseLeave={onHover ? () => onHover(null) : undefined}
            onFocus={onHover ? () => onHover(pin.slug) : undefined}
            onBlur={onHover ? () => onHover(null) : undefined}
            onClick={onSelect ? () => onSelect(pin.slug) : undefined}
            onKeyDown={
              onSelect
                ? (event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onSelect(pin.slug);
                    }
                  }
                : undefined
            }
          >
            {isActive ? (
              <circle
                cx={pin.x}
                cy={pin.y}
                r={isCentre ? 30 : 22}
                stroke="var(--color-brass)"
                strokeWidth={1}
                opacity={0.55}
              />
            ) : null}
            {isActive ? (
              <circle
                className="atlas-ping"
                cx={pin.x}
                cy={pin.y}
                r={isCentre ? 22 : 20}
                stroke="var(--color-brass)"
                strokeWidth={1.2}
              />
            ) : null}

            {isCentre ? (
              <>
                <rect
                  x={pin.x - 8}
                  y={pin.y - 8}
                  width={16}
                  height={16}
                  fill="var(--color-brass)"
                />
                <rect
                  x={pin.x - 16}
                  y={pin.y - 16}
                  width={32}
                  height={32}
                  stroke="currentColor"
                  strokeWidth={1}
                  opacity={0.45}
                />
              </>
            ) : (
              <>
                <circle
                  cx={pin.x}
                  cy={pin.y}
                  r={isActive ? 13 : 10}
                  stroke="currentColor"
                  strokeWidth={isActive ? 1.4 : 1}
                  opacity={isActive ? 0.9 : 0.38}
                />
                <circle
                  cx={pin.x}
                  cy={pin.y}
                  r={isActive ? 5.5 : 4}
                  fill="var(--color-brass)"
                />
              </>
            )}

            <text
              x={pin.x + pin.dx}
              y={pin.y + pin.dy}
              textAnchor={pin.anchor}
              fontSize={12}
              fontWeight={isActive ? 600 : 400}
              letterSpacing={2.6}
              fill="currentColor"
              opacity={isActive ? 1 : 0.85}
            >
              {pin.name}
            </text>
            {isCentre ? (
              <text
                x={pin.x}
                y={pin.y + 36}
                textAnchor="middle"
                fontSize={9}
                letterSpacing={2.4}
                fill="var(--color-brass)"
                opacity={0.85}
              >
                MERKEZ OFİS
              </text>
            ) : null}
          </g>
        );
      })}

      <g stroke="currentColor" strokeWidth={1} opacity={0.6}>
        <line x1={676} y1={94} x2={676} y2={40} />
        <path d="M676 40 L670 54 L682 54 Z" fill="currentColor" opacity={0.8} />
      </g>
      <text
        x={676}
        y={112}
        textAnchor="middle"
        fontSize={10}
        letterSpacing={2}
        fill="currentColor"
        opacity={0.6}
      >
        K
      </text>

      <g stroke="currentColor" strokeWidth={1} opacity={0.5}>
        <line x1={40} y1={96} x2={200} y2={96} />
        {[40, 80, 120, 160, 200].map((x) => (
          <line key={`scale-${x}`} x1={x} y1={90} x2={x} y2={102} />
        ))}
      </g>
      <text
        x={40}
        y={118}
        fontSize={9}
        letterSpacing={2}
        fill="currentColor"
        opacity={0.55}
      >
        0 — 1 KM
      </text>
    </svg>
  );
}
