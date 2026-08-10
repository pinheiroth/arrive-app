import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Motorista from "./pages/Motorista"
import Passageiro from "./pages/Passageiro"
import Agendamento from "./pages/Agendamento"
import Ajuda from "./pages/Ajuda"
import Download from "./pages/Download"
import Segurança from "./pages/Segurança"
import CookiesPage from "./pages/Cookies"
import PrivacidadePage from "./pages/Privacidade"
import TermosPage from "./pages/Termos"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/motorista" element={<Motorista />} />
        <Route path="/passageiro" element={<Passageiro />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/download" element={<Download />} />
        <Route path="/seguranca" element={<Segurança />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/privacidade" element={<PrivacidadePage />} />
        <Route path="/termos" element={<TermosPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App