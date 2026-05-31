import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "p1",
    title: "Salle de bain spa — Ixelles",
    category: "renovation-signature",
    location: "Ixelles, Bruxelles",
    before: {
      src: "/images/projects/p1-before.jpg",
      alt: "Salle de bain avant rénovation à Ixelles — carrelage vieilli, baignoire ancienne",
      width: 800,
      height: 600,
    },
    after: {
      src: "/images/projects/p1-after.jpg",
      alt: "Salle de bain après rénovation à Ixelles — douche à l'italienne, marbre, robinetterie thermostatique",
      width: 800,
      height: 600,
    },
  },
  {
    id: "p2",
    title: "Cuisine ouverte — Woluwé-Saint-Lambert",
    category: "renovation-signature",
    location: "Woluwé-Saint-Lambert, Bruxelles",
    before: {
      src: "/images/projects/p2-before.jpg",
      alt: "Cuisine fermée avant rénovation — meubles années 90, faible luminosité",
      width: 800,
      height: 600,
    },
    after: {
      src: "/images/projects/p2-after.jpg",
      alt: "Cuisine ouverte après rénovation — îlot central, plan de travail quartz, luminosité maximale",
      width: 800,
      height: 600,
    },
  },
  {
    id: "p3",
    title: "Pompe à chaleur + isolation — Schaerbeek",
    category: "transition-energetique",
    location: "Schaerbeek, Bruxelles",
    before: {
      src: "/images/projects/p3-before.jpg",
      alt: "Chaufferie avant — vieille chaudière gaz à remplacer",
      width: 800,
      height: 600,
    },
    after: {
      src: "/images/projects/p3-after.jpg",
      alt: "Installation pompe à chaleur air/eau — économies de 60% sur facture chauffage",
      width: 800,
      height: 600,
    },
  },
  {
    id: "p4",
    title: "Rénovation complète maison de maître — Uccle",
    category: "renovation-signature",
    location: "Uccle, Bruxelles",
    before: {
      src: "/images/projects/p4-before.jpg",
      alt: "Maison de maître avant rénovation totale — état général dégradé",
      width: 800,
      height: 600,
    },
    after: {
      src: "/images/projects/p4-after.jpg",
      alt: "Maison de maître après rénovation complète — cuisine, 2 salles de bain, chauffage, électricité",
      width: 800,
      height: 600,
    },
  },
];
