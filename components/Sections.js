"use client"
import SkillsBento from "./SkillsBento"
import SkillIcon from "./SkillIcon"
import Link from "next/link"
import { about, certifications, education, experience, resume } from "@/data/content"
const Head = ({ eyebrow, title, text }) => (<div className="sec-head"><p className="eyebrow reveal">{eyebrow}</p><h2 className="h2 reveal">{title}</h2>{text && <p className="muted reveal">{text}</p>}</div>)
const contactDirectory = [["01", "GitHub", "https://github.com/LouiseCatala"], ["02", "Phone", "tel:+639682384854"], ["03", "Instagram", "https://www.instagram.com/louisecctl"], ["04", "LinkedIn", "https://www.linkedin.com/in/catala-louise-941a32443/"]]
const ContactIcon = ({ name }) => name === "Phone" ? <svg className="contact-phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.7 2.9.8a2 2 0 0 1 1.6 1.9Z" /></svg> : <SkillIcon name={name} colored />
export function Capabilities(){return <section id="what-i-can-do" className="section skills-section"><header className="skills-heading"><p className="eyebrow">My capabilities / Software + hardware</p><div className="skills-heading-main"><div className="skills-heading-title"><h2 className="h2">What I Bring to the Table</h2><p className="muted">Practical experience across web applications, electronics, computer care, and customer service—from building systems to supporting everyday operations.</p></div><div className="skills-heading-summary"><Link href="/stack" className="stack-view-all">Explore the full tech stack <span aria-hidden="true">↗</span></Link></div></div></header><SkillsBento/></section>}
export function About() {
  return (
    <section id="about" className="section about-section">
      <header className="about-heading reveal"><p className="eyebrow">Professional profile</p><h2 className="h2">About Me</h2></header>
      <div className="about-profile reveal">
        <aside className="about-identity"><img className="avatar" src="/images/2x2.jpg" alt="Orland Louise Catala" width={160} height={160} loading="lazy" /><p className="eyebrow">Computer Engineering</p><h3>Orland Louise<br />Catala</h3><p className="muted">Angeles City, Philippines</p><nav className="about-socials" aria-label="Professional and social links"><a href="https://www.instagram.com/louisecctl" target="_blank" rel="noopener noreferrer"><span>Instagram</span><i aria-hidden="true">↗</i></a><a href="https://github.com/LouiseCatala" target="_blank" rel="noopener noreferrer"><span>GitHub</span><i aria-hidden="true">↗</i></a><a href="https://www.linkedin.com/in/catala-louise-941a32443/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><i aria-hidden="true">↗</i></a></nav></aside>
        <div className="about-summary"><p className="about-kicker">A practical, people-focused approach to technology.</p><p>{about.bio}</p><div className="about-stats">{about.stats.map(([l,v])=><div key={l}><span className="mono">{l}</span><strong>{v}</strong></div>)}</div></div>
      </div>
      <div className="about-details reveal">
        <div className="about-current"><p className="eyebrow">Current focus</p><div>{about.currently.map(([a,b], index)=><article key={a}><span className="mono">0{index + 1}</span><div><h3>{a}</h3><p className="muted">{b}</p></div></article>)}</div></div>
        <div className="about-traits"><p className="eyebrow">Professional strengths</p><div>{about.traits.map((t,index)=><span key={t}><i>{String(index + 1).padStart(2,"0")}</i>{t}</span>)}</div></div>
      </div>
    </section>
  )
}
export function Education() {
  return <section id="education" className="section education-section"><header className="education-heading reveal"><div><p className="eyebrow">Academic background</p><h2 className="h2">Education</h2></div><p className="muted">A foundation in computer engineering and information and communications technology.</p></header><ol className="education-timeline">{education.map(([title,date,school,note],index)=><li key={title} className="reveal"><span className="education-number">{String(index + 1).padStart(2,"0")}</span><p className="education-date mono">{date}</p><div className="education-qualification"><h3>{title}</h3>{note && <p className="muted">{note}</p>}</div><p className="education-school">{school}</p></li>)}</ol></section>
}
export function Certifications() {
  const featuredCertifications = certifications.filter(certificate => certificate.featured).slice(0, 3)
  return <section id="certifications" className="section certifications-section"><header className="certifications-heading reveal"><div className="certifications-heading-copy"><p className="eyebrow">Professional development</p><h2 className="h2">Certifications</h2><p className="muted">Professional certifications and completed training.</p></div>{certifications.length > 3 && <Link className="certification-action stack-view-all" href="/certifications">All certifications <span aria-hidden="true">→</span></Link>}</header><div className="certification-list">{featuredCertifications.map(certificate=><a key={certificate.title} className="certification-card reveal" href={certificate.file} target="_blank" rel="noopener noreferrer"><div className="certification-card-top"><span className="certification-logo" data-issuer={certificate.issuer}><SkillIcon name={certificate.issuer} colored /></span><span className="certification-type">{certificate.type}</span></div><div className="certification-card-main"><h3>{certificate.title}</h3><p className="certification-issuer">{certificate.issuer}</p></div><span className="certification-verify">View certificate <i aria-hidden="true">↗</i></span></a>)}</div></section>
}
export function Experience() {
  return <section id="experience" className="section experience-section"><header className="experience-heading reveal"><div><p className="eyebrow">Hands-on work</p><h2 className="h2">Work Experience</h2></div><p className="muted">Technical care, customer service, and dependable teamwork.</p></header><div className="experience-record">{experience.map((t,index)=><article key={t.title} className="reveal"><div className="experience-period"><span>{String(index + 1).padStart(2,"0")}</span><p className="mono">{t.date}</p></div><div className="experience-role"><h3>{t.title}</h3><p className="muted">{t.org}</p></div><p className="experience-description">{t.text}</p></article>)}</div></section>
}
export function Contact() {
  return (
    <section id="contact" className="section two contact">
      <div><p className="eyebrow reveal">GET IN TOUCH</p><h2 className="mega reveal">LET’S<br />WORK<br />TOGETHER</h2><p className="lead">Looking for the next problem worth solving.</p><p className="muted">I'm seeking an entry-level or internship opportunity in web development, embedded systems, or hands-on technical work.</p><a className="btn dark pill" href={resume}>DOWNLOAD RESUME →</a></div>
      <div className="c-cards">{contactDirectory.map(([n,l,h])=>(<a key={l} className="c-card reveal" href={h} target={h.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"><span className="ic"><ContactIcon name={l} /></span><span><b>{l}</b></span><span className="cn mono">{n}</span><span className="arrow">↗</span></a>))}
        <a className="btn outline pill wide" href="mailto:louise.catala24@gmail.com">SEND ME AN EMAIL →</a></div>
    </section>
  )
}

