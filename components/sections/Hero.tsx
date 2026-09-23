"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  staggerSlow,
  wordReveal,
  heroSub,
  heroButton,
  fadeIn,
  viewport,
} from "@/lib/animations";

// Spline is ready to plug in — just uncomment the import and the <Spline> element below.
// import Spline from "@splinetool/react-spline";

const headline = ["Where", "Logic", "Meets", "Infinity"];

export default function Hero() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Text content ───────────────────────────────────────────────── */}
          <div className="order-2 lg:order-1">

            {/* Eyebrow label */}
            <motion.p
              className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              viewport={viewport}
            >
              College Mathematics Club
            </motion.p>

            {/* Headline — each word animates in individually */}
            <motion.h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-foreground)] mb-6"
              variants={shouldReduce ? undefined : staggerSlow}
              initial="hidden"
              animate="visible"
              aria-label="Where Logic Meets Infinity"
            >
              {headline.map((word, i) => (
                <motion.span
                  key={word}
                  variants={shouldReduce ? undefined : wordReveal}
                  className={`inline-block mr-[0.25em] ${
                    word === "Meets" ? "text-[var(--color-accent)]" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg text-[var(--color-muted)] leading-relaxed mb-8 max-w-xl"
              variants={heroSub}
              initial="hidden"
              animate="visible"
            >
              A community for students who love mathematics — from elegant proofs
              to real-world problem solving. Challenge yourself, compete, and
              grow with us.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={heroButton}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="#events"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
              >
                Explore Events
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-card)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
              >
                About the Club
              </Link>
            </motion.div>
          </div>

          {/* ── Spline / visual placeholder ────────────────────────────────── */}
          <motion.div
            className="order-1 lg:order-2"
            variants={shouldReduce ? undefined : {
              hidden: { opacity: 0, scale: 0.94 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <div
              id="spline-placeholder"
              className="w-full aspect-square max-w-md mx-auto lg:max-w-none rounded-2xl bg-[var(--color-accent-light)] border border-[var(--color-border)] flex flex-col items-center justify-center gap-4 text-center p-8"
              aria-hidden="true"
            >
              {/*
               * ─── SPLINE EMBED ─────────────────────────────────────────────
               * When your scene is ready, replace the placeholder below with:
               *
               *   <Spline scene="https://prod.spline.design/YOUR-SCENE-ID/scene.splinecode" />
               *
               * The @splinetool/react-spline package is already installed.
               * ─────────────────────────────────────────────────────────────
               */}
              <div className="grid grid-cols-3 gap-6 text-5xl font-bold text-[var(--color-accent)] opacity-25 select-none">
                {["∞", "∑", "π", "∫", "√", "∂", "∇", "∈", "≡"].map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <p className="text-xs text-[var(--color-muted)] mt-4 font-mono">
                [ 3D scene placeholder — see comment above ]
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
