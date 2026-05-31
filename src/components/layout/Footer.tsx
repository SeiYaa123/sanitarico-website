import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, ROUTES } from "@/lib/constants";

const SERVICE_LINKS = [
  { label: "Rénovation Signature", href: `${ROUTES.services}#renovation-signature` },
  { label: "Transition Énergétique", href: `${ROUTES.services}#transition-energetique` },
  { label: "Contrat Tranquillité", href: `${ROUTES.services}#tranquillite` },
  { label: "Dépannage Urgence", href: ROUTES.depannage },
];

const COMPANY_LINKS = [
  { label: "Nos réalisations", href: ROUTES.portfolio },
  { label: "À propos", href: ROUTES.about },
  { label: "Carrières", href: "/carrieres" },
  { label: "Blog", href: ROUTES.blog },
  { label: "Mentions légales", href: ROUTES.mentions },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl font-bold text-white">
              {COMPANY.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Votre partenaire de confiance pour des projets de rénovation
              d&apos;exception à Bruxelles depuis {COMPANY.yearsExperience} ans.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-amber-400"
              >
                <Phone className="h-4 w-4 text-amber-500" aria-hidden="true" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-amber-400"
              >
                <Mail className="h-4 w-4 text-amber-500" aria-hidden="true" />
                {COMPANY.email}
              </a>
              <address className="flex items-start gap-2 text-sm not-italic text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                {COMPANY.address}
              </address>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-300">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-300">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-300">
              Devis gratuit
            </h3>
            <p className="mb-4 text-sm text-slate-400">
              Réponse garantie sous {COMPANY.quotePromiseHours}h. Sans engagement.
            </p>
            <Link
              href={ROUTES.quote}
              className="inline-flex items-center rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName} — Tous droits
            réservés
          </p>
          <p className="mt-1">TVA réduite 6% applicable · Garantie décennale · RC Professionnelle</p>
        </div>
      </div>
    </footer>
  );
}
