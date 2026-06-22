import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionReveal, Stagger, StaggerItem } from "@/components/site/SectionReveal";
import { CTAButton } from "@/components/site/CTAButton";
import { MarqueeTicker } from "@/components/site/MarqueeTicker";
import gameday from "@/assets/gameday-crowd.jpg";
import bar from "@/assets/bar-tvs.jpg";
import whiskey from "@/assets/whiskey.jpg";
import { Tv, Beer, Trophy, Flame } from "lucide-react";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/game-day")({
  head: () => createSeo({
    title: "NFL & Cardinals Watch Parties | Hail Mary's",
    description: "Watch NFL games and the Arizona Cardinals at Hail Mary's in Glendale, with Sunday Ticket, wall-to-wall screens, all-day happy hour, and booth reservations.",
    path: "/game-day",
  }),
  component: GameDay,
});

const SPECIALS = [
  { name: "Bud Light Pitchers", price: "$12", desc: "All game long. Don't fumble." },
  { name: "Touchdown Shots", price: "$3", desc: "Cards score, the room drinks." },
  { name: "Game-Day Bucket", price: "$22", desc: "5 ice-cold domestics in a bucket." },
  { name: "Halftime Wings + Pitcher", price: "$28", desc: "Crispy wings, ice cold beer." },
];

export function GameDay() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 min-h-[80svh] flex items-end pb-20">
        <img src={gameday} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-transparent" />
        <div className="wrap relative">
          <SectionReveal>
            <p className="font-script text-3xl text-[var(--gold)] mb-3">red sea, west side</p>
            <h1 className="font-display text-7xl md:text-[11vw] leading-[0.82]">
              <span className="neon-red">GAME DAY</span><br />
              <span className="neon-gold">RUNS HERE</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-bone/80">
              Every NFL Sunday turns Hail Mary's into Cardinals HQ. Wall-to-wall TVs, every game on,
              the loudest crowd between 51st and Camelback. Reserve your booth or risk standing room only.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/reserve"><CTAButton variant="blitz" size="lg">Reserve a Booth</CTAButton></Link>
              <Link to="/menu"><CTAButton variant="ghost">See Game-Day Drinks</CTAButton></Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <MarqueeTicker items={["EVERY GAME ON", "HAPPY HOUR ALL SUNDAY", "TOUCHDOWN = SHOTS", "BIRDS GANG", "RED SEA RISING"]} />

      <section className="wrap py-24">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Tv />, t: "Every Screen, Every Game", d: "NFL Sunday Ticket. RedZone. Local feeds. If it's on, it's on here." },
            { icon: <Beer />, t: "Happy Hour ALL DAY", d: "From doors at 11AM till the final whistle. Yes, all of it." },
            { icon: <Trophy />, t: "Cardinals First", d: "We're a Cards bar, no apologies. Birds score, you drink." },
            { icon: <Flame />, t: "Booths for the Diehards", d: "Front-row booths in the Big-Screen Section. Reserve early." },
          ].map((c, i) => (
            <StaggerItem key={i}>
              <div className="rounded-2xl border border-white/10 bg-[var(--panel)] p-6 h-full">
                <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-[var(--blitz)]/15 text-[var(--blitz)] [&_svg]:h-6 [&_svg]:w-6">
                  {c.icon}
                </div>
                <h3 className="font-display text-2xl mb-2">{c.t}</h3>
                <p className="text-sm text-bone/70">{c.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="wrap pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <SectionReveal>
            <p className="font-script text-3xl text-[var(--gold)] mb-2">game-day deals</p>
            <h2 className="font-display text-5xl md:text-7xl mb-8">
              SUNDAY <span className="neon-red">SPECIALS</span>
            </h2>
            <div className="space-y-3">
              {SPECIALS.map((s) => (
                <div key={s.name} className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-[var(--panel)] p-5">
                  <div>
                    <div className="font-display text-2xl">{s.name}</div>
                    <div className="text-bone/65 text-sm">{s.desc}</div>
                  </div>
                  <div className="font-display text-3xl neon-gold shrink-0">{s.price}</div>
                </div>
              ))}
            </div>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 col-span-2">
                <img src={bar} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl border border-white/10">
                <img src={whiskey} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl border border-white/10">
                <img src={gameday} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 border-y border-[var(--blitz)]/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,32,44,0.25),transparent_60%)]" />
        <div className="wrap relative text-center">
          <h2 className="font-display text-5xl md:text-7xl mb-6">LOCK IN YOUR <span className="neon-red">BOOTH</span></h2>
          <p className="text-bone/75 mb-8 max-w-xl mx-auto">Sundays sell out fast — especially when the Cards are home. Reserve in 60 seconds.</p>
          <Link to="/reserve"><CTAButton variant="blitz" size="lg">Reserve for Game Day</CTAButton></Link>
        </div>
      </section>
    </>
  );
}
