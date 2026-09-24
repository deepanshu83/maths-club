import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Flip to "right" to swap content and art slot positions
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
    date: "13 October",
    name: "Expert Talk",
    description: "How mathematical thinking shapes real-world problem-solving across research and industry.",
    registerUrl: "#",
  },
  {
    id: 2,
    dayLabel: "Day 2",
    tag: "Workshop",
    date: "14 October",
    name: "Workshop",
    description: "A hands-on session to build, solve, and compete in practical mathematics.",
    registerUrl: "#",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="relative pt-8 pb-16 lg:pt-10 lg:pb-20 bg-transparent"
      aria-labelledby="events-heading"
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
            {/* Header + Date/Venue Pill */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h2
                id="events-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
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

            {/* Event cards — opaque bg-[#0f0906] with z-10 so they fully cover the thread if overlapping */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {schedule.map((event) => (
                <div
                  key={event.id}
                  className="relative z-10 flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-[var(--color-border)] bg-[#0f0906] shadow-xl overflow-hidden"
                >
                  {/* Top orange accent strip */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-[var(--color-accent)]" aria-hidden="true" />

                  <div>
                    <div className="flex items-center justify-between mb-3 pt-1">
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                        {event.dayLabel} — {event.tag}
                      </span>
                      <span className="text-xs text-[var(--color-muted)]">
                        {event.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {event.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                      {event.description}
                    </p>
                  </div>

                  <a
                    href={event.registerUrl}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold rounded-lg bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-hover)] transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-black"
                    aria-label={`Register for ${eventDetails.name} — ${event.name}`}
                  >
                    Register Now
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              ))}
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
              data-art-slot="proveit"
              className={cn(
                "relative w-[260px] h-[560px] justify-self-end",
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
