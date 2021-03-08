import React from 'react'
import { gsap, Power4 } from 'gsap'

const Banner = () => {
  const section = React.useRef(null)
  const tl = React.useRef<GSAPTimeline | null>()
  React.useEffect(() => {
    tl.current = gsap.timeline()
    tl.current.from(section.current, {
      y: '-35%',
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    })
  }, [])
  return (
    <section className="banner" id="home">
      <div className="textBx" ref={section}>
        <h2>
          Hello my name is <span>wonder</span>
        </h2>
        <h3>i'm a Web developer</h3>
        <a href="#about" className="btn">
          About me
        </a>
      </div>
      <div className="pattern"></div>
    </section>
  )
}

export default Banner
