import type { Metadata } from "next";
import { Award, Users, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/home/CtaSection";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À propos — 30 ans de rénovation à Bruxelles",
  description:
    "Sanitari&Co, votre artisan de confiance depuis 30 ans à Bruxelles. Découvrez notre histoire, notre équipe et notre engagement pour la rénovation d'exception.",
  alternates: { canonical: `${COMPANY.website}/a-propos/` },
};

const VALUES = [
  {
    icon: Award,
    title: "Excellence artisanale",
    description:
      "Chaque chantier est traité avec le même soin que si c'était notre propre maison. Nous ne signons que des travaux dont nous sommes fiers.",
  },
  {
    icon: Users,
    title: "Interlocuteur unique",
    description:
      "Un seul numéro, un seul responsable. Fini la coordination stressante entre plusieurs corps de métier.",
  },
  {
    icon: Clock,
    title: "Respect des délais",
    description:
      "Nos plannings sont tenus. Vous recevez un point hebdomadaire et pouvez nous joindre à tout moment.",
  },
  {
    icon: MapPin,
    title: "Ancrage bruxellois",
    description:
      "30 ans de chantiers à Bruxelles. Nous connaissons les bâtiments, les contraintes et les communes.",
  },
] as const;

const STATS = [
  { value: "30+", label: "ans d'expertise" },
  { value: "500+", label: "projets réalisés" },
  { value: "4.8/5", label: "satisfaction client" },
  { value: "19", label: "communes desservies" },
] as const;

export default function AboutPage() {
  return (
    <>
      <div className="bg-slate-950 px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Notre histoire"
                title="30 ans de passion pour la rénovation"
                as="h1"
                subtitle="Fondé à Schaerbeek, Sanitari&Co est devenu le partenaire de confiance de centaines de familles bruxelloises pour leurs projets de rénovation."
              />

              <div className="mt-8 grid grid-cols-2 gap-6">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
                  >
                    <p className="font-serif text-4xl font-bold text-amber-500">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-10">
              <p className="font-serif text-2xl font-bold text-white">
                Notre engagement
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                Nous croyons que la rénovation ne doit pas être une source de
                stress. C&apos;est pourquoi nous avons construit une offre
                complète — de la plomberie à la cuisine, du chauffage à la
                toiture — pour être votre interlocuteur unique du premier
                contact jusqu&apos;à la remise des clés.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                {COMPANY.yearsExperience} ans de chantiers nous ont appris que
                la confiance se gagne projet après projet, artisan après artisan.
                Chaque maison que nous touchons porte notre signature.
              </p>
            </div>
          </div>

          <div className="mt-24">
            <SectionHeading
              eyebrow="Nos valeurs"
              title="Ce qui nous définit"
              centered
              headingId="values-heading"
              className="mx-auto mb-16 max-w-xl text-center"
            />

            <ul
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
              role="list"
              aria-labelledby="values-heading"
            >
              {VALUES.map((value) => (
                <li
                  key={value.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
                >
                  <value.icon
                    className="h-8 w-8 text-amber-500"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-24 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                  Zone d&apos;intervention
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-white">
                  Bruxelles et ses 19 communes
                </h2>
                <p className="mt-4 text-slate-400">
                  Schaerbeek, Ixelles, Uccle, Anderlecht, Etterbeek, Forest,
                  Woluwé-Saint-Lambert, Woluwé-Saint-Pierre, Molenbeek,
                  Saint-Gilles, Evere, Koekelberg, Berchem-Sainte-Agathe,
                  Laeken et toutes les communes de la Région de
                  Bruxelles-Capitale.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-900/50 p-4 text-center">
                  <p className="font-semibold text-white">Brabant wallon</p>
                  <p className="text-xs text-slate-500">Sur demande</p>
                </div>
                <div className="rounded-xl bg-slate-900/50 p-4 text-center">
                  <p className="font-semibold text-white">Flamand Brabant</p>
                  <p className="text-xs text-slate-500">Sur demande</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
