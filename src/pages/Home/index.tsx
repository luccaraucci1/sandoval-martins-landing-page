import { About } from '../../components/About'
import { Hero } from '../../components/Hero'
import { Lectures } from '../../components/Lectures'
import { Projects } from '../../components/Projects'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Lectures />
      <Projects />
    </>
  )
}
