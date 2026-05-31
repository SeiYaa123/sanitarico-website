import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    order: 1,
    title: "Devis gratuit en 48h",
    description:
      "Contactez-nous par téléphone ou via le formulaire. Nous revenons vers vous dans les 48h avec un premier chiffrage sans engagement.",
    icon: "MessageSquare",
  },
  {
    order: 2,
    title: "Visite technique offerte",
    description:
      "Un expert se déplace chez vous pour évaluer précisément les travaux, prendre les mesures et identifier les contraintes techniques.",
    icon: "Home",
  },
  {
    order: 3,
    title: "Devis détaillé + primes calculées",
    description:
      "Vous recevez un devis transparent poste par poste, accompagné d'une simulation de vos primes Renolution potentielles. Aucune surprise.",
    icon: "FileText",
  },
  {
    order: 4,
    title: "Chantier suivi avec vous",
    description:
      "Nos artisans interviennent selon le planning convenu. Vous recevez un point hebdomadaire et pouvez nous joindre à tout moment.",
    icon: "Wrench",
  },
  {
    order: 5,
    title: "Réception & garantie écrite",
    description:
      "Nous effectuons ensemble la réception des travaux. Vous recevez votre garantie écrite et notre numéro direct pour tout suivi.",
    icon: "CheckCircle",
  },
];
