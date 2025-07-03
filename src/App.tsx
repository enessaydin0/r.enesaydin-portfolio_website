import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <div className="bg-slate-900 text-slate-200">
      <Navbar />
      
      <main>
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        
        <AnimatedSection>
          <Projects />
        </AnimatedSection>

        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}

export default App;