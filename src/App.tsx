import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Fireflies from './components/Fireflies'
const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Fireflies />
        <main className="py-8">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
