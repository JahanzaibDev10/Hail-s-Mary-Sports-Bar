import { motion } from "framer-motion";
import { useRef, useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "blitz" | "gold" | "ghost";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "ref"> {
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  asChild?: boolean;
}

export function CTAButton({
  children,
  variant = "blitz",
  size = "md",
  className,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const styles: Record<Variant, string> = {
    blitz:
      "bg-[var(--blitz)] text-white glow-pulse hover:brightness-110",
    gold:
      "bg-[var(--gold)] text-[var(--ink)] glow-gold hover:brightness-110",
    ghost:
      "bg-transparent text-bone border border-white/20 hover:border-[var(--gold)] hover:text-[var(--gold)]",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({
          x: (e.clientX - r.left - r.width / 2) * 0.25,
          y: (e.clientY - r.top - r.height / 2) * 0.25,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "relative inline-flex items-center justify-center font-display uppercase tracking-widest rounded-md transition-[filter,background]",
        size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm",
        styles[variant],
        className
      )}
      {...(rest as any)}
    >
      {children}
    </motion.button>
  );
}
