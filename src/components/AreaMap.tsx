const regions = [
  { slug: "florya", name: "Florya", x: 110, y: 217, labelY: 186 },
  { slug: "yesilkoy", name: "Yeşilköy", x: 226, y: 290, labelY: 335 },
  { slug: "yesilyurt", name: "Yeşilyurt", x: 347, y: 255, labelY: 224 },
  { slug: "atakoy", name: "Ataköy", x: 465, y: 200, labelY: 245 },
  { slug: "bakirkoy", name: "Bakırköy", x: 592, y: 149, labelY: 113 },
];

/** A schematic of the coastal service corridor, not a navigational map. */
export function AreaMap({ className = "", highlight = "bakirkoy" }: { className?: string; highlight?: string }) {
  return (
    <svg viewBox="0 0 720 420" fill="none" className={className} aria-hidden="true">
      <rect width="720" height="420" fill="var(--color-brand)" />
      <path d="M0 250 C60 252 90 255 130 284 S196 341 254 328 S356 295 417 274 S515 244 568 233 S659 230 720 210 V420 H0Z" fill="var(--color-brand-soft)" />
      <g stroke="var(--color-paper)" strokeWidth="1" opacity="0.07">
        {[80, 160, 240, 320, 400, 480, 560, 640].map((x) => <path key={x} d={`M${x} 0V420`} />)}
        {[60, 120, 180, 240, 300, 360].map((y) => <path key={y} d={`M0 ${y}H720`} />)}
      </g>
      <g stroke="var(--color-paper)" strokeWidth="2" opacity="0.13">
        <path d="M0 98C140 74 259 145 420 108S578 71 720 53" />
        <path d="M56 0L126 206M194 0L226 281M316 0L352 249M451 0L471 194M621 0L590 149" />
        <path d="M0 167C135 140 259 208 413 172S577 121 720 105" />
      </g>
      <path d="M0 250 C60 252 90 255 130 284 S196 341 254 328 S356 295 417 274 S515 244 568 233 S659 230 720 210" stroke="var(--color-paper)" strokeWidth="1.5" opacity="0.4" />
      <path d="M110 217C155 219 181 291 226 290S305 267 347 255S423 218 465 200S551 164 592 149" stroke="var(--color-brass-soft)" strokeWidth="2" strokeDasharray="5 7" opacity="0.65" />
      <text x="487" y="367" fill="var(--color-paper)" opacity="0.55" fontSize="17" letterSpacing="5">MARMARA DENİZİ</text>
      <g transform="translate(680 20)" stroke="var(--color-paper)" opacity="0.65">
        <path d="M0 35V0M-5 9L0 0L5 9" strokeWidth="1.5" />
        <text x="0" y="54" textAnchor="middle" fill="var(--color-paper)" stroke="none" fontSize="12">K</text>
      </g>
      {regions.map((region) => {
        const active = region.slug === highlight;
        return (
          <g key={region.slug}>
            {active ? <circle cx={region.x} cy={region.y} r="25" fill="var(--color-brass)" fillOpacity="0.12" stroke="var(--color-brass-soft)" strokeOpacity="0.5" /> : null}
            <circle cx={region.x} cy={region.y} r={active ? 11 : 6} fill={active ? "var(--color-brass-soft)" : "var(--color-paper)"} />
            <circle cx={region.x} cy={region.y} r="3" fill="var(--color-brand)" />
            <text x={region.x} y={region.labelY} textAnchor="middle" fill={active ? "var(--color-brass-soft)" : "var(--color-paper)"} fontSize={active ? 22 : 18} fontWeight={active ? 600 : 400}>{region.name}</text>
            {region.slug === "bakirkoy" ? <text x={region.x} y="87" textAnchor="middle" fill="var(--color-brass-soft)" fontSize="10" letterSpacing="2">ELEGANCE · MERKEZ</text> : null}
          </g>
        );
      })}
    </svg>
  );
}
