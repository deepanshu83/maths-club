import type { TeamMember } from "@/types/team";

// TODO: replace every field with real team data
export const teamMembers: TeamMember[] = [
  {
    id: "president",
    name: "Priya Sharma",
    role: "President",
    photo: "", // TODO: "/team/priya.jpg"
    bio: "Leads the club's overall vision, strategy, and events calendar. Passionate about olympiad mathematics and number theory.", // TODO: real bio
    year: "3rd Year, B.Sc. Mathematics",
    linkedin: undefined, // TODO: "https://linkedin.com/in/..."
    email: "priya@college.edu", // TODO: real email
  },
  {
    id: "vice-president",
    name: "Arjun Mehta",
    role: "Vice President",
    photo: "", // TODO: "/team/arjun.jpg"
    bio: "Coordinates between sub-teams and oversees logistics for all club activities. Interested in combinatorics and graph theory.", // TODO: real bio
    year: "3rd Year, B.Tech CSE",
    linkedin: undefined,
    email: undefined,
  },
  {
    id: "faculty-coord",
    name: "Dr. Sunita Rao",
    role: "Faculty Coordinator",
    photo: "", // TODO: "/team/dr-sunita.jpg"
    bio: "Faculty mentor guiding the club's academic direction. Specialises in abstract algebra and topology.", // TODO: real bio
    year: "Department of Mathematics",
    email: "sunita.rao@college.edu", // TODO: real email
  },
  {
    id: "events-coord-1",
    name: "Sneha Iyer",
    role: "Events Coordinator",
    photo: "", // TODO: "/team/sneha.jpg"
    bio: "Plans and executes club competitions, workshops, and guest sessions. Enthusiastic about applied mathematics and statistics.", // TODO: real bio
    year: "2nd Year, B.Sc. Mathematics",
    instagram: undefined,
    email: undefined,
  },
  {
    id: "events-coord-2",
    name: "Rahul Gupta",
    role: "Events Coordinator",
    photo: "", // TODO: "/team/rahul.jpg"
    bio: "Handles outreach, participant registrations, and on-ground logistics for events. Keen interest in probability theory.", // TODO: real bio
    year: "2nd Year, B.Tech Mathematics",
    email: undefined,
  },
  {
    id: "core-design",
    name: "Kavya Nair",
    role: "Core Team — Design & Media",
    photo: "", // TODO: "/team/kavya.jpg"
    bio: "Manages all club branding, social media content, and event graphics. Loves the intersection of mathematics and visual art.", // TODO: real bio
    year: "2nd Year, B.Sc. Mathematics",
    instagram: undefined,
    linkedin: undefined,
  },
  {
    id: "core-tech",
    name: "Dev Patel",
    role: "Core Team — Technology",
    photo: "", // TODO: "/team/dev.jpg"
    bio: "Maintains the club website and technology infrastructure. Passionate about algorithms, data structures, and competitive programming.", // TODO: real bio
    year: "3rd Year, B.Tech CSE",
    linkedin: undefined,
    email: undefined,
  },
];
