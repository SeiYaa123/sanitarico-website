import { Quote } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StarRating } from "@/components/ui/StarRating";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY } from "@/lib/constants";
import { googleReviews } from "@/data/reviews";
import type { GoogleReview } from "@/types";

export function GoogleReviews() {
  return (
    <section
      className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Avis vérifiés Google"
            title="Ce que disent nos clients"
            subtitle={`${COMPANY.totalReviews} avis — Note moyenne ${COMPANY.averageRating}/5`}
            centered
            className="mx-auto max-w-2xl"
          />
        </RevealOnScroll>

        <ul
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Avis clients"
        >
          {googleReviews.map((review, index) => (
            <li key={review.id}>
              <RevealOnScroll delay={index * 0.08}>
                <ReviewCard review={review} />
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const formattedDate = new Date(review.date).toLocaleDateString("fr-BE", {
    year: "numeric",
    month: "long",
  });

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
      <div className="flex items-start justify-between">
        <StarRating rating={review.rating} />
        <Quote className="h-5 w-5 text-amber-500/40" aria-hidden="true" />
      </div>

      <blockquote className="mt-4 flex-1">
        <p className="text-sm leading-relaxed text-slate-300">
          &ldquo;{review.text}&rdquo;
        </p>
      </blockquote>

      <footer className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
        <div>
          <p className="text-sm font-semibold text-white">{review.authorName}</p>
          <time
            dateTime={review.date}
            className="text-xs text-slate-500"
          >
            {formattedDate}
          </time>
        </div>
        <span className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-400">
          Google
        </span>
      </footer>
    </article>
  );
}
