import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import GHGPipeline from './components/GHGPipeline'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <GHGPipeline />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
