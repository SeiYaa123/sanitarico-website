import { ShieldCheck } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function TrustStrip() {
  return (
    <section
      className="border-y border-slate-800 bg-slate-950/70"
      aria-label="Indicateurs de confiance"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <ul
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          role="list"
          aria-label="Preuves de confiance"
        >
          {/* Item 1 — Année de fondation */}
          <li className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p
              className="text-4xl font-bold tabular-nums text-amber-500"
              aria-label="Année de fondation : 1994"
            >
              1994
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              Année de fondation à Schaerbeek
            </p>
            <p className="mt-1 text-xs text-slate-500">3 générations de clients</p>
          </li>

          {/* Item 2 — Chantiers livrés */}
          <li className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p
              className="text-4xl font-bold tabular-nums text-amber-500"
              aria-label={`${COMPANY.projectsCompleted} chantiers livrés`}
            >
              {COMPANY.projectsCompleted}+
            </p>
            <p className="mt-2 text-sm font-semibold text-white">Chantiers livrés</p>
            <p className="mt-1 text-xs text-slate-500">
              Sur les 19 communes bruxelloises
            </p>
          </li>

          {/* Item 3 — Avis Google */}
          <li className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p
              className="text-2xl leading-tight text-amber-400"
              aria-label="Note de 4,8 sur 5 — 47 avis Google"
            >
              ★★★★★
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              {COMPANY.averageRating.toFixed(1).replace(".", ",")}/5 —{" "}
              {COMPANY.totalReviews} avis Google
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Vérifiables sur votre téléphone
            </p>
          </li>

          {/* Item 4 — Certifications */}
          <li className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <ShieldCheck
              className="h-9 w-9 text-amber-500"
              aria-hidden="true"
            />
            <p className="mt-2 text-sm font-semibold text-white">
              CERGA · RGIE · Décennale
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Certifications affichées sur devis
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
