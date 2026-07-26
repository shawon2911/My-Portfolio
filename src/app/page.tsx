// src/app/page.tsx
import Hero from '@/Components/sections/Hero'
import About from '@/Components/sections/About'
import Skills from '@/Components/sections/Skills'
import Projects from '@/Components/sections/Projects'
import Contact from '@/Components/sections/Contacts'


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}