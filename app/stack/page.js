import Link from "next/link"
import Nav from "@/components/Nav"
import SkillsBento from "@/components/SkillsBento"
import { Curves } from "@/components/Extras"
import { pageMetadata } from "@/data/seo"
export const metadata=pageMetadata({path:"/stack",title:"Tech Stack | Orland Louise Catala",description:"The languages, frameworks, databases, electronics, and tools behind Orland Louise Catala’s web development, embedded devices, IoT, automation, CAD, circuits, and hardware projects."})
const portfolioLinks=[["Web & Data","#web"],["Embedded","#embedded"],["Engineering","#design"],["Systems","#systems"],["Toolkit","#engineering-toolkit"]]
export default function StackPage(){return <><Curves/><Nav items={portfolioLinks} brandHref="/" contactHref="/contact" compact/><main className="section stack-page skills-stack-page">
<Link href="/#what-i-can-do" className="eyebrow ulink">← Back to capabilities</Link>
<header className="stack-page-heading"><div className="stack-page-intro"><div><p className="eyebrow">The toolkit / Software + hardware</p><h1 className="h2">My Tech Stack</h1></div><p className="muted">The languages, tools, and hardware behind my projects. From web interfaces to physical prototypes, with room to keep learning.</p></div></header><SkillsBento full/>
</main></>}
