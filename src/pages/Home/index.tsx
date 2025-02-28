import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { Footer } from '../../components/Footer'
import { Hero } from '../../components/Hero'
import { Lectures } from '../../components/Lectures'
import { Projects } from '../../components/Projects'
import { Reviews } from '../../components/Reviews'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Lectures />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}
