import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import Work from "@/components/Work"
import MouseTour from "@/components/MouseTour"
import { Capabilities, About, Certifications, Education, Experience } from "@/components/Sections"
import { Curves, Reveal } from "@/components/Extras"
export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://catala-portfolio.vercel.app/#website",
        url: "https://catala-portfolio.vercel.app/",
        name: "Louise Catala",
        alternateName: "Orland Louise Catala"
      },
      {
        "@type": "ProfilePage",
        "@id": "https://catala-portfolio.vercel.app/#profile",
        url: "https://catala-portfolio.vercel.app/",
        name: "Orland Louise Catala – Computer Engineer",
        mainEntity: { "@id": "https://catala-portfolio.vercel.app/#person" }
      },
      {
        "@type": "Person",
        "@id": "https://catala-portfolio.vercel.app/#person",
        name: "Orland Louise Catala",
        alternateName: "Louise Catala",
        jobTitle: "Computer Engineer",
        description: "I’m Louise Catala - a Computer Engineer in the Philippines. I build practical systems through web development, embedded devices, IoT, automation, CAD, and hardware projects.",
        url: "https://catala-portfolio.vercel.app/",
        image: "https://catala-portfolio.vercel.app/images/2x2.jpg",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Angeles City",
          addressRegion: "Pampanga",
          addressCountry: "PH"
        },
        sameAs: [
          "https://github.com/LouiseCatala",
          "https://www.linkedin.com/in/catala-louise-941a32443/",
          "https://www.instagram.com/louisecctl/"
        ],
        knowsAbout: ["Computer Engineering", "Web Development", "Embedded Devices", "IoT", "Automation", "CAD", "Circuits and Hardware", "KAWING PH"]
      }
    ]
  }

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><Curves /><Nav /><main><Hero /><Work /><Capabilities /><About /><Experience /><Certifications /><Education /></main><Reveal /><MouseTour /></>)
}
