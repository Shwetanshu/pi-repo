import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>&copy; Shwetanshu</p>
      </footer>
    </>
  )
}
