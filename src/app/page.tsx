import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { ServiceBouquets } from "@/components/home/ServiceBouquets";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { UrgencyBanner } from "@/components/home/UrgencyBanner";
import { InterstitialPhoneCta } from "@/components/home/InterstitialPhoneCta";
import { HomeFaq } from "@/components/home/HomeFaq";

export const metadata: Metadata = {
  title: "Sanitari&Co — Rénovation Premium Bruxelles",
  description:
    "Sanitari&Co, artisan rénovation premium depuis 30 ans à Bruxelles. Salle de bain, cuisine, pompe à chaleur — devis gratuit en 48h, primes Renolution gérées, garantie décennale.",
};

export default function HomePage() {
  return (
    <>
      <UrgencyBanner />
      <Hero />
      <TrustStrip />
      <GoogleReviews />
      <InterstitialPhoneCta />
      <ServiceBouquets />
      <ProcessSteps />
      <PortfolioPreview />
      <CertificationsSection />
      <HomeFaq />
      <CtaSection />
    </>
  );
}
