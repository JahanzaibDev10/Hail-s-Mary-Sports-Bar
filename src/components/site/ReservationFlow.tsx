import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar, Users, MapPin, Tv, Clock, Phone, Mail, User, MessageCircle, PartyPopper, Beer, Sparkles, Trophy } from "lucide-react";
import { CTAButton } from "./CTAButton";

type Occasion = "Watch a Game" | "Event Night" | "Private Party / Booth" | "Just Drinks";
type Area = "Main Floor" | "Booth" | "Outdoor Patio" | "Big-Screen Section";

interface ReservationData {
  occasion: Occasion | null;
  date: string;
  time: string;
  party: number;
  area: Area | null;
  game: string | null;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const OCCASIONS: { value: Occasion; icon: ReactNode; desc: string }[] = [
  { value: "Watch a Game", icon: <Trophy className="h-6 w-6" />, desc: "NFL, Cardinals, PPV, you name it." },
  { value: "Event Night", icon: <Sparkles className="h-6 w-6" />, desc: "Bingo, karaoke, live band, latin night." },
  { value: "Private Party / Booth", icon: <PartyPopper className="h-6 w-6" />, desc: "Birthdays, work parties, bachelor(ette)." },
  { value: "Just Drinks", icon: <Beer className="h-6 w-6" />, desc: "Walk in. Sit down. We'll handle the rest." },
];

const AREAS: { value: Area; icon: ReactNode; desc: string }[] = [
  { value: "Main Floor", icon: <Users className="h-5 w-5" />, desc: "Open seating, full bar energy." },
  { value: "Booth", icon: <MapPin className="h-5 w-5" />, desc: "Tucked-in, your own zone." },
  { value: "Outdoor Patio", icon: <Sparkles className="h-5 w-5" />, desc: "Drinks + hookah, string lights." },
  { value: "Big-Screen Section", icon: <Tv className="h-5 w-5" />, desc: "Front row for the game." },
];

const GAMES = [
  "Cardinals vs Seahawks — Sun 1:25PM",
  "NFL RedZone — Sun All Day",
  "Monday Night Football — 6:15PM",
  "Thursday Night Football — 5:15PM",
  "College Football Saturday — All Day",
  "Heavyweight Boxing PPV — Sat 7PM",
];

const empty: ReservationData = {
  occasion: null, date: "", time: "", party: 2, area: null, game: null,
  name: "", phone: "", email: "", notes: "",
};

interface Props {
  variant?: "full" | "event" | "private";
  initialOccasion?: Occasion;
  initialEvent?: string;
}

export function ReservationFlow({ variant = "full", initialOccasion, initialEvent }: Props) {
  const [step, setStep] = useState(initialOccasion ? 1 : 0);
  const [data, setData] = useState<ReservationData>({
    ...empty,
    occasion: initialOccasion ?? null,
    notes: initialEvent ? `RSVP for: ${initialEvent}` : "",
  });
  const [confirmed, setConfirmed] = useState<{ id: string } | null>(null);

  const totalSteps = variant === "private" ? 3 : 4;
  const update = (p: Partial<ReservationData>) => setData((d) => ({ ...d, ...p }));

  const submit = () => {
    const id = "HM-" + Math.floor(100000 + Math.random() * 900000);
    setConfirmed({ id });
  };

  if (confirmed) return <Confirmation id={confirmed.id} data={data} variant={variant} />;

  return (
    <div className="rounded-3xl border border-white/8 bg-[var(--panel)]/80 backdrop-blur-md p-6 md:p-10 glow-red/0">
      {/* Progress */}
      <div className="mb-8 flex items-center gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} className="flex-1">
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i <= step ? "bg-[var(--blitz)] glow-red" : "bg-white/10"
              }`}
            />
          </div>
        ))}
      </div>
      <p className="mb-2 font-display text-sm tracking-widest text-[var(--gold)]">
        STEP {Math.min(step + 1, totalSteps)} / {totalSteps}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* PRIVATE PARTY VARIANT */}
          {variant === "private" && (
            <>
              {step === 0 && (
                <PrivateStep1 data={data} update={update} next={() => setStep(1)} />
              )}
              {step === 1 && (
                <PrivateStep2 data={data} update={update} next={() => setStep(2)} back={() => setStep(0)} />
              )}
              {step === 2 && (
                <ContactStep data={data} update={update} submit={submit} back={() => setStep(1)} label="Send Inquiry" />
              )}
            </>
          )}

          {/* EVENT RSVP */}
          {variant === "event" && (
            <>
              {step === 0 && (
                <DateTimeStep data={data} update={update} next={() => setStep(1)} />
              )}
              {step === 1 && (
                <AreaStep data={data} update={update} next={() => setStep(2)} back={() => setStep(0)} skipGame />
              )}
              {step === 2 && (
                <ContactStep data={data} update={update} submit={submit} back={() => setStep(1)} />
              )}
            </>
          )}

          {/* FULL */}
          {variant === "full" && (
            <>
              {step === 0 && (
                <OccasionStep data={data} update={(p) => { update(p); setStep(1); }} />
              )}
              {step === 1 && (
                <DateTimeStep data={data} update={update} next={() => setStep(2)} back={() => setStep(0)} />
              )}
              {step === 2 && (
                <AreaStep data={data} update={update} next={() => setStep(3)} back={() => setStep(1)} />
              )}
              {step === 3 && (
                <ContactStep data={data} update={update} submit={submit} back={() => setStep(2)} />
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------- Sub-steps ---------- */

function OccasionStep({ data, update }: { data: ReservationData; update: (p: Partial<ReservationData>) => void }) {
  return (
    <>
      <h3 className="font-display text-3xl md:text-5xl mb-2">What's the occasion?</h3>
      <p className="text-bone/70 mb-8">Pick one — we'll tailor your spot for the night.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {OCCASIONS.map((o) => (
          <button
            key={o.value}
            onClick={() => update({ occasion: o.value })}
            className={`group text-left rounded-2xl border p-6 transition ${
              data.occasion === o.value
                ? "border-[var(--blitz)] glow-red bg-[var(--blitz)]/10"
                : "border-white/10 bg-black/30 hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/5"
            }`}
          >
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black border border-white/10 text-[var(--gold)]">
              {o.icon}
            </div>
            <div className="font-display text-2xl">{o.value}</div>
            <div className="text-bone/65 text-sm mt-1">{o.desc}</div>
          </button>
        ))}
      </div>
    </>
  );
}

function DateTimeStep({ data, update, next, back }: any) {
  const valid = data.date && data.time && data.party > 0;
  return (
    <>
      <h3 className="font-display text-3xl md:text-5xl mb-2">When & how many?</h3>
      <p className="text-bone/70 mb-8">We hold spots up to 2 hours past your booked time.</p>
      <div className="grid gap-5 md:grid-cols-3">
        <Field icon={<Calendar />} label="Date">
          <input
            type="date"
            value={data.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => update({ date: e.target.value })}
            className="w-full bg-transparent text-bone outline-none font-display text-xl"
          />
        </Field>
        <Field icon={<Clock />} label="Time">
          <select
            value={data.time}
            onChange={(e) => update({ time: e.target.value })}
            className="w-full bg-transparent text-bone outline-none font-display text-xl"
          >
            <option value="" className="bg-black">Pick a time</option>
            {["11:30 AM","1:00 PM","3:00 PM","5:00 PM","6:30 PM","8:00 PM","9:30 PM","11:00 PM","12:30 AM"].map(t => (
              <option key={t} value={t} className="bg-black">{t}</option>
            ))}
          </select>
        </Field>
        <Field icon={<Users />} label="Party size">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => update({ party: Math.max(1, data.party - 1) })}
              className="h-10 w-10 rounded-md border border-white/15 text-bone hover:border-[var(--blitz)]"
            >−</button>
            <div className="flex-1 text-center font-display text-2xl">{data.party}</div>
            <button
              type="button"
              onClick={() => update({ party: Math.min(40, data.party + 1) })}
              className="h-10 w-10 rounded-md border border-white/15 text-bone hover:border-[var(--gold)]"
            >+</button>
          </div>
        </Field>
      </div>
      <NavButtons onNext={next} onBack={back} nextDisabled={!valid} />
    </>
  );
}

function AreaStep({ data, update, next, back, skipGame }: any) {
  const showGame = !skipGame && data.occasion === "Watch a Game";
  const valid = data.area && (!showGame || data.game);
  return (
    <>
      <h3 className="font-display text-3xl md:text-5xl mb-2">Pick your area</h3>
      <p className="text-bone/70 mb-8">Where do you want to land?</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {AREAS.map((a) => (
          <button
            key={a.value}
            onClick={() => update({ area: a.value })}
            className={`text-left rounded-xl border p-5 transition ${
              data.area === a.value
                ? "border-[var(--gold)] glow-gold bg-[var(--gold)]/10"
                : "border-white/10 bg-black/30 hover:border-white/30"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="text-[var(--blitz)]">{a.icon}</div>
              <div>
                <div className="font-display text-xl">{a.value}</div>
                <div className="text-sm text-bone/65">{a.desc}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {showGame && (
        <div className="mt-8">
          <h4 className="font-display text-xl text-[var(--gold)] mb-3">Which game?</h4>
          <div className="grid gap-2">
            {GAMES.map((g) => (
              <button
                key={g}
                onClick={() => update({ game: g })}
                className={`text-left px-4 py-3 rounded-lg border transition ${
                  data.game === g
                    ? "border-[var(--blitz)] bg-[var(--blitz)]/10 text-bone"
                    : "border-white/10 bg-black/30 hover:border-white/30 text-bone/80"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      )}

      <NavButtons onNext={next} onBack={back} nextDisabled={!valid} />
    </>
  );
}

function ContactStep({ data, update, submit, back, label = "Confirm Reservation" }: any) {
  const valid = data.name && data.phone && data.email;
  return (
    <>
      <h3 className="font-display text-3xl md:text-5xl mb-2">Your info</h3>
      <p className="text-bone/70 mb-8">We'll text you to confirm the spot.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <Field icon={<User />} label="Full name">
          <input value={data.name} onChange={(e) => update({ name: e.target.value })} className="w-full bg-transparent outline-none text-bone font-display text-lg" placeholder="Jane Quarterback" />
        </Field>
        <Field icon={<Phone />} label="Phone">
          <input value={data.phone} onChange={(e) => update({ phone: e.target.value })} className="w-full bg-transparent outline-none text-bone font-display text-lg" placeholder="+1 555 555 5555" />
        </Field>
        <Field icon={<Mail />} label="Email" className="md:col-span-2">
          <input value={data.email} onChange={(e) => update({ email: e.target.value })} className="w-full bg-transparent outline-none text-bone font-display text-lg" placeholder="you@email.com" />
        </Field>
        <Field icon={<MessageCircle />} label="Anything we should know?" className="md:col-span-2">
          <textarea rows={3} value={data.notes} onChange={(e) => update({ notes: e.target.value })} className="w-full bg-transparent outline-none text-bone resize-none" placeholder="Birthday, dietary stuff, fave team..." />
        </Field>
      </div>
      <NavButtons onNext={submit} onBack={back} nextLabel={label} nextDisabled={!valid} />
    </>
  );
}

function PrivateStep1({ data, update, next }: any) {
  const valid = data.party > 0 && data.date;
  return (
    <>
      <h3 className="font-display text-3xl md:text-5xl mb-2">Book the booth.</h3>
      <p className="text-bone/70 mb-8">Tell us the basics — we'll come back with options.</p>
      <div className="grid gap-5 md:grid-cols-2">
        <Field icon={<Calendar />} label="Date">
          <input type="date" value={data.date} onChange={(e) => update({ date: e.target.value })} className="w-full bg-transparent text-bone outline-none font-display text-xl" min={new Date().toISOString().split("T")[0]} />
        </Field>
        <Field icon={<Users />} label="Party size">
          <input type="number" min={4} max={120} value={data.party} onChange={(e) => update({ party: parseInt(e.target.value) || 0 })} className="w-full bg-transparent text-bone outline-none font-display text-xl" />
        </Field>
      </div>
      <NavButtons onNext={next} nextDisabled={!valid} />
    </>
  );
}

function PrivateStep2({ data, update, next, back }: any) {
  return (
    <>
      <h3 className="font-display text-3xl md:text-5xl mb-2">What are we celebrating?</h3>
      <div className="grid gap-4">
        <Field icon={<PartyPopper />} label="Occasion">
          <input value={data.notes} onChange={(e) => update({ notes: e.target.value })} className="w-full bg-transparent outline-none text-bone font-display text-lg" placeholder="Birthday, bachelor(ette), work party..." />
        </Field>
        <Field icon={<Beer />} label="Rough budget">
          <select value={data.game || ""} onChange={(e) => update({ game: e.target.value })} className="w-full bg-transparent outline-none text-bone font-display text-lg">
            <option className="bg-black" value="">Pick a range</option>
            <option className="bg-black">$300 – $600</option>
            <option className="bg-black">$600 – $1,200</option>
            <option className="bg-black">$1,200 – $2,500</option>
            <option className="bg-black">$2,500+</option>
          </select>
        </Field>
      </div>
      <NavButtons onNext={next} onBack={back} />
    </>
  );
}

/* ---------- Field & Nav ---------- */

function Field({ icon, label, children, className = "" }: any) {
  return (
    <label className={`block rounded-xl border border-white/10 bg-black/30 p-4 focus-within:border-[var(--gold)] transition ${className}`}>
      <div className="flex items-center gap-2 text-xs font-display tracking-widest text-bone/60 mb-2">
        <span className="text-[var(--blitz)] [&_svg]:h-4 [&_svg]:w-4">{icon}</span>
        {label.toUpperCase()}
      </div>
      {children}
    </label>
  );
}

function NavButtons({ onBack, onNext, nextDisabled, nextLabel = "Continue" }: any) {
  return (
    <div className="mt-10 flex flex-wrap justify-between gap-3">
      {onBack ? (
        <button onClick={onBack} className="font-display tracking-widest text-sm text-bone/60 hover:text-bone px-2 py-3">
          ← BACK
        </button>
      ) : <div />}
      <CTAButton onClick={onNext} disabled={nextDisabled} variant="blitz" size="lg" className={nextDisabled ? "opacity-40 pointer-events-none" : ""}>
        {nextLabel} →
      </CTAButton>
    </div>
  );
}

/* ---------- Confirmation ---------- */

function Confirmation({ id, data, variant }: { id: string; data: ReservationData; variant: string }) {
  const ics = () => {
    const dt = new Date(`${data.date}T${convert24(data.time)}`);
    const end = new Date(dt.getTime() + 2 * 60 * 60 * 1000);
    const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const body = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nUID:${id}@hailmarys\nDTSTAMP:${fmt(new Date())}\nDTSTART:${fmt(dt)}\nDTEND:${fmt(end)}\nSUMMARY:Hail Mary's — ${data.occasion || "Reservation"}\nLOCATION:5114 W Camelback Rd, Glendale, AZ 85301\nDESCRIPTION:Reservation ${id} for ${data.party} guests${data.area ? " in " + data.area : ""}${data.game ? " — " + data.game : ""}.\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([body], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hail-marys-${id}.ics`;
    a.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-[var(--blitz)] glow-red"
      >
        <Check className="h-10 w-10 text-white" />
      </motion.div>
      <p className="font-script text-3xl text-[var(--gold)] mb-2">you're in.</p>
      <h3 className="font-display text-4xl md:text-6xl neon-red mb-2">
        {variant === "private" ? "INQUIRY SENT" : "RESERVATION LOCKED"}
      </h3>
      <p className="text-bone/70 mb-2">Reservation #</p>
      <p className="font-display text-3xl neon-gold mb-8">{id}</p>

      <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-black/40 p-6 text-left mb-8 space-y-3">
        {data.occasion && <Row label="Occasion" value={data.occasion} />}
        {data.date && <Row label="Date" value={new Date(data.date + "T00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} />}
        {data.time && <Row label="Time" value={data.time} />}
        <Row label="Party" value={`${data.party} guest${data.party === 1 ? "" : "s"}`} />
        {data.area && <Row label="Area" value={data.area} />}
        {data.game && <Row label="Game" value={data.game} />}
        <Row label="Name" value={data.name} />
        <Row label="Phone" value={data.phone} />
      </div>

      <p className="text-bone/80 mb-8">
        📲 <strong className="text-[var(--gold)]">We'll text you to confirm your spot</strong> within an hour. Save the date below.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {data.date && data.time && (
          <CTAButton onClick={ics} variant="gold">Add to Calendar</CTAButton>
        )}
        <CTAButton onClick={() => window.location.reload()} variant="ghost">New Reservation</CTAButton>
      </div>
    </motion.div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="font-display tracking-widest text-bone/55">{label.toUpperCase()}</span>
      <span className="font-display text-bone text-right">{value}</span>
    </div>
  );
}

function convert24(t: string) {
  if (!t) return "12:00:00";
  const [hm, ampm] = t.split(" ");
  let [h, m] = hm.split(":").map(Number);
  if (ampm === "PM" && h !== 12) h += 12;
  if (ampm === "AM" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:00`;
}
