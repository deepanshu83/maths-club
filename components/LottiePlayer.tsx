"use client";

/**
 * LottiePlayer — thin client-only wrapper around lottie-react v3.
 *
 * Always loaded via next/dynamic({ ssr: false }) so that:
 *   1. lottie-react is never executed on the server.
 *   2. The lottie-react JS bundle is code-split from the main chunk.
 *   3. The 31 MB animation JSON is fetched at runtime, never bundled.
 *
 * lottie-react v3 API differences from v2:
 *   - Named export: { Lottie } not default
 *   - Prop is `src` (string URL or parsed object), not `animationData`
 *   - `onComplete` is via subscriptions={{ complete: fn }}
 */
import { Lottie } from "lottie-react";

interface LottiePlayerProps {
  /**
   * Raw parsed Lottie JSON object (fetched lazily, never a static import).
   * lottie-react v3 accepts a parsed object directly via the `src` prop.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: Record<string, any>;
  loop?: boolean;
  autoplay?: boolean;
  onComplete?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function LottiePlayer({
  src,
  loop = true,
  autoplay = true,
  onComplete,
  className,
  style,
}: LottiePlayerProps) {
  return (
    <Lottie
      src={src}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={style}
      subscriptions={onComplete ? { complete: onComplete } : undefined}
    />
  );
}
