"use client";

import { Link2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// ─── Team data ────────────────────────────────────────────────────────────────
const teamMembers = [
  { name: "Priya Sharma", role: "President", linkedin: null },
  { name: "Arjun Mehta", role: "Vice President", linkedin: null },
  { name: "Sneha Iyer", role: "Events Coordinator", linkedin: null },
  { name: "Rahul Gupta", role: "Treasurer", linkedin: null },
  { name: "Kavya Nair", role: "Workshop Lead", linkedin: null },
  { name: "Dev Patel", role: "Design & Media", linkedin: null },
  { name: "Ananya Reddy", role: "Outreach", linkedin: null },
  { name: "Rohan Verma", role: "Tech & Website", linkedin: null },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-16 lg:py-24 bg-[var(--color-card)]"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            The Team
          </p>
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]"
          >
            People Behind the Club
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto">
            Passionate students who keep the math alive on campus.
          </p>
        </AnimatedSection>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" role="list">
          {teamMembers.map((member) => (
            <li key={member.name}>
              <div className="flex flex-col items-center text-center p-5 rounded-2xl border border-[var(--color-border)] bg-white h-full">
                <div
                  className="w-20 h-20 rounded-full bg-[var(--color-accent-light)] border-2 border-[var(--color-border)] mb-4 flex items-center justify-center"
                  aria-label={`${member.name} photo placeholder`}
                >
                  <span
                    className="text-2xl font-bold text-[var(--color-accent)] select-none"
                    aria-hidden="true"
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                <h3 className="font-semibold text-[var(--color-foreground)] text-sm leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs text-[var(--color-muted)] mt-0.5">{member.role}</p>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Link2 className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
