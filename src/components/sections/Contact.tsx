import type React from "react"
import { Mail, Linkedin, Github } from "lucide-react"

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's{" "}
          <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Connect</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Whether you have a challenging project, a freelance opportunity, or just want to discuss technology, I'm
          always excited to explore new possibilities.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:your.email@example.com"
            className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-6 shadow-xl border border-slate-500 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-2 group animate-slide-in-up hover:shadow-2xl"
          >
            <Mail
              className="mx-auto mb-4 text-blue-400 group-hover:text-blue-300 group-hover:scale-125 transition-all duration-300"
              size={32}
            />
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">Email</h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-colors">your.email@example.com</p>
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-6 shadow-xl border border-slate-500 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-2 group animate-slide-in-up animation-delay-200 hover:shadow-2xl"
          >
            <Linkedin
              className="mx-auto mb-4 text-blue-400 group-hover:text-blue-300 group-hover:scale-125 transition-all duration-300"
              size={32}
            />
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
              LinkedIn
            </h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-colors">Connect with me</p>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-6 shadow-xl border border-slate-500 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-2 group animate-slide-in-up animation-delay-400 hover:shadow-2xl"
          >
            <Github
              className="mx-auto mb-4 text-blue-400 group-hover:text-blue-300 group-hover:scale-125 transition-all duration-300"
              size={32}
            />
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
              GitHub
            </h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-colors">View my code</p>
          </a>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl border border-slate-600 animate-slide-in-up animation-delay-600 hover:transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-3xl">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to start a project?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm available for freelance projects, full-time positions, and exciting collaborations. Let's discuss how I
            can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl animate-pulse-glow"
            >
              Start a Conversation
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transform hover:scale-105 hover:-rotate-1 transition-all duration-300 hover:shadow-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
