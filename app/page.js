import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import Work from "@/components/Work"
import MouseTour from "@/components/MouseTour"
import { Capabilities, About, Education, Experience } from "@/components/Sections"
import { BackToTop, Curves, Reveal } from "@/components/Extras"
export default function Home() {
  return (<><Curves /><Nav /><main><Hero /><Work /><Capabilities /><About /><Experience /><Education /></main><BackToTop /><Reveal /><MouseTour /></>)
}
