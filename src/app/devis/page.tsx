import type { Metadata } from "next";
import { DevisClient } from "./DevisClient";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Demander un Devis Gratuit — Rénovation Bruxelles",
  description: `Devis gratuit sous ${COMPANY.quotePromiseHours}h pour votre rénovation à Bruxelles. Salle de bain, cuisine, pompe à chaleur, plomberie — Sanitari&Co répond rapidement.`,
  alternates: { canonical: `${COMPANY.website}/devis/` },
};

export default function DevisPage() {
  return <DevisClient />;
}
