"use client";

import { useEffect, useRef } from "react";

/**
 * Calm, GPU-accelerated aurora field.
 *
 * Three large, softly blurred gradient blobs drift on independent
 * CSS keyframe loops (transform/opacity only — no layout thrashing).
 * A radial "spotlight" mask lerps toward the pointer so the field feels
 * quietly alive without ever becoming the focal point.
 */
export default function AuroraBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0.5, y: 0.35 });
  const current = useRef({ x: 0.5, y: 0.35 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const handlePointerMove = (e: PointerEvent) => {
      target.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    if (!prefersReducedMotion) {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
    }

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.04;
      current.current.y += (target.current.y - current.current.y) * 0.04;

      const el = spotlightRef.current;
      if (el) {
        el.style.setProperty("--mx", `${current.current.x * 100}%`);
        el.style.setProperty("--my", `${current.current.y * 100}%`);
      }
      frame.current = requestAnimationFrame(tick);
    };

    if (!prefersReducedMotion) {
      frame.current = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background"
    >
      {/* Base vignette so edges stay near-black */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]" />

      <div className="absolute inset-0 [filter:blur(90px)] will-change-transform opacity-70">
        <div
          className="animate-aurora-drift-1 absolute left-[8%] top-[-10%] h-[55vh] w-[55vw] rounded-full will-change-transform"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--aurora-cyan) 55%, transparent), transparent 70%)",
          }}
        />
        <div
          className="animate-aurora-drift-2 absolute right-[5%] top-[5%] h-[60vh] w-[50vw] rounded-full will-change-transform"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--aurora-purple) 55%, transparent), transparent 70%)",
          }}
        />
        <div
          className="animate-aurora-drift-3 absolute left-[20%] bottom-[-15%] h-[50vh] w-[60vw] rounded-full will-change-transform"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--aurora-green) 45%, transparent), transparent 70%)",
          }}
        />
      </div>

      {/* Pointer-reactive spotlight — subtle lift, never a hotspot */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 35%), color-mix(in oklab, var(--foreground) 6%, transparent), transparent 60%)",
        }}
      />

      {/* Grain for a premium, non-flat texture */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Depth fade toward the bottom so long pages don't feel flat */}
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
