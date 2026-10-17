import { useState } from 'react'
import { site } from '../config.js'
import WhatsAppButton from './WhatsAppButton.jsx'
export default function Services() {
  const [service, setService] = useState(site.services[0].name)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const fmt = (d) => (d ? d.split('-').reverse().join('/') : '')
  return (
    <section id="servicos" className="section alt">
      <div className="container">
        <span className="eyebrow">Serviços</span>
        <h2>Escolha o seu atendimento</h2>
        <p className="note">Preços e durações exibidos são demonstrativos.</p>
        <div className="grid cards">
          {site.services.map((s) => (
            <article key={s.id} className="card spot reveal">
              <div className="icon" aria-hidden="true">{s.icon}</div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <p className="meta">{s.price} · {s.duration}</p>
              <a className="btn btn-sm" href="#agendar" onClick={() => setService(s.name)}>Agendar</a>
            </article>
          ))}
        </div>
        <div id="agendar" className="booking reveal">
          <h3>Agendar horário</h3>
          <div className="fields">
            <label>Serviço
              <select value={service} onChange={(e) => setService(e.target.value)}>
                {site.services.map((s) => <option key={s.id}>{s.name}</option>)}
              </select>
            </label>
            <label>Data desejada<input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></label>
            <label>Horário desejado<input type="time" value={time} onChange={(e) => setTime(e.target.value)} /></label>
          </div>
          <WhatsAppButton service={service} date={fmt(date)} time={time}>Enviar pelo WhatsApp</WhatsAppButton>
          <p className="note">O horário só é confirmado pela barbearia, pelo WhatsApp.</p>
        </div>
      </div>
    </section>
  )
}
