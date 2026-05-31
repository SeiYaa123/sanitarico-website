import { Shield, Award, Clock, Users } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const TRUST_ITEMS = [
  {
    icon: Clock,
    label: `${COMPANY.yearsExperience}+ ans d'expérience`,
    sublabel: "Fondé à Bruxelles",
  },
  {
    icon: Users,
    label: `${COMPANY.projectsCompleted}+ projets`,
    sublabel: "Clients satisfaits",
  },
  {
    icon: Award,
    label: "Garantie décennale",
    sublabel: "RC Professionnelle",
  },
  {
    icon: Shield,
    label: "TVA 6%",
    sublabel: "Pour logements >10 ans",
  },
] as const;

export function TrustStrip() {
  return (
    <section
      className="border-y border-slate-800 bg-slate-900/50"
      aria-label="Indicateurs de confiance"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ul
          className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          role="list"
          aria-label="Chiffres clés"
        >
          {TRUST_ITEMS.map((item) => (
            <li key={item.label} className="flex items-center gap-3">
              <item.icon
                className="h-8 w-8 shrink-0 text-amber-500"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-white">{item.label}</p>
                <p className="text-xs text-slate-500">{item.sublabel}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
