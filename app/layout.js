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
  title: "Orland Louise Catala | Portfolio",
  description: "Computer Engineering student building web applications, embedded systems, and practical community solutions.",
  icons: {
    icon: [{ url: "/images/2x2.jpg", type: "image/jpeg" }],
    shortcut: "/images/2x2.jpg",
    apple: "/images/2x2.jpg"
  }
}
const init = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`
export default function RootLayout({ children }) {
  return (<html lang="en" suppressHydrationWarning className={`${inter.variable} ${mono.variable} ${vibes.variable}`}><head><script dangerouslySetInnerHTML={{__html:init}} /></head><body>{children}</body></html>)
}
