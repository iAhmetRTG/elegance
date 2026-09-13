"use client";

import { useState } from "react";
import Image from "next/image";
import { ProjectArt } from "./ProjectArt";
import { CornerTicks } from "./CornerTicks";
import { Icon } from "./Icon";

function BeforeArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 340"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <line x1={40} y1={300} x2={440} y2={300} stroke="currentColor" strokeWidth={1} opacity={0.5} />
      <rect
        x={120}
        y={86}
        width={240}
        height={214}
        stroke="currentColor"
        strokeWidth={1.25}
        strokeDasharray="7 6"
        opacity={0.85}
      />
      <line x1={120} y1={140} x2={360} y2={140} stroke="currentColor" strokeWidth={1} opacity={0.45} />
      <line x1={120} y1={194} x2={360} y2={194} stroke="currentColor" strokeWidth={1} opacity={0.45} />
      <line x1={120} y1={248} x2={360} y2={248} stroke="currentColor" strokeWidth={1} opacity={0.45} />
      <line x1={216} y1={86} x2={216} y2={300} stroke="currentColor" strokeWidth={1} opacity={0.3} />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <rect
            key={`win-${row}-${col}`}
            x={134 + col * 44}
            y={102 + row * 54}
            width={26}
            height={30}
            stroke="currentColor"
            strokeWidth={1}
            opacity={0.4}
          />
        )),
      )}
      <path
        d="M190 300 L212 240 L198 204 L228 152 L220 96"
        stroke="currentColor"
        strokeWidth={1.4}
        opacity={0.9}
      />
      <path
        d="M300 300 L288 244 L306 210 L296 168"
        stroke="currentColor"
        strokeWidth={1.4}
        opacity={0.9}
      />
      <path
        d="M128 94 L352 292 M352 94 L128 292"
        stroke="currentColor"
        strokeWidth={0.9}
        opacity={0.22}
      />
      <ellipse cx={240} cy={306} rx={150} ry={10} fill="currentColor" opacity={0.08} />
    </svg>
  );
}

export function BeforeAfter({
  beforeLabel = "Öncesi",
  afterLabel = "Sonrası",
  /* Karşılaştırma görselleri temsilidir; gerçek bir Elegance projesini
     göstermez. Etiket bu nedenle projeye atıf yapmaz. */
  caption = "Temsili karşılaştırma · Stok fotoğraf",
  seed = 7,
  beforeSrc = "/photos/before-1.jpg",
  afterSrc = "/photos/after-1.jpg",
  position: controlledPosition,
  onPositionChange,
}: {
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
  seed?: number;
  beforeSrc?: string;
  afterSrc?: string;
  /* Kontrollü kullanim: ana sayfadaki donusum adimlari seridini besler. */
  position?: number;
  onPositionChange?: (value: number) => void;
}) {
  const [internalPosition, setInternalPosition] = useState(55);
  const position = controlledPosition ?? internalPosition;

  const update = (value: number) => {
    if (controlledPosition === undefined) setInternalPosition(value);
    onPositionChange?.(value);
  };

  return (
    <div className="relative border border-ink/15 bg-ivory p-2.5">
      <CornerTicks className="text-brass/60" />

      <div className="relative overflow-hidden focus-within:outline focus-within:outline-2 focus-within:outline-brass">
        <div className="relative aspect-[4/3] sm:aspect-[16/10]">
          {beforeSrc ? (
            <Image
              src={beforeSrc}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          ) : (
            <BeforeArt className="absolute inset-0 h-full w-full text-ink/40" />
          )}

          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            {afterSrc ? (
              <Image
                src={afterSrc}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            ) : (
              <ProjectArt
                seed={seed}
                status="Tamamlandı"
                className="h-full w-full text-ink/60"
              />
            )}
          </div>

          <span className="absolute left-4 top-4 bg-ink px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-paper">
            {afterLabel}
          </span>
          <span className="absolute right-4 top-4 border border-ink/25 bg-paper/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/70">
            {beforeLabel}
          </span>

          <div
            className="pointer-events-none absolute inset-y-0 z-10"
            style={{ left: `${position}%` }}
          >
            <span className="absolute inset-y-0 w-px -translate-x-1/2 bg-brass" />
            <span className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-brass bg-ink text-brass shadow-[0_10px_30px_rgba(18,16,10,0.45)]">
              <Icon name="arrowRight" className="h-3.5 w-3.5 -scale-x-100" />
              <Icon name="arrowRight" className="h-3.5 w-3.5" />
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(event) => update(Number(event.target.value))}
            aria-label="Öncesi ve sonrası görselini karşılaştırın"
            className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
          />
        </div>

        <div className="flex items-center justify-between border-t border-ink/10 px-1 pb-1 pt-3">
          <span className="eyebrow text-muted">{caption}</span>
          <span className="eyebrow text-brass-deep">Sürükleyin</span>
        </div>
      </div>
    </div>
  );
}
