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
      className="relative z-[2] pt-10 pb-12 sm:pt-8 lg:pt-10 lg:pb-16 bg-transparent"
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
            {/* Header + Date/Venue Pill */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h2
                id="events-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              >
                {eventDetails.name}
              </h2>

              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-[var(--color-border)] bg-[#0f0906] text-xs sm:text-sm text-[var(--color-muted)] shadow-md">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  <time>{eventDetails.dates}</time>
                </span>
                <span className="text-[var(--color-border)]">•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>{eventDetails.venue}</span>
                </span>
              </div>
            </div>

            {/* Event cards stacked vertically in the left column */}
            <div className="flex flex-col gap-4">
              {schedule.map((event) => (
                <div
                  key={event.id}
                  className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 sm:p-6 rounded-2xl border border-[var(--color-border)] bg-[#0f0906] shadow-xl overflow-hidden"
                >
                  {/* Top orange accent strip */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-[var(--color-accent)]" aria-hidden="true" />

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 pt-1">
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                        {event.dayLabel} — {event.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1.5">
                      {event.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <a
                    href={event.registerUrl}
                    className="shrink-0 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-hover)] transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-black"
                    aria-label={`Register for ${eventDetails.name} — ${event.name}`}
                  >
                    Register Now
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
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
            <div className="relative w-full max-w-[240px] lg:w-[260px] lg:min-h-[560px] lg:justify-self-end flex flex-col justify-end">
              <Image
                src="/mj.png"
                alt="MJ hanging from thread"
                width={260}
                height={553}
                priority
                className="pointer-events-none select-none relative z-[5] mx-auto w-full max-w-[220px] h-auto sm:max-w-[240px] lg:max-w-none"
              />

              <div
                className="absolute whitespace-nowrap text-right font-hand text-[11px] text-[#f5e9dc]/85 leading-tight pointer-events-none z-10 select-none rotate-1 lg:hidden"
                style={{ right: "calc(100% - 20px)", top: "18px" }}
                aria-hidden="true"
              >
                for MJ:<br />
                T<sub>2</sub> = m′g
              </div>

              <div
                className="absolute whitespace-nowrap text-right font-hand text-[11px] text-[#f5e9dc]/85 pointer-events-none z-10 select-none -rotate-1 lg:hidden"
                style={{ right: "calc(100% - 18px)", top: "110px" }}
                aria-hidden="true"
              >
                m′ = 50 kg
              </div>

              <div
                className="absolute whitespace-nowrap text-left font-hand text-[11px] pointer-events-none z-10 select-none -rotate-1 lg:hidden"
                style={{ left: "88px", top: "16px" }}
                aria-hidden="true"
              >
                <div className="text-[#f5e9dc]/85 mb-1">T<sub>2</sub> = 50 × 10</div>
                <div>
                  <span
                    className="inline-block text-[#ea580c] font-semibold"
                    style={{
                      border: "1.5px solid #ea580c",
                      padding: "2px 8px",
                      borderRadius: "6px 10px 8px 12px",
                    }}
                  >
                    T<sub>2</sub> = 500 N
                  </span>
                </div>
              </div>

              <div
                className="absolute whitespace-nowrap text-left font-hand text-[11px] pointer-events-none z-10 select-none rotate-1 lg:hidden"
                style={{ left: "88px", top: "110px" }}
                aria-hidden="true"
              >
                <div className="text-[#f5e9dc]/85 mb-1">T<sub>1</sub> = 70×10 + 500</div>
                <div>
                  <span
                    className="inline-block text-[#ea580c] font-semibold"
                    style={{
                      border: "1.5px solid #ea580c",
                      padding: "2px 8px",
                      borderRadius: "6px 10px 8px 12px",
                    }}
                  >
                    T<sub>1</sub> = 1200 N
                  </span>
                </div>
              </div>

              <div
                className="absolute whitespace-nowrap text-right font-hand text-[22px] text-[#f5e9dc]/85 leading-tight pointer-events-none z-10 select-none rotate-1 hidden lg:block"
                style={{ right: "calc(100% - 56px)", top: "40px" }}
                aria-hidden="true"
              >
                for MJ:<br />
                T<sub>2</sub> = m′g ②
              </div>

              <div
                className="absolute whitespace-nowrap text-right font-hand text-[22px] text-[#f5e9dc]/85 pointer-events-none z-10 select-none -rotate-1 hidden lg:block"
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
                <div className="text-[#f5e9dc]/85 mb-1">T<sub>2</sub> = 50 × 10</div>
                <div>
                  <span
                    className="inline-block text-[#ea580c] font-semibold"
                    style={{
                      border: "1.5px solid #ea580c",
                      padding: "2px 10px",
                      borderRadius: "6px 10px 8px 12px",
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
                <div className="text-[#f5e9dc]/85 mb-1">T<sub>1</sub> = 70×10 + 500</div>
                <div>
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
      </div>
    </section>
  );
}
