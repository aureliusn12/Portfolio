"use client"

import { ArrowUp, Clock, MapPin, Coffee } from "lucide-react"
import { useState, useEffect } from "react"

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "America/Sao_Paulo",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-[#0f0]/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-[#0f0] font-bold text-lg">
              aurelius<span className="text-white">@</span>navi
            </div>
            <p className="text-gray-500 text-sm mt-1">&copy; {currentYear} Todos os direitos reservados.</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="text-gray-500 text-sm mb-2">Desenvolvido com código e café</div>
            <div className="flex space-x-6">
              <div className="flex items-center text-gray-400 text-sm">
                <Clock size={14} className="mr-1 text-[#0f0]" />
                <span>{currentTime} BRT</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin size={14} className="mr-1 text-[#0f0]" />
                <span>Teresina, BR</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Coffee size={14} className="mr-1 text-[#0f0]" />
                <span>Status: Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-[#0f0]/10 rounded-full text-[#0f0] hover:bg-[#0f0]/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] z-50"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  )
}

export default Footer
