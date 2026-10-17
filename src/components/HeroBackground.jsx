import { useEffect, useRef } from 'react'
// 28 · partículas conectadas (douradas). Este é o ponto de encaixe do código de hero do cliente:
// substitua o conteúdo deste componente pela animação definitiva.
export default function HeroBackground() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, x = c.getContext('2d')
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let W, H, raf, run = true, mouse = { x: -999, y: -999 }, P = []
    const size = () => {
      const d = Math.min(devicePixelRatio || 1, 2)
      W = c.clientWidth; H = c.clientHeight; c.width = W * d; c.height = H * d; x.setTransform(d, 0, 0, d, 0, 0)
      P = Array.from({ length: Math.round(clamp(W * H / 14000, 25, 90)) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3 }))
    }
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
    const draw = () => {
      x.clearRect(0, 0, W, H)
      for (const p of P) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy)
        if (d < 120) { p.x += dx / d * 1.2; p.y += dy / d * 1.2 }
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        x.fillStyle = '#c8955a'; x.beginPath(); x.arc(p.x, p.y, 1.6, 0, 7); x.fill()
      }
      for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
        const d = Math.hypot(P[i].x - P[j].x, P[i].y - P[j].y)
        if (d < 130) { x.strokeStyle = `rgba(200,149,90,${(1 - d / 130) * .35})`; x.beginPath(); x.moveTo(P[i].x, P[i].y); x.lineTo(P[j].x, P[j].y); x.stroke() }
      }
    }
    const loop = () => { if (run) { draw(); raf = requestAnimationFrame(loop) } }
    size(); draw()
    const io = new IntersectionObserver(([e]) => { run = e.isIntersecting; if (run && !reduce) loop(); else cancelAnimationFrame(raf) })
    io.observe(c)
    const mv = (e) => { const r = c.getBoundingClientRect(); mouse = { x: e.clientX - r.left, y: e.clientY - r.top } }
    addEventListener('pointermove', mv); addEventListener('resize', size)
    return () => { run = false; cancelAnimationFrame(raf); io.disconnect(); removeEventListener('pointermove', mv); removeEventListener('resize', size) }
  }, [])
  return <canvas ref={ref} className="hero-canvas" data-parallax="0.12" aria-hidden="true" />
}
