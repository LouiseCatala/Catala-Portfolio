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
  title: "Orland Louise Catala – Computer Engineer",
  description: "I’m Louise Catala - a Computer Engineer in the Philippines. I build practical systems through web development, embedded devices, IoT, automation, CAD, and hardware projects.",
  verification: { google: "mz2cLT416HXSFDA4EB3qMNaqKzSpktFJgD59e9YW2Ys" },
  alternates: { canonical: "/" },
  keywords: ["Orland Louise Catala", "Louise Catala", "Computer Engineer", "Computer Engineering", "Web Development", "Embedded Devices", "IoT", "Automation", "CAD", "Circuits and Hardware", "KAWING PH"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Louise Catala",
    title: "Orland Louise Catala – Computer Engineer",
    description: "I’m Louise Catala - a Computer Engineer in the Philippines. I build practical systems through web development, embedded devices, IoT, automation, CAD, and hardware projects.",
    images: [{ url: "/images/2x2.png", width: 666, height: 692, alt: "Orland Louise Catala" }]
  },
  twitter: {
    card: "summary",
    title: "Orland Louise Catala – Computer Engineer",
    description: "I’m Louise Catala - a Computer Engineer in the Philippines. I build practical systems through web development, embedded devices, IoT, automation, CAD, and hardware projects.",
    images: ["/images/2x2.png"]
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "256x256", type: "image/png" }],
    apple: "/favicon.png"
  }
}
const init = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`
export default function RootLayout({ children }) {
  return (<html lang="en" suppressHydrationWarning className={`${inter.variable} ${mono.variable} ${vibes.variable}`}><head><script dangerouslySetInnerHTML={{__html:init}} /></head><body>{children}</body></html>)
}
