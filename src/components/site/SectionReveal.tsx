import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: any;
}) {
  const MotionTag = motion(Tag);
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 32 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({
  children,
  className,
  gap = 0.08,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: 0.05 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const StaggerItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div variants={variants} className={className}>
    {children}
  </motion.div>
);
