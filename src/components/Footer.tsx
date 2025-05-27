"use client"

import { personalInfo } from "../data/personalInfo"

export const Footer = () => {
  return (
    <footer
      style={{
        padding: "2rem 1rem",
        borderTop: "1px solid #374151",
      }}
    >
      <div style={{ maxWidth: "96rem", margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#9ca3af" }}>© 2025 {personalInfo.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
