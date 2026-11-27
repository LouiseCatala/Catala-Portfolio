import { Inter, JetBrains_Mono, Great_Vibes } from "next/font/google"
import "./globals.css"
import "./about.css"
import "./education.css"
import "./experience.css"
import "./certifications.css"
const inter = Inter({ subsets:["latin"], variable:"--inter" })
const mono = JetBrains_Mono({ subsets:["latin"], variable:"--mono" })
const vibes = Great_Vibes({ subsets:["latin"], weight:"400", variable:"--vibes" })
export const metadata = {
  metadataBase: new URL("https://catala-portfolio.vercel.app"),
  title: "Orland Louise Catala | Computer Engineer",
  description: "Louise Catala (Orland Louise Catala) — Computer Engineer in the Philippines. Explore projects in web development, embedded systems, IoT, networking, automation, CAD, and hardware engineering.",
  verification: { google: "mz2cLT416HXSFDA4EB3qMNaqKzSpktFJgD59e9YW2Ys" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Louise Catala",
    title: "Orland Louise Catala | Computer Engineer",
    description: "Louise Catala (Orland Louise Catala) — Computer Engineer in the Philippines. Explore projects in web development, embedded systems, IoT, networking, automation, CAD, and hardware engineering.",
    images: [{ url: "/images/2x2.png", width: 666, height: 692, alt: "Orland Louise Catala" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Orland Louise Catala | Computer Engineer",
    description: "Louise Catala (Orland Louise Catala) — Computer Engineer in the Philippines. Explore projects in web development, embedded systems, IoT, networking, automation, CAD, and hardware engineering.",
    images: ["/images/2x2.png"]
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "1254x1254", type: "image/png" }],
    apple: "/favicon.png"
  }
}
const init = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`
export default function RootLayout({ children }) {
  return (<html lang="en" suppressHydrationWarning className={`${inter.variable} ${mono.variable} ${vibes.variable}`}><head><script dangerouslySetInnerHTML={{__html:init}} /></head><body>{children}</body></html>)
}
