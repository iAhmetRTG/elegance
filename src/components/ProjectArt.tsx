function rand(seed: number, index: number) {
  const value = Math.sin(seed * 127.1 + index * 311.7) * 43758.5453;
  return value - Math.floor(value);
}

export function ProjectArt({
  seed,
  status,
  className = "",
}: {
  seed: number;
  status?: string;
  className?: string;
}) {
  const floors = 5 + Math.floor(rand(seed, 1) * 5);
  const bays = 3 + Math.floor(rand(seed, 2) * 3);
  const width = 170 + Math.round(rand(seed, 3) * 110);
  const floorHeight = 16 + Math.round(rand(seed, 8) * 6);
  const height = floors * floorHeight;
  const ground = 316;
  const x = Math.round((480 - width) / 2 + (rand(seed, 4) - 0.5) * 44);
  const y = ground - height;
  const bayWidth = width / bays;
  const litIndex = Math.floor(rand(seed, 5) * floors * bays);
  const dimX = Math.min(x + width + 26, 462);
  const isOngoing = status === "Devam Ediyor";
  const craneX = Math.max(36, x - 44);

  const windows = [];
  for (let floor = 0; floor < floors; floor++) {
    for (let bay = 0; bay < bays; bay++) {
      const index = floor * bays + bay;
      const lit = index === litIndex;
      windows.push(
        <rect
          key={index}
          x={x + bay * bayWidth + bayWidth * 0.26}
          y={y + floor * floorHeight + floorHeight * 0.28}
          width={bayWidth * 0.48}
          height={floorHeight * 0.44}
          fill={lit ? "var(--color-brass)" : "none"}
          stroke="currentColor"
          strokeWidth={1}
          opacity={lit ? 1 : 0.45}
        />,
      );
    }
  }

  return (
    <svg
      viewBox="0 0 480 340"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx={402}
        cy={64}
        r={26}
        stroke="var(--color-brass)"
        strokeWidth={1}
        opacity={0.9}
      />
      <line
        x1={352}
        y1={64}
        x2={372}
        y2={64}
        stroke="var(--color-brass)"
        strokeWidth={1}
        opacity={0.5}
      />

      <rect
        x={x - 58}
        y={y + 66}
        width={44}
        height={ground - y - 66}
        stroke="currentColor"
        strokeWidth={1}
        opacity={0.18}
      />
      <rect
        x={x + width + 20}
        y={y + 108}
        width={36}
        height={ground - y - 108}
        stroke="currentColor"
        strokeWidth={1}
        opacity={0.18}
      />

      <line
        x1={28}
        y1={ground}
        x2={452}
        y2={ground}
        stroke="currentColor"
        strokeWidth={1}
        opacity={0.4}
      />

      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        stroke="currentColor"
        strokeWidth={1.5}
        opacity={0.75}
      />
      <line
        x1={x - 8}
        y1={y - 8}
        x2={x + width + 8}
        y2={y - 8}
        stroke="currentColor"
        strokeWidth={1.5}
        opacity={0.75}
      />

      {Array.from({ length: floors - 1 }, (_, index) => (
        <line
          key={`slab-${index}`}
          x1={x}
          y1={y + (index + 1) * floorHeight}
          x2={x + width}
          y2={y + (index + 1) * floorHeight}
          stroke="currentColor"
          strokeWidth={1}
          opacity={0.25}
        />
      ))}

      <rect
        x={x + width / 2 - 13}
        y={ground - 30}
        width={26}
        height={30}
        stroke="var(--color-brass)"
        strokeWidth={1.25}
        opacity={0.95}
      />

      {windows}

      <line
        x1={dimX}
        y1={y}
        x2={dimX}
        y2={ground}
        stroke="currentColor"
        strokeWidth={1}
        opacity={0.35}
      />
      <line
        x1={dimX - 7}
        y1={y}
        x2={dimX + 7}
        y2={y}
        stroke="currentColor"
        strokeWidth={1}
        opacity={0.35}
      />
      <line
        x1={dimX - 7}
        y1={ground}
        x2={dimX + 7}
        y2={ground}
        stroke="currentColor"
        strokeWidth={1}
        opacity={0.35}
      />

      {isOngoing ? (
        <g
          stroke="var(--color-brass)"
          strokeWidth={1.25}
          opacity={0.95}
        >
          <line x1={craneX} y1={ground} x2={craneX} y2={y - 58} />
          <line x1={craneX - 10} y1={ground} x2={craneX + 10} y2={ground} />
          <line
            x1={craneX}
            y1={y - 58}
            x2={craneX + 78}
            y2={y - 58}
          />
          <line
            x1={craneX}
            y1={y - 58}
            x2={craneX - 26}
            y2={y - 58}
          />
          <line x1={craneX + 58} y1={y - 58} x2={craneX + 58} y2={y - 26} />
          <rect
            x={craneX + 52}
            y={y - 26}
            width={12}
            height={9}
            strokeWidth={1.25}
          />
        </g>
      ) : null}
    </svg>
  );
}
