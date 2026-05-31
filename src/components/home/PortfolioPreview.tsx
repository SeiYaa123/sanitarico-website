import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Ruler, Clock4, Euro } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ROUTES, CATEGORY_LABELS } from "@/lib/constants";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

const PREVIEW_LIMIT = 3;

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
              headingId="portfolio-heading"
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

        {/* Social proof bandeau */}
        <RevealOnScroll delay={0.3}>
          <div className="mt-10 flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-4">
            <span
              className="relative flex h-2.5 w-2.5 shrink-0"
              aria-hidden="true"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <p className="text-sm text-slate-400">
              <span className="font-medium text-white">Dernier chantier livré :</span>{" "}
              Salle de bain Etterbeek, 9 jours —{" "}
              <span className="text-slate-300">Mars 2026</span>
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const href = `${ROUTES.quote}?service=${project.category}`;
  const categoryLabel = CATEGORY_LABELS[project.category] ?? project.category;

  const hasAreaMetric = project.areaSqm !== undefined;
  const hasDurationMetric = project.durationDays !== undefined;
  const hasPrimesMetric = project.savedPrimes !== undefined;
  const hasMetrics = hasAreaMetric || hasDurationMetric || hasPrimesMetric;

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-shadow duration-300 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
      aria-label={`${project.title} — demander un devis`}
    >
      <article>
        {/* Image with overlays */}
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
          <Image
            src={project.after.src}
            alt={project.after.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Category badge — top left */}
          <div className="absolute left-3 top-3 z-10">
            <Badge variant="gold">{categoryLabel}</Badge>
          </div>

          {/* Bottom gradient overlay */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/80 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* Card body */}
        <div className="p-5">
          <h3 className="font-semibold text-white">{project.title}</h3>

          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {project.location}
          </p>

          {hasMetrics && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {/* Area + duration metrics */}
              {(hasAreaMetric || hasDurationMetric) && (
                <span className="flex items-center gap-1.5 rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                  {hasAreaMetric && (
                    <>
                      <Ruler className="h-3 w-3 text-slate-500" aria-hidden="true" />
                      <span>{project.areaSqm}m²</span>
                    </>
                  )}
                  {hasAreaMetric && hasDurationMetric && (
                    <span className="text-slate-600" aria-hidden="true">·</span>
                  )}
                  {hasDurationMetric && (
                    <>
                      <Clock4 className="h-3 w-3 text-slate-500" aria-hidden="true" />
                      <span>{project.durationDays} jours</span>
                    </>
                  )}
                </span>
              )}

              {/* Primes récupérées */}
              {hasPrimesMetric && (
                <span className="flex items-center gap-1.5 rounded-md bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-400">
                  <Euro className="h-3 w-3" aria-hidden="true" />
                  {project.savedPrimes} de primes récupérées
                </span>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
