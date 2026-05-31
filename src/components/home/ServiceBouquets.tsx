import Link from "next/link";
import { Sparkles, Zap, Shield, ArrowRight, Check, Euro, Clock } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ROUTES } from "@/lib/constants";
import { serviceBouquets } from "@/data/services";
import { cn } from "@/lib/utils/cn";
import type { ServiceBouquet, ServiceSlug } from "@/types";

const ICON_MAP = { Sparkles, Zap, Shield } as const;
type IconName = keyof typeof ICON_MAP;

const CTA_LABELS: Record<ServiceSlug, string> = {
  "renovation-signature": "Estimer mon projet",
  "transition-energetique": "Calculer mes primes",
  tranquillite: "Voir les formules",
};

const TYPICAL_DELAYS: Record<ServiceSlug, string> = {
  "renovation-signature": "1 à 3 semaines selon l'ampleur",
  "transition-energetique": "1 à 2 semaines installation",
  tranquillite: "Actif dès signature du contrat",
};

export function ServiceBouquets() {
  return (
    <section
      className="bg-slate-900 px-4 py-24 sm:px-6 lg:px-8"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Nos bouquets de services"
            title="Choisissez votre projet"
            subtitle="Trois offres pensées pour couvrir tous vos besoins, sans avoir à gérer plusieurs artisans."
            centered
            className="mx-auto max-w-2xl"
          />
        </RevealOnScroll>

        <ul
          className="mt-16 grid gap-8 lg:grid-cols-3"
          role="list"
          aria-label="Bouquets de services"
        >
          {serviceBouquets.map((bouquet, index) => (
            <li key={bouquet.slug}>
              <RevealOnScroll delay={index * 0.1}>
                <BouquetCard bouquet={bouquet} />
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PriceDisplay({ bouquet }: { bouquet: ServiceBouquet }) {
  const isEnergie = bouquet.slug === "transition-energetique";

  return (
    <p className="mt-3 flex items-start gap-1.5 text-sm font-medium text-amber-400">
      {isEnergie ? (
        <Euro className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      ) : (
        <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      )}
      <span>{bouquet.priceFrom}</span>
    </p>
  );
}

function BouquetCard({ bouquet }: { bouquet: ServiceBouquet }) {
  const Icon = ICON_MAP[bouquet.icon as IconName] ?? Sparkles;
  const ctaLabel = CTA_LABELS[bouquet.slug];
  const typicalDelay = TYPICAL_DELAYS[bouquet.slug];

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-8 transition-shadow hover:shadow-xl",
        bouquet.highlighted
          ? "border-amber-500/50 bg-gradient-to-b from-amber-500/10 to-slate-900/50"
          : "border-slate-700 bg-slate-900/80"
      )}
      id={bouquet.slug}
    >
      {bouquet.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Badge variant="gold">⚡ Le plus demandé</Badge>
          <Badge variant="gold">Primes jusqu'à 12.000€</Badge>
        </div>
      )}

      <header>
        <Icon
          className={cn(
            "h-10 w-10",
            bouquet.highlighted ? "text-amber-400" : "text-slate-400"
          )}
          aria-hidden="true"
        />
        <h3 className="mt-4 font-serif text-2xl font-bold text-white">
          {bouquet.name}
        </h3>
        <p
          className={cn(
            "mt-1 text-sm font-medium",
            bouquet.highlighted ? "text-amber-400" : "text-slate-400"
          )}
        >
          {bouquet.tagline}
        </p>
        <PriceDisplay bouquet={bouquet} />
      </header>

      <p className="mt-4 text-sm leading-relaxed text-slate-400">
        {bouquet.description}
      </p>

      {bouquet.highlighted && (
        <aside
          className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-xs leading-relaxed text-amber-300/80"
          aria-label="Donnée marché"
        >
          ⚡ +16% de ventes PAC en 2025 — agissez avant la prochaine hausse
        </aside>
      )}

      <ul
        className="mt-6 flex-1 space-y-2.5"
        role="list"
        aria-label="Inclus dans ce bouquet"
      >
        {bouquet.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      <p className="mt-5 text-xs text-slate-500">
        <span className="font-medium text-slate-400">Délai typique :</span>{" "}
        {typicalDelay}
      </p>

      <Link
        href={`${ROUTES.quote}?service=${bouquet.slug}`}
        className={cn(
          "mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors",
          bouquet.highlighted
            ? "bg-amber-500 text-slate-950 hover:bg-amber-400"
            : "border border-slate-600 text-white hover:border-amber-500 hover:text-amber-400"
        )}
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
