"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PhoneCta } from "@/components/ui/PhoneCta";
import { COMPANY, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";
import type { NavLink } from "@/types";

const NAV_LINKS: NavLink[] = [
  { label: "Services", href: ROUTES.services },
  { label: "Réalisations", href: ROUTES.portfolio },
  { label: "Dépannage", href: ROUTES.depannage },
  { label: "À propos", href: ROUTES.about },
  { label: "Contact", href: ROUTES.contact },
];

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Navigation principale"
        >
          <Link
            href={ROUTES.home}
            className="font-serif text-xl font-bold text-white"
            aria-label={`${COMPANY.name} — Accueil`}
          >
            {COMPANY.name}
          </Link>

          <ul className="hidden items-center gap-8 md:flex" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <PhoneCta variant="header" className="hidden sm:inline-flex" />
            <button
              className="rounded-lg p-2 text-slate-300 hover:text-white md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="border-t border-slate-800 bg-slate-950 px-4 pb-6 pt-4 md:hidden">
            <ul className="space-y-4" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-base font-medium text-slate-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <PhoneCta variant="hero" className="w-full justify-center" />
            </div>
          </div>
        )}
      </header>
      <PhoneCta variant="sticky-mobile" />
    </>
  );
}
