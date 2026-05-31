import { Star } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { ReviewRating } from "@/types";

interface StarRatingProps {
  rating: ReviewRating;
  className?: string;
}

export function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-4 w-4",
            index < rating ? "fill-amber-400 text-amber-400" : "fill-slate-700 text-slate-700"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
