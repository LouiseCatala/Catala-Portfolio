"use client"
import { useEffect, useState } from "react"
import { nav } from "@/data/content"
export default function Nav({ items = nav, brandHref = "#top", contactHref = "/contact", compact = false }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(false)
  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark")
    const f = () => setScrolled(window.scrollY > 20)
    f(); window.addEventListener("scroll", f, { passive:true })
    return () => window.removeEventListener("scroll", f)
  }, [])
  const toggle = () => {
    const t = dark ? "light" : "dark"
    document.documentElement.dataset.theme = t
    try { localStorage.setItem("theme", t) } catch {}
    setDark(!dark)
  }
  return (
    <header className={`nav ${scrolled ? "scrolled" : ""} ${open ? "open" : ""} ${compact ? "nav-compact" : ""}`}>
      <div className="nav-row">
        <a href={brandHref} className="brand"><span className="logo">O</span><span className="brand-name">LOUISE</span></a>
        <nav className="links" aria-label="Primary">{items.map(([l,h]) => <a key={h} href={h}>{l}</a>)}</nav>
        <div className="nav-right">
          <button className={`theme ${dark ? "is-dark" : ""}`} onClick={toggle} aria-label="Toggle theme"><span className="sun">☀</span><span className="moon">☾</span></button>
          <a href={contactHref} className="btn outline hire">Hire Me</a>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(!open)}><i /><i /><i /></button>
        </div>
      </div>
      <div className="mobile-links">{items.map(([l,h]) => <a key={h} href={h} onClick={()=>setOpen(false)}>{l}</a>)}<a href={contactHref} onClick={()=>setOpen(false)}>Hire Me</a></div>
    </header>
  )
}
