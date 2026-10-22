"use client";

import { AnimatedTeam } from "@/components/ui/animated-team";
import type { TeamMember } from "@/components/ui/animated-team";
import AnimatedSection from "@/components/AnimatedSection";

// ── Team data ─────────────────────────────────────────────────────────────────
// TODO: replace placeholder Unsplash photos with real team photos once available
// TODO: replace placeholder names/bios/roles/links with real team data
const teamMembersData: TeamMember[] = [
  {
    name: "Priya Sharma",
    role: "President",
    bio: "Leads the club's overall vision, strategy, and events calendar. Passionate about olympiad mathematics and number theory. She believes every great proof starts with a bold question.",
    photo: "/team/member1.jpeg",
    linkedin: undefined,
    instagram: undefined,
  },
  {
    name: "Arjun Mehta",
    role: "Vice President",
    bio: "Coordinates between sub-teams and oversees logistics for all club activities. Interested in combinatorics and graph theory. Arjun turns complex schedules into elegant solutions.",
    photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&q=80",
    linkedin: undefined,
    instagram: undefined,
  },
  {
    name: "Dr. Sunita Rao",
    role: "Faculty Coordinator",
    bio: "Faculty mentor guiding the club's academic direction. Specialises in abstract algebra and topology. Her office door is always open — especially if you bring an unsolved problem.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80",
    linkedin: undefined,
    instagram: undefined,
  },
  {
    name: "Sneha Iyer",
    role: "Events Coordinator",
    bio: "Plans and executes club competitions, workshops, and guest sessions. Enthusiastic about applied mathematics and statistics. If there's an event happening, Sneha made it happen.",
    photo: "/team/member2.jpeg",
    linkedin: undefined,
    instagram: undefined,
  },
  {
    name: "Rahul Gupta",
    role: "Events Coordinator",
    bio: "Handles outreach, participant registrations, and on-ground logistics for events. Keen interest in probability theory. Rahul keeps the chaos beautifully under control.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
    linkedin: undefined,
    instagram: undefined,
  },
  {
    name: "Kavya Nair",
    role: "Core Team — Design & Media",
    bio: "Manages all club branding, social media content, and event graphics. Loves the intersection of mathematics and visual art. Kavya proves that beauty and logic are the same thing.",
    photo: "/team/member3.jpeg",
    linkedin: undefined,
    instagram: undefined,
  },
];

// ── Team Section ──────────────────────────────────────────────────────────────

export default function Team() {
  return (
    <section
      id="team"
      className="min-h-[80vh] py-16 md:min-h-screen md:py-20 relative overflow-hidden bg-[#D0CFC8] border-b-4 border-[#1A1040] flex items-center"
      aria-labelledby="team-heading"
    >
      {/* Background image with vintage poster treatment */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply"
        style={{
          backgroundImage: "url('/teamback.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Comic halftone overlay */}
      <div className="absolute inset-0 comic-halftone pointer-events-none opacity-25" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-10">
          <div className="inline-block bg-[#1A1040] text-[#F0EDE0] px-3.5 py-1 text-xs font-stamp font-bold tracking-widest uppercase border border-[#1A1040] shadow-[3px_3px_0px_#C41E5A] -rotate-1 mb-3">
            PERSONNEL ROSTER // CORE AGENTS
          </div>
          <h2
            id="team-heading"
            className="text-4xl sm:text-5xl font-poster text-[#1A1040] tracking-tight uppercase"
          >
            PEOPLE BEHIND <span className="bg-[#C41E5A] text-white px-3 py-0.5 inline-block rotate-1 shadow-[4px_4px_0px_#1A1040]">THE CLUB</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp">
          <AnimatedTeam members={teamMembersData} autoplay={false} />
        </AnimatedSection>
      </div>
    </section>
  );
}

