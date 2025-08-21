import type React from "react"
import { experiences } from "../../constants/constant"

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl border border-slate-600 hover:border-blue-500/50 transition-all duration-500 animate-slide-in-up hover:transform hover:scale-105 hover:rotate-1 hover:shadow-3xl group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-blue-400 font-semibold group-hover:text-teal-400 transition-colors">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-400 bg-slate-700 px-4 py-2 rounded-full text-sm font-medium mt-4 md:mt-0 group-hover:bg-slate-600 group-hover:text-white transition-all duration-300">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-blue-500/20 to-teal-500/20 text-white px-3 py-1 rounded-full text-sm border border-blue-500/30 hover:from-blue-500/30 hover:to-teal-500/30 hover:scale-110 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
