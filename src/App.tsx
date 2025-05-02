import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FireflyCursor from './components/FireflyCursor'

function App() {

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a2434] text-white">
      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <section id="hero" className="section-transition">
          <Hero />
        </section>
        <section id="experience" className="section-transition">
          <Experience />
        </section>
        <section id="projects" className="section-transition">
          <Projects />
        </section>
        <section id="about" className="section-transition">
          <About />
        </section>
        <section id="skills" className="section-transition">
          <Skills />
        </section>
        <section id="contact" className="section-transition">
          <Contact />
        </section>
      </main>
      <Footer />
      <FireflyCursor />
    </div>
  )
}

export default App
