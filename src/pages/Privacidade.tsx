import { Helmet } from "react-helmet-async";
import {
  ShieldCheck,
  Lock,
  Database,
  UserCheck,
} from "lucide-react";

export default function PrivacidadePage() {
  const sections = [
    {
      title: "1. Informações que podemos coletar",
      content:
        "Dependendo da utilização dos serviços, podemos coletar informações fornecidas pelo usuário, como nome, telefone, e-mail, dados de cadastro, informações necessárias para utilização da plataforma e dados relacionados às viagens realizadas.",
    },
    {
      title: "2. Dados de localização",
      content:
        "Determinados recursos da Arrive podem utilizar informações de localização para permitir funcionalidades como solicitação de corridas, acompanhamento da viagem, cálculo de rotas e melhoria da experiência de mobilidade.",
    },
    {
      title: "3. Como utilizamos os dados",
      content:
        "Os dados podem ser utilizados para fornecer e melhorar nossos serviços, processar solicitações, realizar comunicações relacionadas à plataforma, oferecer suporte, aprimorar segurança, prevenir fraudes e cumprir obrigações legais.",
    },
    {
      title: "4. Compartilhamento de informações",
      content:
        "As informações poderão ser compartilhadas quando necessário para a prestação dos serviços, cumprimento de obrigações legais, processamento de pagamentos, prevenção de fraudes, suporte técnico ou utilização de fornecedores essenciais à operação da plataforma.",
    },
    {
      title: "5. Segurança dos dados",
      content:
        "A Arrive adota medidas técnicas e organizacionais destinadas a proteger os dados contra acesso não autorizado, perda, alteração, divulgação ou destruição indevida. Apesar dessas medidas, nenhum sistema conectado à internet pode garantir segurança absoluta.",
    },
    {
      title: "6. Retenção",
      content:
        "Os dados são mantidos pelo período necessário para cumprir as finalidades para as quais foram coletados, atender obrigações legais e regulatórias, solucionar disputas e proteger os interesses legítimos da plataforma.",
    },
    {
      title: "7. Direitos do titular",
      content:
        "Nos termos da legislação aplicável, especialmente da Lei Geral de Proteção de Dados (LGPD), o titular poderá exercer direitos relacionados aos seus dados pessoais, observadas as hipóteses e limitações previstas em lei.",
    },
    {
      title: "8. Cookies e tecnologias semelhantes",
      content:
        "A Arrive pode utilizar cookies e tecnologias semelhantes para funcionamento do site, análise de desempenho, melhoria da experiência e, quando aplicável, personalização de conteúdos. Consulte nossa Política de Cookies para mais informações.",
    },
    {
      title: "9. Alterações nesta política",
      content:
        "Esta Política de Privacidade poderá ser atualizada periodicamente. Recomendamos que o usuário consulte esta página regularmente para acompanhar eventuais alterações.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Política de Privacidade — Arrive</title>

        <meta
          name="description"
          content="Conheça a Política de Privacidade da Arrive e saiba como tratamos dados pessoais."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://arriveapp.com.br/privacidade"
        />
      </Helmet>

      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

        <div className="container-page relative py-24 md:py-32">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Privacidade
          </span>

          <h1 className="mt-5 text-5xl font-bold md:text-6xl">
            Sua privacidade em{" "}
            <span className="text-gradient-gold">
              primeiro lugar.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Saiba como a Arrive coleta, utiliza, protege e trata informações
            pessoais.
          </p>
        </div>
      </section>

      <main className="container-page py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Proteção",
                text: "Medidas para proteger seus dados.",
              },
              {
                icon: Lock,
                title: "Segurança",
                text: "Controles para reduzir riscos.",
              },
              {
                icon: UserCheck,
                title: "Transparência",
                text: "Informações claras sobre o tratamento.",
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

          <div className="mt-14 rounded-3xl border border-border bg-soft p-8">
            <div className="flex gap-4">
              <Database className="h-6 w-6 shrink-0 text-gold-deep" />

              <div>
                <h3 className="font-bold text-primary">
                  Solicitações relacionadas aos seus dados
                </h3>

                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Para dúvidas ou solicitações relacionadas ao tratamento de
                  dados pessoais, entre em contato com a equipe da Arrive.
                </p>

                <a
                  href="mailto:suporte@arriveonline.com.br"
                  className="mt-4 inline-block font-semibold text-gold-deep"
                >
                  adm@arriveapp.com.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

