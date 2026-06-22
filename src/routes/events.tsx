import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SectionReveal, Stagger, StaggerItem } from "@/components/site/SectionReveal";
import { MarqueeTicker } from "@/components/site/MarqueeTicker";
import { Carousel } from "@/components/site/Carousel";
import { EventCard } from "@/components/site/EventCard";
import { WEEKLY_EVENTS, SPECIAL_PARTIES } from "@/components/site/data";
import { ReservationFlow } from "@/components/site/ReservationFlow";
import { CTAButton } from "@/components/site/CTAButton";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Hail Mary's Sports Bar Glendale" },
      { name: "description", content: "Bingo Mondays, karaoke Thursdays, poker Fridays, Latin Saturdays, NFL Sundays. Every night has a reason at Hail Mary's." },
    ],
  }),
  component: Events,
});

export function Events() {
  const [rsvp, setRsvp] = useState<string | null>(null);
  return (
    <>
      <header className="relative overflow-hidden pt-40 pb-24 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,169,31,0.18),transparent_60%)]" />
        <div className="wrap relative text-center">
          <SectionReveal>
            <p className="font-script text-3xl text-[var(--gold)] mb-3">what's on</p>
            <h1 className="font-display text-6xl md:text-9xl leading-[0.85]">
              SEVEN<br /><span className="neon-red">NIGHTS</span><br /><span className="neon-gold">A WEEK</span>
            </h1>
            <p className="mt-6 text-bone/75 max-w-2xl mx-auto">
              Bingo, karaoke, live bands, DJ takeovers, poker, billiards, watch parties. There's never nothing happening.
              Pick a night. RSVP. We'll have the booth ready.
            </p>
          </SectionReveal>
        </div>
      </header>

      <MarqueeTicker accent="gold" items={["DAMMIT BINGO MON", "ROCKIN' WED", "KARAOKE THU", "$5 FRIDAYS", "LATIN SATURDAYS", "NFL SUNDAYS", "POKER NIGHTS"]} />

      {/* FEATURED CAROUSEL */}
      <section className="wrap py-24">
        <SectionReveal className="mb-10">
          <p className="font-script text-3xl text-[var(--gold)] mb-2">this week's highlights</p>
          <h2 className="font-display text-5xl md:text-7xl">Big <span className="neon-red">parties</span> coming up</h2>
        </SectionReveal>
        <Carousel slideClassName="min-w-0 flex-[0_0_88%] md:flex-[0_0_55%] lg:flex-[0_0_45%]">
          {SPECIAL_PARTIES.map((e, i) => <EventCard key={i} event={e} onRsvp={() => setRsvp(e.title)} />)}
        </Carousel>
      </section>

      {/* WEEKLY GRID */}
      <section className="wrap pb-24">
        <SectionReveal className="mb-10">
          <h2 className="font-display text-5xl md:text-7xl">Weekly <span className="neon-gold">lineup</span></h2>
          <p className="text-bone/65 mt-3">Same time every week. Different chaos.</p>
        </SectionReveal>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WEEKLY_EVENTS.map((e, i) => (
            <StaggerItem key={i}>
              <EventCard event={e} onRsvp={() => setRsvp(e.title)} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Private booking CTA */}
      <section className="wrap pb-32">
        <div className="rounded-3xl border border-[var(--blitz)]/30 bg-gradient-to-br from-[var(--blitz)]/10 to-transparent p-10 md:p-16 text-center">
          <p className="font-script text-3xl text-[var(--gold)] mb-2">need the whole booth?</p>
          <h2 className="font-display text-5xl md:text-7xl mb-4">PRIVATE PARTIES</h2>
          <p className="text-bone/75 max-w-2xl mx-auto mb-8">
            Birthdays, bachelor(ette)s, work crews — we lock down booths, the patio, or the whole spot.
          </p>
          <CTAButton variant="blitz" size="lg" onClick={() => setRsvp("__private")}>Inquire Now</CTAButton>
        </div>
      </section>

      <AnimatePresence>
        {rsvp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md p-4 overflow-y-auto"
            onClick={() => setRsvp(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="relative wrap !w-[min(94vw,800px)] my-12"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setRsvp(null)} className="absolute -top-12 right-0 text-bone/70 hover:text-bone flex items-center gap-2 font-display tracking-widest text-sm">
                CLOSE <X className="h-4 w-4" />
              </button>
              {rsvp === "__private" ? (
                <ReservationFlow variant="private" />
              ) : (
                <ReservationFlow variant="event" initialEvent={rsvp} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
