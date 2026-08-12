import { Helmet } from "react-helmet-async";
import {
  ShieldCheck,
  AlertCircle,
  Eye,
  Share2,
  UserCheck,
  Lock,
} from "lucide-react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";


export default function SafetyPage() {
  const safetyFeatures = [
    {
      icon: UserCheck,
      title: "Motoristas verificados",
      description:
        "Todos os parceiros passam por análise documental, antecedentes criminais e validação de identidade antes da aprovação.",
    },
    {
      icon: Eye,
      title: "Monitoramento em tempo real",
      description:
        "As viagens são acompanhadas pelo sistema Arrive com alertas automáticos para rotas suspeitas ou paradas incomuns.",
    },
    {
      icon: AlertCircle,
      title: "Botão de emergência",
      description:
        "Motoristas parceiros podem acionar discretamente o botão de pânico diretamente pelo aplicativo em situações de emergência.",
    },
    {
      icon: Share2,
      title: "Compartilhe sua corrida",
      description:
        "Passageiros podem compartilhar os detalhes da viagem em tempo real com familiares e amigos.",
    },
    {
      icon: Lock,
      title: "Suporte rápido via WhatsApp",
      description:
        "Nossa equipe oferece suporte ágil e humanizado para ajudar passageiros e motoristas sempre que necessário.",
    },
    {
      icon: ShieldCheck,
      title: "Compromisso contínuo com segurança",
      description:
        "Estamos constantemente aprimorando nossos sistemas e protocolos para tornar cada viagem mais segura.",
    },
  ];

  const stats = [
    {
      number: "100%",
      label: "das viagens monitoradas",
    },
    {
      number: "24/7",
      label: "central de emergência ativa",
    },
    {
      number: "<5min",
      label: "tempo médio de resposta",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Segurança Arrive — Sua viagem protegida do início ao fim
        </title>

        <meta
          name="description"
          content="Conheça os recursos de segurança do Arrive: motoristas verificados, monitoramento em tempo real e botão de emergência."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://arriveapp.com.br/seguranca"
        />

        <meta
          property="og:title"
          content="Segurança Arrive — Sua viagem protegida do início ao fim"
        />

        <meta
          property="og:description"
          content="Tecnologia, monitoramento e suporte humano para tornar cada viagem Arrive mais segura."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://arriveapp.com.br/seguranca"
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
          content="Segurança Arrive"
        />

        <meta
          name="twitter:description"
          content="Sua viagem protegida do início ao fim."
        />
      </Helmet>

      <Navbar />
      
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

        <div className="container-page relative py-28 md:py-36">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Segurança
            </span>

            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
              Sua segurança é o nosso{" "}
              <span className="text-gradient-gold">
                ponto de partida.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
              Tecnologia, processos e pessoas trabalhando para que cada
              viagem termine bem. Veja como cuidamos de você.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page grid items-center gap-14 py-24 lg:grid-cols-2">
        <div>
          <img
            src="safety.jpg"
            alt="Segurança durante uma viagem com a Arrive"
            className="w-full rounded-3xl shadow-elegant"
            loading="lazy"
            width={1200}
            height={1200}
          />
        </div>

        <div className="space-y-6">
          {safetyFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex gap-4 rounded-2xl border border-border p-5 transition hover:border-gold"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold text-accent-foreground shadow-gold">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-primary">
                    {feature.title}
                  </h2>

                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-elegant md:p-14">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
              Segurança levada a sério
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-primary">
              Tecnologia e suporte humano trabalhando juntos.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Na Arrive, segurança não é apenas um recurso — é parte da
              experiência. Nossa plataforma foi construída para oferecer mais
              tranquilidade tanto para passageiros quanto para motoristas
              parceiros.
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Com monitoramento inteligente, suporte rápido, verificação de
              usuários e ferramentas de emergência integradas ao aplicativo,
              buscamos tornar cada viagem mais segura do início ao fim.
            </p>
          </div>
        </div>
      </section>
      
      <section className="container-page pb-24">
        <div className="grid gap-8 rounded-3xl bg-hero p-10 text-primary-foreground shadow-elegant md:grid-cols-3 md:p-14">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-5xl font-bold text-gradient-gold">
                {stat.number}
              </p>

              <p className="mt-2 text-primary-foreground/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
}

