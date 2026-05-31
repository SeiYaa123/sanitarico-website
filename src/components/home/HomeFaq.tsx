import { ROUTES } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "Combien de temps dure une rénovation de salle de bain ?",
    answer:
      "Pour une salle de bain standard (6–12m²), comptez 8 à 14 jours de chantier. Une transformation spa complète avec carrelage mural : 2 à 3 semaines.",
  },
  {
    question: "Est-ce que vous gérez les primes Renolution vous-mêmes ?",
    answer:
      "Oui. On constitue le dossier, on le dépose, on fait le suivi. Vous n'avez rien à faire. En moyenne, nos clients récupèrent entre 6.000 et 12.000€ selon les travaux.",
  },
  {
    question: "Peut-on rénover cuisine et salle de bain en même temps ?",
    answer:
      "Oui, et c'est souvent plus économique. Un seul chantier, une seule période de perturbation. Nous planifions les corps de métier pour minimiser les chevauchements.",
  },
  {
    question: "Quelle garantie avez-vous sur les travaux ?",
    answer:
      "Garantie décennale sur les travaux de construction, garantie biennale sur les équipements. Tout est écrit dans votre contrat avant le début du chantier.",
  },
  {
    question: "Intervenez-vous en urgence le soir et le week-end ?",
    answer:
      "Oui. Notre service de dépannage est disponible 24h/7j pour les clients avec contrat d'entretien, et pendant les heures ouvrées pour les autres. Pas de supplément pour les soirées en semaine.",
  },
  {
    question: "Avez-vous des références dans notre quartier ?",
    answer:
      "Nous avons réalisé plus de 500 chantiers sur les 19 communes bruxelloises. Nous pouvons vous mettre en contact avec un client de votre quartier si vous le souhaitez.",
  },
] as const;

export function HomeFaq() {
  return (
    <section
      className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <RevealOnScroll>
          <SectionHeading
            headingId="faq-heading"
            eyebrow="Questions fréquentes"
            title="Tout ce que vous vouliez savoir"
            subtitle="Les vraies questions que nos clients posent avant de signer. Réponses directes, sans jargon."
            centered
            className="mx-auto max-w-2xl"
          />
        </RevealOnScroll>

        {/*
          Native <details>/<summary> accordion:
          - Full keyboard access: Enter/Space toggles, no JS required
          - Screen reader announces as "disclosure widget"
          - Answer content is always in DOM (SEO-friendly)
          - <ul role="list"> re-adds list semantics stripped by list-none in Safari/VoiceOver
        */}
        <ul
          className="mt-14 list-none divide-y divide-slate-800"
          role="list"
          aria-label="Questions fréquentes"
        >
          {FAQ_ITEMS.map((item, index) => (
            <li key={item.question}>
              <RevealOnScroll delay={index * 0.06}>
                <FaqAccordionItem item={item} index={index} />
              </RevealOnScroll>
            </li>
          ))}
        </ul>

        {/* Bottom CTA nudge */}
        <RevealOnScroll delay={FAQ_ITEMS.length * 0.06}>
          <div className="mt-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
            <p className="text-slate-400">
              Une question pas encore dans la liste&nbsp;?
            </p>
            <Link
              href={ROUTES.quote}
              className="inline-flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-semibold text-amber-400 transition-colors hover:border-amber-500/60 hover:bg-amber-500/20 hover:text-amber-300"
              aria-label="Poser votre question via le formulaire de devis"
            >
              Posez-la directement
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function FaqAccordionItem({
  item,
  index,
}: {
  item: FaqItem;
  index: number;
}) {
  return (
    /*
      .group drives the chevron rotation and colour changes via
      group-has-[details[open]] — targets when any descendant <details>
      carries the [open] attribute (set by the browser on expand).
      Tailwind v4 supports arbitrary compound selectors in has-[].
    */
    <div className="group">
      <details>
        <summary
          id={`faq-question-${index}`}
          className={[
            "flex cursor-pointer select-none items-center justify-between gap-4",
            "py-5 text-left",
            "text-base font-semibold text-white",
            "transition-colors duration-200 hover:text-amber-400",
            // Hide browser-native disclosure triangle across all engines
            "list-none [&::-webkit-details-marker]:hidden [&::marker]:hidden",
          ].join(" ")}
        >
          <span>{item.question}</span>

          {/* Chevron — aria-hidden because summary text is the accessible label */}
          <span
            className={[
              "flex h-7 w-7 shrink-0 items-center justify-center",
              "rounded-full border border-slate-700 bg-slate-900",
              "transition-colors duration-300",
              "group-has-[details[open]]:border-amber-500/40 group-has-[details[open]]:bg-amber-500/10",
            ].join(" ")}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 12 12"
              width="12"
              height="12"
              fill="none"
              className={[
                "stroke-slate-400",
                "transition-transform duration-300",
                "group-has-[details[open]]:rotate-180 group-has-[details[open]]:stroke-amber-400",
              ].join(" ")}
              aria-hidden="true"
            >
              <path
                d="M2 4l4 4 4-4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </summary>

        {/*
          Answer panel.
          Omitting role="region" here intentionally: applying region to every
          accordion item (×6) creates excessive landmark clutter in screen
          reader navigation menus. The <details>/<summary> disclosure semantics
          are sufficient — the browser announces open/closed state correctly.
        */}
        <div
          id={`faq-answer-${index}`}
          aria-labelledby={`faq-question-${index}`}
          className={[
            "pb-5 pr-11",
            "text-sm leading-relaxed text-slate-400",
            "border-l-2 border-amber-500/30 pl-4",
          ].join(" ")}
        >
          <p>{item.answer}</p>
        </div>
      </details>
    </div>
  );
}
