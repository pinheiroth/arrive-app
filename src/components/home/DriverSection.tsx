import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import CheckItem from "../ui/CheckItem";
import { DRIVER_HIGHLIGHTS } from "../../data/home";

export default function DriverSection() {
  return (
    <section className="container-page py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <img
            src="/driver.jpg"
            alt="Motorista Arrive"
            className="w-full rounded-3xl shadow-elegant"
            loading="lazy"
          />

          <div className="absolute -bottom-6 -right-6 rounded-2xl border border-border bg-card p-6 shadow-elegant">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Ganhos transparentes
            </p>
            <p className="mt-2 text-4xl font-bold text-primary">Até 80%</p>
            <p className="text-sm text-gold-deep">do valor das corridas</p>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
            Motoristas parceiros
          </span>

          <h2 className="mt-3 text-4xl font-bold leading-tight text-primary md:text-5xl">
            Mais liberdade e mais lucro para quem dirige.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A Arrive foi criada para oferecer uma plataforma mais justa,
            transparente e inteligente para motoristas parceiros.
          </p>

          <div className="mt-8 space-y-5">
            {DRIVER_HIGHLIGHTS.map((text) => (
              <CheckItem key={text} text={text} />
            ))}
          </div>

          <Link
            to="/motorista"
            className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Seja motorista parceiro
            <TrendingUp className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}