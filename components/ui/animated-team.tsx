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
  /** URL to portrait photo — TODO: replace placeholder Unsplash URLs with real team photos */
  photo: string;
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

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="w-full mx-auto px-2 py-4 font-[var(--font-body)] antialiased">
      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">

        {/* ── Left: stacked rotating photo stack ── */}
        <div>
          {/* h-[42vh] scales with viewport so it always fits on screen */}
          <div className="relative h-[42vh] w-full max-w-[280px] mx-auto">
            <AnimatePresence>
              {members.map((member, index) => (
                <motion.div
                  key={member.photo}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : members.length + 2 - index,
                    y: isActive(index) ? [0, -30, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom rounded-3xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={500}
                    height={700}
                    draggable={false}
                    className="h-full w-full object-cover object-top"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Right: member info + bio + nav ── */}
        <div className="flex flex-col justify-between py-2">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {/* Name & role */}
            <h3 className="text-2xl font-bold text-[var(--color-foreground)]">
              {members[active].name}
            </h3>
            <p className="text-sm font-semibold mt-1" style={{ color: "var(--color-accent)" }}>
              {members[active].role}
            </p>

            {/* Word-by-word blur-fade bio */}
            <motion.p className="mt-6 text-sm leading-relaxed text-[var(--color-muted)]">
              {members[active].bio.split(" ").map((word, index) => (
                <motion.span
                  key={`${members[active].name}-${active}-${index}`}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            {/* Social links */}
            <div className="mt-5 flex gap-4">
              {members[active].linkedin && (
                <a
                  href={members[active].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                  aria-label={`${members[active].name} on LinkedIn`}
                >
                  <Link2 className="w-5 h-5" />
                </a>
              )}
              {members[active].instagram && (
                <a
                  href={members[active].instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                  aria-label={`${members[active].name} on Instagram`}
                >
                  <AtSign className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Navigation arrows + dot indicators */}
          <div className="mt-8 flex flex-col gap-4">
            {/* Dot indicators */}
            <div className="flex gap-2 items-center">
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
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={
                    isActive(index)
                      ? { backgroundColor: "var(--color-accent)", width: "2rem" }
                      : { backgroundColor: "rgba(234,88,12,0.25)", width: "1rem" }
                  }
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className={cn(
                  "group flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-200",
                  "border-[var(--color-accent)]/30 bg-white/80",
                  "hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] active:scale-95"
                )}
                aria-label="Previous member"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-[var(--color-accent)] group-hover:text-white transition-colors"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className={cn(
                  "group flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-200",
                  "border-[var(--color-accent)]/30 bg-white/80",
                  "hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] active:scale-95"
                )}
                aria-label="Next member"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-[var(--color-accent)] group-hover:text-white transition-colors"
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
