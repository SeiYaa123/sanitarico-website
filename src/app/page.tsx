import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { PainSolution } from "@/components/home/PainSolution";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { FeaturedTestimonial } from "@/components/home/FeaturedTestimonial";
import { ServiceBouquets } from "@/components/home/ServiceBouquets";
import { InterstitialPhoneCta } from "@/components/home/InterstitialPhoneCta";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { HomeFaq } from "@/components/home/HomeFaq";
import { CtaSection } from "@/components/home/CtaSection";
import { UrgencyBanner } from "@/components/home/UrgencyBanner";

export const metadata: Metadata = {
  title: "Sanitari&Co — Rénovation sans stress à Bruxelles depuis 1994",
  description:
    "Un seul artisan pour tout : salle de bain, cuisine, pompe à chaleur, plomberie. Sanitari&Co gère votre rénovation et vos primes Renolution à Bruxelles depuis 30 ans. Devis gratuit en 48h.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Urgence — capte l'attention avant même le Hero */}
      <UrgencyBanner />

      {/* 2. Hero — pose le problème ET la solution + témoignage en évidence */}
      <Hero />

      {/* 3. Preuve sociale rapide — chiffres spécifiques */}
      <TrustStrip />

      {/* 4. Le vrai problème du client — crée la résonance émotionnelle */}
      <PainSolution />

      {/* 5. Témoignage vedette — preuve sociale forte avant les services */}
      <FeaturedTestimonial />

      {/* 6. L'offre — maintenant que le client comprend notre valeur */}
      <ServiceBouquets />

      {/* 7. CTA téléphonique — pour les clients qui veulent parler à quelqu'un */}
      <InterstitialPhoneCta />

      {/* 8. Le processus — réduit le risque perçu */}
      <ProcessSteps />

      {/* 9. Portfolio — preuves visuelles avec métriques */}
      <PortfolioPreview />

      {/* 10. Tous les avis Google */}
      <GoogleReviews />

      {/* 11. Certifications — dernière couche de confiance */}
      <CertificationsSection />

      {/* 12. FAQ — objections répondues avant le CTA final */}
      <HomeFaq />

      {/* 13. CTA final émotionnel */}
      <CtaSection />
    </>
  );
}
