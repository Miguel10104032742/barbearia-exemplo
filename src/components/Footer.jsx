import { site } from '../config.js'
import WhatsAppButton from './WhatsAppButton.jsx'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot">
        <strong>{site.name}</strong>
        <nav aria-label="Rodapé">
          {['inicio:Início', 'sobre:Sobre', 'servicos:Serviços', 'galeria:Galeria', 'contato:Contato'].map((x) => {
            const [id, l] = x.split(':')
            return <a key={id} href={`#${id}`}>{l}</a>
          })}
        </nav>
        <div className="actions">
          <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">Instagram</a>
          <WhatsAppButton className="link">WhatsApp</WhatsAppButton>
        </div>
        <small>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}
