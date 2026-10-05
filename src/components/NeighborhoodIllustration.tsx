import Image from "next/image";
import { Icon } from "./Icon";
import { officeMapsHref } from "./LocationMap";

export function NeighborhoodIllustration() {
  return (
    <figure>
      <div className="relative aspect-[3/2] overflow-hidden bg-[#ece8de]">
        <Image
          src="/photos/regions/bakirkoy-coastal-model.webp"
          alt="Sahil boyunca uzanan yapı adalarını, sokakları ve yeşil alanları gösteren temsili mimari bölge maketi."
          fill
          sizes="(max-width: 1023px) calc(100vw - 40px), (max-width: 1280px) 56vw, 686px"
          className="object-cover"
        />
      </div>
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/15 py-5">
        <div>
          <p className="text-sm font-medium">Bakırköy · İstanbul</p>
          <p className="mt-1 text-xs text-muted">Temsili bölge illüstrasyonu</p>
        </div>
        <a
          href={officeMapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brass-deep underline-offset-4 hover:underline"
        >
          Ofise yol tarifi al
          <Icon name="arrowUpRight" className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
        </a>
      </figcaption>
    </figure>
  );
}
