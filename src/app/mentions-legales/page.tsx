import type { Metadata } from "next";
import { COMPANY, ROUTES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Mentions légales — Sanitari&Co",
  description: "Mentions légales, politique de confidentialité et informations légales de Sanitari & Co SRL.",
  robots: { index: false, follow: false },
};

interface LegalSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section aria-labelledby={id} className="border-t border-slate-800 pt-10">
      <h2
        id={id}
        className="font-serif text-xl font-bold text-white md:text-2xl"
      >
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-slate-400 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <div className="bg-slate-950 px-4 py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Page heading */}
        <SectionHeading
          eyebrow="Informations légales"
          title="Mentions légales"
          as="h1"
          subtitle={`Conformément aux obligations légales belges, retrouvez ci-dessous les informations relatives à l'éditeur de ce site, à l'hébergement et à vos droits.`}
        />

        <p className="mt-4 text-sm text-slate-500">
          Dernière mise à jour : mai 2025
        </p>

        <div className="mt-16 space-y-12">
          {/* Éditeur du site */}
          <LegalSection id="editeur-heading" title="Éditeur du site">
            <p>
              Ce site est édité par la société{" "}
              <strong className="text-slate-200">Sanitari &amp; Co SRL</strong>,
              société à responsabilité limitée de droit belge.
            </p>
            <address className="not-italic space-y-1 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-slate-300">
              <p className="font-semibold text-white">Sanitari &amp; Co SRL</p>
              <p>Schaerbeek, 1030 Bruxelles</p>
              <p>Belgique</p>
              <p className="mt-3">
                <span className="text-slate-500">Email :</span>{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-amber-400 underline underline-offset-4 hover:text-amber-300"
                >
                  {COMPANY.email}
                </a>
              </p>
              <p>
                <span className="text-slate-500">Téléphone :</span>{" "}
                <a
                  href={COMPANY.phoneHref}
                  className="text-amber-400 underline underline-offset-4 hover:text-amber-300"
                >
                  {COMPANY.phone}
                </a>
              </p>
            </address>
            <p>
              Le directeur de la publication est le gérant de la société
              Sanitari &amp; Co SRL.
            </p>
          </LegalSection>

          {/* Hébergement */}
          <LegalSection id="hebergement-heading" title="Hébergement">
            <p>
              Ce site est hébergé par{" "}
              <strong className="text-slate-200">Render</strong> (Render
              Services Inc.), dont le siège social est situé au :
            </p>
            <address className="not-italic rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-slate-300">
              <p className="font-semibold text-white">Render Services Inc.</p>
              <p>525 Brannan St</p>
              <p>San Francisco, CA 94107</p>
              <p>États-Unis</p>
            </address>
            <p>
              Site web de l&apos;hébergeur :{" "}
              <a
                href="https://render.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 underline underline-offset-4 hover:text-amber-300"
              >
                render.com
              </a>
            </p>
          </LegalSection>

          {/* Propriété intellectuelle */}
          <LegalSection
            id="propriete-intellectuelle-heading"
            title="Propriété intellectuelle"
          >
            <p>
              L&apos;ensemble du contenu de ce site — textes, photographies,
              illustrations, logos, icônes et éléments graphiques — est la
              propriété exclusive de Sanitari &amp; Co SRL ou de ses
              partenaires, et est protégé par les lois belges et
              internationales relatives au droit d&apos;auteur et à la
              propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou
              adaptation, totale ou partielle, des éléments du site, quel que
              soit le moyen ou le procédé utilisé, est interdite sans
              l&apos;autorisation écrite préalable de Sanitari &amp; Co SRL.
              Toute exploitation non autorisée constitue une contrefaçon au
              sens des articles XI.164 et suivants du Code de droit économique
              belge.
            </p>
            <p>
              Les marques commerciales et logos figurant sur ce site sont des
              marques déposées. Leur reproduction est strictement interdite sans
              accord préalable.
            </p>
          </LegalSection>

          {/* Protection des données — RGPD */}
          <LegalSection
            id="rgpd-heading"
            title="Protection des données personnelles (RGPD)"
          >
            <p>
              Sanitari &amp; Co SRL attache une grande importance à la
              protection de vos données personnelles et s&apos;engage à les
              traiter conformément au Règlement général sur la protection des
              données (RGPD — Règlement UE 2016/679) et à la loi belge du
              30 juillet 2018 relative à la protection des personnes physiques
              à l&apos;égard des traitements de données à caractère personnel.
            </p>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                  Données collectées
                </h3>
                <p className="mt-2">
                  Via le{" "}
                  <a
                    href={ROUTES.quote}
                    className="text-amber-400 underline underline-offset-4 hover:text-amber-300"
                  >
                    formulaire de demande de devis
                  </a>
                  , nous collectons les informations suivantes :
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-slate-400">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Description du projet de rénovation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                  Finalité du traitement
                </h3>
                <p className="mt-2">
                  Ces données sont collectées exclusivement pour le traitement
                  de votre demande de devis et la prise de contact subséquente
                  relative à votre projet de rénovation. Elles ne sont en aucun
                  cas utilisées à des fins commerciales tierces ou cédées à des
                  partenaires.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                  Durée de conservation
                </h3>
                <p className="mt-2">
                  Vos données sont conservées pendant une durée maximale de{" "}
                  <strong className="text-slate-200">3 ans</strong> à compter
                  de votre dernière interaction avec nos services, puis
                  supprimées ou anonymisées.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                  Vos droits
                </h3>
                <p className="mt-2">
                  Conformément au RGPD, vous disposez d&apos;un droit
                  d&apos;accès, de rectification, d&apos;effacement, de
                  limitation du traitement, d&apos;opposition et de portabilité
                  de vos données personnelles. Pour exercer ces droits,
                  contactez-nous à l&apos;adresse :{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-amber-400 underline underline-offset-4 hover:text-amber-300"
                  >
                    {COMPANY.email}
                  </a>
                  .
                </p>
                <p className="mt-2">
                  En cas de désaccord, vous avez également le droit
                  d&apos;introduire une réclamation auprès de{" "}
                  <a
                    href="https://www.autoriteprotectiondonnees.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 underline underline-offset-4 hover:text-amber-300"
                  >
                    l&apos;Autorité de Protection des Données (APD)
                  </a>
                  , l&apos;autorité de contrôle belge.
                </p>
              </div>
            </div>
          </LegalSection>

          {/* Cookies */}
          <LegalSection id="cookies-heading" title="Cookies">
            <p>
              Ce site n&apos;utilise pas de cookies de traçage, de publicité ou
              d&apos;analyse comportementale.
            </p>
            <p>
              Aucun script tiers de mesure d&apos;audience (Google Analytics,
              Hotjar, Facebook Pixel ou équivalent) n&apos;est installé sur ce
              site. Votre navigation n&apos;est ni enregistrée, ni
              revendue.
            </p>
          </LegalSection>

          {/* Responsabilité */}
          <LegalSection id="responsabilite-heading" title="Limitation de responsabilité">
            <p>
              Sanitari &amp; Co SRL s&apos;efforce de maintenir les
              informations publiées sur ce site à jour et exactes. Cependant,
              la société ne saurait être tenue responsable des erreurs,
              omissions ou résultats obtenus à la suite de l&apos;utilisation
              de ces informations.
            </p>
            <p>
              Les liens hypertextes présents sur ce site pointant vers des
              ressources tierces sont fournis à titre informatif. Sanitari &amp;
              Co SRL ne contrôle pas le contenu de ces sites et décline toute
              responsabilité quant à leur contenu ou leur disponibilité.
            </p>
            <p>
              La société ne peut garantir la disponibilité continue du site et
              se réserve le droit d&apos;en modifier le contenu à tout moment
              et sans préavis.
            </p>
          </LegalSection>

          {/* Droit applicable */}
          <LegalSection id="droit-applicable-heading" title="Droit applicable">
            <p>
              Les présentes mentions légales sont soumises au droit belge. Tout
              litige relatif à l&apos;utilisation de ce site sera de la
              compétence exclusive des tribunaux de l&apos;arrondissement
              judiciaire de Bruxelles.
            </p>
          </LegalSection>
        </div>

        {/* Footer note */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/30 p-6 text-center">
          <p className="text-sm text-slate-500">
            Des questions ?{" "}
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-amber-400 underline underline-offset-4 hover:text-amber-300"
            >
              Contactez-nous
            </a>{" "}
            ou consultez notre{" "}
            <a
              href={ROUTES.contact}
              className="text-amber-400 underline underline-offset-4 hover:text-amber-300"
            >
              page de contact
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
