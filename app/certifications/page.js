import Link from "next/link"
import SkillIcon from "@/components/SkillIcon"
import { Curves } from "@/components/Extras"
import { certifications } from "@/data/content"

export const metadata = {
  title: "Certifications | Orland Louise Catala",
  description: "Professional certifications and completed training by Orland Louise Catala."
}

const certificateGroups = [
  { label: "Professional development", certificates: certifications.filter(certificate => ["Anthropic", "Google"].includes(certificate.issuer)) },
  { label: "Cybersecurity", certificates: certifications.filter(certificate => certificate.issuer === "Cisco") },
  { label: "Programming & data", certificates: certifications.filter(certificate => certificate.issuer === "HackerRank") }
]

export default function CertificationsPage() {
  return <><Curves /><main id="certifications" className="section certifications-page"><Link href="/#certifications" className="eyebrow ulink">← Back to portfolio</Link><header className="stack-page-heading certifications-page-heading"><div className="stack-page-intro"><div><p className="eyebrow">Credentials / Verified learning</p><h1 className="h2">Certifications</h1></div><p className="muted">Verified learning in AI, cybersecurity, software engineering, and data skills — earned through hands-on study and practical development.</p></div></header><div className="certification-groups">{certificateGroups.map(group => <section key={group.label} className="certification-group"><p className="certification-group-label">{group.label}</p><div className="certification-list certification-list-all">{group.certificates.map(certificate => <a key={certificate.title} className="certification-card" href={certificate.file} target="_blank" rel="noopener noreferrer"><div className="certification-card-top"><span className="certification-logo" data-issuer={certificate.issuer}><SkillIcon name={certificate.issuer} colored /></span><span className="certification-type">{certificate.type}</span></div><div className="certification-card-main"><h2>{certificate.title}</h2><p className="certification-issuer">{certificate.issuer}</p></div><span className="certification-verify">View certificate <i aria-hidden="true">↗</i></span></a>)}</div></section>)}</div></main></>
}
