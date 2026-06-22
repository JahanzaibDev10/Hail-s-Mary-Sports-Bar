import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionReveal, Stagger, StaggerItem } from "@/components/site/SectionReveal";
import { Carousel } from "@/components/site/Carousel";
import { X } from "lucide-react";
import gameday from "@/assets/gameday-crowd.jpg";
import bar from "@/assets/bar-tvs.jpg";
import billiards from "@/assets/billiards.jpg";
import karaoke from "@/assets/karaoke.jpg";
import patio from "@/assets/patio.jpg";
import liveBand from "@/assets/live-band.jpg";
import bingo from "@/assets/bingo.jpg";
import poker from "@/assets/poker.jpg";
import dj from "@/assets/dj-night.jpg";
import latin from "@/assets/latin-night.jpg";
import cocktail from "@/assets/cocktail.jpg";
import margaritas from "@/assets/margaritas.jpg";
import whiskey from "@/assets/whiskey.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside Hail Mary's Sports Bar" },
      { name: "description", content: "Inside Hail Mary's: game day crowds, neon nights, the patio, karaoke, live bands, billiards. The vibe, captured." },
    ],
  }),
  component: Gallery,
});

const IMAGES = [
  { src: gameday, alt: "Crowd cheering on game day", span: "lg:col-span-2 lg:row-span-2" },
  { src: karaoke, alt: "Karaoke night" },
  { src: billiards, alt: "Billiards under neon" },
  { src: patio, alt: "Outdoor patio at night", span: "lg:col-span-2" },
  { src: liveBand, alt: "Live band" },
  { src: bingo, alt: "Bingo night" },
  { src: poker, alt: "Poker night" },
  { src: dj, alt: "DJ night", span: "lg:col-span-2 lg:row-span-2" },
  { src: latin, alt: "Latin night" },
  { src: cocktail, alt: "Cocktail" },
  { src: bar, alt: "Wall of TVs" },
  { src: margaritas, alt: "Margaritas" },
  { src: whiskey, alt: "Whiskey" },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  return (
    <>
      <header className="pt-40 pb-12 border-b border-white/5">
        <div className="wrap text-center">
          <SectionReveal>
            <p className="font-script text-3xl text-[var(--gold)] mb-3">caught on camera</p>
            <h1 className="font-display text-6xl md:text-9xl leading-[0.85]">
              THE <span className="neon-red">GALLERY</span>
            </h1>
            <p className="mt-4 text-bone/70 max-w-xl mx-auto">
              A dive bar lives in its details — the crowd, the neon, the spilled beer, the dancing on chairs.
              Here's ours.
            </p>
          </SectionReveal>
        </div>
      </header>

      {/* Carousel */}
      <section className="wrap py-16">
        <SectionReveal className="mb-6">
          <h2 className="font-display text-3xl md:text-5xl">Lately at <span className="neon-gold">Hail Mary's</span></h2>
        </SectionReveal>
        <Carousel slideClassName="min-w-0 flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_38%]">
          {IMAGES.slice(0, 8).map((img, i) => (
            <button key={i} onClick={() => setLightbox(i)} className="block w-full aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 group">
              <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </button>
          ))}
        </Carousel>
      </section>

      {/* Masonry */}
      <section className="wrap pb-24">
        <Stagger gap={0.04} className="grid gap-4 grid-cols-2 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px]">
          {IMAGES.map((img, i) => (
            <StaggerItem key={i} className={img.span || ""}>
              <button
                onClick={() => setLightbox(i)}
                className="group block h-full w-full overflow-hidden rounded-2xl border border-white/10"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-md grid place-items-center p-6"
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-bone/80 hover:text-bone" aria-label="Close">
              <X className="h-8 w-8" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={IMAGES[lightbox].src}
              alt={IMAGES[lightbox].alt}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
