"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sigma } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#archive", label: "Archive" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0604]/85 border-b border-[var(--color-border)] backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-[var(--color-accent)] transition-colors"
            aria-label="Maths Club Home"
          >
            <Sigma className="w-6 h-6 text-[var(--color-accent)]" aria-hidden="true" />
            <span className="text-xl font-bold tracking-tight">
              Maths<span className="text-[var(--color-accent)]">Club</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="#events"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-black"
            >
              Join / Register
            </Link>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-[var(--color-muted)] hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-[var(--color-border)] py-3">
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2 text-sm font-medium text-[var(--color-muted)] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="#events"
                  className="block px-3 py-2 text-sm font-semibold text-center rounded-lg bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-hover)] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Join / Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
