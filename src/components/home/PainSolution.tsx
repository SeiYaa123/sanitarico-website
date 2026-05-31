import { X, Check } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface PainItem {
  pain: string;
  solution: string;
}

const PAIN_ITEMS: readonly PainItem[] = [
  {
    pain: "3 devis incomparables, chacun dans un format différent",
    solution: "Un seul devis Sanitari&Co, poste par poste, avec primes Renolution simulées",
  },
  {
    pain: "Le plombier attend l'électricien qui attend le carreleur — le chantier s'arrête",
    solution: "Nous coordonnons tous les corps de métier. Vous ne parlez qu'à une seule personne",
  },
  {
    pain: "Impossible de savoir si les travaux sont bien faits avant qu'il soit trop tard",
    solution: "Point WhatsApp chaque vendredi avec photos. Réception en votre présence",
  },
  {
    pain: "Les primes Renolution : dossier incompréhensible, délais flous",
    solution: "Nous constituons et déposons le dossier à votre place. Vous touchez l'argent",
  },
] as const;

export function PainSolution() {
  return (
    <section
      className="bg-slate-900 px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="pain-solution-heading"
    >
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <SectionHeading
            headingId="pain-solution-heading"
            eyebrow="Pourquoi nos clients nous choisissent"
            title="La rénovation telle qu'elle devrait être"
            subtitle="Vous avez peut-être déjà vécu l'un de ces scénarios. C'est exactement pour ça que nous avons construit Sanitari&Co autrement."
            centered
            className="mx-auto max-w-3xl"
          />
        </RevealOnScroll>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {PAIN_ITEMS.map((item, index) => (
            <RevealOnScroll key={item.pain} delay={index * 0.08}>
              <PainSolutionCard item={item} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.4}>
          <div className="mt-12 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 text-center">
            <p className="font-serif text-2xl font-bold text-white">
              Le résultat&nbsp;: vous profitez de votre maison rénovée.
            </p>
            <p className="mt-3 text-slate-400">
              Pas du stress du chantier. Pas des relances. Pas des imprévus que personne
              ne gère. Juste le résultat que vous attendiez.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function PainSolutionCard({ item }: { item: PainItem }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
      {/* Pain */}
      <div className="flex gap-4 border-b border-slate-800/60 bg-red-500/5 p-5">
        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/20">
          <X className="h-3 w-3 text-red-400" aria-hidden="true" />
        </div>
        <p className="text-sm leading-relaxed text-slate-400 line-through decoration-red-500/40">
          {item.pain}
        </p>
      </div>

      {/* Solution */}
      <div className="flex gap-4 p-5">
        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
          <Check className="h-3 w-3 text-amber-400" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium leading-relaxed text-slate-200">
          {item.solution}
        </p>
      </div>
    </article>
  );
}
