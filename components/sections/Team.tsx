"use client";

import { AnimatedTeam } from "@/components/ui/animated-team";
import type { TeamMember } from "@/components/ui/animated-team";
import AnimatedSection from "@/components/AnimatedSection";

// ── Team data ─────────────────────────────────────────────────────────────────
// TODO: replace placeholder Unsplash photos with real team photos once available
// TODO: replace placeholder names/bios/roles/links with real team data
const teamMembersData: TeamMember[] = [
  {
    name: "Priya Sharma", // TODO: real name
    role: "President",
    bio: "Leads the club's overall vision, strategy, and events calendar. Passionate about olympiad mathematics and number theory. She believes every great proof starts with a bold question.",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80", // TODO: replace with real team photo
    linkedin: undefined, // TODO: add real LinkedIn URL
    instagram: undefined,
  },
  {
    name: "Arjun Mehta", // TODO: real name
    role: "Vice President",
    bio: "Coordinates between sub-teams and oversees logistics for all club activities. Interested in combinatorics and graph theory. Arjun turns complex schedules into elegant solutions.",
    photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&q=80", // TODO: replace with real team photo
    linkedin: undefined, // TODO: add real LinkedIn URL
    instagram: undefined,
  },
  {
    name: "Dr. Sunita Rao", // TODO: real name
    role: "Faculty Coordinator",
    bio: "Faculty mentor guiding the club's academic direction. Specialises in abstract algebra and topology. Her office door is always open — especially if you bring an unsolved problem.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80", // TODO: replace with real team photo
    linkedin: undefined,
    instagram: undefined,
  },
  {
    name: "Sneha Iyer", // TODO: real name
    role: "Events Coordinator",
    bio: "Plans and executes club competitions, workshops, and guest sessions. Enthusiastic about applied mathematics and statistics. If there's an event happening, Sneha made it happen.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80", // TODO: replace with real team photo
    linkedin: undefined,
    instagram: undefined,
  },
  {
    name: "Rahul Gupta", // TODO: real name
    role: "Events Coordinator",
    bio: "Handles outreach, participant registrations, and on-ground logistics for events. Keen interest in probability theory. Rahul keeps the chaos beautifully under control.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", // TODO: replace with real team photo
    linkedin: undefined,
    instagram: undefined,
  },
  {
    name: "Kavya Nair", // TODO: real name
    role: "Core Team — Design & Media",
    bio: "Manages all club branding, social media content, and event graphics. Loves the intersection of mathematics and visual art. Kavya proves that beauty and logic are the same thing.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80", // TODO: replace with real team photo
    linkedin: undefined,
    instagram: undefined,
  },
];

// ── Team Section ──────────────────────────────────────────────────────────────

export default function Team() {
  return (
    <section
      id="team"
      className="min-h-[80vh] py-12 md:min-h-screen md:py-10 relative overflow-hidden bg-[#0a0604] flex items-center"
      aria-labelledby="team-heading"
    >
      {/* Background image with reduced opacity + less zoom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/teamback.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.45,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-8">
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]"
          >
            People Behind the Club
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp">
          <AnimatedTeam members={teamMembersData} autoplay={false} />
        </AnimatedSection>
      </div>
    </section>
  );
}
