import { AreaMap } from "./AreaMap";
import { Icon } from "./Icon";
import { serviceAreas, site } from "@/lib/site";

export const officeMapsHref = site.googleMapsUrl;

export function LocationMap({ highlight = "bakirkoy", name = "Bakırköy" }: { highlight?: string; name?: string }) {
  return (
    <figure className="overflow-hidden border border-ink/15 bg-brand text-paper">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper/15 px-5 py-5 sm:px-7">
        <span className="flex items-center gap-3 text-sm font-semibold">
          <Icon name="pin" className="h-5 w-5 text-brass-soft" />
          {name} · hizmet bölgesi
        </span>
        <span className="text-xs text-paper/75">İstanbul / Avrupa Yakası</span>
      </div>
      <AreaMap highlight={highlight} className="block h-auto w-full" />
      <ul aria-label="Haritadaki hizmet bölgeleri" className="flex flex-wrap gap-2 px-5 pb-5 sm:hidden">
        {serviceAreas.map((area) => (
          <li key={area.slug} className={`px-3 py-2 text-xs ${highlight === area.slug ? "bg-brass-soft font-semibold text-brand" : "border border-paper/25 text-paper"}`}>
            {area.name}
          </li>
        ))}
      </ul>
      <figcaption className="flex flex-wrap items-center justify-between gap-4 border-t border-paper/15 px-5 py-5 sm:px-7">
        <p className="max-w-[28ch] text-xs leading-relaxed text-paper/75">
          Şematik hizmet haritası. Yol tarifi için Google Maps’i kullanın.
        </p>
        <a href={officeMapsHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brass-soft underline-offset-4 hover:underline">
          Merkez ofise yol tarifi
          <Icon name="arrowUpRight" className="h-4 w-4" />
        </a>
      </figcaption>
    </figure>
  );
}
