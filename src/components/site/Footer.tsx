import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5 bg-black pt-20 pb-10">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="font-display text-4xl neon-red mb-3">HAIL MARY'S</div>
            <p className="font-script text-2xl text-[var(--gold)] mb-4">
              the best damn dive bar in glendale
            </p>
            <p className="text-bone/70 text-sm max-w-sm mb-6">
              Sports. Strong drinks. Loud nights. Open 7 days a week, until 2AM.
              Come for the game, stay for the party.
            </p>
            <Link to="/reserve">
              <CTAButton variant="blitz">Reserve Your Spot</CTAButton>
            </Link>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest text-[var(--gold)] mb-4">EXPLORE</h4>
            <ul className="space-y-3 text-bone/80">
              <li><Link to="/events" className="hover:text-[var(--blitz)]">What's On</Link></li>
              <li><Link to="/game-day" className="hover:text-[var(--blitz)]">Game Day</Link></li>
              <li><Link to="/menu" className="hover:text-[var(--blitz)]">Menu & Drinks</Link></li>
              <li><Link to="/gallery" className="hover:text-[var(--blitz)]">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-[var(--blitz)]">About / Contact</Link></li>
              <li><Link to="/reserve" className="hover:text-[var(--blitz)]">Reserve</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest text-[var(--gold)] mb-4">VISIT</h4>
            <ul className="space-y-3 text-bone/80 text-sm">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[var(--blitz)]" /> 5114 W Camelback Rd<br />Glendale, AZ 85301</li>
              <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 mt-0.5 text-[var(--blitz)]" /> 7 days a week<br />11:00 AM – 2:00 AM</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-[var(--blitz)]" /> <a href="tel:+16239341780" className="hover:text-bone">+1 623-934-1780</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-[var(--blitz)]" /> <a href="mailto:hmsportsbar@gmail.com" className="hover:text-bone">hmsportsbar@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest text-[var(--gold)] mb-4">JOIN THE CLUB</h4>
            <p className="text-bone/70 text-sm mb-4">
              Get drink specials & event drops straight to your phone.
            </p>
            <a
              href="sms:8333668785?body=JOIN"
              className="block rounded-xl border border-[var(--gold)]/40 bg-[var(--gold)]/5 p-4 hover:bg-[var(--gold)]/10 transition glow-gold"
            >
              <div className="font-display text-xs tracking-widest text-[var(--gold)]">TEXT</div>
              <div className="font-display text-2xl neon-gold">JOIN</div>
              <div className="font-display text-sm tracking-wider text-bone/80">to 833-366-8785</div>
            </a>
            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com/hailmaryssportsbar" target="_blank" rel="noopener" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-[var(--blitz)] hover:text-[var(--blitz)] transition" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com/HailMarysSportsbar" target="_blank" rel="noopener" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-[var(--blitz)] hover:text-[var(--blitz)] transition" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://tiktok.com/@hailmaryssportsbar" target="_blank" rel="noopener" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-[var(--blitz)] hover:text-[var(--blitz)] transition" aria-label="TikTok">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M19.6 6.7a5.7 5.7 0 0 1-3.4-1.1V15a5.5 5.5 0 1 1-4.8-5.4v2.7a2.8 2.8 0 1 0 2 2.7V2h2.6a3.6 3.6 0 0 0 3.6 3.3v1.4Z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-bone/50">
          <p>© {new Date().getFullYear()} Hail Mary's Sports Bar. 21+ with valid ID. Drink responsibly.</p>
          <p>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noopener"
              className="text-[var(--gold)] hover:text-bone"
            >
              The Innovations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
