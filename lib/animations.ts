/**
 * Shared Framer Motion animation variants.
 * All durations 0.5–0.8s, easeOut — premium academic feel, no bouncing.
 */
import type { Variants } from "framer-motion";

// ─── Base timing ────────────────────────────────────────────────────────────

const ease = "easeOut" as const;

// ─── Fade up — primary reveal for most sections ─────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

// ─── Fade in — no movement, for eyebrow labels / decorative elements ─────────

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease },
  },
};

// ─── Scale + fade — for cards ────────────────────────────────────────────────

export const cardReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

// ─── Slide in from left ───────────────────────────────────────────────────────

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease },
  },
};

// ─── Slide in from right ──────────────────────────────────────────────────────

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease },
  },
};

// ─── Stagger container — wraps staggered children ────────────────────────────

/** Fast stagger: cards, grid items */
export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/** Slow stagger: hero words */
export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

// ─── Hero word reveal ─────────────────────────────────────────────────────────

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease },
  },
};

// ─── Hero subheading / button reveal ──────────────────────────────────────────

export const heroSub: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: 0.15 },
  },
};

export const heroButton: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay: 0.3 },
  },
};

// ─── Hover variants for cards ─────────────────────────────────────────────────

export const cardHover = {
  rest: { y: 0, boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)" },
  hover: {
    y: -6,
    boxShadow: "0 12px 32px -8px rgb(79 70 229 / 0.18)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

// ─── Viewport config — used with whileInView ─────────────────────────────────

/** Trigger when 15% of element is visible; animate once */
export const viewport = { once: true, margin: "0px 0px -80px 0px" };
