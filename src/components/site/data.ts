import bingo from "@/assets/bingo.jpg";
import billiards from "@/assets/billiards.jpg";
import liveBand from "@/assets/live-band.jpg";
import karaoke from "@/assets/karaoke.jpg";
import poker from "@/assets/poker.jpg";
import latin from "@/assets/latin-night.jpg";
import gameday from "@/assets/gameday-crowd.jpg";
import dj from "@/assets/dj-night.jpg";
import type { EventCardData } from "./EventCard";

export const WEEKLY_EVENTS: EventCardData[] = [
  {
    day: "MON",
    title: "Dammit Bingo",
    time: "Sign-up 7PM · Bingo 7:30PM",
    desc: "Bingo with attitude. Cash prizes, salty callers, $5 well drinks, and the loudest BINGO! shout in Glendale.",
    image: bingo,
    tag: "Cash Prizes",
  },
  {
    day: "TUE",
    title: "Throwback Tuesday + Straight 8 Billiards",
    time: "Pool tourney 8PM",
    desc: "All your favorite throwback jams pumping while Straight 8 runs the 'Hail of a Shot' billiards tournament. Rack 'em up.",
    image: billiards,
    tag: "Tournament",
  },
  {
    day: "WED",
    title: "Rockin' Wednesday",
    time: "Live bands from 9PM",
    desc: "Local rock bands taking over our stage. Loud guitars, cold beer, no cover. Hump day done right.",
    image: liveBand,
    tag: "Live Music",
  },
  {
    day: "THU",
    title: "Ladies Night & Karaoke",
    time: "Karaoke 9PM",
    desc: "Ladies get 2-for-1 well drinks all night. Mic's open at nine. Bring the crew, butcher a ballad.",
    image: karaoke,
    tag: "2-for-1 Wells",
  },
  {
    day: "FRI",
    title: "$5 Fridays + Poker Night",
    time: "Poker 8PM",
    desc: "Five-buck specials across the bar and a poker table that runs till someone busts. Friday night, dialed up.",
    image: poker,
    tag: "$5 Drinks",
  },
  {
    day: "SAT",
    title: "Latin Night",
    time: "10PM till late",
    desc: "Reggaeton, salsa, perreo. $6 1800 shots. The patio packs out. Wear something you can dance in.",
    image: latin,
    tag: "$6 Shots",
  },
  {
    day: "SUN",
    title: "NFL Sunday + Cardinals Watch Party",
    time: "Doors 11AM · Kickoff = chaos",
    desc: "Every game, every screen. Happy Hour ALL day. Cardinals fans drink first. Touchdowns = shots.",
    image: gameday,
    tag: "Happy Hour ALL DAY",
  },
];

export const SPECIAL_PARTIES: EventCardData[] = [
  {
    day: "SAT NOV 16",
    title: "Neon Rodeo Late Night",
    time: "10PM · DJ ROJO",
    desc: "Cowboy boots meet neon lights. Mechanical bull on the patio (probably), two-step on the floor, tequila everywhere.",
    image: dj,
    tag: "Featured",
  },
  {
    day: "FRI NOV 22",
    title: "Cardinals Pre-Game Tailgate",
    time: "Doors 5PM",
    desc: "Tailgate inside our walls. Game-day jerseys = free shot. Wing platters at half-price till kickoff.",
    image: gameday,
  },
  {
    day: "FRI DEC 6",
    title: "Heavyweight Boxing PPV",
    time: "Main card 7PM",
    desc: "All TVs locked on the fight. Buckets of Bud Light, pizza specials, and ringside seating in the booths.",
    image: liveBand,
    tag: "PPV",
  },
];
