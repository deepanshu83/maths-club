"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { staggerFast, cardReveal, fadeUp, viewport } from "@/lib/animations";
import AnimatedSection from "@/components/AnimatedSection";

// TODO: replace with real event data
const events = [
  {
    id: 1,
    name: "Annual Math Olympiad 2025",
    date: "15 November 2025",
    venue: "Main Auditorium, Block A",
    description:
      "Our flagship annual competition open to all students. Three rounds covering algebra, combinatorics, and geometry. Prizes for top 3 finishers.",
    registerUrl: "#", // TODO: replace with actual Google Form URL
    tag: "Competition",
  },
  {
    id: 2,
    name: "Workshop: Introduction to Number Theory",
    date: "8 December 2025",
    venue: "Seminar Hall 2, Block C",
    description:
      "A beginner-friendly workshop covering divisibility, prime numbers, modular arithmetic, and their surprising applications in cryptography.",
    registerUrl: "#", // TODO: replace with actual Google Form URL
    tag: "Workshop",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="py-16 lg:py-24 bg-[var(--color-card)]"
      aria-labelledby="events-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <AnimatedSection variant="fadeUp" className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Upcoming
          </p>
          <h2
            id="events-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]"
          >
            Upcoming Events
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto">
            Mark your calendar and register early — seats fill up fast.
          </p>
        </AnimatedSection>

        {/* Event cards — staggered scale+fade in, whileHover lift */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {events.map((event) => (
            <motion.article
              key={event.id}
              variants={cardReveal}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -12px rgb(79 70 229 / 0.2)",
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="flex flex-col bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden"
            >
              {/* Card top accent bar */}
              <div className="h-1 bg-[var(--color-accent)]" aria-hidden="true" />

              <div className="flex flex-col flex-1 p-6 gap-4">
                {/* Tag */}
                <span className="inline-flex self-start px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                  {event.tag}
                </span>

                {/* Name */}
                <h3 className="text-xl font-bold text-[var(--color-foreground)] leading-snug">
                  {event.name}
                </h3>

                {/* Meta */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                    <CalendarDays className="w-4 h-4 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                    <time>{event.date}</time>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                    <MapPin className="w-4 h-4 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                    <span>{event.venue}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
                  {event.description}
                </p>

                {/* Register button */}
                <a
                  href={event.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
                  aria-label={`Register for ${event.name}`}
                >
                  Register Now
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
