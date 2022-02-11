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
          Hello my name is <span>Wonder</span>
        </h2>
        <h3>I am Web developer and All time learner</h3>
        <svg className="scroll" width="66" height="133" viewBox="0 0 66 133" fill="none" >
                <rect x="3" y="3" width="60" height="127" rx="30" stroke="white" strokeWidth="6"/>
                <ellipse className="circle" cx="32.5" cy="29.5" rx="21.5" ry="19.5" fill="white"/>
                </svg>
      </div>
      <div className="pattern"></div>
    </section>
  )
}

export default Banner
