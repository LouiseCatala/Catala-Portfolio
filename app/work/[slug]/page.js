import Link from "next/link"
import { notFound } from "next/navigation"
import Nav from "@/components/Nav"
import { projects } from "@/data/content"
import { origin, pageMetadata } from "@/data/seo"

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = projects.find(item => item.slug === slug)
  if (!project) return pageMetadata({ path: `/work/${slug}`, title: "Project | Orland Louise Catala", description: "Project by Orland Louise Catala." })
  return pageMetadata({
    path: `/work/${slug}`,
    title: `${project.name || project.title} | Orland Louise Catala`,
    description: project.summary || project.desc,
    image: project.img,
    imageAlt: `${project.name || project.title}: ${project.summary || project.desc}`
  })
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const project = projects.find(item => item.slug === slug)
  if (!project) notFound()
  const projectName = project.name || project.title
  const projectDescription = project.summary || project.desc
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${origin}/work/${project.slug}#project`,
    name: projectName,
    description: projectDescription,
    url: `${origin}/work/${project.slug}`,
    image: new URL(project.img, origin).toString(),
    contributor: { "@id": `${origin}/#person` }
  }

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <Nav items={[["WEB", "/work#web-developments"], ["CAD", "/work#cads"], ["Circuitry", "/work#circuitry"]]} brandHref="/" contactHref="/contact" />
    <main className="section work-page project-detail-page">
      <Link href={`/work#${project.slug}`} className="eyebrow ulink">← Back to projects</Link>
      <header className="project-detail-header">
        <p className="eyebrow muted">{project.kind}</p>
        <h1 className="h2">{projectName}</h1>
        {project.subtitle && <p className="lead muted">{project.subtitle}</p>}
      </header>
      <div className={`project-detail-gallery ${project.images?.length > 1 ? "has-gallery" : ""}`}>{(project.images || [project.img]).map(image => <img key={image} className="project-detail-image" src={image} alt={`${projectName}: ${projectDescription}`} />)}</div>
      <section className="project-detail-section"><h2>About this project</h2><p className="muted">{project.desc}</p></section>
      {project.role && <section className="project-detail-section"><h2>My role</h2><p className="muted">{project.role}</p></section>}
      <section className="project-detail-section"><h2>Technologies</h2><div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div></section>
      {project.liveUrl && <a href={project.liveUrl} className="btn dark">Visit live project ↗</a>}
    </main>
  </>
}
