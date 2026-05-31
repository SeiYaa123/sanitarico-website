import type { ServiceBouquet } from "@/types";

export const serviceBouquets: ServiceBouquet[] = [
  {
    slug: "renovation-signature",
    name: "Rénovation Signature",
    tagline: "Un seul artisan. Un seul espace. Transformé.",
    description:
      "Cuisine, salle de bain, aménagement intérieur — nous concevons et réalisons votre espace de A à Z. Un seul interlocuteur pour l'esthétique et la technique.",
    features: [
      "Conception & design inclus",
      "Cuisine complète clé en main",
      "Salle de bain spa & bien-être",
      "Aménagement intérieur personnalisé",
      "Coordination de tous les corps de métier",
      "Garantie décennale sur les travaux",
    ],
    priceFrom: "À partir de 8.000€ — devis gratuit en 48h",
    icon: "Sparkles",
    highlighted: false,
  },
  {
    slug: "transition-energetique",
    name: "Transition Énergétique",
    tagline: "Le chantier ET les primes. On s'occupe de tout.",
    description:
      "Pompe à chaleur, isolation, remplacement chaudière — nous gérons le chantier complet ET la simulation de vos primes Renolution. Vous récupérez l'argent, on fait le travail.",
    features: [
      "Installation pompe à chaleur air/eau",
      "Remplacement chaudière gaz",
      "Isolation toiture & façade",
      "Simulation primes Renolution offerte",
      "Dossier de subventions géré par nos soins",
      "Optimisation PEB incluse",
    ],
    priceFrom: "Nos clients récupèrent en moyenne 6.000–12.000€ de primes",
    icon: "Zap",
    highlighted: true,
  },
  {
    slug: "tranquillite",
    name: "Tranquillité",
    tagline: "Votre chaudière ne vous réveillera plus à 2h du matin.",
    description:
      "Contrat d'entretien annuel, dépannage prioritaire 24h/7j, suivi préventif — une relation durable pour que votre domicile fonctionne toujours.",
    features: [
      "Entretien chaudière annuel",
      "Dépannage prioritaire sous 4h",
      "Disponibilité 24h/7j pour urgences",
      "Rapport d'état annuel de vos installations",
      "Alerte préventive avant panne",
      "Tarif préférentiel sur tous travaux",
    ],
    priceFrom: "À partir de 299€/an — sans engagement de durée",
    icon: "Shield",
    highlighted: false,
  },
];
