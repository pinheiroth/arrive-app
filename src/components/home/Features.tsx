import FeatureCard from "../ui/FeatureCard";
import FeatureMapCard from "../ui/FeatureMapCard";
import { FEATURES } from "../../data/home";

export default function Features() {
  return (
    <section className="relative overflow-hidden  py-28">

      <div className="container-page relative mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-semibold text-gold-deep uppercase tracking-wider">
            POR QUE ARRIVE
          </span>

          <h2 className="mt-6 text-4xl text-primary font-bold md:text-5xl">
            Tudo que você espera
            <br />

            <span className="text-gradient-gold">
              de um app de mobilidade.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-black/70">
            Tecnologia, conforto e segurança para transformar cada viagem em uma
            experiência premium.
          </p>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="xl:col-span-2 xl:row-span-2">
            <FeatureMapCard />
          </div>

          {FEATURES.slice(1, 5).map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}