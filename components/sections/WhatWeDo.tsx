"use client";

import { motion } from "framer-motion";
import { Trophy, BookOpen, Users, FlaskConical } from "lucide-react";
import { staggerFast, cardReveal, viewport } from "@/lib/animations";
import AnimatedSection from "@/components/AnimatedSection";
import TiltCard from "@/components/TiltCard";

const activities = [
  {
    icon: Trophy,
    title: "Mathematical Challenges",
    description:
      "Weekly problem sets ranging from accessible puzzles to olympiad-level challenges. Test your limits, compete with peers, and celebrate creative solutions.",
  },
  {
    icon: FlaskConical,
    title: "Competitions",
    description:
      "We participate in and organise inter-college math competitions, giving students a platform to showcase their skills at a broader level.",
  },
  {
    icon: BookOpen,
    title: "Workshops",
    description:
      "Hands-on sessions on topics like number theory, combinatorics, graph theory, and applied mathematics — led by students and faculty alike.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "A welcoming environment for everyone — whether you're a beginner or a math olympian. Connect, collaborate, and grow together.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="py-16 lg:py-24"
      aria-labelledby="what-we-do-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <AnimatedSection variant="fadeUp" className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            What We Do
          </p>
          <h2
            id="what-we-do-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]"
          >
            More Than Just Numbers
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
            From intense problem-solving sessions to collaborative workshops, we
            offer a range of activities for every level of enthusiasm.
          </p>
        </AnimatedSection>

        {/* Cards — staggered reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.title} className="h-full">
                <TiltCard className="h-full">
                  <div className="group relative h-full p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/40 cursor-default transition-all duration-200">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent-light)] mb-4 group-hover:bg-[var(--color-accent)] transition-colors duration-200">
                      <Icon
                        className="w-6 h-6 text-[var(--color-accent)] group-hover:text-black transition-colors duration-200"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
