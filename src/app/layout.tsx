import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { StickyHeader } from "@/components/layout/StickyHeader";
import { Footer } from "@/components/layout/Footer";
import { buildLocalBusinessJsonLd, safeJsonLd } from "@/lib/seo/jsonLd";
import { SEO, COMPANY } from "@/lib/constants";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — Rénovation Premium Bruxelles`,
    template: `%s ${SEO.titleSuffix}`,
  },
  description: SEO.defaultDescription,
  keywords: [...SEO.keywords],
  metadataBase: new URL(COMPANY.website),
  authors: [{ name: COMPANY.legalName }],
  creator: COMPANY.legalName,
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: COMPANY.website,
    siteName: SEO.siteName,
    title: `${COMPANY.name} — Rénovation Premium Bruxelles`,
    description: SEO.defaultDescription,
    images: [{ url: SEO.ogImage, width: 1200, height: 630, alt: "Sanitari&Co — Rénovation premium à Bruxelles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Rénovation Premium Bruxelles`,
    description: SEO.defaultDescription,
    images: [SEO.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = buildLocalBusinessJsonLd();

  return (
    <html lang="fr" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:left-4 focus:top-4 focus:rounded-lg focus:bg-amber-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-slate-950"
        >
          Passer au contenu principal
        </a>
        <StickyHeader />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
