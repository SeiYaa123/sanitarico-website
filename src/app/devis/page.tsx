"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY, ROUTES } from "@/lib/constants";
import { serviceBouquets } from "@/data/services";
import type { QuoteFormData } from "@/types";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Veuillez entrer votre nom complet"),
  email: z.string().email("Adresse email invalide"),
  phone: z
    .string()
    .min(9, "Numéro de téléphone invalide")
    .regex(/^[\d\s+\-().]+$/, "Format invalide"),
  serviceSlug: z
    .enum(["renovation-signature", "transition-energetique", "tranquillite"])
    .refine((val) => val !== undefined, {
      message: "Veuillez choisir un bouquet de services",
    }),
  projectDescription: z
    .string()
    .min(20, "Décrivez votre projet en quelques mots (min. 20 caractères)"),
});

type QuoteSchema = z.infer<typeof quoteSchema>;

export default function DevisPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteSchema>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.info("Quote submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <SuccessState />;
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="Devis gratuit"
          title="Décrivez votre projet"
          subtitle={`Réponse garantie sous ${COMPANY.quotePromiseHours}h. Visite technique offerte. Sans engagement.`}
          className="mb-12"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-label="Formulaire de demande de devis"
          className="space-y-6"
        >
          <FormField
            label="Nom complet"
            error={errors.fullName?.message}
          >
            <input
              {...register("fullName")}
              type="text"
              autoComplete="name"
              placeholder="Jean Dupont"
              className={inputClassName(!!errors.fullName)}
            />
          </FormField>

          <FormField label="Email" error={errors.email?.message}>
            <input
              {...register("email")}
              type="email"
              autoComplete="email"
              placeholder="jean@exemple.be"
              className={inputClassName(!!errors.email)}
            />
          </FormField>

          <FormField label="Téléphone" error={errors.phone?.message}>
            <input
              {...register("phone")}
              type="tel"
              autoComplete="tel"
              placeholder="+32 2 XXX XX XX"
              className={inputClassName(!!errors.phone)}
            />
          </FormField>

          <FormField
            label="Bouquet de services"
            error={errors.serviceSlug?.message}
          >
            <select
              {...register("serviceSlug")}
              className={inputClassName(!!errors.serviceSlug)}
              defaultValue=""
            >
              <option value="" disabled>
                Choisissez votre projet
              </option>
              {serviceBouquets.map((bouquet) => (
                <option key={bouquet.slug} value={bouquet.slug}>
                  {bouquet.name} — {bouquet.tagline}
                </option>
              ))}
            </select>
          </FormField>

          <FormField
            label="Décrivez votre projet"
            error={errors.projectDescription?.message}
          >
            <textarea
              {...register("projectDescription")}
              rows={5}
              placeholder="Ex : Rénovation complète de la salle de bain (12m²), remplacement de la baignoire par une douche italienne, nouveau carrelage..."
              className={inputClassName(!!errors.projectDescription)}
            />
          </FormField>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-slate-950 transition-colors hover:bg-amber-400 disabled:opacity-50"
          >
            {isSubmitting ? (
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
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-slate-300">{label}</label>
      {children}
      {error && (
        <p className="text-xs text-red-400" role="alert">
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
        <CheckCircle
          className="mx-auto h-16 w-16 text-amber-500"
          aria-hidden="true"
        />
        <h1 className="mt-6 font-serif text-3xl font-bold text-white">
          Demande reçue !
        </h1>
        <p className="mt-3 text-slate-400">
          Nous vous répondons sous {COMPANY.quotePromiseHours}h. Merci pour votre
          confiance.
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
