import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { COMPANY, ROUTES } from "@/lib/constants";

export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-amber-500 px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <BackgroundPattern />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <RevealOnScroll>
          <h2
            id="cta-heading"
            className="font-serif text-4xl font-bold text-slate-950 md:text-5xl"
          >
            Votre projet mérite un devis sérieux.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-800">
            Réponse garantie sous {COMPANY.quotePromiseHours}h. Visite technique
            offerte. Simulation primes Renolution incluse. Sans engagement.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={ROUTES.quote}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-8 py-4 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Demander mon devis gratuit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-950/30 px-8 py-4 font-semibold text-slate-950 transition-colors hover:bg-slate-950/10"
              aria-label={`Appeler Sanitari&Co au ${COMPANY.phone}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function BackgroundPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-slate-950" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full border border-slate-950" />
    </div>
  );
}
