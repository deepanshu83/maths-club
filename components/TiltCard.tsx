"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  disabled = false,
}: TiltCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);

  const springX = useSpring(rotateX, { stiffness: 150, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 15 });

  const glareBackground = useTransform(
    [pointerX, pointerY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.22) 18%, rgba(255,255,255,0) 42%)`,
  );

  const glareOpacity = useTransform(springX, [-12, 0, 12], [0.08, 0.12, 0.08]);

  const isTiltDisabled = shouldReduceMotion || disabled || isTouchDevice;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(pointer: coarse), (hover: none)");

    const updateTouchState = () => setIsTouchDevice(media.matches);
    updateTouchState();

    media.addEventListener("change", updateTouchState);
    return () => media.removeEventListener("change", updateTouchState);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isTiltDisabled) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const nextRotateY = (px - 0.5) * 24;
    const nextRotateX = (0.5 - py) * 24;

    rotateY.set(nextRotateY);
    rotateX.set(nextRotateX);
    pointerX.set(px * 100);
    pointerY.set(py * 100);
  };

  const handleMouseLeave = () => {
    if (isTiltDisabled) return;

    rotateX.set(0);
    rotateY.set(0);
    pointerX.set(50);
    pointerY.set(50);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      whileHover={isTiltDisabled ? undefined : { scale: 1.03 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
    >
      <motion.div
        className="relative h-full rounded-[inherit]"
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {children}

        {!isTiltDisabled && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              background: glareBackground,
              opacity: glareOpacity,
              mixBlendMode: "screen",
              transform: "translateZ(28px)",
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
