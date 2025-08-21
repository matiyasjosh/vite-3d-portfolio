"use client"

import type React from "react"
import { Brain, Code, Shield, Globe } from "lucide-react"
import { AnimatedCounter } from "../AnimatedCounter"

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Philosophy</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left animation-delay-300">
            <p className="text-lg text-gray-300 leading-relaxed animate-slide-in-left">
              I believe in the power of adaptability over specialization. While others focus on mastering one area, I've
              chosen to embrace the full spectrum of technology. This approach has taught me that
              <strong className="text-blue-400"> learning is a superpower</strong>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed animate-slide-in-left animation-delay-200">
              My recent interests in <strong className="text-teal-400">AI/ML and Blockchain</strong> represent my
              commitment to staying at the forefront of technological innovation. But what sets me apart isn't just what
              I know—it's my ability to rapidly learn what I don't know.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed animate-slide-in-left animation-delay-400">
              With professional experience at the Information Network Security Agency and Eskalate, I've proven that I
              can deliver results across diverse technical challenges.
              <strong className="text-orange-400"> Give me any problem, and I'll find a solution</strong>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl border border-slate-600 animate-slide-in-right hover:transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-3xl animate-slide-in-right animate-delay-300">
            <h3 className="text-2xl font-bold text-white mb-6">Core Values</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 animate-fade-in animation-delay-600 hover:translate-x-2 transition-transform duration-300">
                <Brain className="text-blue-400" size={24} />
                <span className="text-gray-300">Continuous Learning</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in animation-delay-700 hover:translate-x-2 transition-transform duration-300">
                <Code className="text-teal-400" size={24} />
                <span className="text-gray-300">Problem-First Approach</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in animation-delay-800 hover:translate-x-2 transition-transform duration-300">
                <Shield className="text-orange-400" size={24} />
                <span className="text-gray-300">Security-Minded Development</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in animation-delay-900 hover:translate-x-2 transition-transform duration-300">
                <Globe className="text-green-400" size={24} />
                <span className="text-gray-300">Technology Agnostic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in-up animation-delay-1000">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              <AnimatedCounter end={15} suffix="+" />
            </div>
            <p className="text-gray-400">Technologies</p>
          </div>
          <div className="text-center animate-fade-in-up animation-delay-1100">
            <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">
              <AnimatedCounter end={2} suffix="+" />
            </div>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="text-center animate-fade-in-up animation-delay-1200">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <p className="text-gray-400">Problem Solving</p>
          </div>
          <div className="text-center animate-fade-in-up animation-delay-1300">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
              <AnimatedCounter end={24} suffix="/7" />
            </div>
            <p className="text-gray-400">Learning Mode</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
