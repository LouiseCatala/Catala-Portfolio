const origin = "https://catala-portfolio.vercel.app"

export function pageMetadata({ path, title, description, image = "/images/2x2.png", imageAlt = "Orland Louise Catala" }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Louise Catala",
      title,
      description,
      images: [{ url: image, alt: imageAlt }]
    },
    twitter: { card: "summary", title, description, images: [image] }
  }
}

export { origin }
