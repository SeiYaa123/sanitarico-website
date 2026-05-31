"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PhoneCta } from "@/components/ui/PhoneCta";
import { Badge } from "@/components/ui/Badge";
import { COMPANY, ROUTES, ANIMATION } from "@/lib/constants";

const BADGE_ITEMS = [
  "Fondé en 1994 à Schaerbeek",
  "Un seul interlocuteur",
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
        Vous gérez votre vie.{" "}
        <span className="text-amber-500">On gère votre rénovation.</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
        Coordonner cinq artisans pour rénover une salle de bain — c&apos;est
        trois mois de stress inutile. Depuis 1994, nous avons construit
        un modèle différent&nbsp;: <strong className="text-slate-200">un seul appel,
        un seul responsable, du premier coup de marteau à la remise des clés.</strong>
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href={ROUTES.quote}
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-slate-950 transition-colors hover:bg-amber-400"
        >
          Obtenir mon devis gratuit
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <PhoneCta variant="hero" />
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Réponse sous 48h · Visite technique offerte · Sans engagement
      </p>
    </motion.div>
  );
}

function HeroStats() {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={
        shouldReduce
          ? { duration: 0 }
          : { duration: ANIMATION.durationNormal, delay: 0.2, ease: ANIMATION.easeOutExpo }
      }
      className="flex flex-col gap-6"
    >
      {/* Featured testimonial — preuve sociale au-dessus de la ligne de flottaison */}
      <figure className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
        <blockquote>
          <p className="text-base leading-relaxed text-slate-200 italic">
            &ldquo;Ils ont géré notre dossier de primes Renolution en même
            temps que les travaux. On a récupéré 8.500€ sans faire
            aucune démarche. Exceptionnel.&rdquo;
          </p>
        </blockquote>
        <figcaption className="mt-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/20 text-sm font-bold text-amber-400">
            I
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Isabelle M.</p>
            <p className="text-xs text-slate-500">Rénovation énergétique · Ixelles</p>
          </div>
          <div className="ml-auto text-amber-400 text-sm">★★★★★</div>
        </figcaption>
      </figure>

      {/* Stats compact */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { value: "1994", label: "Fondé à Schaerbeek" },
          { value: "500+", label: "Chantiers livrés" },
          { value: "4,8/5", label: "Note Google" },
          { value: "48h", label: "Délai de réponse" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur">
            <p className="font-serif text-3xl font-bold text-white">{stat.value}</p>
            <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
