"use client";

import Link from "next/link";
import { Sparkles, ArrowDownRight, Compass } from "lucide-react";
import VantaBackground from "@/components/VantaBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-3.5rem)] flex items-center overflow-hidden bg-[#D0CFC8] pt-20 pb-16 border-b-4 border-[#1A1040]"
      aria-labelledby="hero-heading"
    >
      {/* Interactive geometric web mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <VantaBackground />
      </div>

      {/* Halftone comic dot overlay */}
      <div className="absolute inset-0 z-0 comic-halftone pointer-events-none opacity-40" aria-hidden="true" />

      {/* Vintage comic corner marks & registration crosshairs */}
      <div className="absolute top-6 left-6 z-10 hidden sm:flex flex-col gap-1 pointer-events-none" aria-hidden="true">
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-full border-2 border-[#1A1040]" />
          <span className="font-stamp text-[10px] text-[#1A1040] font-bold tracking-widest">REG. 001/A</span>
        </div>
      </div>

      {/* Vertical Product Tagline on right border (Classic Spider-Man Poster Style) */}
      <div
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="bg-[#1A1040] text-[#F0EDE0] px-3 py-6 cutout-shadow border-2 border-[#1A1040] rotate-1">
          <span
            className="font-poster text-3xl xl:text-4xl tracking-widest uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            ZERO LIMITS
          </span>
        </div>
        <div className="w-0.5 h-16 bg-[#1A1040] my-2" />
        <span
          className="font-stamp text-xs text-[#C41E5A] font-bold tracking-widest uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          RESPONSIBILITY &bull; LOGIC
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        {/* Comic Book Top Header Bar / Cutout Ribbon */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <div className="inline-block bg-[#C41E5A] text-white px-3 py-1 text-xs font-poster tracking-widest uppercase border-2 border-[#1A1040] shadow-[3px_3px_0px_#1A1040] -rotate-2">
            COLLECTOR&apos;S ISSUE #001
          </div>
          <div className="inline-block bg-[#F0EDE0] text-[#1A1040] px-3 py-1 text-xs font-stamp font-bold tracking-wider uppercase border-2 border-[#1A1040] shadow-[3px_3px_0px_#1A1040] rotate-1">
            BKBIET PILANI &bull; 13–14 OCT
          </div>
          <div className="hidden sm:inline-block bg-[#1A1040] text-[#F0EDE0] px-3 py-1 text-xs font-poster tracking-wider uppercase border border-[#1A1040] shadow-[2px_2px_0px_#C41E5A] -rotate-1">
            ANTIGRAVITY ED.
          </div>
        </div>

        {/* Main Collage Cutout Headline */}
        <div className="max-w-4xl relative">
          <h1 id="hero-heading" className="flex flex-col gap-2 select-none">
            {/* Cutout 1: WITH ANTIGRAVITY */}
            <div className="inline-block self-start">
              <span className="inline-block bg-[#1A1040] text-[#F0EDE0] px-4 sm:px-6 py-1 sm:py-2.5 font-poster text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase border-3 border-[#1A1040] shadow-[6px_6px_0px_#C41E5A] -rotate-1 transition-transform hover:-rotate-2">
                WITH ANTIGRAVITY
              </span>
            </div>

            {/* Cutout 2: COMES */}
            <div className="inline-block self-start -mt-2 sm:-mt-3 ml-4 sm:ml-10">
              <span className="inline-block bg-[#C41E5A] text-[#F0EDE0] px-5 sm:px-8 py-0.5 sm:py-1 font-stamp font-black text-3xl sm:text-5xl lg:text-6xl tracking-wider uppercase border-3 border-[#1A1040] shadow-[5px_5px_0px_#1A1040] rotate-2 transition-transform hover:rotate-3">
                COMES
              </span>
            </div>

            {/* Cutout 3: ZERO LIMITS / WHERE LOGIC MEETS INFINITY */}
            <div className="inline-block self-start -mt-1 sm:-mt-2">
              <span className="inline-block bg-[#F0EDE0] text-[#1A1040] px-4 sm:px-6 py-1 sm:py-2.5 font-poster text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase border-3 border-[#1A1040] shadow-[6px_6px_0px_#1A1040] -rotate-1 transition-transform hover:rotate-0">
                WHERE LOGIC MEETS <span className="text-[#C41E5A] underline decoration-4 decoration-[#1A1040]">INFINITY</span>
              </span>
            </div>
          </h1>

          {/* Subtitle / Dossier note in torn paper cutout style */}
          <div className="mt-8 max-w-2xl bg-[#F0EDE0] p-5 sm:p-6 border-3 border-[#1A1040] shadow-[6px_6px_0px_#1A1040] rotate-0.5 relative">
            {/* Corner tape illusion */}
            <div className="absolute -top-3 -left-3 w-8 h-4 bg-[#D0CFC8]/90 border border-[#1A1040]/40 -rotate-45 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-8 h-4 bg-[#D0CFC8]/90 border border-[#1A1040]/40 -rotate-45 pointer-events-none" />

            <p className="font-stamp text-sm sm:text-base text-[#1A1040] leading-relaxed mb-2 font-bold">
              [DOSSIER ENTRY: MATHEMATICS CLUB x PROVE IT]
            </p>
            <p className="font-sans text-sm sm:text-base text-[#2A2346] leading-relaxed font-medium">
              A student-led community challenging physical limits with pure mathematical reasoning. 
              Step into the Spider-Man inspired proving grounds — where every problem cracked bends the laws of convention.
            </p>
          </div>

          {/* Action CTAs: Marvel Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#events"
              className="marvel-badge px-6 sm:px-8 py-3 text-lg sm:text-xl uppercase tracking-wider inline-flex items-center gap-2 group active:scale-95"
            >
              <span>REGISTER FOR PROVE IT</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>

            <Link
              href="#what-we-do"
              className="px-6 sm:px-7 py-3 bg-[#F0EDE0] text-[#1A1040] font-poster text-lg sm:text-xl tracking-wider uppercase border-2 border-[#1A1040] shadow-[4px_4px_0px_#1A1040] hover:bg-[#D0CFC8] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#1A1040] transition-all inline-flex items-center gap-2 active:scale-95"
            >
              <span>EXPLORE ACTIVITIES</span>
              <ArrowDownRight className="w-5 h-5 text-[#C41E5A]" />
            </Link>

            <Link
              href="#about"
              className="hidden sm:inline-flex items-center gap-1.5 font-stamp text-xs text-[#1A1040] font-bold uppercase tracking-wider underline hover:text-[#C41E5A] transition-colors ml-2"
            >
              <Compass className="w-4 h-4" />
              <span>READ THE DOSSIER</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

