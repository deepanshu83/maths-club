"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { staggerFast, cardReveal, viewport } from "@/lib/animations";
import AnimatedSection from "@/components/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

// TODO: replace with real archive data
const archiveData = [
  {
    year: "2024",
    events: [
      {
        name: "Inter-College Math Relay",
        date: "March 2024",
        type: "Competition",
        summary:
          "A team-based relay race of mathematical problems across 5 rounds. 12 teams from 6 colleges participated.",
      },
      {
        name: "Graph Theory Workshop",
        date: "September 2024",
        type: "Workshop",
        summary:
          "Introduction to graph theory with real-world applications in networking and social media algorithms.",
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        name: "Annual Problem Solving Olympiad",
        date: "November 2023",
        type: "Competition",
        summary:
          "Individual competition with 80 participants covering algebra, geometry, and combinatorics.",
      },
      {
        name: "Math & Art Exhibition",
        date: "February 2023",
        type: "Exhibition",
        summary:
          "An interdisciplinary showcase exploring fractals, tessellations, and the geometry of nature.",
      },
    ],
  },
];

const typeBadgeClass: Record<string, string> = {
  Competition: "bg-[var(--color-accent-light)] text-[var(--color-accent)] border border-[var(--color-accent)]/20",
  Workshop: "bg-amber-950/40 text-amber-400 border border-amber-800/30",
  Exhibition: "bg-emerald-950/40 text-emerald-400 border border-emerald-800/30",
};

export default function Archive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger: draw the vertical spine line as section enters,
  // then cascade each year group in. Works with scroll-snap because we
  // use toggleActions (play on enter) rather than scrub.
  useGSAP(
    () => {
      if (!lineRef.current || !containerRef.current) return;

      // --- 1. Draw the vertical timeline spine ---
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // --- 2. Cascade each year group label + its dot ---
      const yearLabels =
        containerRef.current.querySelectorAll<HTMLElement>(".archive-year");
      yearLabels.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
            delay: 0.4 + i * 0.25,
          }
        );
      });

      // --- 3. Cascade each dot on the spine ---
      const dots =
        containerRef.current.querySelectorAll<HTMLElement>(".archive-dot");
      dots.forEach((dot, i) => {
        gsap.fromTo(
          dot,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
            delay: 0.5 + i * 0.25,
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="archive"
      className="py-16 lg:py-24"
      aria-labelledby="archive-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <AnimatedSection variant="fadeUp" className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            History
          </p>
          <h2
            id="archive-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]"
          >
            Past Events
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto">
            A look back at our journey — competitions, workshops, and more.
          </p>
        </AnimatedSection>

        {/* Timeline container */}
        <div ref={containerRef} className="relative">

          {/* Vertical spine line — drawn by GSAP */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-border)] hidden sm:block"
            aria-hidden="true"
          >
            <div
              ref={lineRef}
              className="absolute inset-0 bg-[var(--color-accent)] origin-top"
              style={{ transform: "scaleY(0)", transformOrigin: "top center" }}
            />
          </div>

          {/* Year groups */}
          <div className="space-y-14 sm:pl-10">
            {archiveData.map((yearGroup, groupIdx) => (
              <div key={yearGroup.year}>

                {/* Year label row */}
                <div className="flex items-center gap-4 mb-6 relative">
                  {/* Dot on spine */}
                  <div
                    className="archive-dot absolute -left-[2.875rem] hidden sm:flex w-4 h-4 rounded-full bg-[var(--color-accent)] border-2 border-black shadow-md items-center justify-center"
                    aria-hidden="true"
                    style={{ opacity: 0 }}
                  />

                  <span className="archive-year text-2xl font-bold text-[var(--color-foreground)]">
                    {yearGroup.year}
                  </span>
                  <div className="flex-1 h-px bg-[var(--color-border)]" aria-hidden="true" />
                </div>

                {/* Events list — framer-motion stagger */}
                <ul className="space-y-4" role="list">
                  {yearGroup.events.map((event) => (
                    <li
                      key={event.name}
                      className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/40 transition-colors"
                    >
                      <div className="flex flex-col gap-1 sm:w-36 shrink-0">
                        <time className="text-sm font-medium text-[var(--color-foreground)]">
                          {event.date}
                        </time>
                        <span
                          className={`inline-flex self-start px-2 py-0.5 text-xs font-semibold rounded-full ${
                            typeBadgeClass[event.type] ?? "bg-white/5 text-[var(--color-muted)] border border-[var(--color-border)]"
                          }`}
                        >
                          {event.type}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--color-foreground)] mb-1">
                          {event.name}
                        </h3>
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                          {event.summary}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
