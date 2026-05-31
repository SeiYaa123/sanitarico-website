"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY, ROUTES } from "@/lib/constants";
import { serviceBouquets } from "@/data/services";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Veuillez entrer votre nom complet"),
  email: z.string().email("Adresse email invalide"),
  phone: z
    .string()
    .min(9, "Numéro de téléphone invalide")
    .regex(/^[\d\s+\-().]+$/, "Format invalide"),
  serviceSlug: z.enum([
    "renovation-signature",
    "transition-energetique",
    "tranquillite",
  ]),
  projectDescription: z
    .string()
    .min(20, "Décrivez votre projet (min. 20 caractères)"),
});

type QuoteSchema = z.infer<typeof quoteSchema>;

type SubmitState = "idle" | "submitting" | "success" | "error";

export function DevisClient() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteSchema>({ resolver: zodResolver(quoteSchema) });

  const onSubmit = async (data: QuoteSchema) => {
    setSubmitState("submitting");
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitState(response.ok ? "success" : "error");
    } catch {
      setSubmitState("error");
    }
  };

  if (submitState === "success") return <SuccessState />;

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="Devis gratuit"
          title="Décrivez votre projet"
          as="h1"
          subtitle={`Réponse garantie sous ${COMPANY.quotePromiseHours}h. Visite technique offerte. Sans engagement.`}
          className="mb-12"
        />

        {submitState === "error" && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400" role="alert">
            Une erreur est survenue. Veuillez nous appeler directement au{" "}
            <a href={COMPANY.phoneHref} className="font-semibold underline">
              {COMPANY.phone}
            </a>
            .
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-label="Formulaire de demande de devis"
          className="space-y-6"
        >
          <FormField id="fullName" label="Nom complet" error={errors.fullName?.message}>
            <input
              id="fullName"
              {...register("fullName")}
              type="text"
              autoComplete="name"
              placeholder="Jean Dupont"
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              aria-invalid={!!errors.fullName}
              className={inputClassName(!!errors.fullName)}
            />
          </FormField>

          <FormField id="email" label="Email" error={errors.email?.message}>
            <input
              id="email"
              {...register("email")}
              type="email"
              autoComplete="email"
              placeholder="jean@exemple.be"
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
              className={inputClassName(!!errors.email)}
            />
          </FormField>

          <FormField id="phone" label="Téléphone" error={errors.phone?.message}>
            <input
              id="phone"
              {...register("phone")}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+32 2 XXX XX XX"
              aria-describedby={errors.phone ? "phone-error" : undefined}
              aria-invalid={!!errors.phone}
              className={inputClassName(!!errors.phone)}
            />
          </FormField>

          <FormField id="serviceSlug" label="Bouquet de services" error={errors.serviceSlug?.message}>
            <select
              id="serviceSlug"
              {...register("serviceSlug")}
              aria-describedby={errors.serviceSlug ? "serviceSlug-error" : undefined}
              aria-invalid={!!errors.serviceSlug}
              className={inputClassName(!!errors.serviceSlug)}
              defaultValue=""
            >
              <option value="" disabled>Choisissez votre projet</option>
              {serviceBouquets.map((bouquet) => (
                <option key={bouquet.slug} value={bouquet.slug}>
                  {bouquet.name} — {bouquet.tagline}
                </option>
              ))}
            </select>
          </FormField>

          <FormField id="projectDescription" label="Décrivez votre projet" error={errors.projectDescription?.message}>
            <textarea
              id="projectDescription"
              {...register("projectDescription")}
              rows={5}
              placeholder="Ex : Rénovation complète de la salle de bain (12m²), remplacement de la baignoire par une douche italienne, nouveau carrelage..."
              aria-describedby={errors.projectDescription ? "projectDescription-error" : undefined}
              aria-invalid={!!errors.projectDescription}
              className={inputClassName(!!errors.projectDescription)}
            />
          </FormField>

          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-slate-950 transition-colors hover:bg-amber-400 disabled:opacity-50"
          >
            {submitState === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Envoi en cours...
              </>
            ) : (
              "Envoyer ma demande de devis"
            )}
          </button>

          <p className="text-center text-xs text-slate-500">
            En soumettant ce formulaire, vous acceptez d&apos;être contacté par{" "}
            {COMPANY.name} concernant votre demande.
          </p>
        </form>
      </div>
    </div>
  );
}

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-300">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClassName(hasError: boolean): string {
  return [
    "w-full rounded-xl border bg-slate-900 px-4 py-3 text-white placeholder-slate-500",
    "transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500",
    hasError
      ? "border-red-500 focus:ring-red-500"
      : "border-slate-700 hover:border-slate-600",
  ].join(" ");
}

function SuccessState() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-amber-500" aria-hidden="true" />
        <h1 className="mt-6 font-serif text-3xl font-bold text-white">
          Demande reçue !
        </h1>
        <p className="mt-3 text-slate-400">
          Nous vous répondons sous {COMPANY.quotePromiseHours}h. Merci pour votre confiance.
        </p>
        <a
          href={ROUTES.home}
          className="mt-8 inline-block rounded-xl bg-amber-500 px-8 py-3 font-semibold text-slate-950 hover:bg-amber-400"
        >
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
