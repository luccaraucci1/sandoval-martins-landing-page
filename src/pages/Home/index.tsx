import { About } from '../../components/About'
import { Footer } from '../../components/Footer'
import { Hero } from '../../components/Hero'
import { LectureModels } from '../../components/LectureModels'
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
      <LectureModels />
      <Reviews />
      <Footer />
    </>
  )
}
