import { Helmet } from "react-helmet-async";
import {
  Zap,
  Heart,
  Globe,
  Award,
  ArrowRight,
  Smartphone,
} from "lucide-react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { StoreBadges } from "../components/ui/StoreBadges";

export default function SobrePage() {
  const stats = [
    {
      icon: Zap,
      number: "30s",
      label: "Tempo médio de pedido",
    },
    {
      icon: Heart,
      number: "4.9★",
      label: "Avaliação dos usuários",
    },
    {
      icon: Globe,
      number: "120+",
      label: "Cidades atendidas",
    },
    {
      icon: Award,
      number: "2M+",
      label: "Corridas realizadas",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Baixe e cadastre-se",
      description:
        "Crie sua conta em menos de 2 minutos. Cadastro 100% digital.",
    },
    {
      number: "02",
      title: "Peça ou agende",
      description:
        "Escolha entre corrida imediata ou agendada com antecedência.",
    },
    {
      number: "03",
      title: "Aproveite a viagem",
      description:
        "Acompanhe em tempo real e pague pelo app. Simples assim.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Sobre a Arrive — O app de mobilidade
        </title>

        <meta
          name="description"
          content="Conheça a Arrive: mobilidade segura, prática e moderna. Uma nova experiência para quem precisa se deslocar."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://arriveapp.com.br/sobre"
        />

        <meta
          property="og:title"
          content="Sobre a Arrive — O app de mobilidade"
        />

        <meta
          property="og:description"
          content="Conheça a Arrive e descubra uma nova experiência em mobilidade urbana."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://arriveapp.com.br/sobre"
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
          content="Sobre a Arrive"
        />

        <meta
          name="twitter:description"
          content="Mobilidade que cabe na sua rotina."
        />
      </Helmet>
      
      <Navbar />

      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

        <div className="container-page relative py-28 md:py-36">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Sobre o app
            </span>

            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
              Mobilidade que{" "}
              <span className="text-gradient-gold">
                cabe na sua rotina.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
              A Arrive nasceu para tornar o transporte urbano mais simples,
              mais seguro e mais elegante. Tecnologia, motoristas parceiros e
              uma experiência pensada para quem precisa chegar.
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
                href="/seguranca"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-7 font-semibold transition hover:bg-white/10"
              >
                Conhecer nossa segurança
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO + ESTATÍSTICAS */}
      <section className="container-page grid items-center gap-16 py-24 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
            Nossa missão
          </span>

          <h2 className="mt-3 text-4xl font-bold text-primary">
            Conectar pessoas e lugares com confiança.
          </h2>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Acreditamos que se locomover não deveria ser estressante. Por
            isso construímos uma experiência rápida, intuitiva e transparente
            — onde cada viagem é pensada para ser mais tranquila.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            Com a Arrive você pode acompanhar sua corrida em tempo real,
            escolher sua forma de pagamento e agendar viagens importantes com
            antecedência.
          </p>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-gold/20 bg-gold/5 p-5">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold-deep">
              <Smartphone className="h-5 w-5" />
            </div>

            <div>
              <p className="font-semibold text-primary">
                Uma experiência feita para você
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Do pedido ao destino, tudo pensado para ser simples.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-soft p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <Icon className="h-7 w-7 text-gold-deep" />

                <p className="mt-4 font-display text-3xl font-bold text-primary">
                  {stat.number}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-soft py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
              Simples por natureza
            </span>

            <h2 className="mt-3 text-4xl font-bold text-primary">
              Como funciona
            </h2>

            <p className="mt-4 text-muted-foreground">
              Em três passos você está a caminho.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <span className="font-display text-5xl font-bold text-gradient-gold">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-primary">
                  {step.title}
                </h3>

                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA DOWNLOAD */}
      <section className="container-page py-24">
        <div className="relative overflow-hidden rounded-3xl bg-hero p-10 text-center text-primary-foreground shadow-elegant md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Comece agora
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Pronto para começar?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Baixe a Arrive e descubra uma nova forma de viver a mobilidade,
              com mais praticidade, segurança e liberdade.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <StoreBadges variant="dark" />
            </div>

            <p className="mt-5 text-xs text-primary-foreground/60">
              Disponível para iPhone e Android.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

