import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Differentials from './components/Differentials.jsx'
import Contact from './components/Contact.jsx'
import { initMotion } from './motion.js'
import Footer from './components/Footer.jsx'
export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) return els.forEach((e) => e.classList.add('in'))
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: 0.12 })
    els.forEach((e) => io.observe(e))
    const stop = initMotion()
    return () => { io.disconnect(); stop() }
  }, [])
  return (<><div id="progress" aria-hidden="true" /><Header /><main><Hero /><About /><Services /><Gallery /><Differentials /><Contact /></main><Footer /></>)
}
