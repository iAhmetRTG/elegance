import Link from "next/link";
import { footerNav, site, telHref, waLink } from "@/lib/site";
import { services } from "@/lib/services";
import { districts } from "@/lib/districts";
import { Logo } from "./Logo";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer data-fab-hide className="border-t border-paper/10 bg-ink text-paper">
      <div className="relative h-20 overflow-hidden border-b border-paper/10 lg:h-36">
        <span
          aria-hidden="true"
          className="ghost absolute -bottom-[0.22em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display italic text-[26vw] leading-none"
        >
          Elegance
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-28 pt-16 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo tone="light" variant="stacked" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
              {site.description}
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a
                href={telHref}
                className="flex items-center gap-3 text-paper/80 transition-colors hover:text-paper"
              >
                <Icon name="phone" className="h-4 w-4 text-brass" />
                {site.phoneDisplay}
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-paper/80 transition-colors hover:text-paper"
              >
                <Icon name="whatsapp" className="h-4 w-4 text-brass" />
                WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-paper/80 transition-colors hover:text-paper"
              >
                <Icon name="mail" className="h-4 w-4 text-brass" />
                {site.email}
              </a>
              <p className="flex items-center gap-3 text-paper/80">
                <Icon name="pin" className="h-4 w-4 text-brass" />
                {site.address.street}, {site.address.district}
              </p>
              <p className="flex items-center gap-3 text-paper/80">
                <Icon name="clock" className="h-4 w-4 text-brass" />
                {site.hours}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h2 className="eyebrow text-paper/60">Hizmetler</h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="link-underline text-sm text-paper/75 hover:text-paper"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="eyebrow text-paper/60">Bölgeler</h2>
            <ul className="mt-5 space-y-3">
              {districts.map((district) => (
                <li key={district.slug}>
                  <Link
                    href={`/bolgeler/${district.slug}`}
                    className="link-underline text-sm text-paper/75 hover:text-paper"
                  >
                    {district.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-paper/60">Sayfalar</h2>
            <ul className="mt-5 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-paper/75 hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-paper/10 pt-6 text-xs text-paper/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <p>
            {site.serviceRegion} · Kentsel dönüşüm ve anahtar teslim inşaat
          </p>
        </div>
      </div>
    </footer>
  );
}

