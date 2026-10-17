import { site, mapsHref } from '../config.js'
import WhatsAppButton from './WhatsAppButton.jsx'
export default function Contact() {
  const maps = mapsHref()
  return (
    <section id="contato" className="section">
      <div className="container reveal">
        <span className="eyebrow">Contato</span>
        <h2>Venha nos visitar</h2>
        <div className="grid contact">
          {site.address && <div><h3>Endereço</h3><p>{site.address}</p></div>}
          {site.hours.length > 0 && (
            <div><h3>Horário de funcionamento</h3>
              {site.hours.map((h) => <p key={h.dia}>{h.dia}: {h.horas}</p>)}
            </div>
          )}
          <div><h3>Fale com a gente</h3>
            <div className="actions">
              <WhatsAppButton>WhatsApp</WhatsAppButton>
              <a className="btn btn-ghost" href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">@{site.instagram}</a>
              {maps && <a className="btn btn-ghost" href={maps} target="_blank" rel="noopener noreferrer">Abrir no Google Maps</a>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
