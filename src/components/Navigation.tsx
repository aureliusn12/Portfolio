"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Sobre" },
    { id: "portfolio", label: "Portfólio" },
    { id: "contact", label: "Contato" },
  ]

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(8px)",
        zIndex: 50,
        borderBottom: "1px solid rgba(16, 185, 129, 0.2)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#10b981" }}>Portfolio</div>

          {/* Desktop Menu */}
          <div style={{ display: "none" }} className="md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                style={{
                  transition: "color 0.3s",
                  color: activeSection === item.id ? "#10b981" : "#ffffff",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#10b981")}
                onMouseLeave={(e) => (e.target.style.color = activeSection === item.id ? "#10b981" : "#ffffff")}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{
              display: "block",
              background: "none",
              border: "none",
              color: "#ffffff",
              cursor: "pointer",
            }}
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(8px)",
            borderTop: "1px solid rgba(16, 185, 129, 0.2)",
          }}
          className="md:hidden"
        >
          <div style={{ padding: "1rem" }}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  color: "#ffffff",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.5rem 0",
                  fontSize: "1rem",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
