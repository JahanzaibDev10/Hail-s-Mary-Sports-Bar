import { createFileRoute, Link } from "@tanstack/react-router";
import { NeonParallaxHero } from "@/components/site/NeonParallaxHero";
import { MarqueeTicker } from "@/components/site/MarqueeTicker";
import { SectionReveal, Stagger, StaggerItem } from "@/components/site/SectionReveal";
import { Carousel } from "@/components/site/Carousel";
import { EventCard } from "@/components/site/EventCard";
import { MenuItemCard } from "@/components/site/MenuItemCard";
import { CountUp } from "@/components/site/CountUp";
import { CTAButton } from "@/components/site/CTAButton";
import { WEEKLY_EVENTS } from "@/components/site/data";
import gameday from "@/assets/gameday-crowd.jpg";
import billiards from "@/assets/billiards.jpg";
import karaoke from "@/assets/karaoke.jpg";
import bingo from "@/assets/bingo.jpg";
import poker from "@/assets/poker.jpg";
import cocktail from "@/assets/cocktail.jpg";
import patio from "@/assets/patio.jpg";
import margaritas from "@/assets/margaritas.jpg";
import whiskey from "@/assets/whiskey.jpg";
import liveBand from "@/assets/live-band.jpg";
import barTvs from "@/assets/bar-tvs.jpg";
import latinNight from "@/assets/latin-night.jpg";
import { Star, MapPin, Clock, Phone, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hail Mary's Sports Bar — Glendale's Best Damn Dive Bar" },
      { name: "description", content: "Sports + dive bar in Glendale, AZ. NFL & Cardinals watch parties, karaoke, live bands, bingo, poker, billiards. Reserve your spot." },
    ],
  }),
  component: Home,
});

const GAMES = [
  { title: "Billiards", img: billiards, copy: "Tuesdays = tournament. Every other night = your turn at the table." },
  { title: "Karaoke", img: karaoke, copy: "Thursdays after 9PM. Bring a song. Leave with a story." },
  { title: "Bingo", img: bingo, copy: "Mondays at 7:30. Cash prizes. Salty callers. Loud reactions." },
  { title: "Poker", img: poker, copy: "Friday nights, 8PM. Buy in, sit down, send it." },
];

const HIGHLIGHTS = [
  { name: "Hail Mary's House Punch", price: "$10", desc: "Our secret-recipe punch. Smooth, dangerous, legendary.", img: cocktail, h: true },
  { name: "HennyRita", price: "$12", desc: "Hennessy margarita. Don't argue.", img: margaritas },
  { name: "Lemon Drop", price: "$6", desc: "Sweet, sour, and goes down too easy.", img: cocktail },
  { name: "Mexican Candy", price: "$10", desc: "Tequila, watermelon, chamoy. Spicy-sweet.", img: margaritas },
  { name: "Casamigos Margarita", price: "$10", desc: "Top-shelf tequila, fresh lime. Classic.", img: margaritas },
  { name: "Blue MF", price: "$10", desc: "Blue, electric, irresponsible. You've been warned.", img: cocktail },
];

const REVIEWS = [
  { name: "Marisol G.", quote: "Best dive in the West Valley. Karaoke nights are unhinged in the best way.", stars: 5 },
  { name: "Tony R.", quote: "Cardinals games here = pure chaos. Wouldn't watch anywhere else.", stars: 5 },
  { name: "Dee K.", quote: "Strong pours, friendly staff, patio is unmatched. My new spot.", stars: 5 },
  { name: "Brandon P.", quote: "Won bingo Monday. Drank for free Friday. 10/10 establishment.", stars: 5 },
  { name: "Sophie L.", quote: "House Punch hits different. Bingo cards in one hand, drink in the other.", stars: 4 },
];

export function Home() {
  return (
    <>
      <NeonParallaxHero />

      <MarqueeTicker
        items={["TONIGHT AT HAIL MARY'S", "BINGO MON 7:30", "KARAOKE THU 9PM", "POKER FRI 8PM", "LATIN NIGHT SAT", "NFL SUNDAY ALL DAY", "HAPPY HOUR ALL DAY SUNDAY"]}
      />

      {/* INTRO + STATS */}
      <section className="wrap py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          <SectionReveal>
            <p className="font-script text-3xl text-[var(--gold)] mb-3">since day one</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
              We're not <span className="neon-red">trying</span> to be<br />
              a <span className="neon-gold">sports bar</span>. We are one.
            </h2>
            <p className="text-bone/75 text-lg max-w-xl mb-8">
              Every TV. Every game. Sundays for the Cards, Mondays for bingo, Thursdays for ladies night,
              Saturdays for tequila. Hookah on the patio till close. The pours are loud, the crowd is
              louder, and you're always welcome at the bar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/reserve"><CTAButton variant="blitz" size="lg">Reserve Your Spot</CTAButton></Link>
              <Link to="/menu"><CTAButton variant="ghost" size="lg">See the Menu</CTAButton></Link>
            </div>
          </SectionReveal>

          <Stagger className="grid grid-cols-2 gap-4">
            <StaggerItem className="rounded-2xl border border-white/10 bg-[var(--panel)] p-6 col-span-2 glow-red">
              <div className="flex items-center gap-1 text-[var(--gold)] mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <div className="font-display text-6xl"><CountUp to={4.5} decimals={1} />★</div>
              <div className="text-bone/60 mt-1">Google rating · 28 reviews & climbing</div>
            </StaggerItem>
            <StaggerItem className="rounded-2xl border border-white/10 bg-[var(--panel)] p-6">
              <div className="font-display text-5xl neon-gold"><CountUp to={1100} suffix="+" /></div>
              <div className="text-bone/60 mt-1 text-sm">Facebook fans</div>
            </StaggerItem>
            <StaggerItem className="rounded-2xl border border-white/10 bg-[var(--panel)] p-6">
              <div className="font-display text-5xl neon-red"><CountUp to={7} /></div>
              <div className="text-bone/60 mt-1 text-sm">Nights a week</div>
            </StaggerItem>
            <StaggerItem className="rounded-2xl border border-white/10 bg-[var(--panel)] p-6 col-span-2">
              <div className="font-display text-5xl"><CountUp to={15} suffix=" HRS" /></div>
              <div className="text-bone/60 mt-1 text-sm">Daily: 11AM → 2AM</div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* GAME DAY FEATURE */}
      <section className="relative overflow-hidden py-24 border-y border-white/5">
        <img src={gameday} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="wrap relative grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
          <SectionReveal>
            <p className="font-script text-3xl text-[var(--gold)] mb-3">sundays in glendale</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
              CARDINALS<br />
              <span className="neon-red">WATCH PARTIES</span>
            </h2>
            <p className="text-bone/80 text-lg max-w-xl mb-8">
              Every Sunday we turn into the loudest red-and-white room in the valley. NFL Sunday Ticket on every screen,
              happy hour all day, touchdown shots, and a section of booths reserved for the diehards.
              Cards score? You drink.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/game-day"><CTAButton variant="blitz" size="lg">Game Day Details</CTAButton></Link>
              <Link to="/reserve"><CTAButton variant="gold">Reserve a Booth</CTAButton></Link>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2} className="hidden lg:block">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img src={barTvs} alt="Wall of TVs at Hail Mary's" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* WEEKLY LINEUP */}
      <section className="wrap py-24 md:py-32">
        <SectionReveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-script text-3xl text-[var(--gold)] mb-2">7 nights, 7 reasons</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">This week's <span className="neon-red">lineup</span></h2>
          </div>
          <Link to="/events" className="font-display tracking-widest text-sm text-bone/80 hover:text-[var(--gold)]">SEE ALL EVENTS →</Link>
        </SectionReveal>
        <Carousel>
          {WEEKLY_EVENTS.map((e, i) => <EventCard key={i} event={e} />)}
        </Carousel>
      </section>

      {/* GAMES STRIP */}
      <section className="wrap py-24">
        <SectionReveal className="mb-10">
          <p className="font-script text-3xl text-[var(--gold)] mb-2">bar games on tap</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">Pick your <span className="neon-gold">poison</span></h2>
        </SectionReveal>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GAMES.map((g) => (
            <StaggerItem key={g.title}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
                <img src={g.img} alt={g.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-3xl neon-red mb-2">{g.title}</h3>
                  <p className="text-sm text-bone/80">{g.copy}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="wrap py-24">
        <SectionReveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-script text-3xl text-[var(--gold)] mb-2">strong pours, sharp prices</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">Featured <span className="neon-red">cocktails</span></h2>
          </div>
          <Link to="/menu" className="font-display tracking-widest text-sm text-bone/80 hover:text-[var(--gold)]">FULL MENU →</Link>
        </SectionReveal>
        <Carousel slideClassName="min-w-0 flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]">
          {HIGHLIGHTS.map((h) => (
            <article key={h.name} className="group rounded-2xl overflow-hidden border border-white/10 bg-[var(--panel)] h-full">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={h.img} alt={h.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-display text-2xl">{h.name}</h3>
                  <span className={`font-display text-2xl ${h.h ? "neon-gold" : "text-[var(--gold)]"}`}>{h.price}</span>
                </div>
                <p className="text-sm text-bone/70">{h.desc}</p>
              </div>
            </article>
          ))}
        </Carousel>
      </section>

      {/* GALLERY TEASER */}
      <section className="py-24 border-y border-white/5 bg-black">
        <div className="wrap mb-10">
          <SectionReveal>
            <p className="font-script text-3xl text-[var(--gold)] mb-2">the vibe</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">Inside <span className="neon-red">Hail Mary's</span></h2>
          </SectionReveal>
        </div>
        <div className="wrap">
          <Carousel slideClassName="min-w-0 flex-[0_0_85%] md:flex-[0_0_55%] lg:flex-[0_0_40%]">
            {[patio, karaoke, billiards, gameday, liveBand, latinNight, whiskey].map((img, i) => (
              <div key={i} className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                <img src={img} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </Carousel>
          <div className="mt-8 text-right">
            <Link to="/gallery" className="font-display tracking-widest text-sm text-bone/80 hover:text-[var(--gold)]">FULL GALLERY →</Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="wrap py-24">
        <SectionReveal className="mb-12 text-center">
          <p className="font-script text-3xl text-[var(--gold)] mb-2">they're talking</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            <span className="neon-gold">4.5★</span> from the locals
          </h2>
        </SectionReveal>
        <Carousel slideClassName="min-w-0 flex-[0_0_85%] md:flex-[0_0_45%]">
          {REVIEWS.map((r, i) => (
            <blockquote key={i} className="h-full rounded-2xl border border-white/10 bg-[var(--panel)] p-8">
              <div className="flex gap-1 text-[var(--gold)] mb-4">
                {[...Array(r.stars)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="font-display text-2xl leading-snug mb-4">"{r.quote}"</p>
              <footer className="text-bone/60 text-sm">— {r.name}</footer>
            </blockquote>
          ))}
        </Carousel>
      </section>

      {/* LOCATION + JOIN */}
      <section className="wrap py-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <SectionReveal className="rounded-3xl border border-white/10 overflow-hidden bg-[var(--panel)]">
            <iframe
              title="Hail Mary's Map"
              src="https://www.google.com/maps?q=5114+W+Camelback+Rd,+Glendale,+AZ+85301&output=embed"
              className="w-full h-[420px] grayscale-[40%] contrast-110"
              loading="lazy"
            />
            <div className="p-6 grid sm:grid-cols-3 gap-4 text-sm">
              <div className="flex gap-2"><MapPin className="h-4 w-4 text-[var(--blitz)] shrink-0 mt-0.5" /> 5114 W Camelback Rd<br />Glendale, AZ 85301</div>
              <div className="flex gap-2"><Clock className="h-4 w-4 text-[var(--blitz)] shrink-0 mt-0.5" /> Daily 11AM – 2AM</div>
              <div className="flex gap-2"><Phone className="h-4 w-4 text-[var(--blitz)] shrink-0 mt-0.5" /> +1 623-934-1780</div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="rounded-3xl border border-[var(--gold)]/30 bg-gradient-to-br from-[var(--gold)]/10 to-transparent p-8 flex flex-col justify-between">
            <div>
              <MessageSquare className="h-10 w-10 text-[var(--gold)] mb-4" />
              <p className="font-script text-3xl text-[var(--gold)] mb-2">the inside line</p>
              <h3 className="font-display text-4xl md:text-5xl leading-tight mb-4">
                TEXT <span className="neon-gold">"JOIN"</span><br />
                TO 833-366-8785
              </h3>
              <p className="text-bone/75 mb-8">
                Be first to know drink specials, surprise DJ nights, and Cardinals tailgate plans.
                No spam. We text when it counts.
              </p>
            </div>
            <a href="sms:8333668785?body=JOIN">
              <CTAButton variant="gold" size="lg" className="w-full">Tap to Text JOIN</CTAButton>
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* FINAL CTA BAND */}
      <section className="relative overflow-hidden border-y border-[var(--blitz)]/30 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,32,44,0.25),transparent_60%)]" />
        <div className="wrap relative text-center">
          <SectionReveal>
            <p className="font-script text-3xl text-[var(--gold)] mb-3">your booth is waiting</p>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.9] mb-8">
              SEE YOU AT<br />
              <span className="neon-red">HAIL MARY'S</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/reserve"><CTAButton variant="blitz" size="lg">Reserve Now</CTAButton></Link>
              <a href="tel:+16239341780"><CTAButton variant="ghost" size="lg">Call (623) 934-1780</CTAButton></a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
