const blocks = [
  { x: 0, w: 74, h: 118 },
  { x: 74, w: 52, h: 168 },
  { x: 126, w: 86, h: 138 },
  { x: 212, w: 44, h: 196 },
  { x: 256, w: 96, h: 152 },
  { x: 352, w: 58, h: 110 },
  { x: 410, w: 78, h: 176 },
  { x: 488, w: 48, h: 132 },
  { x: 536, w: 92, h: 204 },
  { x: 628, w: 52, h: 148 },
  { x: 680, w: 84, h: 122 },
  { x: 764, w: 46, h: 182 },
  { x: 810, w: 98, h: 142 },
  { x: 908, w: 54, h: 128 },
  { x: 962, w: 82, h: 190 },
  { x: 1044, w: 48, h: 116 },
  { x: 1092, w: 90, h: 162 },
  { x: 1182, w: 54, h: 138 },
  { x: 1236, w: 86, h: 198 },
  { x: 1322, w: 50, h: 124 },
  { x: 1372, w: 96, h: 156 },
  { x: 1468, w: 56, h: 184 },
  { x: 1524, w: 76, h: 132 },
];

const baseline = 300;

export function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 340"
      fill="none"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <line
        pathLength={1}
        className="draw"
        style={{ transitionDelay: "120ms" }}
        x1={0}
        y1={baseline}
        x2={1600}
        y2={baseline}
        stroke="currentColor"
        strokeWidth={1}
      />

      {blocks.map((block, index) => (
        <g key={block.x}>
          <rect
            pathLength={1}
            className="draw"
            style={{ transitionDelay: `${180 + index * 55}ms` }}
            x={block.x}
            y={baseline - block.h}
            width={block.w}
            height={block.h}
            stroke="currentColor"
            strokeWidth={1}
          />
          {Array.from(
            { length: Math.max(1, Math.floor(block.h / 44)) },
            (_, floor) => (
              <line
                key={floor}
                pathLength={1}
                className="draw"
                style={{ transitionDelay: `${220 + index * 55 + floor * 40}ms` }}
                x1={block.x + block.w * 0.25}
                y1={baseline - 30 - floor * 34}
                x2={block.x + block.w * 0.75}
                y2={baseline - 30 - floor * 34}
                stroke="currentColor"
                strokeWidth={1}
                opacity={0.45}
              />
            ),
          )}
        </g>
      ))}

      <g
        pathLength={1}
        className="draw"
        style={{ transitionDelay: "700ms" }}
        stroke="currentColor"
        strokeWidth={1}
      >
        <line x1={1006} y1={baseline - 116} x2={1006} y2={baseline - 236} />
        <line x1={986} y1={baseline - 236} x2={1026} y2={baseline - 236} />
        <line x1={1006} y1={baseline - 236} x2={1006} y2={baseline - 268} />
        <line x1={998} y1={baseline - 250} x2={1014} y2={baseline - 250} />
        <line x1={994} y1={baseline - 108} x2={1018} y2={baseline - 108} />
      </g>

      <g
        className="draw"
        style={{ transitionDelay: "860ms" }}
        stroke="currentColor"
        strokeWidth={1}
      >
        <path pathLength={1} d="M1420 300 L1420 96 L1576 96" />
        <path pathLength={1} d="M1420 96 L1420 150" opacity={0.5} />
        <path pathLength={1} d="M1576 96 L1576 128" />
        <rect
          pathLength={1}
          x={1568}
          y={128}
          width={16}
          height={12}
          strokeWidth={1}
        />
      </g>

      <g
        className="draw"
        style={{ transitionDelay: "1050ms" }}
        stroke="var(--color-brass)"
        strokeWidth={1}
        opacity={0.75}
      >
        <path pathLength={1} d="M60 254 q14 -10 28 0" />
        <path pathLength={1} d="M112 236 q12 -8 24 0" />
        <path pathLength={1} d="M1388 210 q12 -8 24 0" />
      </g>
    </svg>
  );
}
