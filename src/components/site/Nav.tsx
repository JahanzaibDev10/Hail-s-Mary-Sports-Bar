import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquare } from "lucide-react";
import { CTAButton } from "./CTAButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/game-day", label: "Game Day" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/75 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="wrap grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="font-display text-2xl md:text-3xl neon-red tracking-wider">
              HAIL MARY'S
            </span>
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-8">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative font-display tracking-widest text-sm transition ${
                    active ? "text-[var(--gold)]" : "text-bone/80 hover:text-bone"
                  }`}
                >
                  {l.label.toUpperCase()}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[var(--gold)] glow-gold"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="sms:8333668785?body=JOIN"
              className="inline-flex items-center gap-2 text-xs font-display tracking-widest text-bone/80 hover:text-[var(--gold)] transition"
            >
              <MessageSquare className="h-4 w-4" />
              TEXT "JOIN" 833-366-8785
            </a>
            <Link to="/reserve">
              <CTAButton variant="blitz">Reserve</CTAButton>
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-white/15 text-bone"
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden pt-24"
          >
            <nav className="wrap flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={l.to}
                    className="block py-4 font-display text-4xl tracking-wider text-bone hover:text-[var(--blitz)] border-b border-white/5"
                  >
                    {l.label.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
              <Link to="/reserve" className="mt-6">
                <CTAButton variant="blitz" size="lg" className="w-full">
                  Reserve Your Spot
                </CTAButton>
              </Link>
              <a
                href="sms:8333668785?body=JOIN"
                className="mt-4 text-center font-display text-sm tracking-widest text-[var(--gold)]"
              >
                TEXT "JOIN" TO 833-366-8785
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
