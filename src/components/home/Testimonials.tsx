import TestimonialCard from "../ui/TestimonialCard";
import { TESTIMONIALS } from "../../data/home";

export default function Testimonials() {
  return (
    <section className="container-page py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
          Quem usa recomenda
        </span>
        <h2 className="mt-3 text-4xl font-bold text-primary">
          O que estão dizendo sobre a Arrive
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}