import Image from "next/image";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Flip to "right" to swap content and art column positions
const SIDE: "left" | "right" = "left";

const eventDetails = {
  name: "PROVE IT",
  dates: "13–14 October",
  venue: "BPTRC",
};

const schedule = [
  {
    id: 1,
    dayLabel: "Day 1",
    tag: "Expert Talk",
    name: "Expert Talk",
    description: "How mathematical thinking shapes real-world problem-solving across research and industry.",
    registerUrl: "#",
  },
  {
    id: 2,
    dayLabel: "Day 2",
    tag: "Workshop",
    name: "Workshop",
    description: "A hands-on session to build, solve, and compete in practical mathematics.",
    registerUrl: "#",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="relative z-[2] pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-24 bg-transparent"
      aria-labelledby="events-heading"
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
            {/* Header + Date/Venue Pill in Collage Cutout Style */}
            <div className="mb-8">
              <div className="inline-block bg-[#C41E5A] text-white px-3 py-0.5 text-xs font-poster tracking-widest uppercase border border-[#1A1040] shadow-[2px_2px_0px_#1A1040] -rotate-1 mb-2">
                FLAGSHIP EVENT // ANNUAL DOSSIER
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <h2
                  id="events-heading"
                  className="text-4xl sm:text-6xl font-poster text-[#1A1040] tracking-tight uppercase"
                >
                  {eventDetails.name}
                </h2>

                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#F0EDE0] border-2 border-[#1A1040] shadow-[3px_3px_0px_#1A1040] rotate-1 font-stamp text-xs sm:text-sm font-bold text-[#1A1040]">
                  <span className="flex items-center gap-1.5 text-[#C41E5A]">
                    <CalendarDays className="w-4 h-4" aria-hidden="true" />
                    <time>{eventDetails.dates}</time>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-[#1A1040]">
                    <MapPin className="w-4 h-4 text-[#C41E5A]" aria-hidden="true" />
                    <span>{eventDetails.venue}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Event cards: Styled like Marvel Trading Card Panels */}
            <div className="flex flex-col gap-5">
              {schedule.map((event, idx) => (
                <div
                  key={event.id}
                  className={cn(
                    "trading-card relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5 sm:p-6 bg-[#F0EDE0] border-3 border-[#1A1040] shadow-[6px_6px_0px_#1A1040]",
                    idx === 0 ? "-rotate-0.5" : "rotate-0.5"
                  )}
                >
                  {/* Top accent badge */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 text-[11px] font-stamp font-bold uppercase tracking-wider bg-[#1A1040] text-[#F0EDE0] shadow-[2px_2px_0px_#C41E5A]">
                        {event.dayLabel} &bull; {event.tag}
                      </span>
                      <span className="text-[10px] font-stamp font-bold text-[#C41E5A]">
                        CHALLENGE PHASE 0{event.id}
                      </span>
                    </div>

                    <h3 className="font-poster text-2xl sm:text-3xl text-[#1A1040] tracking-wider uppercase mb-1.5">
                      {event.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#3E3854] font-medium leading-relaxed max-w-md">
                      {event.description}
                    </p>
                  </div>

                  <a
                    href={event.registerUrl}
                    className="marvel-badge shrink-0 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 text-base uppercase tracking-wider active:scale-95"
                    aria-label={`Register for ${eventDetails.name} — ${event.name}`}
                  >
                    <span>Register Now</span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Art Column (Right) — mj.png at bottom of wrapper */}
          <div
            className={cn(
              "relative mt-8 flex justify-center lg:mt-0 lg:justify-end",
              SIDE === "left" ? "order-2 lg:order-2" : "order-2 lg:order-1"
            )}
          >
            <div className="relative mx-auto lg:mx-0 w-full max-w-[240px] lg:max-w-none lg:w-[260px] flex flex-col justify-start">
              <Image
                src="/mj.png"
                alt="MJ hanging from thread"
                width={260}
                height={553}
                priority
                className="pointer-events-none select-none relative z-[5] mx-auto w-full max-w-[220px] h-auto sm:max-w-[240px] lg:max-w-none drop-shadow-[8px_8px_0px_rgba(26,16,64,0.35)]"
              />

              {/* Mobile Physics Annotations */}
              <div
                className="absolute whitespace-nowrap text-right font-hand text-[12px] font-bold text-[#1A1040] leading-tight pointer-events-none z-10 select-none rotate-1 lg:hidden bg-[#F0EDE0]/90 px-1.5 py-0.5 border border-[#1A1040] shadow-[2px_2px_0px_#1A1040]"
                style={{ left: "-2px", top: "12px" }}
                aria-hidden="true"
              >
                for MJ:<br />
                T<sub>2</sub> = m′g
              </div>

              <div
                className="absolute whitespace-nowrap text-right font-hand text-[12px] font-bold text-[#1A1040] pointer-events-none z-10 select-none -rotate-1 lg:hidden bg-[#F0EDE0]/90 px-1.5 py-0.5 border border-[#1A1040] shadow-[2px_2px_0px_#1A1040]"
                style={{ left: "0px", top: "100px" }}
                aria-hidden="true"
              >
                m′ = 50 kg
              </div>

              <div
                className="absolute whitespace-nowrap text-left font-hand text-[12px] pointer-events-none z-10 select-none -rotate-1 lg:hidden"
                style={{ right: "-2px", top: "12px" }}
                aria-hidden="true"
              >
                <div className="text-[#1A1040] font-bold bg-[#F0EDE0]/90 px-1 mb-1 border border-[#1A1040]">T<sub>2</sub> = 50 × 10</div>
                <div>
                  <span
                    className="inline-block text-[#C41E5A] bg-[#F0EDE0] font-bold"
                    style={{
                      border: "2px solid #C41E5A",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      boxShadow: "2px 2px 0px #1A1040",
                    }}
                  >
                    T<sub>2</sub> = 500 N
                  </span>
                </div>
              </div>

              <div
                className="absolute whitespace-nowrap text-left font-hand text-[12px] pointer-events-none z-10 select-none rotate-1 lg:hidden"
                style={{ right: "-2px", top: "100px" }}
                aria-hidden="true"
              >
                <div className="text-[#1A1040] font-bold bg-[#F0EDE0]/90 px-1 mb-1 border border-[#1A1040]">T<sub>1</sub> = 70×10 + 500</div>
                <div>
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
              </div>

              {/* Desktop Physics Annotations */}
              <div
                className="absolute whitespace-nowrap text-right font-hand text-[22px] font-bold text-[#1A1040] leading-tight pointer-events-none z-10 select-none rotate-1 hidden lg:block bg-[#F0EDE0] px-2.5 py-1 border-2 border-[#1A1040] shadow-[3px_3px_0px_#1A1040]"
                style={{ right: "calc(100% - 56px)", top: "40px" }}
                aria-hidden="true"
              >
                for MJ:<br />
                T<sub>2</sub> = m′g ②
              </div>

              <div
                className="absolute whitespace-nowrap text-right font-hand text-[22px] font-bold text-[#1A1040] pointer-events-none z-10 select-none -rotate-1 hidden lg:block bg-[#F0EDE0] px-2.5 py-0.5 border-2 border-[#1A1040] shadow-[3px_3px_0px_#1A1040]"
                style={{ right: "calc(100% - 56px)", top: "210px" }}
                aria-hidden="true"
              >
                m′ = 50 kg
              </div>

              <div
                className="absolute whitespace-nowrap text-left font-hand text-[22px] pointer-events-none z-10 select-none -rotate-1 hidden lg:block"
                style={{ left: "140px", top: "60px" }}
                aria-hidden="true"
              >
                <div className="text-[#1A1040] font-bold bg-[#F0EDE0] px-2 py-0.5 mb-1.5 border-2 border-[#1A1040] shadow-[2px_2px_0px_#1A1040]">T<sub>2</sub> = 50 × 10</div>
                <div>
                  <span
                    className="inline-block text-[#C41E5A] bg-[#F0EDE0] font-bold"
                    style={{
                      border: "2.5px solid #C41E5A",
                      padding: "2px 10px",
                      borderRadius: "4px",
                      boxShadow: "3px 3px 0px #1A1040",
                    }}
                  >
                    T<sub>2</sub> = 500 N
                  </span>
                </div>
              </div>

              <div
                className="absolute whitespace-nowrap text-left font-hand text-[22px] pointer-events-none z-10 select-none rotate-1 hidden lg:block"
                style={{ left: "140px", top: "220px" }}
                aria-hidden="true"
              >
                <div className="text-[#1A1040] font-bold bg-[#F0EDE0] px-2 py-0.5 mb-1.5 border-2 border-[#1A1040] shadow-[2px_2px_0px_#1A1040]">T<sub>1</sub> = 70×10 + 500</div>
                <div>
                  <span
                    className="inline-block text-[#C41E5A] bg-[#F0EDE0] font-bold"
                    style={{
                      border: "2.5px solid #C41E5A",
                      padding: "2px 10px",
                      borderRadius: "4px",
                      boxShadow: "3px 3px 0px #1A1040",
                    }}
                  >
                    T<sub>1</sub> = 1200 N
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

