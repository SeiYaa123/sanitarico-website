import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/home/CtaSection";
import { ROUTES } from "@/lib/constants";
import { serviceBouquets } from "@/data/services";
import { cn } from "@/lib/utils/cn";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Rénovation Signature, Transition Énergétique, Contrat Tranquillité — découvrez nos trois bouquets de services pour votre rénovation à Bruxelles.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-slate-950 px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Nos bouquets de services"
            title="Choisissez votre projet"
            subtitle="Trois offres pensées pour couvrir tous vos besoins, sans avoir à gérer plusieurs artisans."
            centered
            className="mx-auto mb-20 max-w-2xl"
          />

          <div className="space-y-12">
            {serviceBouquets.map((bouquet) => (
              <article
                key={bouquet.slug}
                id={bouquet.slug}
                className={cn(
                  "rounded-3xl border p-10",
                  bouquet.highlighted
                    ? "border-amber-500/40 bg-gradient-to-br from-amber-500/8 to-slate-900/50"
                    : "border-slate-800 bg-slate-900/50"
                )}
              >
                <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                      {bouquet.highlighted ? "⚡ Le plus demandé" : "Bouquet"}
                    </p>
                    <h2 className="mt-2 font-serif text-4xl font-bold text-white">
                      {bouquet.name}
                    </h2>
                    <p className="mt-2 text-lg font-medium text-slate-400">
                      {bouquet.tagline}
                    </p>
                    <p className="mt-4 leading-relaxed text-slate-400">
                      {bouquet.description}
                    </p>
                    <Link
                      href={`${ROUTES.quote}?service=${bouquet.slug}`}
                      className={cn(
                        "mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-3 font-semibold transition-colors",
                        bouquet.highlighted
                          ? "bg-amber-500 text-slate-950 hover:bg-amber-400"
                          : "border border-slate-600 text-white hover:border-amber-500 hover:text-amber-400"
                      )}
                    >
                      Demander un devis
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>

                  <ul className="space-y-3" role="list">
                    {bouquet.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <Check
                          className="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
