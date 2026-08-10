import { Helmet } from "react-helmet-async";
import {
  Shield,
  Clock3,
  BadgeDollarSign,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function PassageiroPage() {
  const benefits = [
    {
      icon: Clock3,
      title: "Rapidez e praticidade",
      description:
        "Solicite sua corrida em poucos segundos e chegue ao destino sem complicação.",
    },
    {
      icon: Shield,
      title: "Segurança em primeiro lugar",
      description:
        "Motoristas verificados e recursos inteligentes para proteger cada viagem.",
    },
    {
      icon: BadgeDollarSign,
      title: "Preço justo",
      description:
        "Tarifas transparentes e competitivas sem surpresas no final da corrida.",
    },
    {
      icon: MapPin,
      title: "Cobertura inteligente",
      description:
        "Conectamos você aos melhores motoristas da sua região.",
    },
  ];

  const steps = [
    "Baixe o aplicativo Arrive",
    "Faça seu cadastro rapidamente",
    "Informe origem e destino",
    "Confirme e aguarde seu motorista",
  ];

  return (
    <>
      <Helmet>
        <title>Viaje conosco — Arrive</title>

        <meta
          name="description"
          content="Viaje com conforto, segurança e preço justo usando o Arrive."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://arriveapp.com.br/passageiro"
        />

        <meta
          property="og:title"
          content="Viaje conosco — Arrive"
        />

        <meta
          property="og:description"
          content="Viaje com conforto, segurança e preço justo usando o Arrive."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://arriveapp.com.br/passageiro"
        />

        <meta
          property="og:image"
          content="https://arriveapp.com.br/og-image.jpg"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Viaje conosco — Arrive"
        />

        <meta
          name="twitter:description"
          content="Viaje com conforto, segurança e preço justo usando o Arrive."
        />
      </Helmet>

      <Navbar />

      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 bg-black/10" />

        <div className="container-page relative py-28 md:py-36">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Viaje com a Arrive
            </span>

            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
              Descubra a melhor forma de viajar no{" "}
              <span className="text-gradient-gold">
                Rio de Janeiro
              </span>
              .
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Corridas rápidas, seguras e com preço justo. A Arrive conecta
              você aos melhores motoristas parceiros da sua região com
              conforto, praticidade e tecnologia.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/download"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-7 font-semibold text-accent-foreground transition hover:opacity-90"
              >
                Baixar aplicativo
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/sobre"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-7 transition hover:bg-white/10"
              >
                Conhecer a Arrive
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
            Por que escolher a Arrive
          </span>

          <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
            Mobilidade moderna feita para você.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-soft py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
              Como funciona
            </span>

            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Comece sua viagem em minutos
            </h2>

            <p className="mt-4 text-muted-foreground">
              Simples, rápido e seguro.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="relative rounded-2xl border border-border bg-card p-7"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gold font-bold text-black">
                  {index + 1}
                </div>

                <p className="mt-5 text-lg font-semibold leading-relaxed text-primary">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="relative overflow-hidden rounded-3xl bg-hero p-10 text-primary-foreground md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Seu próximo destino começa aqui
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Viaje com conforto, segurança e agilidade usando Arrive.
            </h2>

            <p className="mt-5 max-w-2xl text-lg text-white/80">
              Uma nova experiência em mobilidade urbana no Rio de Janeiro.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/download"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-7 font-semibold text-accent-foreground transition hover:opacity-90"
              >
                Baixar agora
              </a>

              <a
                href="/motorista"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-7 transition hover:bg-white/10"
              >
                Seja motorista parceiro
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

