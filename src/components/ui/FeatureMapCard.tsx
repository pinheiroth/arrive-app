import { MapPin } from "lucide-react";

export default function FeatureMapCard() {
  return (
    <div className="group relative h-full min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-primary/80 p-8">

      <div className="relative z-10">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-primary">
          <MapPin size={30} />
        </div>

        <h3 className="mt-8 text-3xl font-bold text-white">
          Corridas em tempo real
        </h3>

        <p className="mt-4 max-w-lg text-base leading-7 text-white/60">
          Acompanhe seu motorista ao vivo, visualize a rota e saiba
          exatamente quando ele irá chegar.
        </p>

      </div>

      <div className="absolute inset-x-8 bottom-8 top-[240px] overflow-hidden rounded-3xl border border-white/10 bg-[#101010]">

        <div className="absolute inset-0 opacity-20">

          <div className="absolute left-5 top-8 h-1 w-40 rotate-12 bg-white" />

          <div className="absolute left-20 top-16 h-1 w-52 -rotate-12 bg-white" />

          <div className="absolute left-8 top-28 h-1 w-52 rotate-6 bg-white" />

          <div className="absolute left-16 top-5 h-40 w-1 bg-white" />

          <div className="absolute left-44 top-0 h-44 w-1 bg-white" />

          <div className="absolute right-12 top-12 h-32 w-1 bg-white" />

        </div>

        <div className="absolute left-14 top-10 h-24 w-[3px] rounded-full bg-gradient-to-b from-green-400 to-primary" />

        <div className="absolute left-[49px] top-8 h-6 w-6 rounded-full bg-green-400 shadow-lg shadow-green-400/40" />

        <div className="absolute left-[49px] bottom-8 h-6 w-6 rounded-full bg-primary shadow-lg shadow-primary/40" />

        <div className="absolute left-[41px] top-[52%] flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl animate-pulse">
          🚗
        </div>

        <div className="absolute right-4 top-4 rounded-xl bg-primary px-3 py-2 text-xs font-bold text-white">
          Chegada em 3 min
        </div>

      </div>

    </div>
  );
}