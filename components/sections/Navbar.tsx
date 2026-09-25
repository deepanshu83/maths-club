"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sigma, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#events", label: "PROVE IT" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none pt-3 sm:pt-4 px-3 sm:px-6">
      <nav
        className={cn(
          "pointer-events-auto max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300",
          scrolled
            ? "bg-[#0a0604]/90 border border-[var(--color-accent)]/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "bg-[#0a0604]/75 border border-[var(--color-border)] shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-lg"
        )}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2 text-white group transition-transform active:scale-95"
          aria-label="Maths Club Home"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-accent-light)] border border-[var(--color-accent)]/30 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-black transition-colors duration-200">
            <Sigma className="w-4 h-4" aria-hidden="true" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight">
            Maths<span className="text-[var(--color-accent)]">Club</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1 sm:gap-2" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200",
                  link.href === "#events"
                    ? "text-[var(--color-accent)] hover:bg-[var(--color-accent-light)]"
                    : "text-[var(--color-muted)] hover:text-white hover:bg-white/[0.06]"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#events"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-full bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_2px_12px_rgba(234,88,12,0.35)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-black"
          >
            <span>Register</span>
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="md:hidden p-2 rounded-full text-[var(--color-muted)] hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="pointer-events-auto md:hidden max-w-sm mx-auto mt-2 p-3 rounded-2xl bg-[#0a0604]/95 border border-[var(--color-border)] shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium rounded-xl transition-colors",
                    link.href === "#events"
                      ? "text-[var(--color-accent)] bg-[var(--color-accent-light)]/40"
                      : "text-[var(--color-muted)] hover:text-white hover:bg-white/10"
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
