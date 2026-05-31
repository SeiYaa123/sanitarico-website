import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function InterstitialPhoneCta() {
  return (
    <section
      className="relative overflow-hidden bg-amber-500 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="interstitial-cta-heading"
    >
      {/* Decorative circle pattern — CSS only, no JS */}
      <BackgroundCircles />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Headline */}
        <h2
          id="interstitial-cta-heading"
          className="font-serif text-3xl font-bold text-slate-950 sm:text-4xl md:text-5xl"
        >
          Besoin d&rsquo;un conseil avant de vous décider&nbsp;?
        </h2>

        {/* Sub-headline — humanising signal, no call center language */}
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-800 sm:text-lg">
          Nos experts répondent en moins de 2h en journée&nbsp;&mdash; pas un call center,{" "}
          <strong className="font-semibold text-slate-950">votre artisan directement.</strong>
        </p>

        {/* Phone CTA button */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-3 rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-white"
            aria-label={`Appeler Sanitari&Co au ${COMPANY.phone}`}
          >
            <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>{COMPANY.phone}</span>
          </a>

          {/* Reassurance note */}
          <p className="text-sm font-medium text-slate-800">
            Gratuit&nbsp;&middot; Sans engagement&nbsp;&middot; Lun&ndash;Ven 8h&ndash;18h
          </p>
        </div>
      </div>
    </section>
  );
}

function BackgroundCircles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12]"
      aria-hidden="true"
    >
      {/* Large circle — top-right */}
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border-2 border-slate-950" />
      {/* Medium circle — top-right offset */}
      <div className="absolute right-16 -top-8 h-56 w-56 rounded-full border border-slate-950" />
      {/* Large circle — bottom-left */}
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full border-2 border-slate-950" />
      {/* Medium circle — bottom-left offset */}
      <div className="absolute -bottom-8 left-16 h-56 w-56 rounded-full border border-slate-950" />
      {/* Centre accent circle */}
      <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-950" />
    </div>
  );
}
