"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
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
import { SplineErrorBoundary } from "@/components/SplineErrorBoundary";

// Load @splinetool/react-spline with no SSR — it needs WebGL / browser APIs.
// We do NOT mark it as suspense:true so it renders null until the JS chunk
// lands, which is fine because the black background shows through.
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

// ── Direct .splinecode export URL from the Spline editor ──────────────────────
const SPLINE_SCENE =
  "https://prod.spline.design/FAzo7N19-G-dCOsA/scene.splinecode";

const headline = ["Where", "Logic", "Meets", "Infinity"];

// ── Dark fallback used on mobile and as error boundary child ──────────────────
function DarkFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-zinc-800" />
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  const shouldReduce = useReducedMotion();

  // Skip Spline on mobile — checked client-side only (avoids SSR mismatch).
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Cross-fade the Spline canvas in once the scene reports it is fully loaded.
  const [splineReady, setSplineReady] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Background ────────────────────────────────────────────────────────
       *  Pure black matches the Spline scene's own background (rgba(0,0,0,1)).
       *  Also acts as the loading placeholder — zero colour flash on load.
       * ──────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-10 bg-black">

        {isMobile ? (
          <DarkFallback />
        ) : (
          <>
            {/* Loading state — solid black, fades away once scene is ready */}
            <div
              className="absolute inset-0 bg-black transition-opacity duration-700 pointer-events-none z-10"
              style={{ opacity: splineReady ? 0 : 1 }}
              aria-hidden="true"
            />

            {/* Spline canvas — absolutely fills the section, fades in on load.
             *  SplineErrorBoundary catches the synchronous `throw i` that
             *  react-spline emits when scene loading fails (e.g. network error,
             *  corrupt file), replacing it silently with DarkFallback.        */}
            <SplineErrorBoundary fallback={<DarkFallback />}>
              <Spline
                scene={SPLINE_SCENE}
                onLoad={() => setSplineReady(true)}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </SplineErrorBoundary>
          </>
        )}
      </div>

      {/* ── Subtle dark vignette — keeps text legible over bright box edges ── */}
      <div className="absolute inset-0 bg-black/30 -z-[5]" aria-hidden="true" />

      {/* ── Foreground content ───────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Text block ──────────────────────────────────────────────────── */}
          <div className="order-2 lg:order-1">

            <motion.p
              className="text-sm font-semibold tracking-widest uppercase text-indigo-400 mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              viewport={viewport}
            >
              College Mathematics Club
            </motion.p>

            <motion.h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
              variants={shouldReduce ? undefined : staggerSlow}
              initial="hidden"
              animate="visible"
              aria-label="Where Logic Meets Infinity"
            >
              {headline.map((word) => (
                <motion.span
                  key={word}
                  variants={shouldReduce ? undefined : wordReveal}
                  className={`inline-block mr-[0.25em] ${
                    word === "Meets" ? "text-indigo-400" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-xl"
              variants={heroSub}
              initial="hidden"
              animate="visible"
            >
              A community for students who love mathematics — from elegant proofs
              to real-world problem solving. Challenge yourself, compete, and
              grow with us.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={heroButton}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="#events"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                Explore Events
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
              >
                About the Club
              </Link>
            </motion.div>
          </div>

          {/* ── Right-column spacer keeps text left on desktop ──────────────── */}
          <div className="order-1 lg:order-2 hidden lg:block" aria-hidden="true" />

        </div>
      </div>
    </section>
  );
}
