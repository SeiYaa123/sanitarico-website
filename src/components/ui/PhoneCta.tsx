"use client";

import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

interface PhoneCtaProps {
  variant?: "header" | "hero" | "sticky-mobile";
  className?: string;
}

const variantStyles: Record<NonNullable<PhoneCtaProps["variant"]>, string> = {
  header:
    "bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-lg font-semibold",
  hero: "bg-red-600 hover:bg-red-700 text-white text-base px-6 py-3 rounded-xl font-bold shadow-lg",
  "sticky-mobile":
    "bg-red-600 text-white fixed bottom-4 right-4 z-50 rounded-full p-4 shadow-xl md:hidden",
};

export function PhoneCta({ variant = "header", className }: PhoneCtaProps) {
  return (
    <a
      href={COMPANY.phoneHref}
      className={cn(
        "inline-flex items-center gap-2 transition-colors duration-200",
        variantStyles[variant],
        className
      )}
      aria-label={`Appeler Sanitari&Co au ${COMPANY.phone}`}
    >
      <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className={variant === "sticky-mobile" ? "sr-only" : ""}>
        {COMPANY.phone}
      </span>
    </a>
  );
}
