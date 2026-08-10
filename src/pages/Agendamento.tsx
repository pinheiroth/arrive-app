import { Helmet } from "react-helmet-async";
import {
  CalendarClock,
  CheckCircle2,
  MapPin,
  Car,
  Clock3,
  Route,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";


export default function SchedulePage() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("economy");

  // Temporariamente informada pelo usuário.
  // Depois podemos substituir pelo Google Maps.
  const [distanceInput, setDistanceInput] = useState("");

  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);

  const [calculating, setCalculating] = useState(false);

  function calculateRoute() {
    if (!origin || !destination) {
      toast.error("Preencha origem e destino");
      return;
    }

    if (!distanceInput) {
      toast.error("Informe uma distância estimada");
      return;
    }

    const km = Number(
      distanceInput.replace(",", ".")
    );

    if (!Number.isFinite(km) || km <= 0) {
      toast.error("Informe uma distância válida");
      return;
    }

    setCalculating(true);

    // Simulação de cálculo enquanto a API do Google Maps
    // ainda não estiver configurada.
    setTimeout(() => {
      const averageSpeed = 35;

      const minutes = (km / averageSpeed) * 60;

      let pricePerKm = 0;

      switch (category) {
        case "economy":
          pricePerKm = 2.5;
          break;

        case "premium":
          pricePerKm = 4;
          break;

        case "executive":
          pricePerKm = 6;
          break;

        default:
          pricePerKm = 2.5;
      }

      const estimatedPrice = km * pricePerKm;

      setDistance(km);
      setDuration(minutes);
      setPrice(
        Number(estimatedPrice.toFixed(2))
      );

      setCalculating(false);

      toast.success("Estimativa calculada!");
    }, 600);
  }

  useEffect(() => {
    setDistance(null);
    setDuration(null);
    setPrice(null);
  }, [
    origin,
    destination,
    category,
  ]);

  return (
    <>
      <Helmet>
        <title>
          Agendamento Arrive — Agende sua corrida online
        </title>

        <meta
          name="description"
          content="Agende sua corrida com a Arrive. Informe origem, destino, data e horário e consulte uma estimativa de distância, duração e valor."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://arriveapp.com.br/agendamento"
        />

        <meta
          property="og:title"
          content="Agendamento Arrive — Agende sua corrida online"
        />

        <meta
          property="og:description"
          content="Planeje sua viagem com a Arrive e consulte uma estimativa de distância, duração e valor."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://arriveapp.com.br/agendamento"
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
          content="Agendamento Arrive"
        />

        <meta
          name="twitter:description"
          content="Agende sua corrida com a Arrive."
        />
      </Helmet>
      
      <Navbar />

      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

        <div className="container-page relative py-28 md:py-36">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Agendamento online
            </span>

            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
              Agende sua corrida com{" "}
              <span className="text-gradient-gold">
                praticidade.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
              Escolha sua origem, destino, categoria, data e horário.
              Consulte uma estimativa da sua viagem antes de confirmar.
            </p>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="container-page max-w-4xl py-24">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-10">
          {/* HEADER */}
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold-deep">
              <CalendarClock className="h-6 w-6" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                Arrive
              </span>

              <h2 className="text-3xl font-bold text-primary">
                Novo agendamento
              </h2>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {/* ORIGEM */}
            <div>
              <label
                htmlFor="origin"
                className="text-sm font-medium text-muted-foreground"
              >
                Origem
              </label>

              <div className="relative mt-2">
                <MapPin className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />

                <input
                  id="origin"
                  type="text"
                  placeholder="Ex.: Araruama, RJ"
                  value={origin}
                  onChange={(event) =>
                    setOrigin(event.target.value)
                  }
                  className="h-12 w-full rounded-xl border border-input bg-background pl-11 pr-4 outline-none transition focus:border-gold"
                />
              </div>
            </div>

            {/* DESTINO */}
            <div>
              <label
                htmlFor="destination"
                className="text-sm font-medium text-muted-foreground"
              >
                Destino
              </label>

              <div className="relative mt-2">
                <MapPin className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />

                <input
                  id="destination"
                  type="text"
                  placeholder="Ex.: Cabo Frio, RJ"
                  value={destination}
                  onChange={(event) =>
                    setDestination(event.target.value)
                  }
                  className="h-12 w-full rounded-xl border border-input bg-background pl-11 pr-4 outline-none transition focus:border-gold"
                />
              </div>
            </div>

            {/* DISTÂNCIA */}
            <div>
              <label
                htmlFor="distance"
                className="text-sm font-medium text-muted-foreground"
              >
                Distância estimada
              </label>

              <div className="relative mt-2">
                <Route className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />

                <input
                  id="distance"
                  type="number"
                  min="1"
                  step="0.1"
                  placeholder="Ex.: 25"
                  value={distanceInput}
                  onChange={(event) =>
                    setDistanceInput(event.target.value)
                  }
                  className="h-12 w-full rounded-xl border border-input bg-background pl-11 pr-14 outline-none transition focus:border-gold"
                />

                <span className="absolute right-4 top-3.5 text-sm text-muted-foreground">
                  km
                </span>
              </div>

              <p className="mt-2 text-xs text-muted-foreground">
                Por enquanto, informe aproximadamente a distância da viagem.
              </p>
            </div>

            {/* DATA / HORÁRIO */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="date"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Data
                </label>

                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(event) =>
                    setDate(event.target.value)
                  }
                  className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 outline-none transition focus:border-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Horário
                </label>

                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(event) =>
                    setTime(event.target.value)
                  }
                  className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 outline-none transition focus:border-gold"
                />
              </div>
            </div>

            {/* CATEGORIA */}
            <div>
              <label
                htmlFor="category"
                className="text-sm font-medium text-muted-foreground"
              >
                Categoria
              </label>

              <div className="relative mt-2">
                <Car className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />

                <select
                  id="category"
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value)
                  }
                  className="h-12 w-full appearance-none rounded-xl border border-input bg-background pl-11 pr-4 outline-none transition focus:border-gold"
                >
                  <option value="economy">
                    Econômico
                  </option>

                  <option value="premium">
                    Premium
                  </option>

                  <option value="executive">
                    Executivo
                  </option>
                </select>
              </div>
            </div>

            {/* BOTÃO */}
            <button
              type="button"
              onClick={calculateRoute}
              disabled={calculating}
              className="h-12 w-full rounded-xl bg-primary font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {calculating
                ? "Calculando..."
                : "Calcular estimativa"}
            </button>

            {/* RESULTADO */}
            {distance !== null && (
              <div className="rounded-2xl border border-border bg-soft p-6">
                <div className="mb-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                    Estimativa da viagem
                  </span>

                  <h3 className="mt-1 text-xl font-bold text-primary">
                    Confira os valores estimados
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  {/* DISTÂNCIA */}
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Distância
                    </p>

                    <p className="mt-1 text-2xl font-bold text-primary">
                      {distance.toFixed(1)} km
                    </p>
                  </div>

                  {/* TEMPO */}
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Tempo estimado
                    </p>

                    <p className="mt-1 flex items-center gap-2 text-2xl font-bold text-primary">
                      <Clock3 className="h-5 w-5" />

                      {duration?.toFixed(0)} min
                    </p>
                  </div>

                  {/* PREÇO */}
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Valor estimado
                    </p>

                    <p className="mt-1 text-2xl font-bold text-gold-deep">
                      R${" "}
                      {price
                        ?.toFixed(2)
                        .replace(".", ",")}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* AVISO */}
            <div className="flex gap-2 rounded-xl border border-border bg-background p-4 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />

              <span>
                O valor apresentado é apenas uma estimativa. O preço final
                pode variar de acordo com trânsito, horário, categoria e
                condições da viagem.
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

