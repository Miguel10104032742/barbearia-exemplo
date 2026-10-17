// Motor de movimento: tudo em JS puro, sem bibliotecas. Respeita prefers-reduced-motion.
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
export function initMotion() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  const bar = document.getElementById('progress')
  const fills = [...document.querySelectorAll('.fill')].map((el) => ({ el, w: [...el.querySelectorAll('.w')] }))
  const par = [...document.querySelectorAll('[data-parallax]')]
  let ticking = false
  const update = () => {
    ticking = false
    const y = scrollY, vh = innerHeight
    if (bar) bar.style.transform = `scaleX(${clamp(y / (document.documentElement.scrollHeight - vh))})`
    // 04 · texto que se preenche com a rolagem
    fills.forEach(({ el, w }) => {
      const r = el.getBoundingClientRect()
      const p = clamp((vh * 0.85 - r.top) / (r.height + vh * 0.35))
      w.forEach((s, i) => s.classList.toggle('on', reduce || i / w.length < p * 1.08))
    })
    // parallax e dissolução do hero: sensação de página contínua
    if (!reduce && y < vh * 1.2)
      par.forEach((el) => {
        const k = parseFloat(el.dataset.parallax)
        el.style.transform = `translate3d(0,${y * k}px,0)`
        if (el.dataset.fade) el.style.opacity = clamp(1 - y / (vh * 0.75))
      })
  }
  const onScroll = () => !ticking && ((ticking = true), requestAnimationFrame(update))
  addEventListener('scroll', onScroll, { passive: true })
  addEventListener('resize', onScroll)
  update()
  // 12 · luz que segue o mouse nos cartões
  const off = []
  document.querySelectorAll('.spot').forEach((c) => {
    const m = (e) => { const r = c.getBoundingClientRect(); c.style.setProperty('--mx', `${e.clientX - r.left}px`); c.style.setProperty('--my', `${e.clientY - r.top}px`) }
    c.addEventListener('pointermove', m); off.push(() => c.removeEventListener('pointermove', m))
  })
  // 14 · botão magnético/elástico
  if (!reduce && matchMedia('(hover:hover)').matches)
    document.querySelectorAll('.hero .btn').forEach((b) => {
      const mv = (e) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)` }
      const lv = () => (b.style.transform = '')
      b.addEventListener('pointermove', mv); b.addEventListener('pointerleave', lv)
      off.push(() => { b.removeEventListener('pointermove', mv); b.removeEventListener('pointerleave', lv) })
    })
  return () => { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); off.forEach((f) => f()) }
}
