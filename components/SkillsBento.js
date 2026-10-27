"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import SkillIcon from "./SkillIcon"
import { skillCategories, familiarSkills, serviceSkills, engineeringToolkit } from "@/data/skills"
function Visual({type}) {
return <div className={`skill-visual visual-${type}`} aria-hidden="true">{type === "web" ? <><div className="editor-top"><span>● ● ●</span><span>build.tsx</span><span>↗</span></div><div className="code-lines"><span><i>01</i> const solution = &#123;</span><span><i>02</i>   interface: &quot;accessible&quot;,</span><span><i>03</i>   data: &quot;connected&quot;,</span><span><i>04</i>   purpose: &quot;practical&quot;</span><span><i>05</i> &#125;</span></div></> : type === "embedded" ? <><svg viewBox="0 0 360 128"><g fill="none" stroke="currentColor" strokeWidth="1"><path d="M0 25h85l30 30h40M0 100h70l30-30h55M205 55h40l30-30h85M205 70h50l30 30h75M165 0v30m30-30v30m-30 65v33m30-33v33"/><rect x="145" y="30" width="70" height="65" rx="8"/><rect x="154" y="39" width="52" height="47" rx="4"/></g><text x="180" y="67" textAnchor="middle" fill="currentColor" fontSize="12">I/O</text></svg><span className="visual-caption">SENSE → PROCESS → CONTROL</span></> : type === "design" ? <><svg viewBox="0 0 360 128"><g fill="none" stroke="currentColor" strokeWidth="1"><path d="m135 40 45-24 45 24v48l-45 24-45-24Zm0 0 45 24 45-24m-45 24v48M115 16v96m-5-96h10m-10 96h10M135 121h90"/><circle cx="180" cy="64" r="48" strokeDasharray="3 5"/></g></svg><span className="visual-caption">FROM SCHEMATIC TO PROTOTYPE</span></> : <><div className="editor-top"><span>TERMINAL</span><span>~/systems</span></div><div className="terminal-lines"><span><b>~ $</b> cat capabilities</span><span>↳ hardware care</span><span>↳ Debian kiosk setup</span><span>↳ touchscreen interfaces <b>_</b></span></div></>}</div>
}
export function SkillList({items}) {return <ul className="skill-chips">{items.map(name=><li key={name}><SkillIcon name={name}/><span>{name}</span></li>)}</ul>}
function HomeCapability({category,index}) {
return <article className={`capability-panel capability-${category.id}`}>
<div className="capability-index"><span>0{index + 1}</span><i /></div>
<div className="capability-copy"><p className="mono">{category.subtitle}</p><h3>{category.title}</h3><p className="bento-description">{category.text}</p><SkillList items={category.featured}/><Link href={`/stack#${category.id}`} className="capability-link">View toolkit <span aria-hidden="true">→</span></Link></div>
<Visual type={category.id}/>
</article>
}
function EngineeringToolkit() {
return <section id="engineering-toolkit" className="engineering-toolkit" aria-labelledby="engineering-toolkit-title"><header className="engineering-toolkit-head"><p className="eyebrow">Complete toolkit</p><h2 id="engineering-toolkit-title" className="h2">Engineering Toolkit</h2><p className="muted">The complete set of technologies, platforms, and hands-on tools used across my work.</p></header><div className="toolkit-card"><ul className="toolkit-logos">{engineeringToolkit.map(name=><li key={name}><SkillIcon name={name} colored/><span>{name}</span></li>)}</ul></div></section>
}
export default function SkillsBento({full=false}) {
const root=useRef(null)
const [highlighted, setHighlighted] = useState("")
useEffect(()=>{
const cards=root.current.querySelectorAll(".bento-card")
if(!window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove("bento-pending");observer.unobserve(entry.target)}}),{threshold:.06})
cards.forEach(card=>{if(card.getBoundingClientRect().top>window.innerHeight){card.classList.add("bento-pending");observer.observe(card)}})
return ()=>observer.disconnect()
},[])
useEffect(()=>{
if(!full) return
let timer
const focusToolkit=()=>{
const id=window.location.hash.slice(1)
if(!["web","embedded","design","systems"].includes(id)) return
setHighlighted("")
requestAnimationFrame(()=>setHighlighted(id))
window.clearTimeout(timer)
timer=window.setTimeout(()=>setHighlighted(""),2000)
}
focusToolkit()
window.addEventListener("hashchange",focusToolkit)
return ()=>{window.clearTimeout(timer);window.removeEventListener("hashchange",focusToolkit)}
},[full])
if(!full) return <div ref={root} className="capability-layout">
<div className="capability-lead"><div><p className="mono">A practical toolkit</p><h3>Building from<br /><em>idea to interface.</em></h3></div><p>Web applications, physical prototypes, and the hands-on care that keeps systems useful in the real world.</p><div className="capability-orbit" aria-hidden="true"><span>WEB</span><span>BUILD</span><span>HARDWARE</span><b>+</b></div></div>
<div className="capability-panels">{skillCategories.map((category,index)=><HomeCapability key={category.id} category={category} index={index}/>)}</div>
<div className="capability-notes"><aside className="capability-note note-familiar"><p className="mono">Also exploring</p><h3>Familiar with</h3><SkillList items={familiarSkills}/></aside><aside className="capability-note note-service"><p className="mono">Beyond the build</p><h3>{serviceSkills.label}</h3><p className="muted">{serviceSkills.text}</p><ul className="service-tags">{serviceSkills.tags.map(tag=><li key={tag}>{tag}</li>)}</ul></aside></div>
</div>
return <div ref={root} className={`skills-bento ${full?"skills-full":""}`}>
{skillCategories.map((category,index)=><article id={full?category.id:undefined} key={category.id} className={`bento-card bento-${category.id} ${highlighted===category.id?"is-highlighted":""}`} style={{"--card-delay":`${index%2*85}ms`}}>
<div className="bento-meta"><span className="mono">{category.subtitle}</span><span className="mono">0{index+1}</span></div>
{full?<h2 className="bento-title">{category.title}</h2>:<h3 className="bento-title">{category.title}</h3>}
<p className="bento-description">{category.text}</p><Visual type={category.id}/>
{full?<div className="skill-detail-groups">{category.groups.map(group=><div key={group.title}><h3 className="mono">{group.title}</h3><SkillList items={group.items}/></div>)}</div>:<SkillList items={category.featured}/>}
{!full&&<Link className="bento-link" href={`/stack#${category.id}`}>Explore {category.id==="web"?"the stack":"skills"}<span aria-hidden="true">↗</span></Link>}
</article>)}
<aside className="bento-card bento-familiar"><div><p className="mono">Also exploring</p>{full?<h2 className="bento-title">Familiar with</h2>:<h3 className="bento-title">Familiar with</h3>}<p className="muted">Additional languages and development tools.</p></div><SkillList items={familiarSkills}/></aside>
<article className="bento-card bento-service"><div className="bento-meta"><span className="mono">Beyond the build</span><span aria-hidden="true">↗</span></div>{full?<h2 className="bento-title">{serviceSkills.label}</h2>:<h3 className="bento-title">{serviceSkills.label}</h3>}<p className="bento-description">{serviceSkills.text}</p><ul className="service-tags">{serviceSkills.tags.map(tag=><li key={tag}>{tag}</li>)}</ul></article>
{full&&<EngineeringToolkit/>}
</div>
}
