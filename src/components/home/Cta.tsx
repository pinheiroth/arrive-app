import { StoreBadges } from "../ui/StoreBadges";

export default function Cta() {
  return (
    <section className="container-page pb-10">
      <div className="relative overflow-hidden rounded-3xl bg-hero p-10 text-primary-foreground shadow-elegant md:p-16">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Baixe o Arrive e descubra uma nova forma de se mover.
            </h2>
            <p className="mt-4 max-w-lg text-primary-foreground/80">
              Disponível para iPhone e Android. Cadastro em menos de 2 minutos.
            </p>
          </div>

         <div className="lg:justify-self-end">
            <StoreBadges variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}