import { Helmet } from "react-helmet-async";
import {
  DollarSign,
  Clock,
  TrendingUp,
  Headphones,
  CheckCircle2,
  Shield,
  Car,
  BadgeCheck,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function DriverPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Ganhos transparentes",
      description:
        "Você sabe exatamente quanto ganha em cada corrida, sem taxas escondidas.",
    },
    {
      icon: Clock,
      title: "Horário 100% flexível",
      description:
        "Dirija quando quiser e organize sua rotina do seu jeito.",
    },
    {
      icon: TrendingUp,
      title: "Mais lucro no bolso",
      description:
        "Uma proposta mais justa para motoristas que querem maximizar ganhos.",
    },
    {
      icon: Headphones,
      title: "Suporte humano",
      description:
        "Equipe preparada para ajudar você sempre que precisar.",
    },
    {
      icon: Shield,
      title: "Mais segurança",
      description:
        "Tecnologia e monitoramento para proteger motoristas e passageiros.",
    },
    {
      icon: BadgeCheck,
      title: "Menos burocracia",
      description:
        "Ajudamos você no processo necessário para rodar regularizado.",
    },
  ];

  const requirements = [
    "Ter 18 anos ou mais",
    "CNH válida com observação EAR",
    "CRLV do veículo em dia",
    "Antecedentes criminais sem registros",
    "Veículo a partir de 2016",
    "Carro em bom estado e revisado",
  ];

  const steps = [
    {
      number: "01",
      title: "Baixe o aplicativo",
      description:
        "Procure por Arrive Motorista na App Store ou Google Play.",
    },
    {
      number: "02",
      title: "Envie seus documentos",
      description:
        "Faça seu cadastro de forma rápida e segura diretamente no app.",
    },
    {
      number: "03",
      title: "Comece a dirigir",
      description:
        "Após aprovação, você já pode aceitar corridas e faturar.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Seja motorista Arrive — Ganhe dirigindo no seu tempo
        </title>

        <meta
          name="description"
          content="Cadastre-se como motorista parceiro Arrive e aumente sua renda com horários flexíveis, suporte humano e taxas transparentes."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://arriveapp.com.br/motorista"
        />

        <meta
          property="og:title"
          content="Seja motorista Arrive — Ganhe dirigindo no seu tempo"
        />

        <meta
          property="og:description"
          content="Dirija com mais liberdade, taxas transparentes e suporte próximo. Faça parte da nova geração da mobilidade urbana."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://arriveapp.com.br/motorista"
        />

        <meta
          property="og:image"
          content="https://arriveapp.com.br/icon_sem_fundo.png"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Seja motorista Arrive"
        />

        <meta
          name="twitter:description"
          content="Ganhe dirigindo no seu tempo com a Arrive."
        />
      </Helmet>

      <Navbar />

      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

        <div className="container-page relative py-28 md:py-36">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Seja parceiro Arrive
            </span>

            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
              Dirija com a{" "}
              <span className="text-gradient-gold">
                Arrive
              </span>{" "}
              e transforme seu tempo em renda.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
              Ganhe dinheiro dirigindo com mais liberdade, taxas
              transparentes e suporte próximo de verdade. Faça parte da nova
              geração da mobilidade urbana no Rio de Janeiro.
            </p>

            <div className="mt-8">
              <a
                href="https://play.google.com/store/apps/details?id=br.com.arrive.taxi.drivermachine&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-8 font-semibold text-accent-foreground transition hover:opacity-90"
              >
                Quero me cadastrar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-page py-24">
        <div className="max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
            Mobilidade inteligente
          </span>

          <h2 className="mt-3 text-4xl font-bold leading-tight text-primary md:text-5xl">
            A Arrive chegou para valorizar quem move o Rio de Janeiro todos
            os dias.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Seja em Cabo Frio, Búzios, Arraial, capital ou outras cidades do
            RJ, queremos oferecer uma plataforma mais justa, moderna e
            transparente para quem dirige.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Aqui você trabalha no seu ritmo, escolhe seus horários e conta
            com uma plataforma pensada para aumentar seus ganhos sem
            burocracia e sem taxas abusivas.
          </p>
        </div>
      </section>

      {/* HERO INFO */}
      <section className="container-page grid items-center gap-16 py-10 lg:grid-cols-2">
        <div className="relative">
          <img
            src="/motorista_app.png"
            alt="Motorista parceiro utilizando o aplicativo Arrive"
            className="w-full rounded-3xl shadow-elegant"
            loading="lazy"
            width={1200}
            height={1200}
          />

          <div className="absolute -bottom-8 -right-4 w-64 rounded-2xl border border-border bg-card p-6 shadow-elegant sm:-right-8">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Ganho potencial
            </p>

            <p className="mt-2 font-display text-3xl font-bold text-primary">
              Até 80%
            </p>

            <p className="mt-1 text-xs text-gold-deep">
              do valor das corridas para você
            </p>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
            Vantagens
          </span>

          <h2 className="mt-3 text-4xl font-bold text-primary">
            Por que dirigir com a Arrive
          </h2>

          <div className="mt-8 space-y-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="flex gap-4"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-primary">
                      {benefit.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 80% */}
      <section className="container-page py-12">
        <div className="relative overflow-hidden rounded-3xl bg-hero p-10 text-primary-foreground md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-gold">
              Transparência de verdade
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Você pode ficar com até{" "}
              <span className="text-gold">80%</span> do valor das viagens.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Nossa proposta é simples: mais transparência e mais valorização
              para quem dirige. Sem pegadinhas, sem taxas abusivas e com foco
              em oferecer uma experiência melhor para motoristas parceiros.
            </p>
          </div>
        </div>
      </section>

      {/* REQUISITOS */}
      <section
        id="cadastro"
        className="bg-soft py-24"
      >
        <div className="container-page max-w-5xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
              Requisitos
            </span>

            <h2 className="mt-3 text-4xl font-bold text-primary">
              O que você precisa para começar
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Seu cadastro é rápido e simples. Confira os requisitos básicos
              para fazer parte da Arrive.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {requirements.map((requirement) => (
              <div
                key={requirement}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-deep" />

                <span className="text-sm font-medium">
                  {requirement}
                </span>
              </div>
            ))}
          </div>

          {/* LICENÇA */}
          <div className="mt-10 rounded-3xl border border-gold/20 bg-gold/5 p-8">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold/15 text-gold-deep">
                <Car className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary">
                  Ainda não possui licença para transporte particular?
                </h3>

                <p className="mt-3 leading-relaxed text-muted-foreground">
                  A Arrive pode orientar você no processo necessário para
                  rodar regularizado no estado do Rio de Janeiro.
                </p>
              </div>
            </div>
          </div>

          {/* PASSOS */}
          <div className="mt-24">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                Como funciona
              </span>

              <h2 className="mt-3 text-4xl font-bold text-primary">
                Comece em 3 passos
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-3xl border border-border bg-card p-8 shadow-sm"
                >
                  <div className="text-5xl font-bold text-gold/70">
                    {step.number}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <form
            className="mt-20 space-y-5 rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-10"
            onSubmit={(event) => event.preventDefault()}
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                Pré-cadastro
              </span>

              <h3 className="mt-2 text-3xl font-bold text-primary">
                Faça seu pré-cadastro
              </h3>

              <p className="mt-2 text-muted-foreground">
                Preencha seus dados e nossa equipe entrará em contato.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="h-12 rounded-xl border border-input bg-background px-4 outline-none transition focus:border-gold"
                placeholder="Nome completo"
                type="text"
                name="name"
                autoComplete="name"
              />

              <input
                className="h-12 rounded-xl border border-input bg-background px-4 outline-none transition focus:border-gold"
                placeholder="E-mail"
                type="email"
                name="email"
                autoComplete="email"
              />

              <input
                className="h-12 rounded-xl border border-input bg-background px-4 outline-none transition focus:border-gold"
                placeholder="Telefone"
                type="tel"
                name="phone"
                autoComplete="tel"
              />

              <input
                className="h-12 rounded-xl border border-input bg-background px-4 outline-none transition focus:border-gold"
                placeholder="Cidade"
                type="text"
                name="city"
                autoComplete="address-level2"
              />
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-primary font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Enviar cadastro
            </button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  );
}

