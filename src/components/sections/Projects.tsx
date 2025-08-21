"use client"

import type React from "react"
import { Code, Brain, Shield, ExternalLink } from "lucide-react"
import { useNavigation } from "../../contexts/NavigationContext"

const ProjectsSection: React.FC = () => {
  const { scrollToSection } = useNavigation()

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of solutions I've built across different domains and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl overflow-hidden shadow-2xl border border-slate-500 hover:transform hover:scale-105 hover:rotate-2 transition-all duration-500 animate-slide-in-up group hover:shadow-3xl">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center relative overflow-hidden">
              <Code className="text-white group-hover:scale-125 transition-transform duration-500" size={48} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            <div className="p-6 group-hover:bg-slate-600/50 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                Full-Stack Web Application
              </h3>
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                A comprehensive solution built with modern web technologies.
              </p>
              <div className="flex items-center text-blue-400 hover:text-blue-300 group-hover:translate-x-2 transition-all duration-300">
                <span className="mr-2">View Project</span>
                <ExternalLink size={16} />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl overflow-hidden shadow-2xl border border-slate-500 hover:transform hover:scale-105 hover:rotate-2 transition-all duration-500 animate-slide-in-up animation-delay-200 group hover:shadow-3xl">
            <div className="h-48 bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center relative overflow-hidden">
              <Brain className="text-white group-hover:scale-125 transition-transform duration-500" size={48} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            <div className="p-6 group-hover:bg-slate-600/50 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                AI/ML Project
              </h3>
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                Exploring the frontiers of artificial intelligence and machine learning.
              </p>
              <div className="flex items-center text-blue-400 hover:text-blue-300 group-hover:translate-x-2 transition-all duration-300">
                <span className="mr-2">View Project</span>
                <ExternalLink size={16} />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl overflow-hidden shadow-2xl border border-slate-500 hover:transform hover:scale-105 hover:rotate-2 transition-all duration-500 animate-slide-in-up animation-delay-400 group hover:shadow-3xl">
            <div className="h-48 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center relative overflow-hidden">
              <Shield className="text-white group-hover:scale-125 transition-transform duration-500" size={48} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            <div className="p-6 group-hover:bg-slate-600/50 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                Security Solution
              </h3>
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                Cybersecurity implementation with industry best practices.
              </p>
              <div className="flex items-center text-blue-400 hover:text-blue-300 group-hover:translate-x-2 transition-all duration-300">
                <span className="mr-2">View Project</span>
                <ExternalLink size={16} />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Ready to tackle your next challenge?</p>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl animate-pulse-glow"
          >
            Let's Build Something Amazing
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
