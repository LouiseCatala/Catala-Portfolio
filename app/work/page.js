import Link from "next/link"
import Nav from "@/components/Nav"
import ProjectGallery from "@/components/ProjectGallery"
import { projects } from "@/data/content"
import { pageMetadata } from "@/data/seo"
export const metadata = pageMetadata({ path: "/work", title: "Projects | Orland Louise Catala", description: "Explore Orland Louise Catala’s web development, KAWING PH, kiosk, automation, CAD, circuits, hardware, and engineering projects." })
export default function WorkPage() {
  const circuitProjects = projects.filter(project => project.category === "circuits-hardware")
  const sineWaveIndex = circuitProjects.findIndex(project => project.slug === "sine-wave")
  const fastestFingerIndex = circuitProjects.findIndex(project => project.slug === "fastest-finger-game")
  const twoToOneMultiplexerIndex = circuitProjects.findIndex(project => project.slug === "2-to-1-multiplexer")
  const palaySenseIndex = circuitProjects.findIndex(project => project.slug === "kawing-palaysense")
  if (sineWaveIndex !== -1 && fastestFingerIndex !== -1) {
    [circuitProjects[sineWaveIndex], circuitProjects[fastestFingerIndex]] = [circuitProjects[fastestFingerIndex], circuitProjects[sineWaveIndex]]
  }
  if (twoToOneMultiplexerIndex !== -1 && palaySenseIndex !== -1) {
    [circuitProjects[twoToOneMultiplexerIndex], circuitProjects[palaySenseIndex]] = [circuitProjects[palaySenseIndex], circuitProjects[twoToOneMultiplexerIndex]]
  }

  return (
    <>
    <Nav items={[["WEB", "#web-developments"], ["CAD", "#cads"], ["Circuits & Hardware", "#circuits-hardware"]]} brandHref="/" contactHref="/contact" />
    <main className="section work-page">
      <Link href="/" className="eyebrow stack-view-all">← Back to Portfolio</Link>
      <section className="project-section" aria-labelledby="web-developments">
        <h1 id="web-developments" className="h2">Software &amp; Systems Development</h1>
        <p className="muted">Explore my websites and applications, from frontend interfaces to backend services, databases, and IoT integrations.</p>
        <ProjectGallery items={projects.filter(project => project.category === "web-iot")} />
      </section>
      <section className="project-section" aria-labelledby="cads">
        <h2 id="cads" className="h2">CADs</h2>
        <p className="muted">Explore my AutoCAD projects, technical drawings, and design layouts.</p>
        <ProjectGallery items={projects.filter(project => project.category === "autocad")} />
      </section>
      <section className="project-section" aria-labelledby="circuits-hardware">
        <h2 id="circuits-hardware" className="h2">Circuits &amp; Hardware</h2>
        <p className="muted">Explore my circuit designs, KiCad schematics, and PCB layouts.</p>
        <ProjectGallery items={circuitProjects} />
      </section>
    </main>
    </>
  )
}
