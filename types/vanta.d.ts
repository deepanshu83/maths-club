declare module "vanta/dist/vanta.net.min" {
  export interface VantaNetOptions {
    el: HTMLElement;
    THREE: typeof import("three");
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
  }

  export interface VantaEffect {
    destroy(): void;
    resize(): void;
  }

  export default function NET(options: VantaNetOptions): VantaEffect;
}
