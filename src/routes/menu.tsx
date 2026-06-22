import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal, Stagger, StaggerItem } from "@/components/site/SectionReveal";
import { MarqueeTicker } from "@/components/site/MarqueeTicker";
import { Carousel } from "@/components/site/Carousel";
import { MenuItemCard } from "@/components/site/MenuItemCard";
import { CTAButton } from "@/components/site/CTAButton";
import cocktail from "@/assets/cocktail.jpg";
import margaritas from "@/assets/margaritas.jpg";
import whiskey from "@/assets/whiskey.jpg";
import { ExternalLink, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Cocktails, Beer & Party Packs | Hail Mary's" },
      { name: "description", content: "Hail Mary's drink menu: craft cocktails, canned cocktails, beer, party packs, and the famous House Punch. 21+." },
    ],
  }),
  component: Menu,
});

const SPECIALS = [
  { l: "ALL DAY $3", items: ["Budweiser", "Busch Light", "Rolling Rock", "Coors Light", "Well Tequila"] },
  { l: "THU", items: ["Ladies Night 2-for-1 Wells"] },
  { l: "FRI", items: ["$5 Fridays — bar wide"] },
  { l: "SAT", items: ["Latin Night — $6 1800 Shots"] },
  { l: "SUN", items: ["Happy Hour ALL DAY"] },
];

const TABS = ["Cocktails", "Canned", "Beer", "Bottles", "Wine", "Party Packs", "N/A", "Munchies"] as const;
type Tab = typeof TABS[number];

const ITEMS: Record<Tab, { name: string; price: string; desc?: string; highlight?: boolean }[]> = {
  Cocktails: [
    { name: "Hail Mary's House Punch", price: "$10", desc: "Secret recipe. Goes down smooth, lands heavy.", highlight: true },
    { name: "Lemon Drop", price: "$6", desc: "10oz. Sweet, sour, dangerous." },
    { name: "HennyRita", price: "$12", desc: "Hennessy margarita. Yes really." },
    { name: "Casamigos Margarita", price: "$10", desc: "Top-shelf tequila, fresh lime." },
    { name: "Blue MF", price: "$10", desc: "Electric, irresponsible, unforgettable." },
    { name: "Mexican Candy", price: "$10", desc: "Tequila, watermelon, chamoy, tajín." },
    { name: "Pink P***ie", price: "$10", desc: "Don't ask. Just order." },
  ],
  Canned: [
    { name: "Ciroc Sun Citrus", price: "$8.50" },
    { name: "Ciroc Watermelon Kiwi", price: "$8.50" },
    { name: "Crown Royal Washington Apple", price: "$8.50" },
    { name: "Nitro Espresso Martini", price: "$8.50" },
    { name: "Casamigos Margarita — Passionfruit Prickly Pear", price: "$8.50" },
    { name: "Casamigos Margarita — Strawberry Lime", price: "$8.50" },
    { name: "Casamigos Margarita — Guava Hibiscus", price: "$8.50" },
    { name: "Casamigos Margarita — Classic", price: "$8.50" },
    { name: "High Noon — Watermelon", price: "$8.50" },
    { name: "High Noon — Pineapple", price: "$8.50" },
    { name: "High Noon — Black Cherry", price: "$8.50" },
    { name: "High Noon — Grapefruit", price: "$8.50" },
  ],
  Beer: [
    { name: "Michelob Ultra — 6-pack", price: "$18" },
    { name: "Budweiser — 6-pack", price: "$18" },
    { name: "Bud Light — 6-pack", price: "$18" },
    { name: "Coors Light — 6-pack", price: "$18" },
    { name: "Coors Banquet — 6-pack", price: "$18" },
    { name: "Miller Genuine Draft — 6-pack", price: "$18" },
  ],
  Bottles: [
    { name: "Vodka — 1L", price: "$20" },
    { name: "Whiskey — 1L", price: "$20" },
    { name: "Rum — 1L", price: "$20" },
    { name: "Gin — 1L", price: "$20" },
    { name: "Tequila Silver — 1L", price: "$20" },
    { name: "Tequila Gold — 1L", price: "$20" },
    { name: "Long Island Mix — 1L", price: "$20", desc: "Add sweet & sour + a splash of Coke." },
  ],
  Wine: [
    { name: "House White — 10oz", price: "$7" },
    { name: "House Red — 10oz", price: "$7" },
  ],
  "Party Packs": [
    { name: "Craft Cocktails — 4 for $30", price: "$30", desc: "Pick any 4 cocktails ≤ $10.", highlight: true },
    { name: "Craft Cocktails — 6 for $50", price: "$50", desc: "Pick any 6 cocktails ≤ $10.", highlight: true },
    { name: "Craft Cocktails — 8 for $70", price: "$70", desc: "Pick any 8 cocktails ≤ $10.", highlight: true },
    { name: "Craft Cocktails — 10 for $85", price: "$85", desc: "Pick any 10 cocktails ≤ $10.", highlight: true },
    { name: "Bottles — 2 for $35", price: "$35", desc: "Any two 1L bottles ≤ $20." },
    { name: "Bottles — 3 for $50", price: "$50", desc: "Any three 1L bottles ≤ $20." },
    { name: "Bottles — 4 for $65", price: "$65", desc: "Any four 1L bottles ≤ $20." },
  ],
  "N/A": [
    { name: "Red Bull", price: "$5" },
    { name: "Coke", price: "$3" },
    { name: "Sprite", price: "$3" },
  ],
  Munchies: [
    { name: "Spicy Pork Rinds", price: "$3" },
    { name: "Welch's Fruit Snacks", price: "$3" },
  ],
};

const FEATURED = [
  { name: "House Punch", price: "$10", img: cocktail, desc: "Our secret recipe. The drink that built this place." },
  { name: "HennyRita", price: "$12", img: margaritas, desc: "Hennessy meets margarita. Don't fight it." },
  { name: "Mexican Candy", price: "$10", img: margaritas, desc: "Tequila, watermelon, chamoy. Spicy-sweet." },
  { name: "Blue MF", price: "$10", img: cocktail, desc: "Bright blue, bigger headache." },
  { name: "Casamigos Marg", price: "$10", img: margaritas, desc: "Top-shelf. Fresh-pressed lime." },
  { name: "Pink P***ie", price: "$10", img: cocktail, desc: "Pink, fruity, ferocious." },
];

export function Menu() {
  const [tab, setTab] = useState<Tab>("Cocktails");
  return (
    <>
      <header className="pt-40 pb-12 border-b border-white/5">
        <div className="wrap text-center">
          <SectionReveal>
            <p className="font-script text-3xl text-[var(--gold)] mb-3">drink it in</p>
            <h1 className="font-display text-6xl md:text-9xl leading-[0.85]">
              THE <span className="neon-red">MENU</span>
            </h1>
            <p className="mt-4 text-bone/70 max-w-xl mx-auto">
              Strong pours. Sharp prices. Bottles, cans, craft cocktails, party packs. Pick your weapon.
            </p>
          </SectionReveal>
        </div>
      </header>

      {/* IN-VENUE SPECIALS */}
      <section className="relative overflow-hidden border-b border-[var(--blitz)]/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,169,31,0.15),transparent_60%)]" />
        <div className="wrap relative py-12">
          <SectionReveal className="mb-8">
            <p className="font-script text-2xl text-[var(--gold)] mb-1">in-venue specials</p>
            <h2 className="font-display text-3xl md:text-5xl">
              At the bar, <span className="neon-red">all week</span>
            </h2>
          </SectionReveal>
          <div className="grid gap-4 md:grid-cols-5">
            {SPECIALS.map((s) => (
              <div key={s.l} className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="font-display text-[var(--gold)] text-xs tracking-widest mb-2">{s.l}</div>
                {s.items.map((i) => (
                  <div key={i} className="font-display text-bone leading-tight">{i}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CAROUSEL */}
      <section className="wrap py-24">
        <SectionReveal className="mb-10">
          <p className="font-script text-3xl text-[var(--gold)] mb-2">house favorites</p>
          <h2 className="font-display text-5xl md:text-7xl">Featured <span className="neon-red">cocktails</span></h2>
        </SectionReveal>
        <Carousel slideClassName="min-w-0 flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]">
          {FEATURED.map((f) => (
            <article key={f.name} className="group rounded-2xl overflow-hidden border border-white/10 bg-[var(--panel)] h-full">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={f.img} alt={f.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-display text-2xl">{f.name}</h3>
                  <span className="font-display text-2xl neon-gold">{f.price}</span>
                </div>
                <p className="text-sm text-bone/70">{f.desc}</p>
              </div>
            </article>
          ))}
        </Carousel>
      </section>

      <MarqueeTicker accent="gold" items={["21+ ONLY", "VALID ID REQUIRED", "DRINK RESPONSIBLY", "DON'T DRINK & DRIVE"]} />

      {/* ORDER MENU */}
      <section className="wrap py-24">
        <SectionReveal className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-script text-3xl text-[var(--gold)] mb-2">the full list</p>
            <h2 className="font-display text-5xl md:text-7xl">Order <span className="neon-gold">menu</span></h2>
          </div>
          <a href="https://www.seamless.com/" target="_blank" rel="noopener">
            <CTAButton variant="gold">
              <span className="flex items-center gap-2">Order on Seamless <ExternalLink className="h-4 w-4" /></span>
            </CTAButton>
          </a>
        </SectionReveal>

        {/* Filter chips */}
        <div className="mb-10 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full font-display tracking-wider text-sm transition border ${
                tab === t
                  ? "border-[var(--blitz)] bg-[var(--blitz)] text-white glow-red"
                  : "border-white/15 text-bone/70 hover:text-bone hover:border-white/30"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4 md:grid-cols-2"
          >
            {ITEMS[tab].map((i) => (
              <MenuItemCard key={i.name} {...i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex items-center gap-3 rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-5 text-bone/80">
          <ShieldAlert className="h-5 w-5 text-[var(--gold)] shrink-0" />
          <p className="text-sm"><strong className="text-[var(--gold)]">21+ only.</strong> Valid ID required at the door and at the bar. We card. No exceptions.</p>
        </div>
      </section>
    </>
  );
}
