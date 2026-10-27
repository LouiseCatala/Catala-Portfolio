"use client"
import { useEffect, useState } from "react"
export function Curves() {
  return (<svg className="curves" viewBox="0 0 1440 3000" preserveAspectRatio="none" aria-hidden="true"><path d="M-100 300 C 300 100, 600 700, 1000 450 S 1500 200, 1600 600" /><path d="M-100 1100 C 400 900, 700 1500, 1100 1200 S 1500 1000, 1600 1400" /><path d="M-100 1900 C 300 1700, 800 2300, 1200 2000 S 1500 1900, 1600 2300" /><path d="M-100 2600 C 400 2400, 700 2900, 1100 2650 S 1500 2500, 1600 2800" /></svg>)
}
export function Reveal() {
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target) } }), { threshold:0.12 })
    document.querySelectorAll(".reveal").forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
  return null
}
export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => { const f = () => setShow(window.scrollY > 600); f(); window.addEventListener("scroll", f, { passive:true }); return () => window.removeEventListener("scroll", f) }, [])
  return <a href="#top" className={`btt ${show ? "show" : ""}`} aria-label="Back to top">↑</a>
}
