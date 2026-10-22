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
    <footer className="border-t-4 border-[#1A1040] bg-[#D0CFC8] relative overflow-hidden" role="contentinfo">
      {/* Halftone comic overlay */}
      <div className="absolute inset-0 comic-halftone pointer-events-none opacity-20" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-[#C41E5A] px-2.5 py-0.5 text-white font-poster text-xl tracking-wider uppercase border border-[#1A1040] shadow-[2px_2px_0px_#1A1040]">
                MATHS CLUB
              </div>
              <span className="font-stamp text-xs text-[#1A1040] font-bold tracking-tight uppercase">
                BKBIET PILANI
              </span>
            </div>
            <p className="text-sm text-[#3E3854] font-medium leading-relaxed max-w-xs">
              A student-led mathematics community at BKBIET Pilani. Challenging minds, building
              community, one problem at a time.
            </p>
          </div>

          {/* Quick links column */}
          <nav aria-label="Footer navigation">
            <h3 className="font-poster text-xl text-[#1A1040] tracking-wider uppercase mb-3">
              Quick Links
            </h3>
            <ul className="space-y-1.5" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-[#3E3854] hover:text-[#C41E5A] transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div>
            <h3 className="font-poster text-xl text-[#1A1040] tracking-wider uppercase mb-3">
              Dispatch HQ
            </h3>
            <ul className="space-y-2" role="list">
              <li className="text-sm text-[#3E3854] font-medium leading-relaxed">
                BK Birla Institute of Engineering &amp; Technology, Pilani
              </li>
              <li>
                <a
                  href="https://wa.me/918302909191?text=Hi%2C%20I%20want%20to%20join%20the%20Maths%20Club!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#1A1040] hover:text-[#C41E5A] transition-colors underline"
                >
                  WhatsApp: +91 8302909191
                </a>
              </li>
              <li>
                <a
                  href="mailto:mathsclub.bkbiet@gmail.com"
                  className="text-sm font-bold text-[#1A1040] hover:text-[#C41E5A] transition-colors underline"
                >
                  mathsclub.bkbiet@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & copyright with MARVEL-style brand logo badge in bottom right corner */}
        <div className="mt-10 pt-6 border-t-2 border-dashed border-[#1A1040]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-stamp text-[#3E3854] font-bold">
          <p>
            &copy; {currentYear} Maths Club, BKBIET Pilani. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="flex items-center gap-1.5">
              Designed &amp; Developed by{" "}
              <span className="font-bold text-[#1A1040] underline decoration-[#C41E5A] decoration-2">
                Deepanshu
              </span>
            </p>

            {/* MARVEL-style brand logo badge in bottom right corner */}
            <div className="bg-[#C41E5A] px-3 py-1 border-2 border-[#1A1040] shadow-[3px_3px_0px_#1A1040] text-white font-poster text-lg tracking-wider uppercase inline-block -rotate-2 select-none hover:rotate-0 transition-transform">
              MATHS CLUB
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

