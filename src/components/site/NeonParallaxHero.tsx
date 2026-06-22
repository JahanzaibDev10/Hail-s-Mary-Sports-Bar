import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import bg from "@/assets/hero-bg.jpg";
import sign from "@/assets/neon-sign.png";
import fg from "@/assets/hero-foreground.png";
import mobile from "@/assets/mobile-hero.jpg";
import { CTAButton } from "./CTAButton";
import { Link } from "@tanstack/react-router";

export function NeonParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 180]);
  const ySign = useTransform(scrollY, [0, 800], [0, 80]);
  const yFg = useTransform(scrollY, [0, 800], [0, -120]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const embers = Array.from({ length: 22 });

  if (isMobile) {
    return (
      <section className="relative h-[100svh] w-full overflow-hidden bg-black">
        <img
          src={mobile}
          alt="Hail Mary's Sports Bar"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 scrim-dark" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-center px-6">
          <p className="font-script text-2xl text-[var(--gold)] mb-3">welcome to</p>
          <h1 className="font-display text-6xl leading-[0.9] neon-red mb-2">
            HAIL MARY'S
          </h1>
          <p className="font-display text-xl text-bone/80 mb-8">
            The Best Damn Dive Bar in Glendale
          </p>
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <Link to="/reserve">
              <CTAButton variant="blitz" size="lg" className="w-full">Reserve Your Spot</CTAButton>
            </Link>
            <Link to="/events">
              <CTAButton variant="ghost" className="w-full">Tonight's Lineup</CTAButton>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setMouse({
          x: (e.clientX - r.width / 2) / r.width,
          y: (e.clientY - r.height / 2) / r.height,
        });
      }}
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-black"
    >
      {/* Layer 1: bar atmosphere bg */}
      <motion.div
        style={{
          y: yBg,
          x: mouse.x * -25,
          backgroundImage: `url(${bg})`,
          opacity,
        }}
        className="absolute -inset-20 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

      {/* Spotlights */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-60">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,32,44,0.35),transparent_60%)]" />
        <div className="absolute -bottom-40 right-1/4 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(244,169,31,0.25),transparent_60%)]" />
      </div>

      {/* Embers */}
      {embers.map((_, i) => {
        const left = (i * 53) % 100;
        const dur = 8 + (i % 7) * 1.5;
        const delay = (i * 0.6) % 12;
        return (
          <span
            key={i}
            className="ember"
            style={{
              left: `${left}%`,
              bottom: `-20px`,
              animationDuration: `${dur}s`,
              animationDelay: `-${delay}s`,
            }}
          />
        );
      })}

      {/* Layer 2: neon sign */}
      <motion.img
        src={sign}
        alt=""
        style={{ y: ySign, x: mouse.x * 18, opacity }}
        className="absolute left-1/2 top-[18%] w-[78vw] max-w-[1100px] -translate-x-1/2 select-none flicker"
        draggable={false}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-x-0 top-[52%] -translate-y-1/2 wrap text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-script text-3xl md:text-4xl text-[var(--gold)] mb-2"
        >
          Glendale, Arizona — open 11AM to 2AM
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, staggerChildren: 0.05 }}
          className="font-display text-[12vw] md:text-[9vw] leading-[0.85] neon-red"
        >
          {"THE BEST DAMN".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.03, duration: 0.5 }}
              className="inline-block"
            >
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ))}
          <br />
          <span className="neon-gold">DIVE BAR IN TOWN</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link to="/reserve">
            <CTAButton variant="blitz" size="lg">Reserve Your Spot</CTAButton>
          </Link>
          <Link to="/events">
            <CTAButton variant="ghost" size="lg">See Tonight's Lineup</CTAButton>
          </Link>
        </motion.div>
      </motion.div>

      {/* Layer 3: foreground beer + football */}
      <motion.img
        src={fg}
        alt=""
        style={{ y: yFg, x: mouse.x * 40, opacity }}
        className="absolute -bottom-12 right-[5%] w-[44vw] max-w-[640px] select-none pointer-events-none drop-shadow-[0_30px_60px_rgba(212,32,44,0.4)]"
        draggable={false}
      />

      {/* scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-bone/60"
      >
        scroll ▾
      </motion.div>
    </section>
  );
}
