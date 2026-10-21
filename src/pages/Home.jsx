import { useRef } from 'react'
import useScrollAnimations from '../lib/useScrollAnimations.js'
import Hero from '../components/Hero.jsx'
import FeaturedWork from '../components/FeaturedWork.jsx'
import International from '../components/International.jsx'
import CreativeWork from '../components/CreativeWork.jsx'
import Illustration from '../components/Illustration.jsx'
import Experience from '../components/Experience.jsx'
import Languages from '../components/Languages.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  const scope = useRef(null)
  useScrollAnimations(scope)
  return (
    <main id="top" ref={scope}>
      <Hero />
      <Experience />
      <FeaturedWork />
      <International />
      <CreativeWork />
      <Illustration />
      <Languages />
      <Contact />
    </main>
  )
}
