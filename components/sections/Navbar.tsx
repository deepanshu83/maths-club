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
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none pt-3 sm:pt-4 px-2.5 sm:px-6">
      <nav
        className={cn(
          "pointer-events-auto max-w-5xl mx-auto flex items-center justify-between gap-2 px-4 sm:px-6 py-2.5 rounded-md border-2 border-[#1A1040] transition-all duration-300",
          scrolled
            ? "bg-[#F0EDE0] shadow-[5px_5px_0px_#1A1040]"
            : "bg-[#F0EDE0]/95 shadow-[4px_4px_0px_#1A1040] backdrop-blur-sm"
        )}
        aria-label="Main navigation"
      >
        {/* Logo: Marvel-style badge */}
        <Link
          href="#home"
          className="flex min-w-0 shrink-0 items-center gap-2 group transition-transform active:scale-95"
          aria-label="Maths Club Antigravity Home"
        >
          <div className="bg-[#C41E5A] px-2.5 py-0.5 border border-[#1A1040] shadow-[2px_2px_0px_#1A1040] text-white font-poster text-xl tracking-wider uppercase">
            ANTIGRAVITY
          </div>
          <span className="hidden sm:inline-block font-stamp text-xs text-[#1A1040] font-bold tracking-tight uppercase border-b-2 border-[#C41E5A]">
            MATHS CLUB
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1 sm:gap-2" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-3 py-1 text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-200",
                  link.href === "#events"
                    ? "bg-[#1A1040] text-[#F0EDE0] shadow-[2px_2px_0px_#C41E5A] -rotate-1 hover:rotate-0"
                    : "text-[#1A1040] hover:text-[#C41E5A] hover:bg-[#D0CFC8]/50 rounded"
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
            className="marvel-badge px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm tracking-wider uppercase inline-flex items-center gap-1.5"
          >
            <span>PROVE IT</span>
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="md:hidden min-w-[36px] min-h-[36px] p-1.5 rounded border-2 border-[#1A1040] bg-[#D0CFC8] text-[#1A1040] hover:bg-[#C41E5A] hover:text-white transition-colors"
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
          className="pointer-events-auto md:hidden max-w-sm mx-auto mt-2 p-3 rounded-md bg-[#F0EDE0] border-2 border-[#1A1040] shadow-[6px_6px_0px_#1A1040] animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <ul className="flex flex-col gap-1.5" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block px-3 py-2 text-sm font-bold uppercase tracking-wider rounded transition-colors",
                    link.href === "#events"
                      ? "bg-[#C41E5A] text-white shadow-[2px_2px_0px_#1A1040]"
                      : "text-[#1A1040] hover:bg-[#D0CFC8]"
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

