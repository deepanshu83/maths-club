"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Link2, AtSign } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  /** URL to portrait photo */
  photo: string;
  photoClassName?: string;
  linkedin?: string;
  instagram?: string;
}

// ── AnimatedTeam ──────────────────────────────────────────────────────────────

export function AnimatedTeam({
  members,
  autoplay = false,
}: {
  members: TeamMember[];
  autoplay?: boolean;
}) {
  const [active, setActive] = useState(0);
  // Use a ref-based cooldown instead of animation state to avoid hang
  const cooldownRef = useRef(false);

  const navigate = useCallback(
    (direction: "next" | "prev") => {
      if (cooldownRef.current) return;
      cooldownRef.current = true;
      // 450ms matches the transition duration — releases the lock reliably
      setTimeout(() => { cooldownRef.current = false; }, 450);

      setActive((prev) =>
        direction === "next"
          ? (prev + 1) % members.length
          : (prev - 1 + members.length) % members.length
      );
    },
    [members.length]
  );

  const handleNext = useCallback(() => navigate("next"), [navigate]);
  const handlePrev = useCallback(() => navigate("prev"), [navigate]);

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const getStackRotation = (index: number) => {
    const rotations = [-9, 8, 5, -7, 10, -4, 3, -6];
    return rotations[index % rotations.length];
  };

  return (
    <div className="w-full mx-auto px-2 py-4 font-[var(--font-body)] antialiased">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">

        {/* ── Left: stacked rotating photo stack ── */}
        <div className="order-1 md:order-1">
          <div className="relative h-[32vh] sm:h-[38vh] md:h-[44vh] w-full max-w-[260px] sm:max-w-[300px] mx-auto">
            <AnimatePresence>
              {members.map((member, index) => {
                const stackRotation = getStackRotation(index);
                const active = isActive(index);

                return (
                  <motion.div
                    key={member.photo}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: stackRotation,
                    }}
                    animate={{
                      opacity: active ? 1 : 0.7,
                      scale: active ? 1 : 0.95,
                      z: active ? 0 : -100,
                      rotate: active ? 0 : stackRotation,
                      zIndex: active ? 999 : members.length + 2 - index,
                      y: active ? [0, -20, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: stackRotation,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 origin-bottom border-4 border-[#1A1040] bg-[#F0EDE0] shadow-[8px_8px_0px_#1A1040] overflow-hidden"
                  >
                    {/* Ambient backdrop to seamlessly fill edges for scaled/zoomed-out portraits */}
                    <div
                      className="absolute inset-0 scale-125 blur-md opacity-35 bg-cover bg-center pointer-events-none"
                      style={{ backgroundImage: `url(${member.photo})` }}
                      aria-hidden="true"
                    />

                    <div className="absolute top-2 left-2 z-20 bg-[#C41E5A] text-white px-2 py-0.5 font-stamp text-[9px] font-bold uppercase tracking-widest border border-[#1A1040] shadow-[2px_2px_0px_#1A1040]">
                      CARD 0{index + 1}
                    </div>

                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={500}
                      height={700}
                      draggable={false}
                      className={cn(
                        "relative z-10 h-full w-full object-cover object-top transition-transform duration-300",
                        member.photoClassName
                      )}
                    />

                    <div className="absolute bottom-0 inset-x-0 z-20 bg-[#1A1040]/90 px-3 py-1.5 flex justify-between items-center text-white font-stamp text-[10px] tracking-wider uppercase">
                      <span>STATUS: ACTIVE</span>
                      <span className="text-[#C41E5A] font-bold">BKBIET</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Right: member info + bio + nav ── */}
        <div className="order-2 flex flex-col justify-between p-6 sm:p-7 bg-[#F0EDE0] border-3 border-[#1A1040] shadow-[7px_7px_0px_#1A1040] rotate-0.5 md:order-2">
          <motion.div
            key={active}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {/* Stamp label */}
            <div className="inline-block bg-[#1A1040] text-[#F0EDE0] font-stamp text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-widest border border-[#1A1040] -rotate-1 mb-2">
              AGENT PROFILE &bull; FILE #{active + 1}
            </div>

            {/* Name & role */}
            <h3 className="font-poster text-3xl sm:text-4xl text-[#1A1040] tracking-wide uppercase">
              {members[active].name}
            </h3>
            <p className="inline-block mt-1 px-2.5 py-0.5 bg-[#C41E5A] text-white font-stamp text-xs font-bold tracking-wider uppercase border border-[#1A1040] shadow-[2px_2px_0px_#1A1040]">
              {members[active].role}
            </p>

            {/* Word-by-word blur-fade bio */}
            <motion.p className="mt-5 text-sm sm:text-base leading-relaxed text-[#2A2346] font-medium">
              {members[active].bio.split(" ").map((word, index) => (
                <motion.span
                  key={`${members[active].name}-${active}-${index}`}
                  initial={{ filter: "blur(6px)", opacity: 0, y: 4 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.15,
                    ease: "easeInOut",
                    delay: 0.015 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            {/* Social links */}
            <div className="mt-5 flex gap-3">
              {members[active].linkedin && (
                <a
                  href={members[active].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 border-2 border-[#1A1040] bg-[#D0CFC8] text-[#1A1040] hover:bg-[#C41E5A] hover:text-white transition-colors shadow-[2px_2px_0px_#1A1040]"
                  aria-label={`${members[active].name} on LinkedIn`}
                >
                  <Link2 className="w-4 h-4" />
                </a>
              )}
              {members[active].instagram && (
                <a
                  href={members[active].instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 border-2 border-[#1A1040] bg-[#D0CFC8] text-[#1A1040] hover:bg-[#C41E5A] hover:text-white transition-colors shadow-[2px_2px_0px_#1A1040]"
                  aria-label={`${members[active].name} on Instagram`}
                >
                  <AtSign className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Navigation arrows + dot indicators */}
          <div className="mt-7 pt-4 border-t-2 border-dashed border-[#1A1040]/30 flex items-center justify-between gap-4">
            {/* Dot indicators */}
            <div className="flex gap-1.5 items-center">
              {members.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (cooldownRef.current) return;
                    cooldownRef.current = true;
                    setTimeout(() => { cooldownRef.current = false; }, 450);
                    setActive(index);
                  }}
                  aria-label={`Go to member ${index + 1}`}
                  className="h-2 border border-[#1A1040] transition-all duration-300"
                  style={
                    isActive(index)
                      ? { backgroundColor: "#C41E5A", width: "1.75rem" }
                      : { backgroundColor: "#D0CFC8", width: "0.75rem" }
                  }
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="flex h-9 w-9 items-center justify-center border-2 border-[#1A1040] bg-[#F0EDE0] shadow-[2px_2px_0px_#1A1040] hover:bg-[#C41E5A] hover:text-white transition-colors active:scale-95"
                aria-label="Previous member"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="flex h-9 w-9 items-center justify-center border-2 border-[#1A1040] bg-[#C41E5A] text-white shadow-[2px_2px_0px_#1A1040] hover:bg-[#1A1040] transition-colors active:scale-95"
                aria-label="Next member"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

