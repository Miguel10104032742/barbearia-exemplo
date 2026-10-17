import { site } from '../config.js'
export default function Differentials() {
  return (
    <section className="section alt">
      <div className="container grid diffs">
        {site.differentials.map((d) => (
          <div key={d.title} className="diff reveal">
            <div className="icon" aria-hidden="true">{d.icon}</div>
            <h3>{d.title}</h3>
            <p>{d.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
