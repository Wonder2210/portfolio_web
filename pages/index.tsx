import Header from '../components/Header'
import Banner from '../components/Banner'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Work from '../components/Work'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <Skills />
      <Work />
      <Contact />
      <div className="copyright">
        <p>Copyright wonder 2021 all rights reserved</p>
      </div>
    </>
  )
}
