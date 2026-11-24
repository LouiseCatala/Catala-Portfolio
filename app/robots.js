const baseUrl = "https://catala-portfolio.vercel.app"

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
}
