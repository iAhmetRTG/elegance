const pins = [
  { name: "FLORYA", x: 96, y: 300, anchor: "start" as const, dx: 18, dy: 4 },
  { name: "YEŞİLKÖY", x: 188, y: 282, anchor: "start" as const, dx: 18, dy: 4 },
  { name: "ATAKÖY", x: 316, y: 264, anchor: "end" as const, dx: -18, dy: -10 },
  {
    name: "YEŞİLYURT",
    x: 236,
    y: 208,
    anchor: "start" as const,
    dx: 18,
    dy: 4,
  },
];

const office = { x: 420, y: 190 };

/* Bolge slug'i -> haritadaki pin adi. Bakirkoy merkez (ofis) ayri isaretlenir. */
const pinBySlug: Record<string, string> = {
  florya: "FLORYA",
  yesilkoy: "YEŞİLKÖY",
  atakoy: "ATAKÖY",
  yesilyurt: "YEŞİLYURT",
};

export function AreaMap({
  className = "",
  highlight,
}: {
  className?: string;
  highlight?: string;
}) {
  const activeName = highlight ? pinBySlug[highlight] : undefined;
  const centreActive = highlight === "bakirkoy";

  return (
    <svg
      viewBox="0 0 640 420"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth={0.75} opacity={0.14}>
        {[80, 160, 240, 320, 400, 480, 560].map((x) => (
          <line key={`v-${x}`} x1={x} y1={0} x2={x} y2={420} />
        ))}
        {[70, 140, 210, 280, 350].map((y) => (
          <line key={`h-${y}`} x1={0} y1={y} x2={640} y2={y} />
        ))}
      </g>

      <path
        pathLength={1}
        className="draw"
        d="M0 318 C 120 306 210 290 320 272 C 430 254 540 262 640 246"
        stroke="currentColor"
        strokeWidth={1.75}
        opacity={0.85}
      />

      <g stroke="currentColor" strokeWidth={1} opacity={0.28}>
        <path pathLength={1} className="draw" d="M24 352 q22 -8 44 0 t44 0" />
        <path pathLength={1} className="draw" d="M150 372 q22 -8 44 0 t44 0" />
        <path pathLength={1} className="draw" d="M330 388 q22 -8 44 0 t44 0" />
        <path pathLength={1} className="draw" d="M470 362 q22 -8 44 0 t44 0" />
        <path pathLength={1} className="draw" d="M540 396 q22 -8 44 0 t44 0" />
        <path pathLength={1} className="draw" d="M60 398 q22 -8 44 0 t44 0" />
      </g>

      <g stroke="var(--color-brass)" strokeWidth={1} opacity={0.6}>
        {pins.map((pin) => {
          const active = pin.name === activeName;
          const dimmed = Boolean(activeName) && !active;
          return (
            <line
              key={pin.name}
              x1={office.x}
              y1={office.y}
              x2={pin.x}
              y2={pin.y}
              strokeDasharray="3 6"
              opacity={dimmed ? 0.25 : active ? 1 : 0.6}
              strokeWidth={active ? 1.6 : 1}
            />
          );
        })}
        <line
          x1={office.x}
          y1={office.y}
          x2={office.x}
          y2={office.y}
          strokeDasharray="3 6"
        />
      </g>

      {pins.map((pin) => {
        const active = pin.name === activeName;
        const dimmed = Boolean(activeName) && !active;
        return (
          <g key={pin.name} opacity={dimmed ? 0.32 : 1}>
            {active ? (
              <circle
                cx={pin.x}
                cy={pin.y}
                r={19}
                stroke="var(--color-brass)"
                strokeWidth={1}
                opacity={0.55}
              />
            ) : null}
            <circle
              cx={pin.x}
              cy={pin.y}
              r={active ? 12 : 9}
              stroke="currentColor"
              strokeWidth={active ? 1.4 : 1}
              opacity={active ? 0.9 : 0.35}
            />
            <circle
              cx={pin.x}
              cy={pin.y}
              r={active ? 5 : 3.5}
              fill="var(--color-brass)"
            />
            <text
              x={pin.x + pin.dx}
              y={pin.y + pin.dy}
              textAnchor={pin.anchor}
              fontSize={11}
              fontWeight={active ? 600 : 400}
              letterSpacing={2.4}
              fill="currentColor"
              opacity={active ? 1 : 0.85}
            >
              {pin.name}
            </text>
          </g>
        );
      })}

      <g opacity={activeName && !centreActive ? 0.45 : 1}>
        {centreActive ? (
          <circle
            cx={office.x}
            cy={office.y}
            r={30}
            stroke="var(--color-brass)"
            strokeWidth={1.2}
            opacity={0.6}
          />
        ) : null}
        <rect
          x={office.x - 6}
          y={office.y - 6}
          width={12}
          height={12}
          fill="var(--color-brass)"
        />
        <rect
          x={office.x - 12}
          y={office.y - 12}
          width={24}
          height={24}
          stroke="currentColor"
          strokeWidth={1}
          opacity={0.4}
        />
        <text
          x={office.x}
          y={office.y - 26}
          textAnchor="middle"
          fontSize={11}
          letterSpacing={2.4}
          fill="currentColor"
          opacity={0.9}
        >
          BAKIRKÖY · MERKEZ
        </text>
      </g>

      <g stroke="currentColor" strokeWidth={1} opacity={0.65}>
        <line x1={576} y1={86} x2={576} y2={34} />
        <path d="M576 34 L570 48 L582 48 Z" fill="currentColor" opacity={0.8} />
        <text
          x={576}
          y={106}
          textAnchor="middle"
          fontSize={11}
          letterSpacing={2}
          fill="currentColor"
        >
          K
        </text>
      </g>

      <g stroke="currentColor" strokeWidth={1} opacity={0.5}>
        <line x1={40} y1={396} x2={152} y2={396} />
        {[40, 68, 96, 124, 152].map((x) => (
          <line key={x} x1={x} y1={392} x2={x} y2={400} />
        ))}
      </g>
    </svg>
  );
}
