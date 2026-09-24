"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { TeamMember } from "@/types/team";
import { cardReveal } from "@/lib/animations";
import TiltCard from "@/components/TiltCard";

// ── Initials avatar (shown when member.photo is empty) ────────────────────────
function InitialsAvatar({ name, layoutId }: { name: string; layoutId?: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      layoutId={layoutId}
      className="w-20 h-20 rounded-full bg-[var(--color-accent-light)] border-2 border-[var(--color-border)] flex items-center justify-center shrink-0"
      // Ensure the layout animation clips cleanly
      style={{ borderRadius: "9999px" }}
    >
      <span
        className="text-xl font-bold text-[var(--color-accent)] select-none"
        aria-hidden="true"
      >
        {initials}
      </span>
    </motion.div>
  );
}

// ── Photo avatar (shown when member.photo is provided) ────────────────────────
function PhotoAvatar({
  src,
  name,
  layoutId,
}: {
  src: string;
  name: string;
  layoutId?: string;
}) {
  return (
    <motion.div
      layoutId={layoutId}
      className="w-20 h-20 rounded-full border-2 border-[var(--color-border)] overflow-hidden shrink-0"
      style={{ borderRadius: "9999px" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={`${name} photo`} className="w-full h-full object-cover" />
    </motion.div>
  );
}

// ── TeamCard ──────────────────────────────────────────────────────────────────

interface TeamCardProps {
  member: TeamMember;
  onSelect: (member: TeamMember, triggerEl: HTMLElement) => void;
}

export default function TeamCard({ member, onSelect }: TeamCardProps) {
  const shouldReduce = useReducedMotion();

  // Shared layoutId for the avatar element — used by TeamModal to animate from.
  const avatarLayoutId = shouldReduce ? undefined : `avatar-${member.id}`;

  function handleActivate(e: React.MouseEvent | React.KeyboardEvent) {
    onSelect(member, e.currentTarget as HTMLElement);
  }

  return (
    <motion.div variants={cardReveal} className="h-full">
      <TiltCard className="h-full" disabled={!!shouldReduce}>
        {/*
         * Using a <button> gives us keyboard focus, Enter/Space activation,
         * and correct ARIA semantics for free.
         */}
        <button
          type="button"
          className="w-full h-full text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
          aria-label={`View profile of ${member.name}, ${member.role}`}
          onClick={handleActivate}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleActivate(e);
            }
          }}
        >
          <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] h-full transition-colors duration-200 hover:border-[var(--color-accent)]/40">
            {/* Avatar — carries the layoutId that will be matched in the modal */}
            <div className="mb-4">
              {member.photo ? (
                <PhotoAvatar src={member.photo} name={member.name} layoutId={avatarLayoutId} />
              ) : (
                <InitialsAvatar name={member.name} layoutId={avatarLayoutId} />
              )}
            </div>

            <h3 className="font-semibold text-[var(--color-foreground)] text-base leading-snug">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-[var(--color-accent)] mt-1">
              {member.role}
            </p>
            {member.year && (
              <p className="text-xs text-[var(--color-muted)] mt-0.5">{member.year}</p>
            )}
          </div>
        </button>
      </TiltCard>
    </motion.div>
  );
}

// Re-export avatar helpers so TeamModal can use matching layoutIds
export { InitialsAvatar, PhotoAvatar };
