"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET, { type VantaEffect } from "vanta/dist/vanta.net.min";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMobileState = () => setIsMobile(mediaQuery.matches);

    updateMobileState();
    mediaQuery.addEventListener("change", updateMobileState);

    return () => mediaQuery.removeEventListener("change", updateMobileState);
  }, []);

  useEffect(() => {
    if (isMobile) {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
      return;
    }

    if (!vantaRef.current) return;

    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xf97316,
          backgroundColor: 0x0a0604,
          points: 10.0,
          maxDistance: 22.0,
          spacing: 16.0,
          showDots: true,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isMobile, vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 w-full h-full" />;
}
