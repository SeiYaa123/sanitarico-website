import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Calendar, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/home/CtaSection";
import { COMPANY, ROUTES, BRUSSELS_COMMUNES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contactez Sanitari&Co — Bruxelles",
  description:
    "Contactez Sanitari&Co pour votre projet de rénovation à Bruxelles. Téléphone, email ou visite sur rendez-vous — nous répondons rapidement.",
  alternates: { canonical: `${COMPANY.website}/contact/` },
};

const CONTACT_BLOCKS = [
  {
    id: "phone",
    icon: Phone,
    eyebrow: "Réponse directe",
    title: "Téléphone",
    primary: COMPANY.phone,
    secondary: "Lun–Ven 8h–18h · Dépannage urgent 24h/7j",
    href: COMPANY.phoneHref,
    hrefLabel: `Appeler Sanitari&Co au ${COMPANY.phone}`,
    linkText: "Appeler maintenant",
  },
  {
    id: "email",
    icon: Mail,
    eyebrow: "Par écrit",
    title: "Email",
    primary: COMPANY.email,
    secondary: "Réponse sous 24h ouvrées",
    href: `mailto:${COMPANY.email}`,
    hrefLabel: `Envoyer un email à ${COMPANY.email}`,
    linkText: "Envoyer un email",
  },
  {
    id: "visit",
    icon: MapPin,
    eyebrow: "Venez nous voir",
    title: "Notre adresse",
    primary: COMPANY.address,
    secondary: "Sur rendez-vous uniquement",
    href: null,
    hrefLabel: null,
    linkText: null,
    extra:
      "Nous vous accueillons dans nos locaux de Schaerbeek pour discuter de votre projet en détail. Prenez rendez-vous par téléphone ou par email avant de vous déplacer.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <div className="bg-slate-950 px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Hero heading */}
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Contactez-nous"
              title="Parlons de votre projet"
              as="h1"
              subtitle="Une question, une urgence, ou simplement l'envie d'explorer ce que nous pouvons faire pour votre logement — choisissez le canal qui vous convient."
            />
          </div>

          {/* Contact blocks grid */}
          <div className="mt-20 grid gap-8 sm:grid-cols-3">
            {CONTACT_BLOCKS.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.id}
                  className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/50 p-8"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10">
                    <Icon className="h-6 w-6 text-amber-500" aria-hidden="true" />
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-amber-500">
                    {block.eyebrow}
                  </p>

                  <h2 className="mt-1 font-serif text-xl font-bold text-white">
                    {block.title}
                  </h2>

                  <p className="mt-3 font-semibold text-slate-200">
                    {block.primary}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">{block.secondary}</p>

                  {"extra" in block && block.extra && (
                    <p className="mt-4 text-sm leading-relaxed text-slate-500">
                      {block.extra}
                    </p>
                  )}

                  {block.href && block.linkText && (
                    <a
                      href={block.href}
                      aria-label={block.hrefLabel ?? undefined}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl border border-amber-500/30 px-5 py-3 text-sm font-semibold text-amber-400 transition-colors hover:border-amber-500 hover:bg-amber-500/10 hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500"
                    >
                      {block.linkText}
                      <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </a>
                  )}

                  {block.id === "visit" && (
                    <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4 shrink-0 text-slate-600" aria-hidden="true" />
                      Sur rendez-vous
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* "Pas encore prêt ?" encart */}
          <div className="mt-16 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                  Pas encore prêt ?
                </p>
                <h2 className="mt-2 font-serif text-2xl font-bold text-white">
                  Commencez par un devis gratuit
                </h2>
                <p className="mt-3 max-w-xl text-slate-400">
                  Décrivez votre projet en quelques lignes — type de travaux,
                  superficie, contraintes — et nous vous répondons sous{" "}
                  {COMPANY.quotePromiseHours}h avec une première évaluation sans
                  engagement.
                </p>
              </div>
              <Link
                href={ROUTES.quote}
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-amber-500 px-7 py-4 font-semibold text-slate-950 transition-colors hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500"
              >
                Demander mon devis
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Zone géographique */}
          <div
            className="mt-24"
            aria-labelledby="zone-heading"
          >
            <div className="flex items-start gap-3">
              <MapPin
                className="mt-1 h-5 w-5 shrink-0 text-amber-500"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                  Zone d&apos;intervention
                </p>
                <h2
                  id="zone-heading"
                  className="mt-1 font-serif text-2xl font-bold text-white md:text-3xl"
                >
                  Bruxelles et les 19 communes
                </h2>
                <p className="mt-3 max-w-2xl text-slate-400">
                  Nous intervenons sur l&apos;ensemble de la Région de
                  Bruxelles-Capitale — des travaux d&apos;urgence comme des
                  rénovations complètes.
                </p>
              </div>
            </div>

            <ul
              className="mt-8 flex flex-wrap gap-2"
              aria-label="Communes desservies"
            >
              {BRUSSELS_COMMUNES.map((commune) => (
                <li key={commune}>
                  <span className="inline-block rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1.5 text-sm text-slate-300">
                    {commune}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-slate-500">
              Vous êtes hors Bruxelles ?{" "}
              <a
                href={COMPANY.phoneHref}
                className="text-amber-500 underline underline-offset-4 hover:text-amber-400"
              >
                Appelez-nous
              </a>{" "}
              — nous étudions chaque demande au cas par cas.
            </p>
          </div>
        </div>
      </div>

      <CtaSection />
    </>
  );
}
