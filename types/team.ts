/**
 * TeamMember — data shape for every member card.
 * Keep all TODO comments until replaced with real data.
 */
export interface TeamMember {
  /** Unique slug used as React key and framer-motion layoutId. */
  id: string;
  name: string;
  /** Displayed in accent colour below the name. e.g. "President". */
  role: string;
  /**
   * Relative path to the member's photo, e.g. "/team/priya.jpg".
   * Empty string → render an initials avatar instead.
   * TODO: add real photos to /public/team/
   */
  photo: string;
  /** 1–2 sentence bio shown in the expanded modal. TODO: replace with real bios. */
  bio: string;
  /** e.g. "3rd Year, B.Sc. Mathematics". Optional. */
  year?: string;
  /** Full LinkedIn profile URL. */
  linkedin?: string;
  /** Full Instagram profile URL. */
  instagram?: string;
  /** mailto: email address. */
  email?: string;
}
