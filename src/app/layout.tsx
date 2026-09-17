import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const fontPreloads = [
  "/fonts/archivo-latin.woff2",
  "/fonts/archivo-latin-ext.woff2",
  "/fonts/fraunces-latin.woff2",
  "/fonts/fraunces-latin-ext.woff2",
  "/fonts/fraunces-italic-latin.woff2",
  "/fonts/fraunces-italic-latin-ext.woff2",
];

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.brand} ${site.brandSuffix}`,
  },
  description: site.description,
  keywords: [
    "İstanbul kentsel dönüşüm",
    "Bakırköy kentsel dönüşüm",
    "Bakırköy inşaat firması",
    "Yeşilköy kentsel dönüşüm",
    "Ataköy kat karşılığı inşaat",
    "Yeşilyurt apartman yenileme",
    "Florya villa inşaat",
    "özel taahhüt projeleri İstanbul",
    "deprem güçlendirme Bakırköy",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.legalName,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#12100a",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.legalName,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.district,
    addressRegion: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: "TR",
  },
  areaServed: site.districts.map((district) => ({
    "@type": "City",
    name: district,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  priceRange: "₺₺",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        {fontPreloads.map((href) => (
          <link
            key={href}
            rel="preload"
            href={href}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <JsonLd data={organizationJsonLd} />
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-5 focus:py-3 focus:text-[11px] focus:font-semibold focus:uppercase focus:tracking-[0.2em] focus:text-paper"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
        <WhatsAppFab />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
