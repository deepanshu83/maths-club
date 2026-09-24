"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET, { type VantaEffect } from "vanta/dist/vanta.net.min";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
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
          color: 0xf97316, // warm vibrant orange points & lines
          backgroundColor: 0x0a0604, // warm ember dark base
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
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 w-full h-full" />;
}
