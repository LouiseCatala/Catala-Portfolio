import Link from "next/link"
import Nav from "@/components/Nav"
import ProjectGallery from "@/components/ProjectGallery"
import { projects } from "@/data/content"
export const metadata = { title:"Projects | Orland Louise Catala" }
export default function WorkPage() {
  return (
    <>
    <Nav items={[["WEB", "#web-developments"], ["CAD", "#cads"], ["Circuitry", "#circuitry"]]} brandHref="/" contactHref="/contact" />
    <main className="section work-page">
      <Link href="/" className="eyebrow">← Back to Portfolio</Link>
      <section className="project-section" aria-labelledby="web-developments">
        <h1 id="web-developments" className="h2">Web Developments</h1>
        <p className="muted">Explore my websites and applications, from frontend interfaces to backend services, databases, and IoT integrations.</p>
        <ProjectGallery items={projects.filter(project => project.category === "web-iot")} />
      </section>
      <section className="project-section" aria-labelledby="cads">
        <h2 id="cads" className="h2">CADs</h2>
        <p className="muted">Explore my AutoCAD projects, technical drawings, and design layouts.</p>
        <ProjectGallery items={projects.filter(project => project.category === "autocad")} />
      </section>
      <section className="project-section" aria-labelledby="circuitry">
        <h2 id="circuitry" className="h2">Circuitry</h2>
        <p className="muted">Explore my circuit designs, KiCad schematics, and PCB layouts.</p>
        <ProjectGallery items={projects.filter(project => project.category === "kicad")} />
      </section>
    </main>
    </>
  )
}
