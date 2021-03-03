import React from 'react'
import { Icon } from '@iconify/react'
import react from '@iconify/icons-logos/react'
import HTML5 from '@iconify/icons-logos/html-5'
import Graphql from '@iconify/icons-logos/graphql'
import Typescript from '@iconify/icons-logos/typescript-icon'
import Node from '@iconify/icons-logos/nodejs'
import next from '@iconify/icons-logos/nextjs'
import Js from '@iconify/icons-logos/javascript'
import postgres from '@iconify/icons-logos/postgresql'
import Mongo from '@iconify/icons-logos/mongodb'
import Css from '@iconify/icons-logos/css-3'

const skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="heading white">
        <h2>Technologies i use to work with</h2>
      </div>
      <div className="content">
        <div className="servicesBx">
          <Icon className="icon" icon={react} width="100%" height="90%" />
          <h3>React</h3>
        </div>
        <div className="servicesBx">
          <Icon className="icon" icon={HTML5} width="100%" height="90%" />
          <h3>HTML5</h3>
        </div>
        <div className="servicesBx">
          <Icon className="icon" icon={Graphql} width="100%" height="90%" />
          <h3>GraphQL</h3>
        </div>
        <div className="servicesBx">
          <Icon className="icon" icon={Typescript} width="100%" height="90%" />
          <h3>Typescript</h3>
        </div>
        <div className="servicesBx">
          <Icon className="icon" icon={Node} width="100%" height="90%" />
          <h3>Node.js</h3>
        </div>
        <div className="servicesBx">
          <Icon className="icon" icon={postgres} width="100%" height="90%" />
          <h3>PostgreSQL</h3>
        </div>
        <div className="servicesBx">
          <Icon className="icon" icon={Mongo} width="100%" height="90%" />
          <h3>MongoDB</h3>
        </div>
        <div className="servicesBx">
          <Icon className="icon" icon={Css} width="100%" height="90%" />
          <h3>CSS</h3>
        </div>
        <div className="servicesBx">
          <Icon className="icon" icon={next} width="100%" height="90%" />
          <h3>Next.js</h3>
        </div>
        <div className="servicesBx">
          <Icon className="icon" icon={Js} width="100%" height="90%" />
          <h3>Javascript</h3>
        </div>
      </div>
    </section>
  )
}

export default skills
