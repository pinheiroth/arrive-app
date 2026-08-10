import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Star } from "lucide-react";

import TripPreviewCard from "./TripPreviewCard";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-background text-white">
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Hero"
          className="h-full w-full object-cover object-center"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/70 to-[#050505]/35" />
        <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-yellow-400/10 blur-[150px]" />

      </div>

      <div className="container-page relative mx-auto grid min-h-screen max-w-7xl items-center gap-24 px-6 pt-28 pb-16 lg:grid-cols-[1fr_560px]">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />

            <span className="text-xs text-yellow-400 font-semibold uppercase tracking-[0.25em] text-primary">
              Disponível 24 horas • Motoristas verificados
            </span>
          </div>

          <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl xl:text-7xl">
            Peça sua corrida
            <br />

            <span className="text-gradient-gold">
              em segundos.
            </span>

            <br />

            Chegue com tranquilidade.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">
            Viaje com motoristas verificados, acompanhe sua corrida em tempo
            real e aproveite uma experiência de mobilidade moderna, executiva, rápida e
            segura.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/download"
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-yellow-400 px-8 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(250,204,21,.35)]"
            >
              Baixar aplicativo

              <ArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              to="/sobre"
              className="inline-flex h-14 items-center rounded-full border border-white/10 bg-white/5 px-8 backdrop-blur-xl transition hover:bg-white/10"
            >
              Como funciona
            </Link>

          </div>

          <div className="mt-12 flex items-center gap-4">

            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <div>
              <p className="font-semibold">
                Avaliação média 4.9
              </p>

              <p className="text-sm text-white/50">
                Experiência premium em cada viagem.
              </p>
            </div>

          </div>

        </div>

        <div className="relative hidden justify-center lg:flex">

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px]" />

          <div className="relative z-10 w-full max-w-[560px]">

            <div className="absolute inset-0 rounded-[40px] bg-primary/20 blur-3xl" />

            <TripPreviewCard />

          </div>

        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/40 lg:flex">

        <span className="text-[11px] uppercase tracking-[0.35em]">
          Explorar
        </span>

        <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />

        <ChevronDown className="animate-bounce" />

      </div>

    </section>
  );
}