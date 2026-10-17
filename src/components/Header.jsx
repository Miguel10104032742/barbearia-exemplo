import { useState } from 'react'
import { site } from '../config.js'
import WhatsAppButton from './WhatsAppButton.jsx'
const links = [['inicio', 'Início'], ['sobre', 'Sobre'], ['servicos', 'Serviços'], ['galeria', 'Galeria'], ['contato', 'Contato']]
export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container nav">
        <a href="#inicio" className="logo">{site.short}<small>Barbeiro CMS</small></a>
        <nav className={open ? 'menu open' : 'menu'} aria-label="Principal">
          {links.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <WhatsAppButton className="btn btn-sm">Agendar horário</WhatsAppButton>
        <button className="burger" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
      </div>
    </header>
  )
}
