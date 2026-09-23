"use client";

import type { HTMLAttributes, ReactNode } from "react";

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";
  delay?: number;
  as?: React.ElementType;
}

export default function AnimatedSection({
  children,
  className,
  ...rest
}: AnimatedSectionProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
