export function Footer() {
  return (
    <footer className="border-t border-border bg-hero">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-xl">
                <img
                src="logo_sem_fundo.png"
                alt="Arrive"
                className="h-8 object-contain"
                />
                <img src="icon_sem_fundo.png" alt="Icon" className="h-15 object-contain invert" />
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
                Mobilidade inteligente, segura e elegante. Chegue onde precisa, do seu jeito.
            </p>
           </div>
          <div>
            <h3 className="text-sm text-gold font-semibold">Produto</h3>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="#app"
                  className="transition-colors hover:text-foreground"
                >
                  Sobre o app
                </a>
              </li>

              <li>
                <a
                  href="#agendamento"
                  className="transition-colors hover:text-foreground"
                >
                  Agendamento
                </a>
              </li>

              <li>
                <a
                  href="#seguranca"
                  className="transition-colors hover:text-foreground"
                >
                  Segurança
                </a>
              </li>

              <li>
                <a
                  href="#download"
                  className="transition-colors hover:text-foreground"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gold">Empresa</h3>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="#motorista"
                  className="transition-colors hover:text-foreground"
                >
                  Seja motorista
                </a>
              </li>

              <li>
                <a
                  href="#suporte"
                  className="transition-colors hover:text-foreground"
                >
                  Ajuda & Suporte
                </a>
              </li>

              <li>
                <a
                  href="#carreiras"
                  className="transition-colors hover:text-foreground"
                >
                  Carreiras
                </a>
              </li>

              <li>
                <a
                  href="#imprensa"
                  className="transition-colors hover:text-foreground"
                >
                  Imprensa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gold">Contato</h3>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">

              <li>
                <a
                  href="mailto:adm@arriveapp.com.br"
                  className="transition-colors hover:text-foreground"
                >
                  adm@arriveapp.com.br
                </a>
              </li>

              <li>
                <a
                  href="tel:+5508001234567"
                  className="transition-colors hover:text-foreground"
                >
                  0800 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            <p>© {new Date().getFullYear()} Arrive. Todos os direitos reservados.</p>
            <p className="mt-1">CNPJ: 58.428.499/0001-12</p>
            <a href="https://www.asacompany.com.br" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
              Desenvolvido por A.S.A Company
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href="/termos"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Termos
            </a>

            <a
              href="/privacidade"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Privacidade
            </a>

            <a
              href="/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}