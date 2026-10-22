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
      className="relative z-[3] pt-16 pb-12 sm:pt-20 lg:pt-24 lg:pb-16 bg-transparent"
      aria-labelledby="what-we-do-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
            {/* Stamp label */}
            <div className="inline-block bg-[#1A1040] text-[#F0EDE0] px-3.5 py-1 text-xs font-stamp font-bold tracking-widest uppercase border border-[#1A1040] shadow-[3px_3px_0px_#C41E5A] -rotate-2 mb-3">
              TACTICAL DISCIPLINES
            </div>

            <h2
              id="what-we-do-heading"
              className="text-4xl sm:text-5xl font-poster text-[#1A1040] tracking-tight leading-tight mb-8 uppercase"
            >
              MORE THAN JUST <span className="bg-[#C41E5A] text-[#F0EDE0] px-3 py-0.5 inline-block rotate-1 shadow-[4px_4px_0px_#1A1040]">NUMBERS</span>
            </h2>

            {/* 4 Items in Trading Card Panel Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
              {activities.map((item, idx) => {
                const Icon = item.icon;
                const isOdd = idx % 2 === 1;
                return (
                  <div
                    key={item.title}
                    className={cn(
                      "trading-card group relative z-10 flex flex-col justify-between bg-[#F0EDE0] p-4 border-3 border-[#1A1040] shadow-[5px_5px_0px_#1A1040]",
                      isOdd ? "rotate-0.5" : "-rotate-0.5"
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3 border-b-2 border-[#1A1040]/30 pb-2">
                        <div className="shrink-0 flex items-center justify-center w-9 h-9 border-2 border-[#1A1040] bg-[#C41E5A] text-white shadow-[2px_2px_0px_#1A1040] group-hover:bg-[#1A1040] transition-colors">
                          <Icon className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <span className="font-stamp text-[10px] bg-[#1A1040] text-[#F0EDE0] px-2 py-0.5 font-bold uppercase">
                          PANEL 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="font-poster text-2xl text-[#1A1040] tracking-wider uppercase mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#3E3854] font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-dashed border-[#1A1040]/30 flex justify-between items-center text-[10px] font-stamp text-[#C41E5A] font-bold">
                      <span>TYPE: CORE SKILL</span>
                      <span>ACTIVE</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Art Column (Right) — spider.png at top of wrapper */}
          <div
            className={cn(
              "relative flex justify-center lg:justify-end",
              SIDE === "left" ? "order-2 lg:order-2" : "order-2 lg:order-1"
            )}
          >
            <div className="relative mx-auto lg:mx-0 w-full max-w-[240px] lg:max-w-none lg:w-[260px] flex flex-col justify-start">
              {/* Dynamic colored soft shadow aura so Spider-Man pops cleanly without any box */}
              <div
                className="absolute inset-0 -m-8 sm:-m-12 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(26,16,64,0.38)_0%,_rgba(196,30,90,0.22)_45%,_transparent_75%)] blur-2xl pointer-events-none z-0"
                aria-hidden="true"
              />


              {/* Thread from top edge down into Spider-Man's top web */}
              <div
                className="hidden lg:block absolute bottom-full w-[3px] pointer-events-none z-0 -mb-[2px]"
                style={{
                  left: "109px",
                  height: "800px",
                  background:
                    "linear-gradient(to top, rgba(26,16,64,0.9), rgba(196,30,90,0.4))",
                }}
                aria-hidden="true"
              />

              {/* Spider-Man Image (z-5, above thread at z-0) */}
              <Image
                src="/spider.png"
                alt="Spider-Man gripping thread"
                width={260}
                height={428}
                priority
                className="pointer-events-none select-none relative z-[5] mx-auto w-full max-w-[220px] h-auto sm:max-w-[240px] lg:max-w-none drop-shadow-[0_12px_24px_rgba(26,16,64,0.65)] drop-shadow-[0_0_18px_rgba(196,30,90,0.45)] drop-shadow-[4px_4px_0px_#1A1040]"
              />

              {/* Physics Annotations */}
              <div
                className="absolute whitespace-nowrap text-right font-hand text-[12px] font-bold text-[#1A1040] pointer-events-none z-10 select-none -rotate-1 lg:hidden bg-[#F0EDE0]/90 px-1.5 py-0.5 border border-[#1A1040] shadow-[2px_2px_0px_#1A1040]"
                style={{ right: "calc(100% - 28px)", top: "26px" }}
                aria-hidden="true"
              >
                m<sub>s</sub> = 70 kg
              </div>

              <div
                className="absolute whitespace-nowrap text-right font-hand text-[12px] font-bold text-[#1A1040] leading-tight pointer-events-none z-10 select-none rotate-1 lg:hidden bg-[#F0EDE0]/90 px-1.5 py-0.5 border border-[#1A1040] shadow-[2px_2px_0px_#1A1040]"
                style={{ right: "calc(100% - 20px)", top: "120px" }}
                aria-hidden="true"
              >
                for Spider-Man:<br />
                T<sub>1</sub> = m<sub>s</sub>g + T<sub>2</sub>
              </div>

              <div
                className="absolute whitespace-nowrap text-left font-hand text-[12px] pointer-events-none z-10 select-none rotate-1 lg:hidden"
                style={{ left: "110px", top: "20px" }}
                aria-hidden="true"
              >
                <span
                  className="inline-block text-[#C41E5A] bg-[#F0EDE0] font-bold"
                  style={{
                    border: "2px solid #C41E5A",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    boxShadow: "2px 2px 0px #1A1040",
                  }}
                >
                  T<sub>1</sub> = 1200 N
                </span>
              </div>

              <div
                className="absolute whitespace-nowrap text-right font-hand text-[22px] font-bold text-[#1A1040] pointer-events-none z-10 select-none -rotate-1 hidden lg:block bg-[#F0EDE0] px-2 py-0.5 border-2 border-[#1A1040] shadow-[3px_3px_0px_#1A1040]"
                style={{ right: "calc(100% - 56px)", top: "40px" }}
                aria-hidden="true"
              >
                m<sub>s</sub> = 70 kg
              </div>

              <div
                className="absolute whitespace-nowrap text-right font-hand text-[22px] font-bold text-[#1A1040] leading-tight pointer-events-none z-10 select-none rotate-1 hidden lg:block bg-[#F0EDE0] px-2.5 py-1 border-2 border-[#1A1040] shadow-[3px_3px_0px_#1A1040]"
                style={{ right: "calc(100% - 56px)", top: "190px" }}
                aria-hidden="true"
              >
                for Spider-Man:<br />
                T<sub>1</sub> = m<sub>s</sub>g + T<sub>2</sub> ①
              </div>

              <div
                className="absolute whitespace-nowrap text-left font-hand text-[22px] pointer-events-none z-10 select-none rotate-1 hidden lg:block"
                style={{ left: "140px", top: "30px" }}
                aria-hidden="true"
              >
                <span
                  className="inline-block text-[#C41E5A] bg-[#F0EDE0] font-bold"
                  style={{
                    border: "2.5px solid #C41E5A",
                    padding: "3px 12px",
                    borderRadius: "4px",
                    boxShadow: "4px 4px 0px #1A1040",
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

