import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ROUTES } from "@/lib/constants";

export function FeaturedTestimonial() {
  return (
    <section
      className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="testimonial-heading"
    >
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll>
          <figure className="relative rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/8 via-slate-900/50 to-slate-950 p-10 md:p-14">

            {/* Guillemets décoratifs */}
            <div
              className="absolute left-8 top-6 font-serif text-8xl leading-none text-amber-500/15 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <div className="relative">
              {/* Étoiles */}
              <p className="text-xl text-amber-400" aria-label="5 étoiles sur 5">
                ★★★★★
              </p>

              {/* Citation principale */}
              <blockquote className="mt-5">
                <p className="font-serif text-xl font-medium leading-relaxed text-white md:text-2xl md:leading-relaxed">
                  &ldquo;Ils ont géré notre dossier de primes Renolution en même
                  temps que les travaux. On a récupéré{" "}
                  <span className="text-amber-400">8.500€</span> sans faire
                  aucune démarche. Pas un coup de téléphone, pas un formulaire —
                  zéro. On a signé, ils ont tout fait, et trois semaines plus tard
                  on avait notre nouvelle chaudière ET l&apos;argent sur le compte.
                  C&apos;est ça, un vrai professionnel.&rdquo;
                </p>
              </blockquote>

              {/* Auteur */}
              <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 font-serif text-lg font-bold text-amber-400">
                    I
                  </div>
                  <div>
                    <p className="font-semibold text-white">Isabelle M.</p>
                    <p className="text-sm text-slate-400">
                      Transition énergétique — Ixelles, Bruxelles
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Janvier 2025 · Vérifié Google
                    </p>
                  </div>
                </div>

                {/* Chiffre mis en valeur */}
                <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-6 py-4 text-center">
                  <p className="font-serif text-3xl font-bold text-amber-400">8.500€</p>
                  <p className="mt-1 text-xs text-slate-400">de primes récupérées</p>
                  <p className="text-xs text-slate-500">sans aucune démarche</p>
                </div>
              </figcaption>
            </div>
          </figure>

          {/* Lien discret vers tous les avis */}
          <div className="mt-6 text-center">
            <Link
              href={ROUTES.portfolio}
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-amber-400"
            >
              Voir nos réalisations et témoignages
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
