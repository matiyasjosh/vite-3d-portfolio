import { NavigationProvider } from "./contexts/NavigationContext"
import { FloatingElements } from "./components/FloatingElement"
import { ParticleBackground } from "./components/ParticleBackground"
import Navigation from "./components/sections/NavBar"
import HeroSection from "./components/sections/Hero"
import AboutSection from "./components/sections/About"
import SkillsSection from "./components/sections/Skills"
import ExperienceSection from "./components/sections/Experience"
import ProjectsSection from "./components/sections/Projects"
import ContactSection from "./components/sections/Contact"
import Footer from "./components/sections/Footer"

function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <ParticleBackground />
        <FloatingElements />

        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </NavigationProvider>
  )
}

export default App