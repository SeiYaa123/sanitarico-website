import {
  MessageSquare,
  Home,
  FileText,
  Wrench,
  CheckCircle,
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/processSteps";
import type { ProcessStep } from "@/types";

const ICON_MAP = { MessageSquare, Home, FileText, Wrench, CheckCircle } as const;
type IconName = keyof typeof ICON_MAP;

export function ProcessSteps() {
  return (
    <section
      className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Comment ça marche"
            title="De votre appel à votre clé en main"
            subtitle="Un processus clair, transparent, sans surprise. Voilà comment nous travaillons."
            centered
            className="mx-auto max-w-2xl"
          />
        </RevealOnScroll>

        <ol
          className="mt-16 grid gap-8 md:grid-cols-5"
          role="list"
          aria-label="Étapes du processus"
        >
          {processSteps.map((step, index) => (
            <li key={step.order}>
              <RevealOnScroll delay={index * 0.1}>
                <StepCard step={step} isLast={index === processSteps.length - 1} />
              </RevealOnScroll>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepCard({
  step,
  isLast,
}: {
  step: ProcessStep;
  isLast: boolean;
}) {
  const Icon = ICON_MAP[step.icon as IconName] ?? CheckCircle;

  return (
    <article className="relative flex flex-col items-center text-center">
      {!isLast && (
        <div
          className="absolute left-1/2 top-6 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-amber-500/30 to-transparent md:block"
          aria-hidden="true"
        />
      )}

      <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10">
        <Icon className="h-5 w-5 text-amber-500" aria-hidden="true" />
        <span
          className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-slate-950"
          aria-hidden="true"
        >
          {step.order}
        </span>
      </div>

      <h3 className="mt-4 font-semibold text-white">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {step.description}
      </p>
    </article>
  );
}
