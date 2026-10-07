import Link from "next/link";
import { footerNav, site, telHref, mailHref, waLink } from "@/lib/site";
import { services } from "@/lib/services";
import { districts } from "@/lib/districts";
import { Logo } from "./Logo";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer data-fab-hide className="border-t border-paper/10 bg-brand text-paper">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 lg:px-8 lg:pt-20">
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
                href={mailHref}
                className="flex items-center gap-3 text-paper/80 transition-colors hover:text-paper"
              >
                <Icon name="mail" className="h-4 w-4 shrink-0 text-brass" />
                <span className="min-w-0 [overflow-wrap:anywhere]">{site.email}</span>
              </a>
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-paper/80 transition-colors hover:text-paper"
              >
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                <span>
                  {site.address.street}, {site.address.postalCode} {site.address.district}/{site.address.city}
                  <span className="mt-1 block text-xs text-brass-soft">Google Haritalar’da görüntüle ↗</span>
                </span>
              </a>
              <p className="flex items-start gap-3 text-paper/80">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                <span>
                  {site.openingHours.map((hours) => (
                    <span key={hours.label} className="block">
                      {hours.label} · {hours.opens} – {hours.closes}
                    </span>
                  ))}
                </span>
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
            {site.serviceRegion} · Kentsel dönüşüm, kat karşılığı ve özel
            taahhüt projeleri
          </p>
        </div>
        <nav
          aria-label="Yasal bilgiler"
          className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-paper/60"
        >
          <Link href="/kvkk-aydinlatma-metni" className="hover:text-paper">
            KVKK Aydınlatma Metni
          </Link>
          <Link href="/cerez-politikasi" className="hover:text-paper">
            Çerez ve Dış Bağlantılar
          </Link>
        </nav>
      </div>
      <div className="border-t border-brass/40 bg-paper text-brand">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 pb-[calc(7rem_+_env(safe-area-inset-bottom))] pt-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10 lg:px-8 lg:py-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-deep">
              Tasarım & geliştirme
            </p>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed">
              Bu web sitesi <span className="font-semibold">GojGoj</span> tarafından
              tasarlanıp geliştirilmiştir.
            </p>
          </div>
          <a
            href="https://gojgoj.com.tr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GojGoj web sitesini ziyaret edin (yeni sekmede açılır)"
            className="group inline-flex min-h-14 w-fit shrink-0 items-center gap-6 outline-offset-8"
          >
            <span>
              <span className="block text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-[44px]">
                GojGoj<span className="text-brass-deep">.</span>
              </span>
              <span className="mt-2 block text-sm text-brand/75">gojgoj.com.tr</span>
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand/25 transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-paper group-focus-visible:bg-brand group-focus-visible:text-paper">
              <Icon name="arrowUpRight" className="h-5 w-5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

