"use client"
import { useState } from "react"
export default function MessagePanel({ onClose }) {
  const [min, setMin] = useState(false)
  const [state, setState] = useState("idle")
  const [err, setErr] = useState("")
  const submit = async e => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget))
    setState("loading"); setErr("")
    try {
      const r = await fetch("/api/contact", { method:"POST", headers:{ "Content-Type":"application/json" }, body:JSON.stringify(f) })
      const j = await r.json().catch(()=>({}))
      if (r.ok && j.ok) setState("success"); else { setErr(j.error || "Something went wrong."); setState("error") }
    } catch { setErr("Network error. Please try again."); setState("error") }
  }
  if (state === "success") return (<div className="modal" role="dialog" aria-modal="true"><div className="modal-box"><h3>Message Sent!</h3><p className="muted">Thanks for reaching out. I'll get back to you soon.</p><button className="btn dark pill" onClick={onClose}>CONTINUE BROWSING</button></div></div>)
  return (
    <div className={`panel ${min ? "min" : ""}`} role="dialog" aria-label="Send a message">
      <div className="panel-head"><span className="mono">SEND ME A MESSAGE</span><span><button className="min-btn" onClick={()=>setMin(!min)} aria-label="Minimize">—</button><button onClick={onClose} aria-label="Close">✕</button></span></div>
      {!min && <form onSubmit={submit}><label>Full Name<input name="name" required autoComplete="name" /></label><label>Email Address<input name="email" type="email" required autoComplete="email" /></label><label>Message<textarea name="message" rows={5} required /></label>{state==="error" && <p className="err" role="alert">{err}</p>}<button className="btn dark pill" disabled={state==="loading"}>{state==="loading" ? "SENDING..." : "SEND MESSAGE →"}</button></form>}
    </div>
  )
}
