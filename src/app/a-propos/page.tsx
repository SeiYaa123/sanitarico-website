import type { Metadata } from "next";
import { Award, Users, MapPin, Clock, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/home/CtaSection";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Notre histoire — 30 ans d'artisanat à Bruxelles",
  description:
    "Depuis 1994, Sanitari&Co réinvente la rénovation à Bruxelles : un seul interlocuteur, une seule garantie, de la plomberie à la cuisine. L'histoire d'une obsession pour le travail bien fait.",
  alternates: { canonical: `${COMPANY.website}/a-propos/` },
};

const MILESTONES = [
  {
    year: "1994",
    title: "Le premier chantier",
    description:
      "Une salle de bain à Schaerbeek. Un artisan, ses outils, et une conviction : la rénovation devrait se passer autrement. Pas de stress, pas de surprise sur le devis, pas de plombier qui disparaît.",
  },
  {
    year: "2003",
    title: "L'équipe s'agrandit",
    description:
      "Face à la demande, on intègre électriciens et carreleurs. L'idée du guichet unique prend forme : un client, un interlocuteur, tous les corps de métier coordonnés en interne.",
  },
  {
    year: "2015",
    title: "La transition énergétique",
    description:
      "Les primes énergétiques se multiplient à Bruxelles. On devient experts en dossiers Renolution. Nos clients récupèrent des milliers d'euros qu'ils n'auraient jamais demandés seuls.",
  },
  {
    year: "2024",
    title: "500+ chantiers livrés",
    description:
      "Cinq cents familles bruxelloises ont fait confiance à notre modèle. Chaque projet livré porte notre signature. Chaque client satisfait recommande ses voisins.",
  },
] as const;

const VALUES = [
  {
    icon: Award,
    title: "On ne livre que ce dont on est fiers",
    description:
      "Chaque chantier est traité comme si c'était notre propre maison. Si ça ne nous convient pas à nous, ça ne vous convient pas à vous.",
  },
  {
    icon: Users,
    title: "Un seul numéro. Pour tout.",
    description:
      "Fini le plombier qui attend l'électricien qui attend le carreleur. Vous nous appelez, on gère. C'est aussi simple que ça.",
  },
  {
    icon: Clock,
    title: "Le délai annoncé est le délai tenu",
    description:
      "Nous planifions chaque semaine. Vous recevez un point WhatsApp tous les vendredis avec photos. Pas de vague surprise le lundi matin.",
  },
  {
    icon: MapPin,
    title: "Bruxelles, on connaît",
    description:
      "30 ans de chantiers dans les 19 communes. On sait qu'une maison de maître à Ixelles n'a pas les mêmes contraintes qu'un appartement à Molenbeek.",
  },
] as const;

const FEATURED_QUOTE = {
  text: "Ce qui m'a convaincu, c'est qu'ils m'ont rappelé dans les 24h avec un vrai technicien au téléphone — pas une secrétaire, pas un formulaire. Quelqu'un qui connaissait mon type de logement et m'a donné une fourchette de prix réaliste avant même la visite.",
  author: "Jean-Pierre K.",
  context: "Client depuis 3 ans · Contrat d'entretien · Schaerbeek",
} as const;

export default function AboutPage() {
  return (
    <>
      <div className="bg-slate-950 px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Hero histoire */}
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                Notre histoire
              </p>
              <h1 className="mt-3 font-serif text-5xl font-bold leading-tight text-white md:text-6xl">
                Depuis 1994, on croit
                qu&apos;une rénovation{" "}
                <span className="text-amber-500">ne devrait pas être un cauchemar.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-400">
                Tout a commencé avec une conviction simple&nbsp;: pourquoi un
                propriétaire devrait-il coordonner lui-même cinq artisans
                différents, gérer cinq devis incomparables et espérer que
                personne ne disparaît en milieu de chantier&nbsp;?
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                Il y avait une meilleure façon de faire. On a mis trente ans à
                la perfectionner.
              </p>
            </div>

            {/* Citation en évidence */}
            <figure className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
              <Quote className="h-8 w-8 text-amber-500/40" aria-hidden="true" />
              <blockquote className="mt-4">
                <p className="text-lg leading-relaxed text-slate-200 italic">
                  &ldquo;{FEATURED_QUOTE.text}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-800 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 font-serif font-bold text-amber-400">
                  J
                </div>
                <div>
                  <p className="font-semibold text-white">{FEATURED_QUOTE.author}</p>
                  <p className="text-xs text-slate-500">{FEATURED_QUOTE.context}</p>
                </div>
                <p className="ml-auto text-amber-400">★★★★★</p>
              </figcaption>
            </figure>
          </div>

          {/* Timeline */}
          <div className="mt-28">
            <SectionHeading
              eyebrow="30 ans en 4 chapitres"
              title="Comment on est arrivés là"
              headingId="timeline-heading"
              className="mb-14"
            />
            <ol
              className="relative border-l border-slate-800"
              aria-labelledby="timeline-heading"
            >
              {MILESTONES.map((milestone, index) => (
                <li key={milestone.year} className="mb-10 ml-6 last:mb-0">
                  <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10">
                    <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
                  </div>
                  <div className={index === MILESTONES.length - 1 ? "opacity-100" : "opacity-90"}>
                    <time className="mb-1 block text-sm font-bold text-amber-500">
                      {milestone.year}
                    </time>
                    <h3 className="text-lg font-semibold text-white">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
                      {milestone.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Valeurs */}
          <div className="mt-28">
            <SectionHeading
              eyebrow="Ce qu'on défend"
              title="Nos engagements concrets"
              subtitle="Pas des valeurs sur une plaquette. Des habitudes qu'on a mises en place parce qu'on a vu ce qui fonctionne — et ce qui énerve les clients."
              headingId="values-heading"
              centered
              className="mx-auto mb-14 max-w-2xl"
            />
            <ul
              className="grid gap-6 sm:grid-cols-2"
              role="list"
              aria-labelledby="values-heading"
            >
              {VALUES.map((value) => (
                <li
                  key={value.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7"
                >
                  <value.icon className="h-8 w-8 text-amber-500" aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-xl font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-400">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats et zone */}
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "1994", label: "Année de fondation", sub: "Schaerbeek, Bruxelles" },
              { value: "500+", label: "Chantiers livrés", sub: "Sur 19 communes" },
              { value: "4,8/5", label: "Note Google", sub: "47 avis vérifiés" },
              { value: "100%", label: "Dossiers primes gérés", sub: "Renolution & CERGA" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center"
              >
                <p className="font-serif text-4xl font-bold text-amber-500">{stat.value}</p>
                <p className="mt-2 font-semibold text-white">{stat.label}</p>
                <p className="mt-1 text-xs text-slate-500">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Zone d'intervention */}
          <div className="mt-16 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
              Zone d&apos;intervention
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white">
              Bruxelles, on connaît chaque quartier
            </h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              Schaerbeek, Ixelles, Uccle, Anderlecht, Etterbeek, Forest,
              Woluwé-Saint-Lambert, Woluwé-Saint-Pierre, Molenbeek,
              Saint-Gilles, Evere, Koekelberg, Berchem-Sainte-Agathe,
              Laeken et toutes les communes de la Région de Bruxelles-Capitale.
              <br />
              <span className="mt-2 block text-sm text-slate-500">
                Brabant wallon et Brabant flamand&nbsp;: sur demande.
              </span>
            </p>
          </div>

        </div>
      </div>
      <CtaSection />
    </>
  );
}
