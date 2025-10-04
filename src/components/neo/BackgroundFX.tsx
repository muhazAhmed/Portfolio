"use client";
import React from "react";

// A non-interactive background layer with animated gradients + grid + subtle noise.
// This preserves the idea of a gradient background while making it feel futuristic.
export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden grid-overlay noise">
      {/* Soft radial spotlights */}
      <div className="spotlight" />
      <div
        className="absolute -top-40 right-[-10%] h-[60vh] w-[60vh] blur-[80px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(79,209,255,0.25), transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] h-[70vh] w-[70vh] blur-[100px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,106,213,0.18), transparent 60%)",
        }}
      />
      {/* Subtle animated gradient band */}
      <div
        className="absolute inset-x-0 top-1/3 h-32 opacity-40"
        style={{
          background:
            "linear-gradient(90deg, rgba(79,209,255,0.15), rgba(122,95,255,0.15), rgba(255,106,213,0.15))",
          filter: "blur(30px)",
          maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />
    </div>
  );
}
