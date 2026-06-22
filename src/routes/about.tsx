import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal, Stagger, StaggerItem } from "@/components/site/SectionReveal";
import { CTAButton } from "@/components/site/CTAButton";
import { Instagram, Facebook, Phone, Mail, MapPin, Clock, MessageSquare, Tv, Beer, Music, Wind, Trophy } from "lucide-react";
import patio from "@/assets/patio.jpg";
import bar from "@/assets/bar-tvs.jpg";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => createSeo({
    title: "About & Contact | Hail Mary's Sports Bar Glendale",
    description: "Visit Hail Mary's Sports Bar in Glendale, Arizona. Find our address, daily hours, phone number, patio details, amenities, and social links.",
    path: "/about",
  }),
  component: About,
});

const AMENITIES = [
  { icon: <Tv />, label: "Wall-to-Wall TVs" },
  { icon: <Beer />, label: "Full Bar + Craft Cocktails" },
  { icon: <Music />, label: "Live Music & DJ Nights" },
  { icon: <Wind />, label: "Enclosed Patio + Hookah" },
  { icon: <Trophy />, label: "Billiards, Poker, Bingo, Karaoke" },
];

export function About() {
  return (
    <>
      <header className="relative pt-40 pb-16 border-b border-white/5 overflow-hidden">
        <img src={bar} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/80 to-transparent" />
        <div className="wrap relative">
          <SectionReveal>
            <p className="font-script text-3xl text-[var(--gold)] mb-3">the story</p>
            <h1 className="font-display text-6xl md:text-9xl leading-[0.85]">
              <span className="neon-red">DIVE BAR</span><br />
              <span className="neon-gold">DONE RIGHT</span>
            </h1>
          </SectionReveal>
        </div>
      </header>

      <section className="wrap py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
          <SectionReveal>
            <p className="font-display text-2xl md:text-3xl leading-snug mb-6 text-bone">
              Hail Mary's is a sports bar that never forgot how to be a dive.
            </p>
            <div className="space-y-5 text-bone/75 leading-relaxed">
              <p>
                We opened with one rule: make the kind of place we'd actually want to drink at. Strong pours.
                Cold beer. Every TV on every game. A patio you can smoke on. A jukebox the regulars fight over.
                A staff that remembers your drink by the second visit.
              </p>
              <p>
                Tucked inside Westside Cocktail Lounge on Camelback, we've become Glendale's go-to for NFL
                Sundays, Cardinals watch parties, karaoke meltdowns on Thursdays, and Latin night chaos on Saturdays.
                Bingo on Mondays, live rock on Wednesdays, poker on Fridays — there's always something on,
                and it's almost always loud.
              </p>
              <p className="font-script text-3xl text-[var(--gold)]">
                we're not for everyone — and that's kind of the point.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
              <img src={patio} alt="Patio at Hail Mary's" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Amenities */}
      <section className="wrap pb-24">
        <SectionReveal className="mb-8">
          <h2 className="font-display text-4xl md:text-6xl">What's <span className="neon-red">inside</span></h2>
        </SectionReveal>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {AMENITIES.map((a) => (
            <StaggerItem key={a.label}>
              <div className="rounded-2xl border border-white/10 bg-[var(--panel)] p-6 h-full">
                <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-[var(--blitz)]/15 text-[var(--blitz)] [&_svg]:h-6 [&_svg]:w-6">
                  {a.icon}
                </div>
                <div className="font-display text-lg leading-tight">{a.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Contact + Map */}
      <section className="wrap pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <SectionReveal className="rounded-3xl border border-white/10 overflow-hidden bg-[var(--panel)]">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=5114+W+Camelback+Rd,+Glendale,+AZ+85301&output=embed"
              className="w-full h-[460px] grayscale-[40%]"
              loading="lazy"
            />
          </SectionReveal>
          <SectionReveal delay={0.15} className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[var(--panel)] p-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[var(--blitz)] mt-1 shrink-0" />
                <div>
                  <div className="font-display text-xl">VISIT</div>
                  <div className="text-bone/80">5114 W Camelback Rd<br />Glendale, AZ 85301</div>
                  <div className="text-bone/55 text-sm mt-1">(located in Westside Cocktail Lounge)</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[var(--panel)] p-6">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[var(--blitz)] mt-1 shrink-0" />
                <div>
                  <div className="font-display text-xl">HOURS</div>
                  <div className="text-bone/80">Open 7 days a week<br />11:00 AM – 2:00 AM</div>
                </div>
              </div>
            </div>
            <a href="tel:+16239341780" className="block rounded-2xl border border-white/10 bg-[var(--panel)] p-6 hover:border-[var(--blitz)] transition">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[var(--blitz)] mt-1 shrink-0" />
                <div>
                  <div className="font-display text-xl">CALL</div>
                  <div className="font-display text-2xl neon-gold">+1 623-934-1780</div>
                </div>
              </div>
            </a>
            <a href="mailto:hmsportsbar@gmail.com" className="block rounded-2xl border border-white/10 bg-[var(--panel)] p-6 hover:border-[var(--blitz)] transition">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[var(--blitz)] mt-1 shrink-0" />
                <div>
                  <div className="font-display text-xl">EMAIL</div>
                  <div className="text-bone/80 break-all">hmsportsbar@gmail.com</div>
                </div>
              </div>
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* JOIN + SOCIALS */}
      <section className="wrap pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--gold)]/30 bg-gradient-to-br from-[var(--gold)]/10 to-transparent p-10">
            <MessageSquare className="h-10 w-10 text-[var(--gold)] mb-4" />
            <p className="font-script text-3xl text-[var(--gold)] mb-2">drink specials, delivered</p>
            <h3 className="font-display text-4xl mb-3">TEXT "<span className="neon-gold">JOIN</span>" TO 833-366-8785</h3>
            <p className="text-bone/75 mb-6">Early drops on parties, surprise specials, last-minute DJ news. No spam.</p>
            <a href="sms:8333668785?body=JOIN"><CTAButton variant="gold" size="lg">Tap to Join</CTAButton></a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[var(--panel)] p-10">
            <p className="font-script text-3xl text-[var(--gold)] mb-2">follow the chaos</p>
            <h3 className="font-display text-4xl mb-6">We're <span className="neon-red">online</span> too</h3>
            <div className="flex flex-col gap-3">
              <a href="https://instagram.com/hailmaryssportsbar" target="_blank" rel="noopener" className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:border-[var(--blitz)] transition">
                <Instagram className="h-5 w-5 text-[var(--blitz)]" /> <span className="font-display tracking-wider">@hailmaryssportsbar</span>
              </a>
              <a href="https://facebook.com/HailMarysSportsbar" target="_blank" rel="noopener" className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:border-[var(--blitz)] transition">
                <Facebook className="h-5 w-5 text-[var(--blitz)]" /> <span className="font-display tracking-wider">HailMarysSportsbar</span>
              </a>
              <a href="https://tiktok.com/@hailmaryssportsbar" target="_blank" rel="noopener" className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:border-[var(--blitz)] transition">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[var(--blitz)]"><path d="M19.6 6.7a5.7 5.7 0 0 1-3.4-1.1V15a5.5 5.5 0 1 1-4.8-5.4v2.7a2.8 2.8 0 1 0 2 2.7V2h2.6a3.6 3.6 0 0 0 3.6 3.3v1.4Z"/></svg>
                <span className="font-display tracking-wider">@hailmaryssportsbar</span>
              </a>
            </div>
            <p className="mt-8 text-sm text-bone/55">
              <strong className="text-[var(--gold)]">We're hiring.</strong> Friendly bartenders & barbacks who love game day. Email us.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
