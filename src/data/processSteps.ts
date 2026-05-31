import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    order: 1,
    title: "Devis gratuit sous 48h",
    description:
      "Nous vous rappelons dans les 48h ouvrées. Pas d'attente, pas de standardiste : vous parlez directement à un technicien qui connaît votre type de logement.",
    icon: "MessageSquare",
  },
  {
    order: 2,
    title: "Visite technique offerte",
    description:
      "Un artisan sénior — pas un commercial — se déplace chez vous. Il mesure, photographie, identifie les contraintes. Durée : 45 à 90 minutes selon la complexité.",
    icon: "Home",
  },
  {
    order: 3,
    title: "Devis poste par poste + primes simulées",
    description:
      "Sous 5 jours ouvrés, vous recevez le devis ligne par ligne et la simulation Renolution chiffrée. Chaque poste est justifié. Aucun forfait flou.",
    icon: "FileText",
  },
  {
    order: 4,
    title: "Chantier planifié à la semaine",
    description:
      "Vous recevez le planning semaine par semaine. Point WhatsApp chaque vendredi. Photos d'avancement incluses. Votre maison reste propre : bâches et protections systématiques.",
    icon: "Wrench",
  },
  {
    order: 5,
    title: "Réception en votre présence",
    description:
      "Vous visitez le chantier terminé avec votre artisan référent. Chaque point est vérifié ensemble. La garantie écrite et les certificats de conformité vous sont remis sur place.",
    icon: "CheckCircle",
  },
];
