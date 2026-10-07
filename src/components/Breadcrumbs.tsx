import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "./JsonLd";

export function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: { label: string; href?: string }[];
  tone?: "dark" | "light";
}) {
  const base = tone === "dark" ? "text-muted" : "text-paper/70";
  const link = tone === "dark" ? "hover:text-ink" : "hover:text-paper";
  const current = tone === "dark" ? "text-ink/70" : "text-paper/85";
  const separator = tone === "dark" ? "text-brass" : "text-brass-soft";

  return (
    <>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: site.url },
        ...items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 2,
          name: item.label,
          ...(item.href ? { item: `${site.url}${item.href}` } : {}),
        })),
      ],
    }} />
    <nav
      aria-label="Sayfa yolu"
      className={`flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] ${base}`}
    >
      <Link href="/" className={`transition-colors ${link}`}>
        Ana Sayfa
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <span className={separator}>/</span>
          {item.href ? (
            <Link href={item.href} className={`transition-colors ${link}`}>
              {item.label}
            </Link>
          ) : (
            <span className={current}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
    </>
  );
}
