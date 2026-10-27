"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function ProjectGallery({ items }) {
  const [selected, setSelected] = useState(null)
  const dialog = useRef(null)
  const trigger = useRef(null)

  useEffect(() => {
    if (!selected) return
    const modal = dialog.current
    const previousOverflow = document.body.style.overflow
    modal.showModal()
    document.body.style.overflow = "hidden"
    return () => {
      modal.close()
      document.body.style.overflow = previousOverflow
      trigger.current?.focus({ preventScroll: true })
    }
  }, [selected])

  if (!items.length) {
    return <p className="project-empty muted">Projects coming soon.</p>
  }

  return (
    <>
    <div className="grid3 project-grid">
      {items.map(project => (
        <article id={project.slug} key={project.slug} className="card project-preview">
          <img src={project.img} alt={`${project.title} preview`} loading="lazy" />
          <div><h3>{project.name || project.title.split(" – ")[0]}</h3><p className="project-subtitle muted">{project.subtitle || project.kind}</p></div>
          <p className="project-summary muted">{project.summary || project.desc}</p>
          <div className="tags project-preview-tags">{project.stack.slice(0, 3).map(item => <span key={item}>{item}</span>)}{project.stack.length > 3 && <span>+{project.stack.length - 3} more</span>}</div>
          <div className="project-actions">
            <button type="button" className="ulink" aria-haspopup="dialog" aria-label={`View details for ${project.name || project.title}`} onClick={event => { trigger.current = event.currentTarget; setSelected(project) }}>View details</button>
            <Link href={project.liveUrl || `/work/${project.slug}`} className="ulink" aria-label={`View project ${project.name || project.title}`}>View project ↗</Link>
          </div>
        </article>
      ))}
    </div>
    {selected && <dialog className="project-dialog" ref={dialog} aria-labelledby={`details-${selected.slug}`} onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null) }}>
      <div className="project-dialog-content">
        <div className="project-dialog-top"><p className="eyebrow muted">{selected.kind}</p><button type="button" className="project-dialog-close" aria-label="Close project details" onClick={() => setSelected(null)}>✕</button></div>
        <h2 id={`details-${selected.slug}`}>{selected.title}</h2>
        <p className="muted">{selected.desc}</p>
        <h3 className="eyebrow">Technologies</h3>
        <div className="tags">{selected.stack.map(item => <span key={item}>{item}</span>)}</div>
        <Link href={selected.liveUrl || `/work/${selected.slug}`} className="ulink">View project ↗</Link>
      </div>
    </dialog>}
    </>
  )
}
