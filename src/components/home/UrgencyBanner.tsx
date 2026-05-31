import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { ArrowRight, Clock } from "lucide-react";

const SLOTS_REMAINING = 3;
const WEEK_LABEL = "cette semaine";
const MONTH_LABEL = "juillet 2026";

export function UrgencyBanner() {
  return (
    /*
      role="region" + aria-label creates a named landmark without duplicating
      the page's existing <header> banner landmark (owned by StickyHeader).
      Screen readers surface named regions in landmark navigation.
    */
    <div
      role="region"
      aria-label="Disponibilité planning — créneaux limités"
      className="relative border-b border-amber-500/30 bg-slate-900/95 backdrop-blur-sm"
    >
      {/* Amber top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">

        {/* Left: pulsing badge + message */}
        <div className="flex min-w-0 items-center gap-3">
          {/*
            Pulsing dot — purely decorative, conveys urgency visually.
            aria-hidden: the message text carries the same urgency signal
            for screen reader users.
            motion-safe:animate-ping respects prefers-reduced-motion:
            the ping runs only when the user has not requested reduced motion.
          */}
          <span
            className="relative flex h-5 w-5 shrink-0 items-center justify-center"
            aria-hidden="true"
          >
            <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-red-500 opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
          </span>

          {/* Desktop: full-length message */}
          <p className="hidden text-sm font-medium text-slate-200 sm:block">
            <span className="font-semibold text-amber-400">
              Planning {MONTH_LABEL} partiellement occupé
            </span>
            {" — "}
            <span className="font-semibold text-white">
              {SLOTS_REMAINING} créneaux de visite restants
            </span>{" "}
            <span className="text-slate-400">{WEEK_LABEL}</span>
          </p>

          {/* Mobile: condensed message */}
          <p className="flex items-center gap-1.5 text-xs font-medium text-slate-200 sm:hidden">
            <Clock className="h-3.5 w-3.5 shrink-0 text-amber-400" aria-hidden="true" />
            <span>
              <span className="font-semibold text-amber-400">
                {SLOTS_REMAINING} créneaux
              </span>{" "}
              <span className="text-slate-300">restants</span>{" "}
              <span className="text-slate-400">{WEEK_LABEL}</span>
            </span>
          </p>
        </div>

        {/* Right: reservation CTA */}
        <Link
          href={ROUTES.quote}
          className={[
            "inline-flex shrink-0 items-center gap-1 rounded-md",
            "border border-amber-500/40 bg-amber-500/10",
            "px-3 py-1 text-xs font-semibold text-amber-400",
            "transition-colors hover:border-amber-500/70 hover:bg-amber-500/20 hover:text-amber-300",
          ].join(" ")}
          aria-label={`Réserver un créneau de visite — ${SLOTS_REMAINING} places restantes ${WEEK_LABEL}`}
        >
          <span className="hidden sm:inline">Réserver maintenant</span>
          <span className="sm:hidden">Réserver</span>
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </Link>

      </div>
    </div>
  );
}
