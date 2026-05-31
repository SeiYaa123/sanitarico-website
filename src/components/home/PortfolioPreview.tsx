import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ROUTES } from "@/lib/constants";
import { projects } from "@/data/projects";

const PREVIEW_LIMIT = 3;

const CATEGORY_LABELS: Record<string, string> = {
  "renovation-signature": "Rénovation Signature",
  "transition-energetique": "Transition Énergétique",
  tranquillite: "Tranquillité",
};

export function PortfolioPreview() {
  const previewProjects = projects.slice(0, PREVIEW_LIMIT);

  return (
    <section
      className="bg-slate-900 px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Nos réalisations"
              title="Des espaces transformés"
              subtitle="Chaque projet est une histoire. Voici les nôtres."
            />
            <Link
              href={ROUTES.portfolio}
              className="flex items-center gap-2 text-sm font-medium text-amber-400 transition-colors hover:text-amber-300"
            >
              Voir tous les projets
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </RevealOnScroll>

        <ul
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Aperçu des réalisations"
        >
          {previewProjects.map((project, index) => (
            <li key={project.id}>
              <RevealOnScroll delay={index * 0.1}>
                <ProjectCard project={project} />
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
        <Image
          src={project.after.src}
          alt={project.after.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-5">
        <Badge variant="gold">
          {CATEGORY_LABELS[project.category] ?? project.category}
        </Badge>
        <h3 className="mt-3 font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-slate-500">{project.location}</p>
      </div>
    </article>
  );
}
