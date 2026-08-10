import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";

type NavItem = { to: string; label: string };

const NAV_ITEMS: readonly NavItem[] = [
  { to: "/", label: "Início" },
  { to: "/passageiro", label: "Viaje conosco" },
  { to: "/motorista", label: "Seja motorista" },
  { to: "/seguranca", label: "Segurança" },
  { to: "/agendamento", label: "Agendamento" },
  { to: "/sobre", label: "Sobre" },
  { to: "/ajuda", label: "Ajuda" },
];

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const scrolledByPage = useScrolled(50);
  const scrolled = solid || scrolledByPage;
  const location = useLocation();
  const menuId = "mobile-nav";

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className={`flex h-16 items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "border border-black/5 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          <NavLink
            to="/"
            className="relative flex h-14 w-[180px] shrink-0 items-center overflow-hidden sm:w-[220px]"
          >
            <img
              src="/logo_sem_fundo.png"
              alt="Arrive"
              className={`absolute left-0 h-9 object-contain transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] sm:h-10 md:h-12 ${
                scrolled
                  ? "-translate-x-[250px] scale-75 rotate-[-8deg] opacity-0 blur-[2px]"
                  : "translate-x-0 scale-100 opacity-100"
              }`}
            />
            <img
              src="/icon_sem_fundo.png"
              alt=""
              aria-hidden="true"
              className={`absolute left-0 h-14 w-14 object-contain transition-all delay-300 duration-700 ease-out sm:h-16 sm:w-16 ${
                scrolled
                  ? "translate-x-0 scale-100 opacity-100"
                  : "-translate-x-10 scale-50 opacity-0"
              }`}
            />
          </NavLink>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_ITEMS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `relative py-1 text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:transition-transform after:duration-300 after:bg-current ${
                    isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                  } ${
                    scrolled
                      ? isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                      : isActive
                      ? "text-gold"
                      : "text-white hover:text-gold"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((o) => !o)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors lg:hidden ${
              scrolled ? "text-primary hover:bg-black/5" : "text-white hover:bg-white/10"
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Menu mobile — também flutuante, abaixo da barra */}
        <nav
          id={menuId}
          aria-hidden={!open}
          className={`mt-2 grid overflow-hidden rounded-2xl border border-black/5 bg-white/95 shadow-lg backdrop-blur-xl transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 space-y-1 p-3">
            {NAV_ITEMS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `flex min-h-11 items-center rounded-xl px-4 text-base transition-colors ${
                    isActive
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-gray-800 hover:bg-black/5"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}