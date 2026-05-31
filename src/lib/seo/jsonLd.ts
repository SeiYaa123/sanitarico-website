import { COMPANY, ROUTES, BRUSSELS_COMMUNES } from "@/lib/constants";

export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/<\/script>/gi, "<\\/script>");
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY.website}/#localbusiness`,
    name: COMPANY.legalName,
    image: `${COMPANY.website}/og-image.jpg`,
    url: COMPANY.website,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.region,
      postalCode: COMPANY.postalCode,
      addressCountry: COMPANY.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.8728,
      longitude: 4.3837,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: COMPANY.averageRating,
      reviewCount: COMPANY.totalReviews,
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "€€€",
    areaServed: BRUSSELS_COMMUNES.map((commune) => ({
      "@type": "City",
      name: commune,
    })),
  };
}

export function buildServiceJsonLd(
  name: string,
  description: string,
  slug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${COMPANY.website}/#localbusiness`,
      name: COMPANY.legalName,
    },
    areaServed: COMPANY.city,
    url: `${COMPANY.website}${ROUTES.services}#${slug}`,
  };
}

export function buildFaqJsonLd(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(
  crumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
