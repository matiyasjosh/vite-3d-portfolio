import type React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <p className="text-gray-400">© 2024 Portfolio. Built with React, TypeScript, and lots of curiosity.</p>
        <p className="text-gray-500 text-sm mt-2">
          "The best way to predict the future is to build it." - Ready to build yours?
        </p>
      </div>
    </footer>
  )
}

export default Footer
