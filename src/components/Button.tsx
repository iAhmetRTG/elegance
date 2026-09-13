import Link from "next/link";
import { Icon, type IconName } from "./Icon";

type Variant = "brass" | "outline" | "outlineLight";

const base =
  "group/btn inline-flex min-h-12 items-center justify-center gap-3 whitespace-nowrap px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300";

const variants: Record<Variant, string> = {
  brass: "bg-brass text-ink hover:bg-brass-deep hover:text-paper",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  outlineLight:
    "border border-paper/35 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "brass",
  icon,
  className = "",
  external,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  icon?: IconName;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const isArrow = icon === "arrowRight" || icon === "arrowUpRight";
  const content = (
    <>
      {icon ? (
        <Icon
          name={icon}
          className={`h-4 w-4 ${
            isArrow
              ? "transition-transform duration-300 group-hover/btn:translate-x-1"
              : ""
          }`}
        />
      ) : null}
      <span>{children}</span>
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}
