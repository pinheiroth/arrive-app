import { Helmet } from "react-helmet-async";
import { Smartphone, Zap, ShieldCheck } from "lucide-react";
import { StoreBadges } from "../components/ui/StoreBadges";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Download() {
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
        "iOS 14+ e Android 8+. Otimizado para todos os tamanhos de tela.",
    },
    {
      icon: ShieldCheck,
      title: "Seguro e privado",
      description:
        "Seus dados protegidos com criptografia de ponta a ponta.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Baixar Arrive — App de mobilidade na App Store e Google Play
        </title>

        <meta
          name="description"
          content="Baixe o Arrive grátis para iPhone e Android. Comece a pedir e agendar corridas em minutos."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://arriveapp.com.br/download"
        />

        <meta
          property="og:title"
          content="Baixar Arrive — Mobilidade inteligente"
        />

        <meta
          property="og:description"
          content="Baixe o Arrive para iPhone ou Android e tenha uma experiência de mobilidade mais simples, segura e confortável."
        />

        <meta
          property="og:type"
          content="website"
        />

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

        <meta
          name="twitter:title"
          content="Baixar Arrive — Mobilidade inteligente"
        />

        <meta
          name="twitter:description"
          content="Baixe o Arrive para iPhone ou Android."
        />
      </Helmet>

      <Navbar />

      <section className="relative isolate overflow-hidden"> 
        <div className="absolute inset-0 -z-20"> 
          <img src="/chofer.png" alt="" className="h-full w-full object-cover" /> 
        </div> 
          <div className="absolute inset-0 -z-10 bg-black/55" /> 
          <div className="container-page flex min-h-[420px] items-center py-24"> 
            <div className="max-w-3xl text-white"> 
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold"> 
               Download 
              </span> 
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"> 
                Baixe o Arrive e comece agora. 
              </h1> 
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85"> 
                Disponível gratuitamente para iPhone e Android. Cadastro em menos de 2 minutos. 
              </p> 
            </div> 
          </div> 
      </section>

      <section className="container-page grid items-center gap-14 py-24 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-soft p-10 text-center shadow-soft">
          <h2 className="text-2xl font-bold text-primary">
            Baixe o Arrive
          </h2>

          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            Escaneie o QR Code abaixo e baixe o aplicativo diretamente na
            loja do seu celular.
          </p>

          <div className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-6 sm:grid-cols-2">
  
            <div className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
              <div className="rounded-xl bg-white p-3">
                <img
                  src="qr-code-ios.png"
                  alt="QR Code para baixar o Arrive no iPhone"
                  className="h-40 w-40 object-contain sm:h-48 sm:w-48 lg:h-56 lg:w-56"
                />
              </div>

              <span className="text-sm font-semibold">
                iPhone
              </span>

              <span className="text-xs text-muted-foreground">
                App Store
              </span>
            </div>

            <div className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
              <div className="rounded-xl bg-white p-3">
                <img
                  src="qr-code-android.png"
                  alt="QR Code para baixar o Arrive no Android"
                  className="h-40 w-40 object-contain sm:h-48 sm:w-48 lg:h-56 lg:w-56"
                />
              </div>

              <span className="text-sm font-semibold">
                Android
              </span>

              <span className="text-xs text-muted-foreground">
                Google Play
              </span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-primary">
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

          <div className="mt-10">
            <StoreBadges variant="dark" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

