import { cn } from "@/lib/utils";

// Flip to "right" to swap content and art slot positions
const SIDE: "left" | "right" = "left";

export default function About() {
  return (
    <section
      id="about"
      className="relative pt-16 pb-8 lg:pt-20 lg:pb-10 bg-transparent"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-8 lg:gap-12",
            SIDE === "left"
              ? "lg:grid-cols-[1.15fr_0.85fr]"
              : "lg:grid-cols-[0.85fr_1.15fr]"
          )}
        >
          {/* Content Block */}
          <div
            className={cn(
              "relative z-10 bg-[#0f0906] p-6 sm:p-8 lg:p-10 rounded-2xl border border-[var(--color-border)] shadow-xl",
              SIDE === "left" ? "order-1" : "order-1 lg:order-2"
            )}
          >
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4"
            >
              A space for mathematical minds
            </h2>

            <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed mb-8">
              A student-led community exploring logic, abstract structures, and real-world problem solving.
            </p>

            {/* Vision & Mission — one line each, left border accent */}
            <div className="space-y-4">
              <div className="border-l-2 border-[var(--color-accent)] pl-4">
                <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                  <span className="text-white font-medium">Vision:</span> Cultivating a campus culture where mathematical thinking is celebrated and accessible to all.
                </p>
              </div>
              <div className="border-l-2 border-[var(--color-accent)] pl-4">
                <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                  <span className="text-white font-medium">Mission:</span> Challenging and inspiring curious minds through competitions, problem-solving, and practical workshops.
                </p>
              </div>
            </div>
          </div>

          {/* Empty Art Slot (Right column on desktop, hidden on mobile) */}
          <div
            className={cn(
              "hidden lg:flex relative z-0",
              SIDE === "left" ? "order-2 justify-end" : "order-2 lg:order-1 justify-start"
            )}
          >
            <div
              data-art-slot="who"
              className={cn(
                "relative w-[260px] h-[380px] justify-self-end",
                SIDE === "left" ? "justify-self-end" : "justify-self-start",
                process.env.NODE_ENV === "development" && "border border-dashed border-white/20"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
