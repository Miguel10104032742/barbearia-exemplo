import { useEffect, useState } from 'react'
import { site } from '../config.js'
export default function Gallery() {
  const [sel, setSel] = useState(null)
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setSel(null)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [])
  const hasDemo = site.gallery.some((g) => !g.src)
  return (
    <section id="galeria" className="section">
      <div className="container">
        <span className="eyebrow">Galeria</span>
        <h2>Nossos trabalhos</h2>
        {hasDemo && <p className="note">Imagens demonstrativas até a inclusão das fotos reais.</p>}
        <div className="grid gallery">
          {site.gallery.map((g, i) => (
            <button key={i} className={(g.src ? 'ph shot' : 'ph shot demo') + ' reveal'} onClick={() => setSel(g)} aria-label={`Ampliar: ${g.alt}`}>
              {g.src ? <img src={g.src} alt={g.alt} loading="lazy" /> : <span>Demonstrativa {i + 1}</span>}
            </button>
          ))}
        </div>
      </div>
      {sel && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setSel(null)}>
          <button className="close" aria-label="Fechar">×</button>
          {sel.src ? <img src={sel.src} alt={sel.alt} /> : <div className="ph demo big"><span>{sel.alt}</span></div>}
        </div>
      )}
    </section>
  )
}
