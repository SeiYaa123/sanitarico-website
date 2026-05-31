import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { StickyHeader } from "@/components/layout/StickyHeader";
import { Footer } from "@/components/layout/Footer";
import { buildLocalBusinessJsonLd } from "@/lib/seo/jsonLd";
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
  keywords: [
    "rénovation Bruxelles",
    "plombier Bruxelles",
    "chauffagiste Bruxelles",
    "salle de bain Bruxelles",
    "cuisine rénovation Bruxelles",
    "pompe à chaleur Bruxelles",
    "dépannage plomberie Bruxelles",
  ],
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
    images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 font-sans antialiased">
        <StickyHeader />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
