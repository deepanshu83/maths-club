"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { staggerFast, cardReveal, viewport } from "@/lib/animations";
import AnimatedSection from "@/components/AnimatedSection";
import TiltCard from "@/components/TiltCard";

// Event details for PROVE IT
const eventDetails = {
  name: "PROVE IT",
  dates: "13–14 October",
  venue: "BPTRC",
  tagline: "Two days. Two ways to grow.",
};

const schedule = [
  {
    id: 1,
    dayLabel: "Day 1",
    date: "13 October",
    name: "Expert Talk",
    venue: "BPTRC",
    description:
      "An industry/academic expert breaks down how mathematical thinking shapes real-world problem-solving — from research to industry.",
    registerUrl: "#",
    tag: "Expert Talk",
  },
  {
    id: 2,
    dayLabel: "Day 2",
    date: "14 October",
    name: "Workshop",
    venue: "BPTRC",
    description:
      "A hands-on session where you apply what you learned — build, solve, and compete in a practical mathematics workshop.",
    registerUrl: "#",
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
            Featured Event
          </p>
          <h2
            id="events-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] tracking-tight"
          >
            {eventDetails.name}
          </h2>
          <p className="mt-3 text-lg font-medium text-[var(--color-muted)] max-w-xl mx-auto">
            {eventDetails.tagline}
          </p>
          <div className="mt-4 inline-flex items-center gap-4 px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-white/[0.02] text-sm text-[var(--color-muted)]">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4 text-[var(--color-accent)]" aria-hidden="true" />
              <time>{eventDetails.dates}</time>
            </span>
            <span className="text-[var(--color-border)]">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[var(--color-accent)]" aria-hidden="true" />
              <span>{eventDetails.venue}</span>
            </span>
          </div>
        </AnimatedSection>

        {/* Event cards — staggered scale+fade in, whileHover lift */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {schedule.map((event) => (
            <article key={event.id} className="h-full">
              <TiltCard className="h-full">
                <div className="flex h-full flex-col bg-[var(--color-background)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors duration-300 overflow-hidden">
                  {/* Card top accent bar */}
                  <div className="h-1 bg-[var(--color-accent)]" aria-hidden="true" />

                  <div className="flex flex-col flex-1 p-6 sm:p-8 gap-5">
                    {/* Tag + Day */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex self-start px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                        {event.dayLabel} — {event.tag}
                      </span>
                      <span className="text-xs font-medium text-[var(--color-muted)]">
                        {event.date}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl font-bold text-[var(--color-foreground)] leading-snug">
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
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-black"
                      aria-label={`Register for ${eventDetails.name} — ${event.name}`}
                    >
                      Register Now
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
