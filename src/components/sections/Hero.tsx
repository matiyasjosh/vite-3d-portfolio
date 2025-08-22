// import { lazy, Suspense } from "react";
// // import { useEffect } from "react";
// // import 'aos/dist/aos.css';
// // import AOS from 'aos';

// const Spline = lazy(() => import("@splinetool/react-spline"));

// const Hero = () => {
//   return (
//     <div className="max-h-screen flex justify-around">
//       <h1 className="w-[20%] text-4xl my-auto mx-auto exo2Font"><span className="text-purple-400 text-5xl">Hi There</span>, I am Matiyas Woldemariam</h1>
//       <div className="w-[50vw] h-[100vh]">
//         <Suspense fallback={<div className="text-white">Loading 3D Scene...</div>}>
//           <Spline
//             scene="https://prod.spline.design/luit7OawlfM830Tz/scene.splinecode"
//           />
//         </Suspense>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import type React from "react"
import { ChevronDown } from "lucide-react"
import { useNavigation } from "../../contexts/NavigationContext"

const HeroSection: React.FC = () => {
  const { scrollToSection } = useNavigation()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-600 bg-clip-text text-transparent">
              <span className="inline-block animate-bounce-slow">Adaptable</span>
            </span>
            <br />
            <span className="text-white animate-fade-in-up">Hi There,</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
             I'm Matiyas Woldemariam, a 5th Year Software Engineering Student at AASTU. I don't just code—I solve problems. Give me any challenge,
            and I'll figure out a way to make it work.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl animate-pulse-glow"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transform hover:scale-105 hover:-rotate-1 transition-all duration-300 hover:shadow-lg"
          >
            Let's Connect
          </button>
        </div>

        <div className="text-center animate-fade-in-up animation-delay-900">
          <p className="text-gray-400 mb-4">Scroll to explore</p>
          <ChevronDown className="mx-auto text-gray-400 animate-bounce" size={24} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
