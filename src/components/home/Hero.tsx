"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PhoneCta } from "@/components/ui/PhoneCta";
import { Badge } from "@/components/ui/Badge";
import { COMPANY, ROUTES, ANIMATION } from "@/lib/constants";

const BADGE_ITEMS = [
  "30 ans d'expertise",
  "Devis en 48h",
  "Garantie décennale",
  "TVA 6% appliquée",
] as const;

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-4 pt-24 sm:px-6 lg:px-8"
      aria-label="Présentation Sanitari&Co"
    >
      <BackgroundGradient />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroStats />
        </div>
      </div>
    </section>
  );
}

function BackgroundGradient() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-slate-900"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-amber-500/8 blur-3xl"
        aria-hidden="true"
      />
    </>
  );
}

function HeroContent() {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldReduce ? { duration: 0 } : { duration: ANIMATION.durationNormal, ease: ANIMATION.easeOutExpo }}
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {BADGE_ITEMS.map((item) => (
          <Badge key={item} variant="gold">
            {item}
          </Badge>
        ))}
      </div>

      <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
        Votre maison mérite{" "}
        <span className="text-amber-500">un artisan exceptionnel.</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
        {COMPANY.yearsExperience} ans de savoir-faire artisanal à Bruxelles.
        Plomberie, chauffage, rénovation complète — un seul interlocuteur, une
        seule responsabilité, zéro compromis.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href={ROUTES.quote}
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-slate-950 transition-colors hover:bg-amber-400"
        >
          Devis gratuit en 48h
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <PhoneCta variant="hero" />
      </div>
    </motion.div>
  );
}

function HeroStats() {
  const shouldReduce = useReducedMotion();
  const stats = [
    { value: `${COMPANY.yearsExperience}+`, label: "ans d'expérience" },
    { value: `${COMPANY.projectsCompleted}+`, label: "projets réalisés" },
    { value: `${COMPANY.averageRating}/5`, label: "note moyenne" },
    { value: "24h/7j", label: "dépannage urgence" },
  ] as const;

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={
        shouldReduce
          ? { duration: 0 }
          : { duration: ANIMATION.durationNormal, delay: 0.2, ease: ANIMATION.easeOutExpo }
      }
      className="grid grid-cols-2 gap-6"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur ${
            index === 1 ? "border-amber-500/30 bg-amber-500/5" : ""
          }`}
        >
          <p className="font-serif text-4xl font-bold text-white">
            {stat.value}
          </p>
          <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
}
