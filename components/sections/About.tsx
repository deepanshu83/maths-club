"use client";

import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, staggerFast, cardReveal, viewport } from "@/lib/animations";
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 lg:py-24 bg-[var(--color-card)]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Text side ── slides in from the left */}
          <AnimatedSection variant="slideLeft">
            <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
              Who We Are
            </p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-6"
            >
              A Space for Mathematical Minds
            </h2>
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                The Maths Club is a student-led organization at the heart of our
                college&apos;s academic community. We believe that mathematics is not
                just a subject — it&apos;s a language, a tool, and an art form.
              </p>
              <p>
                Founded with the goal of nurturing mathematical curiosity beyond
                the classroom, our club brings together students from all
                disciplines who share a passion for numbers, logic, and
                problem-solving.
              </p>
            </div>

            {/* Vision / Mission cards — staggered */}
            <motion.div
              className="mt-8 grid sm:grid-cols-2 gap-4"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {[
                {
                  title: "Our Vision",
                  body: "To foster a campus culture where mathematical thinking is celebrated and accessible to all.",
                },
                {
                  title: "Our Mission",
                  body: "Organise events, workshops, and competitions that challenge students and connect them to the broader mathematics community.",
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={cardReveal}
                  className="p-4 rounded-xl border border-[var(--color-border)] bg-white"
                >
                  <h3 className="font-semibold text-[var(--color-foreground)] mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">{card.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>

          {/* ── Visual placeholder ── slides in from the right */}
          <AnimatedSection variant="slideRight">
            <div
              className="w-full aspect-[4/3] rounded-2xl bg-[var(--color-accent-light)] border border-[var(--color-border)] flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="text-center space-y-3 p-8">
                <div className="text-6xl font-bold text-[var(--color-accent)] opacity-30 select-none">
                  e<sup>iπ</sup> + 1 = 0
                </div>
                <p className="text-xs text-[var(--color-muted)] font-mono">
                  {/* TODO: replace with club photo or illustration */}
                  [ image / illustration placeholder ]
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
