import { motion } from "framer-motion";

export function MenuItemCard({
  name,
  price,
  desc,
  highlight,
}: {
  name: string;
  price: string;
  desc?: string;
  highlight?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`flex items-start gap-4 rounded-xl border p-5 transition ${
        highlight
          ? "border-[var(--gold)]/40 bg-gradient-to-br from-[var(--gold)]/10 to-transparent glow-gold"
          : "border-white/8 bg-[var(--panel)] hover:border-[var(--blitz)]/40"
      }`}
    >
      <div className="flex-1 min-w-0">
        <h4 className="font-display text-xl tracking-wide">{name}</h4>
        {desc && <p className="mt-1 text-sm text-bone/65">{desc}</p>}
      </div>
      <div className={`shrink-0 font-display text-2xl ${highlight ? "neon-gold" : "text-[var(--gold)]"}`}>
        {price}
      </div>
    </motion.div>
  );
}
