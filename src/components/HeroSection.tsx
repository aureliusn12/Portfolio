"use client"

import { Button } from "../components/ui/button"
import { personalInfo } from "../data/personalInfo"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1rem",
        paddingTop: "5rem",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "64rem", margin: "0 auto" }}>
        <div className="animate-fade-in-up">
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              lineHeight: "1.1",
            }}
          >
            Olá, eu sou{" "}
            <span style={{ color: "#10b981" }} className="animate-pulse">
              {personalInfo.name}
            </span>
          </h1>
          <p
            style={{
              fontSize: "clamp(1.25rem, 4vw, 2rem)",
              color: "#d1d5db",
              marginBottom: "2rem",
            }}
            className="animate-fade-in-up animation-delay-200"
          >
            {personalInfo.title}
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#9ca3af",
              marginBottom: "3rem",
              maxWidth: "42rem",
              margin: "0 auto 3rem auto",
              lineHeight: "1.6",
            }}
            className="animate-fade-in-up animation-delay-400"
          >
            {personalInfo.description}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="sm:flex-row animate-fade-in-up animation-delay-600"
          >
            <Button
              onClick={() => scrollToSection("portfolio")}
              style={{
                backgroundColor: "#10b981",
                color: "#000000",
                fontWeight: "600",
                padding: "0.75rem 2rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                transform: "scale(1)",
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement
                target.style.backgroundColor = "#059669"
                target.style.transform = "scale(1.05)"
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement
                target.style.backgroundColor = "#10b981"
                target.style.transform = "scale(1)"
              }}
            >
              Ver Projetos
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              style={{
                backgroundColor: "transparent",
                color: "#10b981",
                fontWeight: "600",
                padding: "0.75rem 2rem",
                borderRadius: "0.5rem",
                border: "2px solid #10b981",
                cursor: "pointer",
                transition: "all 0.3s",
                transform: "scale(1)",
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement
                target.style.backgroundColor = "#10b981"
                target.style.color = "#000000"
                target.style.transform = "scale(1.05)"
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement
                target.style.backgroundColor = "transparent"
                target.style.color = "#10b981"
                target.style.transform = "scale(1)"
              }}
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
