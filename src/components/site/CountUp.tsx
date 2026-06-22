import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export function CountUp({
  to,
  suffix = "",
  decimals = 0,
  duration = 1.8,
}: { to: number; suffix?: string; decimals?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) =>
    decimals ? v.toFixed(decimals) : Math.floor(v).toLocaleString()
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, mv, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
