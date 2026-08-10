import { MapPin, Shield, CalendarClock, Clock, Smartphone, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Stat = { value: string; label: string };
export type Feature = { icon: LucideIcon; title: string; desc: string };
export type Testimonial = { name: string; city: string; text: string };

export const STATS: readonly Stat[] = [
  { value: "+500", label: "Motoristas parceiros" },
  { value: "24h", label: "Suporte e monitoramento" },
  { value: "4.9★", label: "Avaliação média" },
];

export const FEATURES: readonly Feature[] = [
  {
    icon: MapPin,
    title: "Motorista até você",
    desc: "Solicite sua corrida e acompanhe o deslocamento do motorista em tempo real."
  },
  {
    icon: Shield,
    title: "Segurança em cada viagem",
    desc: "Motoristas parceiros, viagens monitoradas e suporte quando você precisar."
  },
  {
    icon: CalendarClock,
    title: "Agende com antecedência",
    desc: "Programe sua viagem para aeroportos, compromissos, eventos e horários importantes."
  },
  {
    icon: Clock,
    title: "Menos espera",
    desc: "Uma experiência pensada para tornar seus deslocamentos mais rápidos e previsíveis."
  },
  {
    icon: Smartphone,
    title: "Tudo pelo aplicativo",
    desc: "Solicite corridas, acompanhe viagens, consulte seu histórico e gerencie seus pagamentos."
  },
  {
    icon: Star,
    title: "Uma experiência melhor",
    desc: "Avalie sua viagem e ajude a construir uma comunidade baseada em confiança e respeito."
  },
];

export const DRIVER_HIGHLIGHTS: readonly string[] = [
  "Horários 100% flexíveis",
  "Suporte próximo e humanizado",
  "Ganhos mais transparentes",
  "Aplicativo moderno e intuitivo",
];

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Ana Silva",
    city: "Cabo Frio, RJ",
    text: "Sempre senti falta de mais opções de mobilidade na Região dos Lagos. A Arrive trouxe uma proposta moderna, confortável e muito mais prática para os meus deslocamentos."
  },
  {
    name: "Mariana Costa",
    city: "Búzios, RJ",
    text: "A experiência é muito mais organizada do que eu estava acostumada. Poder solicitar e acompanhar a viagem pelo aplicativo faz toda a diferença."
  },
  {
    name: "Ricardo Almeida",
    city: "Niterói, RJ",
    text: "Para nossa empresa, mobilidade precisa significar pontualidade, segurança e previsibilidade. A Arrive tem uma proposta muito alinhada com essa necessidade."
  },
];

