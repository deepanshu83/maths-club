import Link from "next/link";
import { Sigma } from "lucide-react";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#events", label: "PROVE IT" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sigma className="w-5 h-5 text-[var(--color-accent)]" aria-hidden="true" />
              <span className="text-lg font-bold text-[var(--color-foreground)]">
                Maths<span className="text-[var(--color-accent)]">Club</span>
              </span>
            </div>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-xs">
              A student-led mathematics community at BKBIET Pilani. Challenging minds, building
              community, one problem at a time.
            </p>
          </div>

          {/* Quick links column */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-[var(--color-foreground)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-foreground)] mb-4">
              Contact
            </h3>
            <ul className="space-y-2" role="list">
              <li className="text-sm text-[var(--color-muted)] leading-relaxed">
                BK Birla Institute of Engineering &amp; Technology, Pilani
              </li>
              <li>
                <a
                  href="mailto:mathsclub.bkbiet@gmail.com"
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                >
                  mathsclub.bkbiet@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & copyright */}
        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-muted)]">
          <p>
            &copy; {currentYear} Maths Club, BKBIET Pilani. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed &amp; Developed by{" "}
            <span className="font-semibold text-white tracking-wide">
              Deepanshu
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
