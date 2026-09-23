"use client";

// Gallery section — uses gray placeholder boxes instead of real images
// TODO: replace placeholder boxes with actual <Image> components

import { motion } from "framer-motion";
import { staggerFast, cardReveal, viewport } from "@/lib/animations";
import AnimatedSection from "@/components/AnimatedSection";

const galleryItems = [
  { id: 1, aspectClass: "aspect-square",  label: "Event photo placeholder" },
  { id: 2, aspectClass: "aspect-[4/3]",   label: "Workshop photo placeholder" },
  { id: 3, aspectClass: "aspect-[3/4]",   label: "Team photo placeholder" },
  { id: 4, aspectClass: "aspect-square",  label: "Competition photo placeholder" },
  { id: 5, aspectClass: "aspect-[4/3]",   label: "Award ceremony placeholder" },
  { id: 6, aspectClass: "aspect-square",  label: "Club activity placeholder" },
  { id: 7, aspectClass: "aspect-[3/4]",   label: "Lecture photo placeholder" },
  { id: 8, aspectClass: "aspect-square",  label: "Gallery photo placeholder" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16 lg:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <AnimatedSection variant="fadeUp" className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Gallery
          </p>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]"
          >
            Moments From the Club
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto">
            Snapshots from our events, workshops, and get-togethers.
          </p>
        </AnimatedSection>

        {/* Masonry-style grid — staggered */}
        <motion.div
          className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={cardReveal}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 28px -8px rgb(79 70 229 / 0.15)",
                transition: { duration: 0.22, ease: "easeOut" },
              }}
              className={`break-inside-avoid w-full ${item.aspectClass} rounded-xl bg-[var(--color-accent-light)] border border-[var(--color-border)] flex items-center justify-center cursor-pointer overflow-hidden`}
              role="img"
              aria-label={item.label}
            >
              {/* TODO: replace with actual <Image src="..." alt="..." fill /> */}
              <span className="text-xs text-[var(--color-muted)] font-mono text-center px-3">
                photo #{item.id}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
