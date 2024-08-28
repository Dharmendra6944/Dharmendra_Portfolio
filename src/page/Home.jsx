import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Experience from '../components/Experience'

function Home() {
  return (
    <div className='px-1 sm:px-2 md:px-6 lg:px-8 xl:px-10 pt-4 md:pt-10 lg:pt-12 xl:pt-16 bg-gradient-to-b from-slate-950 to-slate-900' >
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home