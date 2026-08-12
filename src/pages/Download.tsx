import { Helmet } from "react-helmet-async";
import { Smartphone, Zap, ShieldCheck, CarFront } from "lucide-react";
import { StoreBadges } from "../components/ui/StoreBadges";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

//const PASSENGER_ANDROID_URL =
  //"https://play.google.com/store/apps/details?id=br.com.arrive.passenger.drivermachine&hl=pt_BR";

//const PASSENGER_IOS_URL =
 // "https://apps.apple.com/br/app/arrive/id6741321636";

const DRIVER_ANDROID_URL =
  "https://play.google.com/store/apps/details?id=br.com.arrive.taxi.drivermachine&hl=pt_BR";

const benefits = [
  {
    icon: Zap,
    title: "Rápido de instalar",
    description:
      "Menos de 50MB. Funciona até em conexões mais lentas.",
  },
  {
    icon: Smartphone,
    title: "Compatível",
    description:
      "Disponível para Android e iOS, com experiência otimizada para todos os tamanhos de tela.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro e privado",
    description:
      "Seus dados protegidos com segurança durante toda a sua experiência.",
  },
];

export default function Download() {
  return (
    <>
      <Helmet>
        <title>
          Baixar Arrive — Aplicativo para Passageiros e Motoristas
        </title>

        <meta
          name="description"
          content="Baixe o Arrive para passageiros ou motoristas. Disponível para Android e iPhone."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://arriveapp.com.br/download"
        />

        <meta
          property="og:title"
          content="Baixar Arrive — Passageiros e Motoristas"
        />

        <meta
          property="og:description"
          content="Baixe o aplicativo Arrive para passageiros ou motoristas."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://arriveapp.com.br/download"
        />

        <meta
          property="og:image"
          content="https://arriveapp.com.br/og-image.jpg"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      <Navbar />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img
            src="/chofer.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-black/55" />

        <div className="container-page flex min-h-[420px] items-center py-24">
          <div className="max-w-3xl text-white">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Aplicativo Arrive
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Mobilidade do seu jeito.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Escolha como você quer usar o Arrive: como passageiro ou
              motorista.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Baixe o aplicativo
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Escolha o aplicativo que você precisa e faça o download
              diretamente pela loja do seu celular.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-soft p-8 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-accent-foreground">
                  <Smartphone className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary">
                    Aplicativo Passageiro
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Peça e agende suas corridas pelo Arrive.
                  </p>
                </div>
              </div>

              {/* 
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  
                  <a
                    href={PASSENGER_IOS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-border bg-card p-5 text-center transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="rounded-xl bg-white p-3">
                      <img
                        src="/qr-code-ios.png"
                        alt="QR Code para baixar o Arrive Passageiro no iPhone"
                        className="mx-auto h-40 w-40 object-contain"
                      />
                    </div>

                    <p className="mt-4 font-semibold text-primary">
                      iPhone
                    </p>

                    <p className="text-xs text-muted-foreground">
                      App Store
                    </p>
                  </a>
  
                  <a
                    href={PASSENGER_ANDROID_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-border bg-card p-5 text-center transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="rounded-xl bg-white p-3">
                      <img
                        src="/qr-code-android.png"
                        alt="QR Code para baixar o Arrive Passageiro no Android"
                        className="mx-auto h-40 w-40 object-contain"
                      />
                    </div>

                    <p className="mt-4 font-semibold text-primary">
                      Android
                    </p>

                    <p className="text-xs text-muted-foreground">
                      Google Play
                    </p>
                  </a> 
               </div>
               */}

              <div className="mt-8 flex flex-col items-center">
                <StoreBadges variant="dark" />
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-soft p-8 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-accent-foreground">
                  <CarFront className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary">
                    Aplicativo Motorista
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Conecte-se aos passageiros e comece a dirigir. Disdisponível apenas para Android.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center">
                {/*
                  <a
                    href={DRIVER_ANDROID_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-border bg-card p-5 text-center transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="rounded-xl bg-white p-3">
                      <img
                        src="/android.png"
                        alt="icon para baixar o Arrive Motorista no Android"
                        className="h-48 w-48 object-contain"
                      />
                    </div>

                    <p className="mt-4 font-semibold text-primary">
                      Android
                    </p>

                    <p className="text-xs text-muted-foreground">
                      Google Play
                    </p>
                  </a> 
                */}

                <a
                  href={DRIVER_ANDROID_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Baixar aplicativo do motorista
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Arrive
            </span>

            <h2 className="mt-3 text-4xl font-bold text-primary">
              Tudo o que você precisa em um só lugar.
            </h2>

            <ul className="mt-8 space-y-5">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <li
                    key={benefit.title}
                    className="flex gap-4"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold text-accent-foreground shadow-gold">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-bold text-primary">
                        {benefit.title}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}