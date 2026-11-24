import { projects } from "@/data/content"

const baseUrl = "https://catala-portfolio.vercel.app"

export default function sitemap() {
  const pages = [
    ["/", 1],
    ["/work", 0.9],
    ["/stack", 0.8],
    ["/certifications", 0.7],
    ["/contact", 0.6]
  ]

  return [
    ...pages.map(([path, priority]) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: "monthly",
      priority
    })),
    ...projects.map(project => ({
      url: `${baseUrl}/work/${project.slug}`,
      changeFrequency: "monthly",
      priority: 0.7
    }))
  ]
}
