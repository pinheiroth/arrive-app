import { Apple, Smartphone } from "lucide-react";

export function StoreBadges({ variant = "light" }: { variant?: "light" | "dark" }) {
  const base =
    variant === "light"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "bg-white text-primary hover:bg-white/90";
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="https://apps.apple.com/br/app/arrive/id6741321636"
        target="_blank"
        rel="noopener noreferrer"
        title="link IOS"
        className={`group inline-flex items-center gap-3 h-14 px-5 rounded-2xl ${base} shadow-soft transition`}
      >
        <Apple className="w-7 h-7" />
        <div className="text-left leading-tight">
          <div className="text-[10px] opacity-75 uppercase tracking-wider">Baixar na</div>
          <div className="text-base font-semibold">App Store</div>
        </div>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=br.com.arrive.passenger.drivermachine&hl=pt_BR"
        target="_blank"
        rel="noopener noreferrer"
        title="link Android"
        className={`group inline-flex items-center gap-3 h-14 px-5 rounded-2xl ${base} shadow-soft transition`}
      >
        <Smartphone className="w-7 h-7" />
        <div className="text-left leading-tight">
          <div className="text-[10px] opacity-75 uppercase tracking-wider">Disponível no</div>
          <div className="text-base font-semibold">Google Play</div>
        </div>
      </a>
    </div>
  );
}
