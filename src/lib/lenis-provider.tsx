import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      lerp: 0.1,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    // Sync with framer-motion's useScroll
    lenis.on("scroll", () => {
      window.dispatchEvent(new Event("scroll"));
    });

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
  return null;
}
