"use client"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Sobre" },
    { id: "portfolio", label: "Portfólio" },
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
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(8px)",
        zIndex: 50,
        borderBottom: "1px solid rgba(16, 185, 129, 0.2)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 0",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#10b981" }}>Portfolio</div>

          {/* Menu sempre visível */}
          <div
            style={{
              display: "flex",
              gap: "clamp(1rem, 4vw, 2rem)",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
                  fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                  fontWeight: activeSection === item.id ? "600" : "400",
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.color = "#10b981")}
                onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.color = activeSection === item.id ? "#10b981" : "#ffffff")}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
