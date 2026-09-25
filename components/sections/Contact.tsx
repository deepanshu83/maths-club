"use client";

import { Mail, Globe, Share2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, heroButton, viewport } from "@/lib/animations";
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
      className="py-16 lg:py-24 bg-[var(--color-card)]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Eyebrow */}
        <AnimatedSection variant="fadeUp">
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-4"
          >
            Join the Club or Reach Out
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you want to become a member, collaborate on an event, or
            simply have a math question — we&apos;d love to hear from you.
            Membership is open to all students.
          </p>
        </AnimatedSection>

        {/* College & email info */}
        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-6 mb-8 text-sm text-[var(--color-muted)]">
            <span className="font-medium text-[var(--color-foreground)]">
              BK Birla Institute of Engineering &amp; Technology, Pilani
            </span>
            <span className="hidden sm:block text-[var(--color-border)]">|</span>
            <a
              href="mailto:mathsclub.bkbiet@gmail.com"
              className="hover:text-[var(--color-accent)] transition-colors break-all"
            >
              mathsclub.bkbiet@gmail.com
            </a>
          </div>
        </AnimatedSection>

        {/* CTA button */}
        <AnimatedSection variant="fadeUp" delay={0.2} className="mb-10">
          <motion.a
            href="#" // TODO: replace with Google Form or membership form URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3 text-base font-semibold rounded-lg bg-[var(--color-accent)] text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-black"
            whileHover={{
              scale: 1.04,
              backgroundColor: "var(--color-accent-hover)",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            Join the Club
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </motion.a>
        </AnimatedSection>

        {/* Social links */}
        <AnimatedSection variant="fadeUp" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]"
                aria-label={label}
                whileHover={{
                  color: "var(--color-accent)",
                  borderColor: "var(--color-accent)",
                  scale: 1.12,
                  transition: { duration: 0.18 },
                }}
                whileTap={{ scale: 0.93 }}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
