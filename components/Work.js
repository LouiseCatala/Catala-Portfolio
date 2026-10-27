"use client"
import { useEffect, useRef, useState } from "react"
import { projects } from "@/data/content"

const featuredSlugs = [
  "kawing",
  "ratheuse",
  "healthtrack",
  "automatic-parking-system"
]

const featuredProjects = featuredSlugs
  .map(slug => projects.find(project => project.slug === slug))
  .filter(Boolean)

export default function Work() {
  const [turn, setTurn] = useState(0)
  const [phase, setPhase] = useState(0)
  const phaseRef = useRef(0)
  const a = ((turn % featuredProjects.length) + featuredProjects.length) % featuredProjects.length
  const p = featuredProjects[a]

  useEffect(() => {
    let frame
    let timer
    const from = phaseRef.current
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches || from === turn ? 0 : 1100
    const started = performance.now()
    const animate = now => {
      const progress = duration ? Math.min((now - started) / duration, 1) : 1
      const eased = progress * progress * (3 - 2 * progress)
      // Interpolate the angle itself so every frame follows the orbit.
      // Keep turns unwrapped: the last-to-first transition moves forward too.
      phaseRef.current = from + (turn - from) * eased
      setPhase(phaseRef.current)
      if (progress < 1) frame = window.requestAnimationFrame(animate)
      else timer = window.setTimeout(() => setTurn(current => current + 1), 5000)
    }
    frame = window.requestAnimationFrame(animate)
    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timer)
    }
  }, [turn])

  const place = i => {
    const angle = ((i - phase) * Math.PI * 2) / featuredProjects.length
    const depth = (Math.cos(angle) + 1) / 2
    const x = Math.sin(angle)
    const y = Math.cos(angle) * 48
    const scale = 0.62 + depth * 0.38
    return {
      transform:`translate(-50%, 0) translate3d(calc(var(--orbit-radius) * ${x}), ${y}px, 0) rotateY(${-x*18}deg) rotate(${-x*6}deg) scale(${scale})`,
      opacity:0.35 + depth * 0.65,
      zIndex:Math.round(depth * 100)
    }
  }

  const select = i => {
    setTurn(current => {
      const active = ((current % featuredProjects.length) + featuredProjects.length) % featuredProjects.length
      const distance = (i - active + featuredProjects.length) % featuredProjects.length
      return current + distance
    })
  }
  return (
    <section id="work" className="section">
      <div className="head-row"><div><p className="eyebrow reveal">Selected Work</p><h2 className="h2 reveal">Work Gallery</h2><p className="muted reveal">A collection of systems, digital projects, and technical work I've built.</p></div><a className="btn dark" href="/work">View More Projects</a></div>
      <div className="album" role="listbox" aria-label="Projects">
        {featuredProjects.map((q,i)=>(<button key={q.title} role="option" aria-selected={i===a} aria-label={q.title} className="shot" style={place(i)} onClick={()=>select(i)}><img src={q.img} alt={q.title} loading="lazy" /></button>))}
      </div>
      <div className="info" key={a} aria-live="polite"><h3>{p.title}</h3><p className="muted">{p.desc}</p><a className="ulink" href={p.href}>View Project →</a></div>
    </section>
  )
}
