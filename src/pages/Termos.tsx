import { Helmet } from "react-helmet-async";
import {
  FileText,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export default function TermosPage() {
  const sections = [
    {
      title: "1. Aceitação dos termos",
      content:
        "Ao acessar o site, utilizar o aplicativo ou contratar qualquer serviço disponibilizado pela Arrive, você declara que leu, compreendeu e concorda com estes Termos de Uso. Caso não concorde com qualquer disposição, recomendamos que não utilize os serviços.",
    },
    {
      title: "2. Sobre a Arrive",
      content:
        "A Arrive é uma plataforma de mobilidade que conecta passageiros e motoristas parceiros por meio de tecnologia, permitindo a solicitação e o agendamento de viagens, conforme disponibilidade da plataforma e da região atendida.",
    },
    {
      title: "3. Cadastro e utilização",
      content:
        "Para utilizar determinados recursos, poderá ser necessário criar uma conta e fornecer informações verdadeiras, completas e atualizadas. O usuário é responsável pela segurança de suas credenciais e por todas as atividades realizadas em sua conta.",
    },
    {
      title: "4. Passageiros",
      content:
        "O passageiro deve utilizar a plataforma de forma responsável, respeitando os motoristas parceiros, as regras de segurança e as condições apresentadas no momento da solicitação ou agendamento da viagem.",
    },
    {
      title: "5. Motoristas parceiros",
      content:
        "Os motoristas parceiros devem atender aos requisitos legais e documentais aplicáveis, manter seus dados atualizados e utilizar a plataforma de acordo com as regras estabelecidas pela Arrive.",
    },
    {
      title: "6. Corridas e valores",
      content:
        "Os valores apresentados na plataforma podem variar de acordo com categoria, distância, horário, disponibilidade, condições de trânsito e demais fatores aplicáveis. Antes da confirmação, sempre que tecnicamente possível, o usuário receberá as informações disponíveis sobre a viagem.",
    },
    {
      title: "7. Segurança",
      content:
        "A Arrive adota recursos e procedimentos destinados a aumentar a segurança da plataforma. Entretanto, nenhum serviço tecnológico é capaz de eliminar completamente todos os riscos inerentes à mobilidade urbana.",
    },
    {
      title: "8. Uso adequado da plataforma",
      content:
        "É proibido utilizar a plataforma para atividades ilícitas, fraudulentas, abusivas, que possam comprometer a segurança de terceiros ou que violem direitos de outras pessoas.",
    },
    {
      title: "9. Disponibilidade do serviço",
      content:
        "A Arrive busca manter seus serviços disponíveis e funcionais, mas determinados recursos podem ficar temporariamente indisponíveis em razão de manutenção, atualizações, falhas técnicas, problemas de conectividade ou fatores externos.",
    },
    {
      title: "10. Alterações",
      content:
        "Estes Termos poderão ser atualizados periodicamente para refletir mudanças nos serviços, na legislação ou nas práticas da Arrive. A versão mais recente estará sempre disponível nesta página.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Termos de Uso — Arrive</title>

        <meta
          name="description"
          content="Consulte os Termos de Uso da plataforma Arrive."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://arriveapp.com.br/termos"
        />
      </Helmet>

      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

        <div className="container-page relative py-24 md:py-32">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Legal
          </span>

          <h1 className="mt-5 text-5xl font-bold md:text-6xl">
            Termos de{" "}
            <span className="text-gradient-gold">
              Uso
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Conheça as condições para utilização dos serviços e da plataforma
            Arrive.
          </p>
        </div>
      </section>

      <main className="container-page py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 flex items-start gap-4 rounded-2xl border border-gold/20 bg-gold/5 p-6">
            <FileText className="mt-1 h-6 w-6 shrink-0 text-gold-deep" />

            <div>
              <h2 className="font-bold text-primary">
                Termos de Uso da Arrive
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Última atualização: agosto de 2026.
              </p>
            </div>
          </div>

          <div className="space-y-10">
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

          <div className="mt-14 rounded-2xl border border-border bg-card p-7">
            <div className="flex gap-4">
              <AlertCircle className="h-6 w-6 shrink-0 text-gold-deep" />

              <div>
                <h3 className="font-bold text-primary">
                  Dúvidas sobre os termos?
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Entre em contato com nossa equipe para esclarecer dúvidas
                  relacionadas à utilização da plataforma.
                </p>

                <a
                  href="mailto:adm@arriveapp.com.br"
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-gold-deep"
                >
                  Falar com a Arrive
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

