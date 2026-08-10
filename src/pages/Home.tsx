import { Helmet } from "react-helmet-async";

import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import DriverSection from "../components/home/DriverSection";
import Testimonials from "../components/home/Testimonials";
import Cta from "../components/home/Cta";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arrive",
    url: "https://arriveapp.com.br/",
    logo: "https://arriveapp.com.br/logo.png",
    description:
      "Plataforma de mobilidade urbana com corridas rápidas, seguras e confortáveis.",
    email: "contato@arrive.app",
    telephone: "+55 800 123 4567",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Rio de Janeiro",
    },
    sameAs: [
      // Adicione aqui as redes oficiais da Arrive quando estiverem definidas
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Arrive — Mobilidade inteligente, segura e do seu jeito
        </title>

        <meta
          name="description"
          content="Viaje com a Arrive. Corridas rápidas, seguras e confortáveis, com motoristas parceiros, agendamento e uma experiência moderna de mobilidade."
        />

        <meta
          name="keywords"
          content="Arrive, aplicativo de transporte, mobilidade urbana, corrida, transporte, motorista, Cabo Frio, Araruama, Búzios, Região dos Lagos, Rio de Janeiro"
        />

        <meta name="author" content="Arrive" />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <meta name="googlebot" content="index, follow" />

        <link
          rel="canonical"
          href="https://arriveapp.com.br/"
        />

        <meta httpEquiv="content-language" content="pt-BR" />

        <meta property="og:type" content="website" />

        <meta
          property="og:locale"
          content="pt_BR"
        />

        <meta
          property="og:site_name"
          content="Arrive"
        />

        <meta
          property="og:title"
          content="Arrive — Mobilidade inteligente, segura e do seu jeito"
        />

        <meta
          property="og:description"
          content="Uma nova experiência em mobilidade. Peça, agende e acompanhe sua viagem com a Arrive."
        />

        <meta
          property="og:url"
          content="https://arriveapp.com.br/"
        />

        <meta
          property="og:image"
          content="https://arriveapp.com.br/og-image.jpg"
        />

        <meta
          property="og:image:alt"
          content="Arrive — Mobilidade inteligente"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Arrive — Mobilidade inteligente"
        />

        <meta
          name="twitter:description"
          content="Viaje com conforto, segurança e praticidade usando a Arrive."
        />

        <meta
          name="twitter:image"
          content="https://arriveapp.com.br/og-image.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />

      <main>
        <Hero />
        <Features />
        <DriverSection />
        <Testimonials />
        <Cta />
      </main>

      <Footer />
    </>
  );
}

