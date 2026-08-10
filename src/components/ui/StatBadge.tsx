import type { Stat } from "../../data/home";

export default function StatBadge({ value, label }: Stat) {
  return (
    <div>
      <p className="text-3xl font-bold text-gold">{value}</p>
      <p className="text-sm text-white/70">{label}</p>
    </div>
  );
}