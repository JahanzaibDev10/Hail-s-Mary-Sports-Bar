import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/site/SectionReveal";
import { ReservationFlow } from "@/components/site/ReservationFlow";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/reserve")({
  head: () => createSeo({
    title: "Reserve a Booth | Hail Mary's Sports Bar Glendale",
    description: "Reserve a booth, RSVP for a watch party, or plan a private event at Hail Mary's Sports Bar in Glendale. Quick and free, with no payment needed.",
    path: "/reserve",
  }),
  component: Reserve,
});

export function Reserve() {
  const [tab, setTab] = useState<"book" | "private">("book");
  return (
    <>
      <header className="relative pt-40 pb-16 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,32,44,0.2),transparent_60%)]" />
        <div className="wrap relative text-center">
          <SectionReveal>
            <p className="font-script text-3xl text-[var(--gold)] mb-3">grab your spot</p>
            <h1 className="font-display text-6xl md:text-9xl leading-[0.85]">
              <span className="neon-red">RESERVE</span><br />
              <span className="neon-gold">YOUR SPOT</span>
            </h1>
            <p className="mt-6 text-bone/75 max-w-xl mx-auto">
              Sundays, fight nights, big shows — we fill up fast. Lock it in below in under a minute.
            </p>
          </SectionReveal>
        </div>
      </header>

      <section className="wrap py-16">
        {/* Tab toggle */}
        <div className="mb-10 mx-auto inline-flex w-full max-w-md p-1 rounded-full border border-white/10 bg-black/40">
          {(["book", "private"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative flex-1 py-3 rounded-full font-display tracking-widest text-sm transition ${
                tab === t ? "text-white" : "text-bone/60 hover:text-bone"
              }`}
            >
              {tab === t && (
                <motion.span
                  layoutId="resvtab"
                  className="absolute inset-0 rounded-full bg-[var(--blitz)] glow-red"
                  transition={{ type: "spring", stiffness: 280, damping: 24 }}
                />
              )}
              <span className="relative">{t === "book" ? "BOOK A SPOT" : "PRIVATE / BOOTH"}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-3xl"
        >
          {tab === "book" ? <ReservationFlow variant="full" /> : <ReservationFlow variant="private" />}
        </motion.div>
      </section>
    </>
  );
}
