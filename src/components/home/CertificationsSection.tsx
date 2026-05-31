import { ShieldCheck } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

const CERTIFICATIONS = [
  {
    name: "CERGA",
    description: "Certification gaz agréée",
    detail: "Installateurs certifiés pour tous travaux sur installations gaz",
  },
  {
    name: "RGIE",
    description: "Conformité électrique",
    detail: "Contrôle RGIE obligatoire inclus dans nos installations électriques",
  },
  {
    name: "Garantie décennale",
    description: "10 ans de couverture",
    detail: "Tous nos travaux de construction couverts 10 ans par notre assurance",
  },
  {
    name: "RC Professionnelle",
    description: "Responsabilité civile",
    detail: "Vous êtes protégés contre tout dommage causé lors des travaux",
  },
  {
    name: "TVA 6%",
    description: "Pour logements >10 ans",
    detail: "Nous appliquons automatiquement la TVA réduite quand vous y avez droit",
  },
  {
    name: "Primes Renolution",
    description: "Partenaire agréé Bruxelles",
    detail: "Nous gérons votre dossier de primes énergétiques de A à Z",
  },
] as const;

export function CertificationsSection() {
  return (
    <section
      className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Certifications & garanties"
            title="La preuve de notre sérieux"
            subtitle="Pas que des mots. Voici ce qui prouve que vous pouvez nous faire confiance."
            centered
            className="mx-auto max-w-2xl"
          />
        </RevealOnScroll>

        <ul
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Certifications et garanties"
        >
          {CERTIFICATIONS.map((cert, index) => (
            <li key={cert.name}>
              <RevealOnScroll delay={index * 0.07}>
                <CertificationCard certification={cert} />
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CertificationCard({
  certification,
}: {
  certification: (typeof CERTIFICATIONS)[number];
}) {
  return (
    <article className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-colors hover:border-amber-500/30">
      <ShieldCheck
        className="h-8 w-8 shrink-0 text-amber-500"
        aria-hidden="true"
      />
      <div>
        <p className="font-semibold text-white">{certification.name}</p>
        <p className="text-sm font-medium text-amber-400">
          {certification.description}
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
          {certification.detail}
        </p>
      </div>
    </article>
  );
}
