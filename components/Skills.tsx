import React from 'react'
import { gsap, Back } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Icon } from '@iconify/react'
import react from '@iconify/icons-logos/react'
import HTML5 from '@iconify/icons-logos/html-5'
import Graphql from '@iconify/icons-logos/graphql'
import Typescript from '@iconify/icons-logos/typescript-icon'
import Node from '@iconify/icons-logos/nodejs'
import next from '@iconify/icons-logos/nextjs-icon'
import Js from '@iconify/icons-logos/javascript'
import postgres from '@iconify/icons-logos/postgresql'
import Mongo from '@iconify/icons-logos/mongodb'
import Css from '@iconify/icons-logos/css-3'
import Git from "@iconify/icons-logos/git";
import Laravel from "@iconify/icons-logos/laravel"

gsap.registerPlugin(ScrollTrigger)

const skills = () => {
  const elms = React.useRef(new Array())
  const section = React.useRef()
  const tl = React.useRef<GSAPTimeline | null>(null)

  React.useEffect(() => {
    const elements: Element[] = elms.current.map((e) => e)
    tl.current = gsap.timeline()
    tl.current.from(elements, {
      stagger: 0.2,
      scale: 0.1,
      duration: 0.6,
      ease: Back.easeOut.config(1),
    })

    ScrollTrigger.create({
      animation: tl.current,
      trigger: section.current,
      start: 'top bottom',
    })
  }, [])

  return (
    <section className="skills" id="skills" ref={section}>
      <div className="heading white">
        <h2>Technologies i use to work with</h2>
      </div>
      <div className="content">
        <div className="servicesBx" ref={(el) => (elms.current[0] = el)}>
          <Icon className="icon" icon={react} width="100%" height="90%" />
          <h3>React</h3>
        </div>
        <div className="servicesBx" ref={(el) => (elms.current[1] = el)}>
          <Icon className="icon" icon={HTML5} width="100%" height="90%" />
          <h3>HTML5</h3>
        </div>
        <div className="servicesBx" ref={(el) => (elms.current[2] = el)}>
          <Icon className="icon" icon={Graphql} width="100%" height="90%" />
          <h3>GraphQL</h3>
        </div>
        <div className="servicesBx" ref={(el) => (elms.current[3] = el)}>
          <Icon className="icon" icon={Typescript} width="100%" height="90%" />
          <h3>Typescript</h3>
        </div>
        <div className="servicesBx" ref={(el) => (elms.current[4] = el)}>
          <Icon className="icon" icon={Node} width="100%" height="90%" />
          <h3>Node.js</h3>
        </div>
        <div className="servicesBx" ref={(el) => (elms.current[5] = el)}>
          <Icon className="icon" icon={postgres} width="100%" height="90%" />
          <h3>PostgreSQL</h3>
        </div>
        <div className="servicesBx" ref={(el) => (elms.current[6] = el)}>
          <Icon className="icon" icon={Mongo} width="100%" height="90%" />
          <h3>MongoDB</h3>
        </div>
        <div className="servicesBx" ref={(el) => (elms.current[7] = el)}>
          <Icon className="icon" icon={Css} width="100%" height="90%" />
          <h3>CSS</h3>
        </div>
        <div className="servicesBx" ref={(el) => (elms.current[8] = el)}>
          <Icon className="icon" icon={next} width="100%" height="90%" />
          <h3>Next.js</h3>
        </div>
        <div className="servicesBx" ref={(el) => (elms.current[9] = el)}>
          <Icon className="icon" icon={Js} width="100%" height="90%" />
          <h3>Javascript</h3>
        </div>
        <div className="servicesBx" ref={(el) => (elms.current[10] = el)}>
          <Icon className="icon" icon={Git} width="100%" height="90%" />
          <h3>Git</h3>
        </div>
        <div className="servicesBx" ref={(el) => (elms.current[11] = el)}>
          <Icon className="icon" icon={Laravel} width="100%" height="90%" />
          <h3>Git</h3>
        </div>
      </div>
    </section>
  )
}

export default skills
