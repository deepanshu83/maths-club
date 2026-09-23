"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { Link2 } from "lucide-react";
import { staggerFast, cardReveal, viewport } from "@/lib/animations";
import AnimatedSection from "@/components/AnimatedSection";

// ─── Team data ────────────────────────────────────────────────────────────────
// TODO: replace with real team member data
const teamMembers = [
  { name: "Priya Sharma",  role: "President",          linkedin: null },
  { name: "Arjun Mehta",   role: "Vice President",      linkedin: null },
  { name: "Sneha Iyer",    role: "Events Coordinator",  linkedin: null },
  { name: "Rahul Gupta",   role: "Treasurer",           linkedin: null },
  { name: "Kavya Nair",    role: "Workshop Lead",       linkedin: null },
  { name: "Dev Patel",     role: "Design & Media",      linkedin: null },
  { name: "Ananya Reddy",  role: "Outreach",            linkedin: null },
  { name: "Rohan Verma",   role: "Tech & Website",      linkedin: null },
];

// ─── Lazy-loaded Lottie (never SSR, never in main chunk) ─────────────────────
//
// next/dynamic with ssr:false ensures lottie-react's JS is code-split.
// The 31 MB animation JSON is fetched separately via fetch() below and
// passed as a prop — it is NEVER bundled as a static import.
const LottiePlayer = dynamic(() => import("@/components/LottiePlayer"), {
  ssr: false,
  loading: () => <LottieLoadingSpinner />,
});

// ─── Loading spinner shown while the 31 MB JSON is being fetched ──────────────
function LottieLoadingSpinner() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 py-12"
      role="status"
      aria-label="Loading animation…"
    >
      {/* Pulsing rings — pure CSS, no extra deps */}
      <div className="relative w-16 h-16">
        <span className="absolute inset-0 rounded-full border-2 border-[var(--color-accent)] opacity-30 animate-ping" />
        <span className="absolute inset-2 rounded-full border-2 border-[var(--color-accent)] opacity-60 animate-ping [animation-delay:200ms]" />
        <span className="absolute inset-4 rounded-full bg-[var(--color-accent)] opacity-80 animate-pulse" />
      </div>
      <p className="text-xs text-[var(--color-muted)] font-mono tracking-widest uppercase animate-pulse">
        Loading…
      </p>
    </div>
  );
}

// ─── Phase state machine ──────────────────────────────────────────────────────
// idle → loading → playing → done
//
//  idle      Section not yet scrolled into view. Nothing fetched.
//  loading   Fetch started, spinner shown.
//  playing   JSON received, Lottie playing. Timer running to transition → done.
//  done      Lottie faded out, team grid fully visible.
type Phase = "idle" | "loading" | "playing" | "done";

// How long the Lottie intro plays before the grid takes over (ms).
// Animation is ~8s at 60fps; 4.5s shows more than half a loop.
const INTRO_DURATION_MS = 4500;

// ─── Component ────────────────────────────────────────────────────────────────
export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger once when the section enters the viewport (15% visible)
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -80px 0px",
  });

  const shouldReduce = useReducedMotion();

  const [phase, setPhase] = useState<Phase>("idle");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [animData, setAnimData] = useState<Record<string, any> | null>(null);

  // ── Kick off lazy fetch the first time the section is visible ──────────────
  useEffect(() => {
    if (!isInView || phase !== "idle") return;

    // Honour prefers-reduced-motion — skip animation, show grid immediately
    if (shouldReduce) {
      setPhase("done");
      return;
    }

    setPhase("loading");

    // Fetch the 31 MB Lottie JSON from /public — NOT a static import
    fetch("/animations/team-lottie.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Record<string, unknown>>;
      })
      .then((data) => {
        setAnimData(data);
        setPhase("playing");

        // Auto-transition to grid after INTRO_DURATION_MS
        const timer = window.setTimeout(() => setPhase("done"), INTRO_DURATION_MS);
        return () => window.clearTimeout(timer);
      })
      .catch((err) => {
        // If fetch fails for any reason, fall through to grid gracefully
        console.warn("[Team] Lottie fetch failed — showing grid directly.", err);
        setPhase("done");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="py-16 lg:py-24 bg-[var(--color-card)]"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header — always visible ─────────────────────────────── */}
        <AnimatedSection variant="fadeUp" className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            The Team
          </p>
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]"
          >
            People Behind the Club
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto">
            Passionate students who keep the math alive on campus.
          </p>
        </AnimatedSection>

        {/* ── Animated content area: Lottie intro → team grid ─────────────── */}
        {/*
         * AnimatePresence tracks which "phase" is active and smoothly
         * crossfades between the Lottie intro and the team grid.
         * mode="wait" ensures the exiting element fully fades before
         * the entering element appears — giving a clean editorial feel.
         */}
        <AnimatePresence mode="wait">

          {/* ── LOADING: spinner while JSON is being fetched ──────────────── */}
          {phase === "loading" && (
            <motion.div
              key="spinner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="flex items-center justify-center min-h-[320px]"
            >
              <LottieLoadingSpinner />
            </motion.div>
          )}

          {/* ── PLAYING: Lottie intro animation ───────────────────────────── */}
          {phase === "playing" && animData && (
            <motion.div
              key="lottie"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                scale: 1.02,
                transition: { duration: 0.55, ease: "easeIn" },
              }}
              className="flex flex-col items-center"
              aria-hidden="true"  // decorative — team grid is the real content
            >
              {/* Skip button — lets keyboard / impatient users skip the intro */}
              <button
                type="button"
                onClick={() => setPhase("done")}
                className="mb-4 text-xs text-[var(--color-muted)] hover:text-[var(--color-accent)] underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] rounded"
              >
                Skip intro ↓
              </button>

              {/* Lottie player — responsive, capped at sensible max-width */}
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                <LottiePlayer
                  src={animData}
                  loop={true}   // loops until timer fires or user clicks Skip
                  autoplay={true}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </motion.div>
          )}

          {/* ── DONE: team member grid ─────────────────────────────────────── */}
          {phase === "done" && (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
            >
              <motion.ul
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                role="list"
                variants={staggerFast}
                initial="hidden"
                animate="visible"   // animate= (not whileInView) since section is already in view
              >
                {teamMembers.map((member) => (
                  <motion.li
                    key={member.name}
                    variants={cardReveal}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 8px 24px -6px rgb(79 70 229 / 0.14)",
                      borderColor: "var(--color-accent)",
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                  >
                    <div className="flex flex-col items-center text-center p-5 rounded-2xl border border-[var(--color-border)] bg-white h-full">

                      {/* Avatar placeholder — TODO: replace with <Image> */}
                      <div
                        className="w-20 h-20 rounded-full bg-[var(--color-accent-light)] border-2 border-[var(--color-border)] mb-4 flex items-center justify-center"
                        aria-label={`${member.name} photo placeholder`}
                      >
                        <span
                          className="text-2xl font-bold text-[var(--color-accent)] select-none"
                          aria-hidden="true"
                        >
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>

                      <h3 className="font-semibold text-[var(--color-foreground)] text-sm leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs text-[var(--color-muted)] mt-0.5">{member.role}</p>

                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <Link2 className="w-4 h-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
