import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { ServiceBouquets } from "@/components/home/ServiceBouquets";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sanitari&Co — Rénovation Premium Bruxelles",
  description: SEO.defaultDescription,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <GoogleReviews />
      <ServiceBouquets />
      <ProcessSteps />
      <PortfolioPreview />
      <CertificationsSection />
      <CtaSection />
    </>
  );
}
