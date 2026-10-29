"use client"

import { useEffect, useRef, useState } from "react"

const SESSION_KEY = "orland-portfolio-tour-seen"
const steps = [
  { selector: ".hero-intro h1", text: "Hey, I’m Louise. Welcome to my Website!" },
  { selector: '.links a[href="#work"]', text: "See what I’ve built here." },
  { selector: '.links a[href="#what-i-can-do"]', text: "Explore my technical skills." },
  { selector: '.links a[href="#about"]', text: "Get to know me a little better." },
  { selector: '.links a[href="#experience"]', text: "See my work experience here." },
  { selector: '.links a[href="#certifications"]', text: "See my certificates here." },
  { selector: '.links a[href="#education"]', text: "Here’s my educational background." },
  { selector: ".theme", text: "Switch between light and dark mode." },
  { selector: ".hire", text: "Let’s work together. Reach me here!" },
  { selector: ".hero-intro h1", text: "That’s the end of the tour. Enjoy your stay!" },
]

export default function MouseTour() {
  const [eligible, setEligible] = useState(false)
  const [running, setRunning] = useState(false)
  const [run, setRun] = useState(0)
  const [announcement, setAnnouncement] = useState("")
  const cursor = useRef(null)
  const bubble = useRef(null)
  const text = useRef(null)

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)")
    let timer
    const sync = () => {
      setEligible(media.matches)
      window.clearTimeout(timer)
      if (!media.matches) { setRunning(false); return }
      let seen = false
      try { seen = sessionStorage.getItem(SESSION_KEY) === "1" } catch {}
      if (!seen) timer = window.setTimeout(() => setRunning(true), 1400)
    }
    sync()
    media.addEventListener("change", sync)
    return () => { window.clearTimeout(timer); media.removeEventListener("change", sync) }
  }, [])

  useEffect(() => {
    if (!running || !eligible) return
    try { sessionStorage.setItem(SESSION_KEY, "1") } catch {}
    let frame, index = 0, elapsed = 0, previous = 0, typed = -1, announced = false
    let from = { x: window.innerWidth * .45, y: window.innerHeight * .55 }
    let shown = { ...from }
    setAnnouncement("")

    const advance = () => {
      index += 1
      elapsed = 0
      typed = -1
      announced = false
      from = { ...shown }
    }
    const onKey = event => { if (event.key === "Escape") setRunning(false) }
    window.addEventListener("keydown", onKey)

    const animate = now => {
      const dt = previous ? Math.min(now - previous, 50) : 0
      previous = now
      if (document.hidden) { frame = requestAnimationFrame(animate); return }
      if (index >= steps.length) { setRunning(false); return }
      const current = steps[index]
      const target = current.selector ? document.querySelector(current.selector) : null
      const rect = target?.getBoundingClientRect()
      // Follow the visitor’s viewport without scrolling it or clicking for them.
      if (current.selector && (!rect || !rect.width || rect.bottom < 0 || rect.top > window.innerHeight)) {
        advance()
        frame = requestAnimationFrame(animate)
        return
      }
      elapsed += dt
      const goal = rect
        ? { x: rect.left + rect.width * .75, y: rect.bottom + 10 }
        : { x: window.innerWidth * .52, y: window.innerHeight * .4 }
      goal.x = Math.max(24, Math.min(goal.x, window.innerWidth - 28))
      goal.y = Math.max(24, Math.min(goal.y, window.innerHeight - 90))
      const progress = Math.min(elapsed / 850, 1)
      const ease = progress * progress * (3 - 2 * progress)
      shown = {
        x: from.x + (goal.x - from.x) * ease,
        y: from.y + (goal.y - from.y) * ease - Math.sin(Math.PI * progress) * 35,
      }
      if (cursor.current) {
        cursor.current.style.transform = `translate3d(${shown.x}px, ${shown.y}px, 0)`
        const height = bubble.current?.offsetHeight || 76
        const width = bubble.current?.offsetWidth || 190
        cursor.current.classList.toggle("tour-left", shown.x + width + 34 > window.innerWidth)
        cursor.current.classList.toggle("tour-above", shown.y + height + 30 > window.innerHeight - 70)
      }
      const count = Math.min(current.text.length, Math.max(0, Math.floor((elapsed - 850) / 26)))
      if (count !== typed) {
        typed = count
        if (text.current) text.current.textContent = current.text.slice(0, count)
      }
      if (count === current.text.length && !announced) { announced = true; setAnnouncement(current.text) }
      if (elapsed >= 850 + current.text.length * 26 + 3000) advance()
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("keydown", onKey)
    }
  }, [running, eligible, run])

  if (!eligible) return null
  const start = () => { setRun(value => value + 1); setRunning(true) }
  return <>
    {running && <div className="tour-cursor" ref={cursor} aria-hidden="true">
      <svg className="tour-arrow" viewBox="0 0 28 34"><path d="M3 2 24 20 15 21 11 30Z" /></svg>
      <div className="tour-bubble" ref={bubble}><span className="tour-name">Louise <span>your guide</span></span><p ref={text} /></div>
    </div>}
    {!running && <div className="tour-controls" role="group" aria-label="Portfolio tour">
      <button type="button" onClick={start}><span aria-hidden="true">↻</span> take the tour again</button>
    </div>}
    <p className="tour-announcement" role="status" aria-live="polite">{running ? announcement : ""}</p>
  </>
}
