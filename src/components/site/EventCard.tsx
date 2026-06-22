import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export interface EventCardData {
  day: string;
  title: string;
  time: string;
  desc: string;
  image: string;
  tag?: string;
}

export function EventCard({ event, onRsvp }: { event: EventCardData; onRsvp?: () => void }) {
  return (
    <motion.article
      whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-2xl bg-[var(--panel)] border border-white/5 h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-[var(--blitz)] px-3 py-1 text-xs font-display tracking-widest text-white">
          {event.day}
        </div>
        {event.tag && (
          <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/95 px-3 py-1 text-xs font-display tracking-widest text-[var(--ink)]">
            {event.tag}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl md:text-3xl leading-tight mb-2">{event.title}</h3>
        <p className="text-sm text-[var(--gold)] font-display tracking-wider mb-3">{event.time}</p>
        <p className="text-bone/70 text-sm mb-5">{event.desc}</p>
        {onRsvp ? (
          <button
            onClick={onRsvp}
            className="inline-flex items-center gap-2 font-display tracking-widest text-sm text-bone hover:text-[var(--blitz)] transition"
          >
            RSVP →
          </button>
        ) : (
          <Link
            to="/reserve"
            className="inline-flex items-center gap-2 font-display tracking-widest text-sm text-bone hover:text-[var(--blitz)] transition"
          >
            RSVP →
          </Link>
        )}
      </div>
    </motion.article>
  );
}
