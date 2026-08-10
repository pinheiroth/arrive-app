import {
  Phone,
  MessageCircle,
  Shield,
  Star,
  Clock3,
  MapPin,
  Navigation,
} from "lucide-react";

export default function TripPreviewCard() {
  return (
    <>
      <div className="mb-5 rounded-3xl border border-white/10 bg-background/20 p-6 text-center backdrop-blur-xl">
        <p className="text-xs font-bold text-yellow-400 uppercase tracking-[0.25em] text-primary">
          ARRIVE 
        </p>

        <h3 className="mt-3 text-3xl font-bold text-white">
          Seu motorista está a caminho
        </h3>

        <p className="mt-2 text-white/70">
        Reserve sua corrida com segurança, conforto e pontualidade.
        </p>
      </div>

      <div className="overflow-hidden rounded-[34px] border border-white/10 bg-background/20 shadow-2xl backdrop-blur-xl">

        <div className="relative h-52 w-full bg-white/5">

          <div className="absolute left-8 top-8">
            <TripStop
              label="Origem"
              value="Av. Delfim Moreira"
              dotClass="bg-green-400"
              showLine
            />

            <TripStop
              label="Destino"
              value="Aeroporto Galeão"
              dotClass="bg-primary"
            />
          </div>

          <div className="absolute right-6 top-6 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg">
            18 min
          </div>
        </div>

        <div className="border-t border-white/10 p-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-white/50">
                Motorista chegando
              </p>

              <h3 className="text-xl font-bold text-white">
                Jonas Silva
              </h3>

              <div className="mt-2 flex items-center gap-2 text-sm text-white/60">
                <Star size={15} className="fill-yellow-400 text-yellow-400" />
                4.98
              </div>
            </div>

            <img
              src="/driver.jpg"
              alt="Motorista"
              className="h-16 w-16 rounded-full object-cover border-2 border-primary"
            />
          </div>

          <div className="mt-6 rounded-2xl bg-white/5 p-4">

            <div className="flex items-center justify-between">

              <div>
                <p className="font-semibold text-white">
                  Honda Civic Touring
                </p>

                <p className="text-sm text-white/60">
                  Branco • ABC-1234
                </p>
              </div>

              <Shield className="text-green-400" size={22} />

            </div>

            <div className="mt-5 grid grid-cols-3 gap-4 text-center">

              <Info
                icon={<Clock3 size={18} className="text-white"/>}
                title="Chegada"
                value="3 min"
              />

              <Info
                icon={<Navigation size={18} className="text-white"/>}
                title="Distância"
                value="5,2 km"
              />

              <Info
                icon={<MapPin size={18} className="text-white"/>}
                title="Preço"
                value="R$ 42,90"
              />

            </div>
          </div>

          <div className="mt-6 flex gap-3">

            <button className="flex-1 rounded-xl bg-yellow-400 py-3 font-semibold text-black transition hover:scale-[1.02] cursor-pointer">
              Confirmar viagem
            </button>

            <button className="rounded-xl border border-white/10 px-4 transition hover:scale-[1.02] cursor-pointer">
              <Phone className="text-green-400"/>
            </button>

            <button className="rounded-xl border border-white/10 px-4 transition hover:scale-[1.02] cursor-pointer">
              <MessageCircle className="text-yellow-400"/>
            </button>

          </div>

        </div>
      </div>
    </>
  );
}

type TripStopProps = {
  label: string;
  value: string;
  dotClass: string;
  showLine?: boolean;
};

function TripStop({
  label,
  value,
  dotClass,
  showLine = false,
}: TripStopProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`h-4 w-4 rounded-full ${dotClass}`} />
        {showLine && (
          <div className="mt-1 h-12 w-px bg-white/30" />
        )}
      </div>

      <div>
        <p className="text-xs uppercase text-white/50">
          {label}
        </p>

        <p className="font-medium text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-center text-primary">
        {icon}
      </div>

      <p className="text-xs text-white/50">
        {title}
      </p>

      <p className="font-semibold text-white">
        {value}
      </p>
    </div>
  );
}