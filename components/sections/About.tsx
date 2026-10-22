"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-[#D0CFC8] border-b-4 border-[#1A1040] flex items-center justify-center min-h-[75vh]"
      aria-labelledby="about-heading"
    >
      {/* Spider-Man background image — clear, unblurred, as requested */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-40 mix-blend-multiply"
        style={{ backgroundImage: "url('/download.jfif')" }}
        aria-hidden="true"
      />

      {/* Halftone comic overlay */}
      <div className="absolute inset-0 z-0 comic-halftone pointer-events-none opacity-30" aria-hidden="true" />

      {/* Comic Cutout Decorative Tape */}
      <div className="absolute top-4 left-8 hidden sm:block bg-[#C41E5A] text-white font-poster text-xs uppercase px-3 py-1 border border-[#1A1040] -rotate-3 z-10 shadow-[2px_2px_0px_#1A1040]">
        ORIGIN STORY &bull; FILE 01
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection variant="fadeUp">
          <div className="relative p-6 sm:p-10 bg-[#F0EDE0] border-4 border-[#1A1040] shadow-[10px_10px_0px_#1A1040] rotate-0.5">
            {/* Cutout corner tape labels */}
            <div className="absolute -top-3.5 left-8 bg-[#1A1040] text-[#F0EDE0] font-stamp text-[11px] font-bold px-3 py-0.5 uppercase tracking-widest border border-[#1A1040] -rotate-1 shadow-[2px_2px_0px_#C41E5A]">
              DECLASSIFIED ARCHIVE
            </div>
            <div className="absolute -bottom-3 right-8 bg-[#C41E5A] text-[#F0EDE0] font-stamp text-[10px] font-bold px-3 py-0.5 uppercase tracking-widest border border-[#1A1040] rotate-2 shadow-[2px_2px_0px_#1A1040]">
              VERIFIED // BKBIET
            </div>

            <div className="inline-block bg-[#C41E5A] text-white px-3.5 py-1 text-xs sm:text-sm font-poster tracking-widest uppercase border-2 border-[#1A1040] shadow-[3px_3px_0px_#1A1040] -rotate-2 mb-4">
              WHO WE ARE
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-poster text-[#1A1040] mb-4 tracking-tight leading-tight uppercase"
            >
              A Space for <span className="bg-[#1A1040] text-[#F0EDE0] px-2 py-0.5 inline-block -rotate-1">Mathematical Minds</span>
            </h2>

            <p className="text-base sm:text-lg text-[#2B2348] font-sans font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              A student-led community exploring logic, abstractions, and real-world problem solving. We believe mathematics is more than equations — it&apos;s a way of seeing the world.
            </p>

            {/* Trading Card Panels for Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto text-left">
              {/* Vision Card */}
              <div className="trading-card p-5 bg-[#FAF8F2] border-3 border-[#1A1040] shadow-[5px_5px_0px_#1A1040] relative">
                <div className="flex items-center justify-between border-b-2 border-[#1A1040] pb-2 mb-3">
                  <span className="font-poster text-xl text-[#C41E5A] tracking-wider uppercase">
                    OUR VISION
                  </span>
                  <span className="font-stamp text-[10px] bg-[#1A1040] text-[#F0EDE0] px-2 py-0.5 font-bold">
                    CARD #01
                  </span>
                </div>
                <p className="text-sm text-[#3E3854] font-medium leading-relaxed">
                  To foster a campus culture where mathematical thinking is celebrated and accessible to all.
                </p>
                <div className="mt-3 pt-2 border-t border-dashed border-[#1A1040]/30 flex justify-between items-center text-[10px] font-stamp text-[#1A1040]">
                  <span>POWER: &infin;</span>
                  <span>ATTR: INTELLECT</span>
                </div>
              </div>

              {/* Mission Card */}
              <div className="trading-card p-5 bg-[#FAF8F2] border-3 border-[#1A1040] shadow-[5px_5px_0px_#C41E5A] relative">
                <div className="flex items-center justify-between border-b-2 border-[#1A1040] pb-2 mb-3">
                  <span className="font-poster text-xl text-[#1A1040] tracking-wider uppercase">
                    OUR MISSION
                  </span>
                  <span className="font-stamp text-[10px] bg-[#C41E5A] text-[#F0EDE0] px-2 py-0.5 font-bold">
                    CARD #02
                  </span>
                </div>
                <p className="text-sm text-[#3E3854] font-medium leading-relaxed">
                  Host competitions, talks, and practical workshops that challenge and inspire curious minds.
                </p>
                <div className="mt-3 pt-2 border-t border-dashed border-[#1A1040]/30 flex justify-between items-center text-[10px] font-stamp text-[#1A1040]">
                  <span>IMPACT: 100%</span>
                  <span>ACTION: BUILD</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

