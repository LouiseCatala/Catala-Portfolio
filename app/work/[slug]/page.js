import Link from "next/link"
import { notFound } from "next/navigation"
import Nav from "@/components/Nav"
import { projects } from "@/data/content"

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = projects.find(item => item.slug === slug)
  return { title: `${project?.name || project?.title || "Project"} | Orland Louise Catala`, description: project?.summary || project?.desc }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const project = projects.find(item => item.slug === slug)
  if (!project) notFound()

  return <>
    <Nav items={[["WEB", "/work#web-developments"], ["CAD", "/work#cads"], ["Circuitry", "/work#circuitry"]]} brandHref="/" contactHref="/contact" />
    <main className="section work-page project-detail-page">
      <Link href={`/work#${project.slug}`} className="eyebrow ulink">← Back to projects</Link>
      <header className="project-detail-header">
        <p className="eyebrow muted">{project.kind}</p>
        <h1 className="h2">{project.name || project.title}</h1>
        {project.subtitle && <p className="lead muted">{project.subtitle}</p>}
      </header>
      <img className="project-detail-image" src={project.img} alt={`${project.name || project.title} preview`} />
      <section className="project-detail-section"><h2>About this project</h2><p className="muted">{project.desc}</p></section>
      <section className="project-detail-section"><h2>Technologies</h2><div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div></section>
      {project.liveUrl && <a href={project.liveUrl} className="btn dark">Visit live project ↗</a>}
    </main>
  </>
}
