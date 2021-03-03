import Header from '../components/Header'
import Banner from '../components/Banner'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Posts, { PostsArray } from '../components/Posts'
import Works from '../components/Works'
import fetch from 'node-fetch'

export default function Home({ posts }: { posts: PostsArray }) {
  console.log(posts)
  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <Skills />
      <Works />
      <Posts posts={posts} />
      <Contact />

      <div className="copyright">
        <p>Copyright wonder 2021 all rights reserved</p>
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  const data = await fetch(
    'https://dev.to/api/articles?username=wonder2210&page=1&per_page=3'
  )
  const posts = await data.json()

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  }
}
