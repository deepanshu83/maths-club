"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 overflow-hidden bg-black flex items-center justify-center min-h-[75vh]"
      aria-labelledby="about-heading"
    >
      {/* Spider-Man background image — clear, unblurred, as requested */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/download.jfif')" }}
        aria-hidden="true"
      />

      {/* Subtle top and bottom transition edges */}
      <div
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0604] to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0604] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection variant="fadeUp">
          <div className="p-6 sm:p-10 rounded-3xl bg-[#0a0604]/80 border border-[var(--color-border)] shadow-2xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
              Who We Are
            </p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-md"
            >
              A Space for Mathematical Minds
            </h2>
            <p className="text-base sm:text-lg text-[#f0e6df] leading-relaxed max-w-2xl mx-auto mb-8 drop-shadow-sm">
              A student-led community exploring logic, abstractions, and real-world problem solving. We believe mathematics is more than equations — it&apos;s a way of seeing the world.
            </p>

            {/* Concise Vision & Mission cards */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[#140d08]/90 hover:border-[var(--color-accent)]/60 transition-colors shadow-lg">
                <h3 className="font-semibold text-white mb-1">Our Vision</h3>
                <p className="text-sm text-[#b8a69a] leading-relaxed">
                  To foster a campus culture where mathematical thinking is celebrated and accessible to all.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[#140d08]/90 hover:border-[var(--color-accent)]/60 transition-colors shadow-lg">
                <h3 className="font-semibold text-white mb-1">Our Mission</h3>
                <p className="text-sm text-[#b8a69a] leading-relaxed">
                  Host competitions, talks, and practical workshops that challenge and inspire curious minds.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
