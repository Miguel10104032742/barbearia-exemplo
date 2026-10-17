import { site } from '../config.js'
import WhatsAppButton from './WhatsAppButton.jsx'
import HeroBackground from './HeroBackground.jsx'
import Words from './Words.jsx'
export default function Hero() {
  const bg = site.heroImage ? { backgroundImage: `linear-gradient(#000a,#000d),url(${site.heroImage})` } : undefined
  return (
    <section id="inicio" className="hero" style={bg}>
      <HeroBackground />
      <div className="container hero-in" data-parallax="0.28" data-fade="1">
        <span className="line" />
        <h1><Words cls="hw" text="SEU ESTILO, NOSSA ESPECIALIDADE." /></h1>
        <p className="hero-sub">Mais que um corte, uma experiência feita para valorizar seu estilo.</p>
        <div className="actions hero-act">
          <WhatsAppButton>Agendar pelo WhatsApp</WhatsAppButton>
          <a className="btn btn-ghost" href="#servicos">Conhecer os serviços</a>
        </div>
      </div>
      <a className="scroll-cue" href="#sobre" aria-label="Rolar para baixo"><span /></a>
    </section>
  )
}
