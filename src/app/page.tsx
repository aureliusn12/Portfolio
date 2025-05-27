"use client"

import { useState, useEffect } from "react"
import { MatrixBackground } from "@/components/MatrixBackground"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { StatsSection } from "@/components/StatsSection"
import { PortfolioSection } from "@/components/PortfolioSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useScrollAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })

      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff", minHeight: "100vh", position: "relative" }}>
      <MatrixBackground />

      <div style={{ position: "relative", zIndex: 10 }}>
        <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <StatsSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
        <ScrollToTopButton showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
      </div>
    </div>
  )
}
