"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const projectOutcomes = {
  kawing: ["Rice farmers need to coordinate harvest sales with drying, storage, milling, and transportation services.", "A post-harvest platform with harvest listings, buyer bids, loan requests, service tracking, grain-moisture readings, and a community kiosk."],
  healthtrack: ["Rural communities need an approachable way to track health and calorie information.", "A touch-oriented health tracker with guided intake and a Filipino language option."],
  ratheuse: ["PC users need one place to understand CPU, GPU, and RAM utilization.", "A desktop monitor and download website that brings hardware readings into one interface."],
  "e-lingap": ["Solo parents, people with disabilities, and senior citizens need an accessible way to complete welfare transactions.", "A touchscreen kiosk for ID transactions, digital applications, and document submissions, with Firebase persistence and transaction verification."],
  "smart-home-automation": ["Rain and nearby movement can require household tasks to be handled automatically.", "An Arduino circuit that uses sensor readings to control a retractable clothesline and automatic door with servo motors and an audible indicator."],
  "automatic-parking-system": ["Drivers and operators need an automated way to manage vehicle entry and monitor parking spaces.", "An Arduino parking system combining sensor inputs, a servo barrier, LED status indicators, and an LCD."],
  "sine-wave": ["Students need to connect a sine-wave equation with its plotted shape and calculated sample values.", "A visualization of y(t) = 12 sin(2π·7t) alongside manually calculated points and signal parameters."],
  "2-to-1-multiplexer": ["A digital circuit needs to route one of two inputs based on a select signal.", "A logic-gate implementation where S selects I0 or I1 for output Y."],
  "4-to-1-multiplexer": ["A digital circuit needs to route one of four inputs using two select signals.", "A logic-gate implementation where S1 and S0 select an input for the output."],
  "fastest-finger-game": ["A three-player reaction game needs a board layout for its controls and feedback components.", "An editable KiCad PCB layout with player, start, and reset buttons, display, LEDs, buzzer, and Tang Nano 9K footprint."],
  "kawing-palaysense": ["The KAWING platform needs grain-moisture readings from a physical device.", "An ESP32 device that reads a capacitive moisture sensor, classifies readings, and sends them to the platform over Wi-Fi and a REST API."],
  "floor-plan-2d": ["A building layout needs a clear 2D technical drawing.", "An AutoCAD floor plan showing the spatial layout and drawing details."],
  "3d-floor-plan": ["A house design needs both a 3D view and a readable floor-plan presentation.", "Two AutoCAD house models: a realistic two-story design and a shaded plan with roof, entry, carport, driveway, walkway, and planters."],
  "appliances-3d-dwg": ["Everyday furniture and appliances need to be represented as 3D models.", "A collection of AutoCAD models covering a bed, desk of books, lamp, storage desk, and table."],
  careware: ["Non-technical users need PC health findings explained clearly, and cleanup actions need user review and consent.", "A Windows app combining PC diagnostics, guarded temporary-file cleanup, inspection notes, local history, and customer-ready reports."],
  "the-sis-proxmox-monitoring": ["A Proxmox lab needs a local view of node resources, system health, alerts, and activity history.", "A monitoring console that records CPU, RAM, disk, and availability data and presents trends, alerts, notifications, and downloadable reports."],
}

const projectRoles = {
  kawing: "I designed and built the platform, including the farmer and service workflows, buyer bidding, loan requests, grain-moisture integration, and community kiosk experience.",
  healthtrack: "I designed and built the health-tracking experience, including guided user intake, calorie monitoring, touch-friendly screens, and Filipino-language support.",
  ratheuse: "I designed and built the hardware-monitoring app and its download website, bringing CPU, GPU, and RAM readings together in one interface.",
  "e-lingap": "I designed and built the touchscreen welfare kiosk, including ID transactions, application and document workflows, and Firebase-backed records.",
  "smart-home-automation": "I designed and built the Arduino automation circuit, connecting the moisture and distance sensors to the clothesline and door servo controls.",
  "automatic-parking-system": "I designed and built the Arduino parking-control circuit, connecting sensor inputs to the barrier servo, LED indicators, and LCD status display.",
  "sine-wave": "I created the waveform visualization and manually calculated sample points to show how the equation maps to the plotted signal.",
  "2-to-1-multiplexer": "I designed and built the logic-gate circuit that uses the select input to route either data input to the output.",
  "4-to-1-multiplexer": "I designed and built the logic-gate circuit that uses two select inputs to route one of four data inputs to the output.",
  "fastest-finger-game": "I created the editable KiCad board layout, arranging the player controls, display, indicators, buzzer, and FPGA footprint.",
  "kawing-palaysense": "I designed and built the ESP32 moisture-sensing device, including sensor reading, moisture classification, and Wi-Fi reporting to KAWING.",
  "floor-plan-2d": "I drafted the 2D floor plan in AutoCAD, laying out the spaces and technical drawing details.",
  "3d-floor-plan": "I modeled the two house concepts in AutoCAD, including the two-story exterior and the shaded floor-plan presentation.",
  "appliances-3d-dwg": "I modeled the bed, desk, lamp, storage desk, and table collection in AutoCAD.",
  careware: "I designed and built the Windows PC-care app, including diagnostics, reviewed cleanup, inspection notes, local history, and customer reports.",
  "the-sis-proxmox-monitoring": "I designed and built the Proxmox monitoring console, including resource collection, history, alerts, trends, notifications, and reports.",
}

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
        <img className="project-dialog-image" src={selected.img} alt={`${selected.title} preview`} />
        <Link href={selected.liveUrl || `/work/${selected.slug}`} className="ulink project-dialog-project-link">View project</Link>
        <div className="project-dialog-details">
        <h2 id={`details-${selected.slug}`}>{selected.title}</h2>
        <h3 className="eyebrow">Problem</h3>
        <p className="muted">{projectOutcomes[selected.slug]?.[0] || selected.summary}</p>
        <h3 className="eyebrow">My role</h3>
        <p className="muted">{projectRoles[selected.slug] || "I designed and built this project."}</p>
        <h3 className="eyebrow">Tools</h3>
        <div className="tags">{selected.stack.map(item => <span key={item}>{item}</span>)}</div>
        <h3 className="eyebrow">Result</h3>
        <p className="muted">{projectOutcomes[selected.slug]?.[1] || selected.desc}</p>
        </div>
      </div>
    </dialog>}
    </>
  )
}
