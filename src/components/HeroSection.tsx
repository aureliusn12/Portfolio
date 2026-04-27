"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("")
  // FIX: text now reflects actual objective — Red Team / Pentest
  const fullText = "Red Team · Pentest · Engenharia de Software"
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
    }, 80) // FIX: slightly faster — feels snappier

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative pt-20 pb-10 px-4"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-6 inline-block">
          {/* FIX: command prompt updated to reflect security identity */}
          <span className="text-gray-400 text-sm md:text-base">
            &gt; ./execute recon.sh --target=opportunities
          </span>
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glitch"
          data-text="Aurelius Navi"
        >
          <span className="neon-text">Aurelius</span>{" "}
          <span className="text-white">Navi</span>
        </h1>

        <div className="h-8 mb-8">
          <h2 className="text-lg md:text-xl text-gray-300 inline-block">
            {displayText}
            {showCursor && (
              <span className="text-[#0f0] animate-pulse">_</span>
            )}
          </h2>
        </div>

        {/* FIX: description now explicitly mentions pentest / red team / security */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Graduando em Engenharia de Software com foco em{" "}
          <span className="text-[#0f0]">segurança ofensiva</span>. Construindo
          habilidades em pentest, Red Team e análise de vulnerabilidades —
          enquanto desenvolvo sistemas seguros e automatizações em Python e
          Linux.
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

      {/* FIX: scroll indicator with accessible label */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#projetos"
          className="text-[#0f0] hover:text-white transition-colors duration-300"
          aria-label="Rolar para projetos"
        >
          <ChevronDown size={24} />
        </a>
      </div>

      {/* FIX: decorative terminals updated to reflect security tooling */}
      <div className="absolute bottom-40 left-10 hidden lg:block opacity-60 rotate-[-15deg]">
        <div className="terminal p-4 w-64">
          <div className="text-xs text-[#0f0]">
            <div>$ whoami</div>
            <div>aurelius — red teamer</div>
            <div>$ nmap -sV target</div>
            <div>PORT   STATE SERVICE</div>
            <div>22/tcp open  ssh</div>
            <div>80/tcp open  http</div>
            <div>$ _</div>
          </div>
        </div>
      </div>

      <div className="absolute top-40 right-10 hidden lg:block opacity-60 rotate-[10deg]">
        <div className="terminal p-4 w-64">
          <div className="text-xs text-[#0f0]">
            <div>$ python3 exploit.py</div>
            <div>[*] Connecting to target...</div>
            <div>[+] Shell obtained</div>
            <div>$ id</div>
            <div>uid=0(root) gid=0(root)</div>
            <div>$ _</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
