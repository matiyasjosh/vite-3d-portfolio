import type React from "react"
import { Menu, X } from "lucide-react"
import { useNavigation } from "../../contexts/NavigationContext"

const Navigation: React.FC = () => {
  const { isMenuOpen, activeSection, setIsMenuOpen, scrollToSection } = useNavigation()

  const navItems = ["home", "about", "skills", "experience", "projects", "contact"]

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block px-3 py-2 w-full text-left rounded-md text-base font-medium transition-colors ${
                    activeSection === section
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
