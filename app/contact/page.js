import Nav from "@/components/Nav"
import { Contact } from "@/components/Sections"
import { Curves, Reveal } from "@/components/Extras"
import styles from "./page.module.css"

export const metadata = {
  title: "Contact | Orland Louise Catala",
  description: "Get in touch with Orland Louise Catala."
}

const homeLinks = [["Work", "/#work"], ["Skills", "/#what-i-can-do"], ["About", "/#about"], ["Experience", "/#experience"], ["Certifications", "/#certifications"], ["Education", "/#education"]]

export default function ContactPage() {
  return <><Curves /><Nav items={homeLinks} brandHref="/" contactHref="/contact" /><main className={styles.page}><Contact /></main><Reveal /></>
}
