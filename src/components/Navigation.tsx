"use client"

import { Shield, Terminal, Award, FileText, Github, Linkedin, Mail } from "lucide-react"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Sobre" },
    { id: "portfolio", label: "Projetos" },
    { id: "contact", label: "Contato" },
  ]

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId)
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        backdropFilter: "blur(12px)",
        zIndex: 50,
        borderBottom: "1px solid rgba(16, 185, 129, 0.3)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.75rem 0",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {/* Logo com ícones de segurança */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Shield style={{ width: "1.5rem", height: "1.5rem", color: "#10b981" }} />
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#10b981" }}>SecDev</div>
            </div>

            {/* Badges/Certificações */}
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }} className="hidden sm:flex">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "0.25rem",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                <Award style={{ width: "0.875rem", height: "0.875rem", color: "#10b981" }} />
                <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: "500" }}>CEH</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "0.25rem",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                <Terminal style={{ width: "0.875rem", height: "0.875rem", color: "#10b981" }} />
                <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: "500" }}>OSCP</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "0.25rem",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                <FileText style={{ width: "0.875rem", height: "0.875rem", color: "#10b981" }} />
                <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: "500" }}>CISSP</span>
              </div>
            </div>
          </div>

          {/* Menu de navegação */}
          <div
            style={{
              display: "flex",
              gap: "clamp(1rem, 3vw, 2rem)",
              alignItems: "center",
            }}
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                style={{
                  transition: "all 0.3s ease",
                  color: activeSection === item.id ? "#10b981" : "#ffffff",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                  fontWeight: activeSection === item.id ? "600" : "400",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "0.375rem",
                  whiteSpace: "nowrap",
                  position: "relative",
                  backgroundColor: activeSection === item.id ? "rgba(16, 185, 129, 0.1)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement
                  target.style.color = "#10b981"
                  target.style.backgroundColor = "rgba(16, 185, 129, 0.1)"
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement
                  target.style.color = activeSection === item.id ? "#10b981" : "#ffffff"
                  target.style.backgroundColor = activeSection === item.id ? "rgba(16, 185, 129, 0.1)" : "transparent"
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Links sociais */}
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }} className="hidden md:flex">
            <a
              href="https://github.com/aureliusn12"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#9ca3af",
                transition: "color 0.3s",
                padding: "0.5rem",
                borderRadius: "0.375rem",
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#10b981")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#9ca3af")}
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/aureliusn12"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#9ca3af",
                transition: "color 0.3s",
                padding: "0.5rem",
                borderRadius: "0.375rem",
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#10b981")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#9ca3af")}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:aurelius.navi@security.com"
              style={{
                color: "#9ca3af",
                transition: "color 0.3s",
                padding: "0.5rem",
                borderRadius: "0.375rem",
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#10b981")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#9ca3af")}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}