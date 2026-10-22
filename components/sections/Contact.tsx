"use client";

import { Mail, Globe, Share2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const socialLinks = [
  { label: "Instagram", href: "#", icon: Globe },
  { label: "Twitter / X", href: "#", icon: Share2 },
  { label: "Email", href: "mailto:mathsclub.bkbiet@gmail.com", icon: Mail },
];


export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-28 bg-[#D0CFC8] border-b-4 border-[#1A1040] relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Comic halftone overlay */}
      <div className="absolute inset-0 comic-halftone pointer-events-none opacity-30" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection variant="fadeUp">
          <div className="relative p-7 sm:p-12 bg-[#F0EDE0] border-4 border-[#1A1040] shadow-[10px_10px_0px_#1A1040] rotate-0.5">
            {/* Corner tape illusions */}
            <div className="absolute -top-3.5 left-8 bg-[#C41E5A] text-white font-stamp text-[10px] font-bold px-3 py-0.5 uppercase tracking-widest border border-[#1A1040] -rotate-2 shadow-[2px_2px_0px_#1A1040]">
              COMMUNICATION CHANNEL
            </div>
            <div className="absolute -bottom-3 right-8 bg-[#1A1040] text-[#F0EDE0] font-stamp text-[10px] font-bold px-3 py-0.5 uppercase tracking-widest border border-[#1A1040] rotate-2 shadow-[2px_2px_0px_#C41E5A]">
              PRIORITY: IMMEDIATE
            </div>

            {/* Stamp Eyebrow */}
            <div className="inline-block bg-[#1A1040] text-[#F0EDE0] px-3.5 py-1 text-xs font-stamp font-bold tracking-widest uppercase border border-[#1A1040] shadow-[2px_2px_0px_#C41E5A] -rotate-1 mb-3">
              GET IN TOUCH
            </div>

            <h2
              id="contact-heading"
              className="text-3xl sm:text-5xl font-poster text-[#1A1040] mb-4 uppercase tracking-tight"
            >
              JOIN THE CLUB OR <span className="bg-[#C41E5A] text-white px-2.5 py-0.5 inline-block rotate-1 shadow-[3px_3px_0px_#1A1040]">REACH OUT</span>
            </h2>

            <p className="text-[#3E3854] font-medium leading-relaxed mb-6 max-w-xl mx-auto text-sm sm:text-base">
              Whether you want to become a member, collaborate on an event, or
              simply have a math question — we&apos;d love to hear from you.
              Membership is open to all students.
            </p>

            {/* College & email info */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-8 px-4 py-2 bg-[#D0CFC8]/60 border-2 border-[#1A1040] font-stamp text-xs sm:text-sm text-[#1A1040] font-bold">
              <span>BK Birla Institute of Engineering &amp; Technology, Pilani</span>
              <span className="hidden sm:block text-[#C41E5A]">•</span>
              <a
                href="mailto:mathsclub.bkbiet@gmail.com"
                className="hover:text-[#C41E5A] underline transition-colors break-all"
              >
                mathsclub.bkbiet@gmail.com
              </a>
            </div>

            {/* CTA button: Marvel Badge Style */}
            <div className="mb-8">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="marvel-badge inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xl sm:text-2xl uppercase tracking-wider active:scale-95"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>JOIN THE CLUB NOW</span>
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
              </motion.a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4 border-t-2 border-dashed border-[#1A1040]/30">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 border-2 border-[#1A1040] bg-[#F0EDE0] text-[#1A1040] shadow-[2px_2px_0px_#1A1040] hover:bg-[#C41E5A] hover:text-white transition-colors"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

