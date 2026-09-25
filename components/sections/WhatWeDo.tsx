import Image from "next/image";
import { Trophy, FlaskConical, BookOpen, Users } from "lucide-react";
import { cn } from "@/lib/utils";

// Flip to "right" to swap content and art column positions
const SIDE: "left" | "right" = "left";

const activities = [
  {
    icon: Trophy,
    title: "Challenges",
    description: "Weekly problem sets that push your logical boundaries.",
  },
  {
    icon: FlaskConical,
    title: "Competitions",
    description: "Inter-college contests to test and showcase your skills.",
  },
  {
    icon: BookOpen,
    title: "Workshops",
    description: "Hands-on sessions on number theory, combinatorics, and algorithms.",
  },
  {
    icon: Users,
    title: "Community",
    description: "A collaborative circle of thinkers sharing ideas and growing.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative z-[2] pt-12 pb-8 lg:pt-16 lg:pb-10 bg-transparent"
      aria-labelledby="what-we-do-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-8 lg:gap-12",
            SIDE === "left"
              ? "lg:grid-cols-[1.15fr_0.85fr]"
              : "lg:grid-cols-[0.85fr_1.15fr]"
          )}
        >
          {/* Content Column (Left) */}
          <div
            className={cn(
              "relative z-10",
              SIDE === "left" ? "order-1" : "order-1 lg:order-2"
            )}
          >
            <h2
              id="what-we-do-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-8"
            >
              More than just numbers
            </h2>

            {/* 4 Items in clean 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              {activities.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group relative z-10 flex items-start gap-3.5 bg-[#0f0906] p-3 rounded-xl border border-[var(--color-border)] shadow-md"
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

          {/* Art Column (Right) — spider.png at top of wrapper */}
          <div
            className={cn(
              "hidden lg:flex relative",
              SIDE === "left" ? "order-2 justify-end" : "order-2 lg:order-1 justify-start"
            )}
          >
            <div className="relative w-[260px] min-h-[520px] justify-self-end flex flex-col justify-start">
              {/* Spider-Man Image (z-5, above thread at z-0) */}
              <Image
                src="/spider.png"
                alt="Spider-Man gripping thread"
                width={260}
                height={428}
                priority
                className="pointer-events-none select-none relative z-[5]"
              />

              {/* Physics Annotations */}
              {/* 1. LEFT, top: 40px */}
              <div
                className="absolute whitespace-nowrap text-right font-hand text-[22px] text-[#f5e9dc]/85 pointer-events-none z-10 select-none -rotate-1 hidden lg:block"
                style={{ right: "calc(100% - 56px)", top: "40px" }}
                aria-hidden="true"
              >
                m<sub>s</sub> = 70 kg
              </div>

              {/* 2. LEFT, top: 190px */}
              <div
                className="absolute whitespace-nowrap text-right font-hand text-[22px] text-[#f5e9dc]/85 leading-tight pointer-events-none z-10 select-none rotate-1 hidden lg:block"
                style={{ right: "calc(100% - 56px)", top: "190px" }}
                aria-hidden="true"
              >
                for Spider-Man:<br />
                T<sub>1</sub> = m<sub>s</sub>g + T<sub>2</sub> ①
              </div>

              {/* 3. RIGHT, top: 30px */}
              <div
                className="absolute whitespace-nowrap text-left font-hand text-[22px] pointer-events-none z-10 select-none rotate-1 hidden lg:block"
                style={{ left: "140px", top: "30px" }}
                aria-hidden="true"
              >
                <span
                  className="inline-block text-[#ea580c] font-semibold"
                  style={{
                    border: "1.5px solid #ea580c",
                    padding: "2px 10px",
                    borderRadius: "6px 10px 8px 12px",
                  }}
                >
                  T<sub>1</sub> = 1200 N
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
