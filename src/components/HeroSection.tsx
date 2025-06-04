"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Desenvolvedor Full Stack & Entusiasta de Segurança"
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20 pb-10 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-6 inline-block">
          <span className="text-gray-400 text-sm md:text-base">&gt; ./execute intro.sh</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glitch" data-text="Aurelius Navi">
          <span className="neon-text">Aurelius</span> <span className="text-white">Navi</span>
        </h1>

        <div className="h-8 mb-8">
          <h2 className="text-lg md:text-xl text-gray-300 inline-block">
            {displayText}
            {showCursor && <span className="text-[#0f0] animate-pulse">_</span>}
          </h2>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Transformando ideias em código e construindo soluções digitais seguras e eficientes. Especializado em
          desenvolvimento web, automação e aprendiz em segurança de aplicações.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#projetos"
            className="px-8 py-3 bg-transparent border-2 border-[#0f0] text-[#0f0] rounded-md hover:bg-[#0f0]/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] font-medium"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-8 py-3 bg-[#0f0]/10 text-[#0f0] rounded-md hover:bg-[#0f0]/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] font-medium"
          >
            Contato
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projetos" className="text-[#0f0] hover:text-white transition-colors duration-300">
          <ChevronDown size={24} />
        </a>
      </div>

      {/* Terminal decorativo */}
      <div className="absolute bottom-40 left-10 hidden lg:block opacity-60 rotate-[-15deg]">
        <div className="terminal p-4 w-64">
          <div className="text-xs text-[#0f0]">
            <div>$ whoami</div>
            <div>aurelius</div>
            <div>$ ls -la</div>
            <div>drwxr-xr-x skills/</div>
            <div>drwxr-xr-x projects/</div>
            <div>-rw-r--r-- resume.pdf</div>
            <div>$ _</div>
          </div>
        </div>
      </div>

      {/* Terminal decorativo 2 */}
      <div className="absolute top-40 right-10 hidden lg:block opacity-60 rotate-[10deg]">
        <div className="terminal p-4 w-64">
          <div className="text-xs text-[#0f0]">
            <div>$ npm start</div>
            <div>&gt; portfolio@1.0.0 start</div>
            <div>&gt; next dev</div>
            <div>ready - started server on 0.0.0.0:3000</div>
            <div>$ _</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection