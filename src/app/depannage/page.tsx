import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Wrench, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneCta } from "@/components/ui/PhoneCta";
import { COMPANY, ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dépannage Urgence Bruxelles 24h/7j",
  description:
    "Dépannage plomberie et chauffage en urgence à Bruxelles — intervention rapide 24h/7j, 7 jours sur 7. Fuite, chaudière en panne, débouchage urgent.",
};

const EMERGENCY_SERVICES = [
  {
    icon: Wrench,
    title: "Fuite d'eau",
    description:
      "Fuite sous évier, robinet qui coule, canalisation percée — intervention immédiate pour limiter les dégâts.",
  },
  {
    icon: Wrench,
    title: "Chaudière en panne",
    description:
      "Plus de chauffage ni d'eau chaude — dépannage toutes marques, diagnostic et réparation sur place.",
  },
  {
    icon: Wrench,
    title: "Débouchage urgent",
    description:
      "WC bouché, évier bloqué, canalisation obstruée — débouchage professionnel immédiat.",
  },
  {
    icon: Wrench,
    title: "Radiateur défectueux",
    description:
      "Radiateur qui ne chauffe pas, purge nécessaire, remplacement d'urgence en cas de fuite.",
  },
] as const;

export default function DepannagePage() {
  return (
    <div className="bg-slate-950">
      <HeroDepannage />
      <EmergencyServices />
      <DepannageProcess />
    </div>
  );
}

function HeroDepannage() {
  return (
    <section className="flex min-h-[60vh] items-center px-4 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" aria-hidden="true" />
          Disponible 24h/7j
        </div>

        <h1 className="mt-6 font-serif text-5xl font-bold text-white md:text-6xl">
          Urgence plomberie ou chauffage à Bruxelles ?
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Nos techniciens interviennent dans les meilleurs délais, 7 jours sur 7,
          jours fériés inclus. Un seul appel suffit.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <PhoneCta variant="hero" />
          <Link
            href={ROUTES.quote}
            className="rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition-colors hover:border-amber-500 hover:text-amber-400"
          >
            Demande non urgente
          </Link>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Tarif de déplacement communiqué avant intervention · Devis sur place
        </p>
      </div>
    </section>
  );
}

function EmergencyServices() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Nos interventions d'urgence"
          title="On gère toutes les situations"
          centered
          className="mx-auto mb-12 max-w-xl"
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {EMERGENCY_SERVICES.map((service) => (
            <li
              key={service.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
            >
              <service.icon
                className="h-8 w-8 text-amber-500"
                aria-hidden="true"
              />
              <h3 className="mt-3 font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function DepannageProcess() {
  const steps = [
    {
      icon: Phone,
      title: "1. Appelez-nous",
      description: `${COMPANY.phone} — disponible 24h/7j`,
    },
    {
      icon: Clock,
      title: "2. Intervention rapide",
      description: "Technicien dépêché dans les meilleurs délais",
    },
    {
      icon: Shield,
      title: "3. Tarif transparent",
      description: "Devis communiqué avant tout travail",
    },
  ] as const;

  return (
    <section className="border-t border-slate-800 bg-slate-900/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <step.icon
                className="mx-auto h-10 w-10 text-amber-500"
                aria-hidden="true"
              />
              <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <PhoneCta variant="hero" />
        </div>
      </div>
    </section>
  );
}
