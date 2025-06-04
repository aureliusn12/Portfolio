"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, FileText, Terminal, Menu, X } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-black/90 backdrop-blur-md" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Terminal className="text-[#0f0] mr-2" size={24} />
          <span className="text-[#0f0] font-bold text-xl tracking-wider neon-text">
            aurelius<span className="text-white">@</span>navi
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Projetos", "Sobre", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-[#0f0] transition-all duration-300 hover-glow"
            >
              <span className="text-[#0f0]">&gt;</span> {item}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/aureliusn12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0f0] transition-all duration-300 hover-glow"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/aureliusn12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0f0] transition-all duration-300 hover-glow"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:contact@aureliusnavi.dev"
            className="text-gray-400 hover:text-[#0f0] transition-all duration-300 hover-glow"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="/cv.pdf"
            download
            className="text-gray-400 hover:text-[#0f0] transition-all duration-300 hover-glow"
            aria-label="Download CV"
          >
            <FileText size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-[#0f0] transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#10b981]/20 animate-fade-in-up">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {["Home", "Projetos", "Sobre", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-[#0f0] transition-all duration-300 py-2 hover-glow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-[#0f0]">&gt;</span> {item}
                </a>
              ))}
              <div className="flex space-x-6 pt-4 border-t border-[#10b981]/20">
                <a
                  href="https://github.com/aureliusn12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0f0] transition-all duration-300 hover-glow"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/aureliusn12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0f0] transition-all duration-300 hover-glow"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:contact@aureliusnavi.dev"
                  className="text-gray-400 hover:text-[#0f0] transition-all duration-300 hover-glow"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="text-gray-400 hover:text-[#0f0] transition-all duration-300 hover-glow"
                  aria-label="Download CV"
                >
                  <FileText size={20} />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
