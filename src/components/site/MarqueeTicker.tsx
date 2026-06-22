interface Props {
  items: string[];
  accent?: "red" | "gold";
}
export function MarqueeTicker({ items, accent = "red" }: Props) {
  const list = [...items, ...items, ...items];
  return (
    <div
      className={`relative overflow-hidden border-y ${
        accent === "red" ? "border-[var(--blitz)]/40 bg-black" : "border-[var(--gold)]/40 bg-black"
      } py-4`}
    >
      <div className="marquee-track">
        {list.map((t, i) => (
          <span
            key={i}
            className={`mx-8 font-display uppercase text-2xl md:text-3xl tracking-widest ${
              accent === "red" ? "neon-red" : "neon-gold"
            }`}
          >
            {t} <span className="opacity-50 mx-4">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
