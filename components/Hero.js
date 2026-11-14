import Image from "next/image"

const nameCopies = Array.from({ length: 8 }, (_, index) => (
  <span key={index}>ORLAND LOUISE CATALA</span>
))

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="marquee" aria-hidden="true">
        <div className="track">{nameCopies}</div>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <h1>Engineering useful systems, from circuits to code.</h1>
          <p className="hero-description">Web applications, embedded systems, and tools that solve everyday problems.</p>
          <a className="btn dark pill" href="#work">Explore My Work <span aria-hidden="true">→</span></a>
        </div>
        <figure className="hero-portrait">
          <Image
            src="/images/hero-award.png"
            alt="Orland Louise Catala holding his second runner-up award at Mr. NSTP 2024"
            width={816}
            height={1088}
            priority
            sizes="(max-width: 700px) 78vw, (max-width: 1200px) 40vw, 460px"
          />
          <figcaption>2nd Runner-Up <span>·</span> Mr. NSTP 2024</figcaption>
        </figure>
      </div>
    </section>
  )
}
