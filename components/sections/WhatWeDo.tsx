import { Trophy, FlaskConical, BookOpen, Users } from "lucide-react";
import { cn } from "@/lib/utils";

// Flip to "right" to swap content and art slot positions
const SIDE: "left" | "right" = "left";

const activities = [
  {
    icon: Trophy,
    title: "Challenges",
    description: "Weekly problem sets that push your logical and analytical boundaries.",
  },
  {
    icon: FlaskConical,
    title: "Competitions",
    description: "Inter-college math contests to test and showcase your talent.",
  },
  {
    icon: BookOpen,
    title: "Workshops",
    description: "Hands-on sessions exploring number theory, combinatorics, and algorithms.",
  },
  {
    icon: Users,
    title: "Community",
    description: "A collaborative circle of thinkers sharing ideas and growing together.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative py-8 lg:py-10 bg-transparent"
      aria-labelledby="what-we-do-heading"
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
              "relative z-10",
              SIDE === "left" ? "order-1" : "order-1 lg:order-2"
            )}
          >
            <h2
              id="what-we-do-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6"
            >
              More than just numbers
            </h2>

            {/* 4 Items — 2x2 grid, each with opaque background */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activities.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group relative z-10 flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-[var(--color-border)] bg-[#0f0906] shadow-lg"
                  >
                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-light)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-black transition-colors duration-200 motion-reduce:transition-none">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
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
              data-art-slot="what"
              className={cn(
                "relative w-[260px] h-[520px] justify-self-end",
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
