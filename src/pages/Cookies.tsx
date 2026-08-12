import { Helmet } from "react-helmet-async";
import {
  Cookie,
  Settings2,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export default function CookiesPage() {
  const sections = [
    {
      title: "1. O que são cookies?",
      content:
        "Cookies são pequenos arquivos armazenados no dispositivo do usuário quando ele acessa determinados sites. Eles podem permitir que o site reconheça o dispositivo e memorize determinadas informações relacionadas à navegação.",
    },
    {
      title: "2. Como utilizamos cookies",
      content:
        "A Arrive pode utilizar cookies para garantir o funcionamento adequado do site, lembrar determinadas preferências, compreender como os visitantes utilizam nossas páginas e melhorar continuamente a experiência.",
    },
    {
      title: "3. Cookies necessários",
      content:
        "Alguns cookies são essenciais para que determinadas funcionalidades funcionem corretamente. Eles podem estar relacionados à segurança, funcionamento técnico, sessão e recursos fundamentais do site.",
    },
    {
      title: "4. Cookies de desempenho",
      content:
        "Podemos utilizar tecnologias de análise para compreender informações agregadas sobre navegação, como páginas acessadas, desempenho e interações. Essas informações ajudam a identificar oportunidades de melhoria.",
    },
    {
      title: "5. Cookies de preferências",
      content:
        "Cookies de preferência podem ser utilizados para lembrar determinadas escolhas realizadas pelo usuário e proporcionar uma experiência mais conveniente em acessos futuros.",
    },
    {
      title: "6. Controle de cookies",
      content:
        "A maioria dos navegadores permite controlar ou bloquear cookies por meio das configurações do próprio navegador. A desativação de determinados cookies poderá afetar o funcionamento de algumas funcionalidades.",
    },
    {
      title: "7. Tecnologias de terceiros",
      content:
        "Determinadas funcionalidades podem utilizar serviços de terceiros que também empregam cookies ou tecnologias semelhantes. O uso dessas tecnologias está sujeito às políticas aplicáveis de cada fornecedor.",
    },
    {
      title: "8. Atualizações",
      content:
        "Esta Política de Cookies poderá ser atualizada para refletir alterações nos serviços utilizados, na legislação ou nas práticas da Arrive.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Política de Cookies — Arrive</title>

        <meta
          name="description"
          content="Entenda como a Arrive utiliza cookies e tecnologias semelhantes em seu site."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://arriveapp.com.br/cookies"
        />
      </Helmet>

      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

        <div className="container-page relative py-24 md:py-32">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Privacidade
          </span>

          <h1 className="mt-5 text-5xl font-bold md:text-6xl">
            Política de{" "}
            <span className="text-gradient-gold">
              Cookies
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Entenda como utilizamos cookies e tecnologias semelhantes para
            melhorar sua experiência.
          </p>
        </div>
      </section>

      <main className="container-page py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Cookie,
                title: "Cookies",
                text: "Pequenos arquivos usados durante a navegação.",
              },
              {
                icon: Settings2,
                title: "Preferências",
                text: "Recursos para tornar sua experiência melhor.",
              },
              {
                icon: BarChart3,
                title: "Análise",
                text: "Informações agregadas sobre utilização.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <Icon className="h-7 w-7 text-gold-deep" />

                  <h3 className="mt-4 font-bold text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-primary">
                  {section.title}
                </h2>

                <p className="mt-3 leading-8 text-muted-foreground">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-gold/20 bg-gold/5 p-8">
            <div className="flex gap-4">
              <ShieldCheck className="h-6 w-6 shrink-0 text-gold-deep" />

              <div>
                <h3 className="font-bold text-primary">
                  Sua experiência importa
                </h3>

                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Caso tenha dúvidas sobre cookies ou sobre a forma como
                  tratamos informações, nossa equipe está disponível para
                  ajudar.
                </p>

                <a
                  href="mailto:adm@arriveapp.com.br"
                  className="mt-4 inline-block font-semibold text-gold-deep"
                >
                  Falar com a Arrive
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

