import type { Feature } from "../../data/home";

export default function FeatureCard({
  icon: Icon,
  title,
  desc,
}: Feature) {
  return (
    <div className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30">

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-gold">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="relative mt-6 text-xl font-bold text-primary">
        {title}
      </h3>

      <p className="relative mt-3 text-sm leading-6 text-primary/60">
        {desc}
      </p>

      <div className="relative mt-auto pt-6">
        <div className="h-px bg-gradient-to-r from-primary via-white/10 to-transparent" />
      </div>

    </div>
  );
}