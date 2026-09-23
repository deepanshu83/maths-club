"use client";

/**
 * AnimatedSection — reusable framer-motion wrapper for section reveals.
 *
 * Usage:
 *   <AnimatedSection variant="fadeUp" className="...">
 *     ...content...
 *   </AnimatedSection>
 *
 * Respects prefers-reduced-motion automatically via useReducedMotion().
 */

import { motion, useReducedMotion } from "framer-motion";
import type { Variants, HTMLMotionProps } from "framer-motion";
import { fadeUp, fadeIn, slideLeft, slideRight, viewport } from "@/lib/animations";

type VariantName = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";

const variantMap: Record<VariantName, Variants> = {
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
};

interface AnimatedSectionProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  variant?: VariantName;
  /** Custom delay added on top of the variant's transition */
  delay?: number;
  /** Render as a different element, e.g. "section", "article", "li" */
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedSection({
  variant = "fadeUp",
  delay = 0,
  children,
  className,
  ...rest
}: AnimatedSectionProps) {
  const shouldReduce = useReducedMotion();

  const variants: Variants = shouldReduce
    ? {
        hidden: {},
        visible: {},
      }
    : {
        ...variantMap[variant],
        visible: {
          ...(variantMap[variant].visible as object),
          transition: {
            ...((variantMap[variant].visible as { transition?: object })
              ?.transition ?? {}),
            delay,
          },
        },
      };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
