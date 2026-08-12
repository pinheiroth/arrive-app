import { Helmet } from "react-helmet-async";
import { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

const passengerFaqs = [
  {
    q: "Como faço para criar minha conta?",
    a: "Baixe o aplicativo Arrive Passageiro, faça seu cadastro com telefone, e-mail e senha e confirme seu número.",
  },
  {
    q: "Como solicito uma corrida?",
    a: "Abra o aplicativo, informe origem e destino e confirme sua corrida. Um motorista parceiro próximo aceitará sua solicitação.",
  },
  {
    q: "Posso agendar corridas?",
    a: "Sim. Você pode agendar viagens com antecedência diretamente pelo aplicativo.",
  },
  {
    q: "Posso acompanhar meu motorista?",
    a: "Sim. Após aceitar a corrida, o motorista aparece em tempo real no mapa com estimativa de chegada.",
  },
  {
    q: "Existe chat entre passageiro e motorista?",
    a: "Sim. O aplicativo possui chat interno seguro para facilitar a comunicação durante o embarque.",
  },
  {
    q: "Posso adicionar paradas?",
    a: "Sim. Você pode adicionar múltiplos destinos antes de confirmar a corrida.",
  },
];

const driverFaqs = [
  {
    q: "Como faço meu cadastro como motorista?",
    a: "Baixe o aplicativo Arrive Motorista e envie seus dados e documentos diretamente pela plataforma.",
  },
  {
    q: "Quais documentos são necessários?",
    a: "CNH com EAR, documento do veículo, comprovante de residência e antecedentes criminais.",
  },
  {
    q: "Qual idade mínima para dirigir?",
    a: "O motorista parceiro deve possuir pelo menos 21 anos.",
  },
  {
    q: "Como funciona a aprovação?",
    a: "Nossa equipe realiza análise documental e validação de segurança antes da aprovação.",
  },
  {
    q: "Como recebo corridas?",
    a: "Basta ficar online no aplicativo Arrive Motorista para começar a receber chamadas próximas.",
  },
  {
    q: "Como funciona o despacho automático?",
    a: "Nosso sistema inteligente identifica motoristas próximos para enviar solicitações rapidamente.",
  },
];

export default function HelpPage() {
  const [openPassenger, setOpenPassenger] = useState<number | null>(0);
  const [openDriver, setOpenDriver] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>FAQ, Ajuda e Suporte — Arrive</title>

        <meta
          name="description"
          content="Tire suas dúvidas, fale com nosso suporte e encontre respostas rápidas sobre o Arrive."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://arriveapp.com.br/ajuda"
        />

        <meta
          property="og:title"
          content="FAQ, Ajuda e Suporte — Arrive"
        />

        <meta
          property="og:description"
          content="Encontre respostas rápidas sobre corridas, agendamentos, cadastro de motoristas e suporte Arrive."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://arriveapp.com.br/ajuda"
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
          content="Ajuda e Suporte — Arrive"
        />

        <meta
          name="twitter:description"
          content="Tire suas dúvidas e encontre respostas rápidas sobre o Arrive."
        />
      </Helmet>

      <Navbar/>

      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

        <div className="container-page relative py-28 md:py-36">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              FAQ · Ajuda · Suporte
            </span>

            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
              Como podemos{" "}
              <span className="text-gradient-gold">
                ajudar você?
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Respostas rápidas para as dúvidas mais comuns. Se precisar de
              mais ajuda, nosso time está pronto para atender você.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 py-24 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-16">
            <div>
              <div className="mb-10">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-border" />

                  <h2 className="whitespace-nowrap text-3xl font-bold text-gradient-gold md:text-4xl">
                    Passageiros
                  </h2>

                  <div className="h-px flex-1 bg-border" />
                </div>

                <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
                  Tire suas dúvidas sobre corridas, pagamentos, agendamentos
                  e recursos do app Arrive.
                </p>
              </div>

              <div className="space-y-3">
                {passengerFaqs.map((faq, index) => {
                  const isOpen = openPassenger === index;

                  return (
                    <div
                      key={faq.q}
                      className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-gold/50"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenPassenger(
                            isOpen ? null : index
                          )
                        }
                        className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-primary">
                          {faq.q}
                        </span>

                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-gold-deep transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="mb-10">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-border" />

                  <h2 className="whitespace-nowrap text-3xl font-bold text-gradient-gold md:text-4xl">
                    Motoristas Parceiros
                  </h2>

                  <div className="h-px flex-1 bg-border" />
                </div>

                <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
                  Informações sobre cadastro, documentos, recebimento de
                  corridas e ganhos na plataforma.
                </p>
              </div>

              <div className="space-y-3">
                {driverFaqs.map((faq, index) => {
                  const isOpen = openDriver === index;

                  return (
                    <div
                      key={faq.q}
                      className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-gold/50"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDriver(
                            isOpen ? null : index
                          )
                        }
                        className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-primary">
                          {faq.q}
                        </span>

                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-gold-deep transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <aside className="self-start space-y-4 lg:sticky lg:top-24">
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
              Atendimento
            </span>

            <h3 className="mt-2 text-3xl font-bold text-primary">
              Fale com a gente
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Não encontrou o que procurava? Nossa equipe está pronta para
              ajudar.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-gold hover:shadow-elegant">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                <MessageCircle className="h-5 w-5" />
              </div>

              <div>
                <p className="font-bold text-primary">
                  Chat no app
                </p>

                <p className="text-sm text-muted-foreground">
                  Disponível 24h
                </p>
              </div>
            </div>

            <a
              href="/download"
              className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Abrir aplicativo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-gold hover:shadow-elegant">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                <Mail className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <p className="font-bold text-primary">
                  E-mail
                </p>

                <p className="truncate text-sm text-muted-foreground">
                  adm@arriveapp.com.br
                </p>
              </div>
            </div>

            <a
              href="mailto:adm@arriveapp.com.br"
              className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Enviar e-mail
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-gold hover:shadow-elegant">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                <MessageCircle className="h-5 w-5" />
              </div>

              <div>
                <p className="font-bold text-primary">
                  WhatsApp
                </p>

                <p className="text-sm text-muted-foreground">
                  (22) 99999-9999
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/5521983809240"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Abrir WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </aside>
      </section>

      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-hero p-10 text-primary-foreground shadow-elegant md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Ainda precisa de ajuda?
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Estamos aqui para ajudar.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Nossa equipe trabalha para oferecer uma experiência cada vez
              melhor para passageiros e motoristas parceiros.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:adm@arriveapp.com.br"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-7 font-semibold text-accent-foreground transition hover:opacity-90"
              >
                Falar com suporte
                <ArrowRight className="h-4 w-4" />
              </a>

            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

