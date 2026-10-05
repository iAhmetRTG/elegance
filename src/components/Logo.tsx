import Image from "next/image";
import Link from "next/link";

/* Marka varlıkları: header için yatay kilit (amblem + kelime markası),
   footer için sloganlı tam kilit. */
const marks = {
  dark: {
    inline: { src: "/brand/logo-dark.png", width: 443, height: 96 },
    stacked: { src: "/brand/logo-dark-stacked.png", width: 475, height: 300 },
  },
  light: {
    inline: { src: "/brand/logo-light.png", width: 443, height: 96 },
    stacked: { src: "/brand/logo-light-stacked.png", width: 475, height: 300 },
  },
} as const;

export function Logo({
  tone = "dark",
  variant = "inline",
  className = "",
  priority = false,
}: {
  tone?: "dark" | "light";
  variant?: "inline" | "stacked";
  className?: string;
  priority?: boolean;
}) {
  /* Iki ton da DOM'da durur; ton degisimi gorsel yuklemesi beklemeden
     yalnizca opaklikla gecis yapar. */
  const asset = marks.light[variant];
  const sizing = variant === "stacked" ? "h-16 lg:h-20" : "h-10 lg:h-12";
  const layers = (["light", "dark"] as const).map((layerTone) => (
    <Image
      key={layerTone}
      src={marks[layerTone][variant].src}
      alt=""
      width={asset.width}
      height={asset.height}
      unoptimized
      priority={priority}
      aria-hidden="true"
      className={`h-full w-auto object-contain transition-opacity duration-300 ${
        layerTone === "light" ? "absolute inset-0" : "relative"
      } ${tone === layerTone ? "opacity-100" : "opacity-0"} ${
        layerTone === "light" && variant === "inline"
          ? "drop-shadow-[0_2px_18px_rgba(18,16,10,0.62)]"
          : ""
      }`}
    />
  ));

  // Use the original alpha silhouette to apply brand gold without redrawing
  // the mark or changing the wordmark's proportions.
  const goldMask = {
    maskImage: `url(${asset.src})`,
    WebkitMaskImage: `url(${asset.src})`,
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
  };

  return (
    <Link
      href="/"
      aria-label="Elegance Yapı ve Mimarlık, ana sayfa"
      className={`inline-flex min-h-11 shrink-0 items-center ${className}`.trim()}
    >
      <span className={`relative inline-flex items-center ${sizing}`}>
        {layers}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-brass"
          style={{
            ...goldMask,
            clipPath: variant === "stacked" ? "inset(0 0 65% 0)" : "inset(0 83.5% 0 0)",
          }}
        />
        {variant === "stacked" ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-brass"
            style={{ ...goldMask, clipPath: "inset(85% 0 0 0)" }}
          />
        ) : null}
      </span>
    </Link>
  );
}
