"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let raf: number;
    const rafFn = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(rafFn);
    };
    raf = requestAnimationFrame(rafFn);

    return () => {
      cancelAnimationFrame(raf);
      if (lenis && (lenis as any).destroy) (lenis as any).destroy();
    };
  }, []);

  return null;
}
