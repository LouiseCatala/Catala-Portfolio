const rows = [10,20,30,40,60,70,80,90]
const Row = ({ style, cls="" }) => (<div className={`marquee ${cls}`} style={style} aria-hidden="true"><div className="track">{Array.from({length:8}).map((_,i)=><span key={i}>ORLAND LOUISE CATALA</span>)}</div></div>)
export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="circles" aria-hidden="true"><i /><i /><i /></div>
      <Row cls="main-row" />
      {rows.map((r,i)=><Row key={r} cls="extra-row" style={{ top:`${r}%`, animationDirection: i%2 ? "reverse" : "normal" }} />)}
      <div className="hero-intro"><p className="eyebrow">COMPUTER ENGINEERING STUDENT</p><h1>Orland Louise<br />Catala<span>.</span></h1><p>Web development. Embedded systems.<br />Practical solutions for everyday needs.</p><a className="btn dark pill" href="#work">EXPLORE MY WORK →</a></div>
      <a href="#work" className="scroll-ind"><span>Scroll Down</span><i /></a>
    </section>
  )
}
