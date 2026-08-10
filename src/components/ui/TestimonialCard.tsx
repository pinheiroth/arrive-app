import { MapPin, Star } from "lucide-react";
import type { Testimonial } from "../../data/home";

export default function TestimonialCard({
  name,
  city,
  text,
}: Testimonial) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06]">

      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="absolute right-7 top-5 select-none text-7xl font-serif leading-none text-primary/40">
        “
      </div>

      <div className="relative flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-primary text-primary"
          />
        ))}
      </div>

      <p className="relative mt-7 text-lg leading-8 text-gray-600">
        “{text}”
      </p>

      <div className="relative mt-8 h-px bg-gradient-to-r from-primary/40 via-white/10 to-transparent" />

      <div className="relative mt-6 flex items-center gap-4">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-bold text-primary">
          {name
            .split(" ")
            .map((word) => word[0])
            .slice(0, 2)
            .join("")}
        </div>

        <div>
          <h4 className="font-semibold text-gray-600">
            {name}
          </h4>

          <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-400">
            <MapPin className="h-3.5 w-3.5" />
            <span>{city}</span>
          </div>
        </div>

      </div>

    </div>
  );
}