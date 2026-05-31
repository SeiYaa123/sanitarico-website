import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CtaSection } from "@/components/home/CtaSection";
import { projects } from "@/data/projects";
import { ROUTES } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description:
    "Découvrez nos projets de rénovation à Bruxelles — salles de bain, cuisines, pompes à chaleur et rénovations complètes réalisées par Sanitari&Co.",
};

const CATEGORY_LABELS: Record<string, string> = {
  "renovation-signature": "Rénovation Signature",
  "transition-energetique": "Transition Énergétique",
  tranquillite: "Tranquillité",
};

export default function RealisationsPage() {
  return (
    <>
      <div className="bg-slate-950 px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Nos réalisations"
            title="Des espaces transformés"
            subtitle={`${projects.length} projets à découvrir — chaque rénovation est une histoire unique.`}
            centered
            className="mx-auto mb-16 max-w-2xl"
          />

          <ul
            className="grid gap-10 md:grid-cols-2"
            role="list"
            aria-label="Projets réalisés"
          >
            {projects.map((project) => (
              <li key={project.id}>
                <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
                  <BeforeAfterImages project={project} />
                  <div className="p-6">
                    <Badge variant="gold">
                      {CATEGORY_LABELS[project.category] ?? project.category}
                    </Badge>
                    <h2 className="mt-3 font-serif text-2xl font-bold text-white">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      {project.location}
                    </p>
                    <Link
                      href={`${ROUTES.quote}?service=${project.category}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-amber-400 hover:text-amber-300"
                    >
                      Projet similaire ?
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CtaSection />
    </>
  );
}

function BeforeAfterImages({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="grid grid-cols-2">
      <div className="relative aspect-square bg-slate-800">
        <Image
          src={project.before.src}
          alt={project.before.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <span className="absolute bottom-2 left-2 rounded bg-slate-950/80 px-2 py-0.5 text-xs text-slate-400">
          Avant
        </span>
      </div>
      <div className="relative aspect-square bg-slate-800">
        <Image
          src={project.after.src}
          alt={project.after.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <span className="absolute bottom-2 right-2 rounded bg-amber-500/90 px-2 py-0.5 text-xs font-medium text-slate-950">
          Après
        </span>
      </div>
    </div>
  );
}
