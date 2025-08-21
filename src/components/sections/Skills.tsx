import type React from "react"
import { Code, Database, Globe, Brain } from "lucide-react"
import { skills } from "../../constants/constant"
import { AnimationWrapper } from "../AnimationWrapper"

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A diverse toolkit built through curiosity, necessity, and the drive to solve any problem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimationWrapper animation="animate-slide-in-up" delay="animation-delay-200">
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-6 shadow-xl border border-slate-500 hover:transform hover:scale-105 hover:rotate-2 transition-all duration-500 animate-slide-in-up hover:shadow-2xl group perspective-1000">
              <Code className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                Frameworks
              </h3>
              <div className="space-y-2">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 border border-blue-500/30 hover:bg-blue-500/30 hover:scale-110 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </AnimationWrapper>

          <AnimationWrapper animation="animate-slide-in-up" delay="animation-delay-400">
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-6 shadow-xl border border-slate-500 hover:transform hover:scale-105 hover:rotate-2 transition-all duration-500 animate-slide-in-up hover:shadow-2xl group">
              <Database className="text-teal-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors">Databases</h3>
              <div className="space-y-2">
                {skills.databases.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 border border-teal-500/30 hover:bg-teal-500/30 hover:scale-110 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper animation="animate-slide-in-up" delay="animation-delay-600">
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-6 shadow-xl border border-slate-500 hover:transform hover:scale-105 hover:rotate-2 transition-all duration-500 animate-slide-in-up hover:shadow-2xl group">
              <Globe className="text-orange-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">
                Languages
              </h3>
              <div className="space-y-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 border border-orange-500/30 hover:bg-orange-500/30 hover:scale-110 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimationWrapper>
          
          <AnimationWrapper animation={"animate-slide-in-up"} delay="animation-delay-800">
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-6 shadow-xl border border-slate-500 hover:transform hover:scale-105 hover:rotate-2 transition-all duration-500 animate-slide-in-up animation-delay-600 hover:shadow-2xl group">
              <Brain className="text-green-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                Current Focus
              </h3>
              <div className="space-y-2">
                {skills.interests.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 border border-green-500/30 hover:bg-green-500/30 hover:scale-110 transition-all duration-300 cursor-default animate-pulse-subtle"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimationWrapper>
          
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
