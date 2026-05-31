export const COMPANY = {
  name: "Sanitari&Co",
  legalName: "Sanitari & Co SRL",
  phone: "+32 2 XXX XX XX",
  phoneHref: "tel:+322XXXXXXX",
  email: "contact@sanitarico.be",
  address: "Schaerbeek, 1030 Bruxelles",
  city: "Bruxelles",
  region: "Bruxelles-Capitale",
  country: "BE",
  postalCode: "1030",
  yearsExperience: 30,
  projectsCompleted: 500,
  quotePromiseHours: 48,
  averageRating: 4.8,
  totalReviews: 47,
  website: "https://sanitarico.be",
} as const;

export const ROUTES = {
  home: "/",
  services: "/services",
  portfolio: "/realisations",
  quote: "/devis",
  about: "/a-propos",
  depannage: "/depannage",
  blog: "/blog",
  contact: "/contact",
  mentions: "/mentions-legales",
} as const;

export const ANIMATION = {
  durationFast: 0.3,
  durationNormal: 0.6,
  durationSlow: 0.9,
  easeOutExpo: [0.16, 1, 0.3, 1] as const,
  staggerChildren: 0.1,
  scrollRevealOffset: 60,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const SEO = {
  siteName: "Sanitari&Co",
  titleSuffix: "| Sanitari&Co — Rénovation Premium Bruxelles",
  defaultDescription:
    "Votre partenaire de confiance pour des projets de rénovation d'exception à Bruxelles. Plomberie, chauffage, cuisine, salle de bain — 30 ans d'expertise artisanale.",
  ogImage: "/og-image.jpg",
} as const;
