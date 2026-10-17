import { site } from '../config.js'
import Words from './Words.jsx'
export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container about reveal">
        <div className={site.aboutImage ? 'ph' : 'ph demo'}>
          {site.aboutImage ? <img src={site.aboutImage} alt="Tiago Sant Ana, barbeiro" loading="lazy" /> : <span>Imagem demonstrativa</span>}
        </div>
        <div>
          <span className="eyebrow">Sobre</span>
          <h2 className="fill"><Words text="Tradição, técnica e estilo." /></h2>
          {site.about.map((t, i) => <p key={i} className="fill"><Words text={t} /></p>)}
        </div>
      </div>
    </section>
  )
}
