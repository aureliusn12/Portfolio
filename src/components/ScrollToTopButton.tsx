"use client"

import { ArrowUp } from "lucide-react"

interface ScrollToTopButtonProps {
  showScrollTop: boolean
  scrollToTop: () => void
}

export const ScrollToTopButton = ({ showScrollTop, scrollToTop }: ScrollToTopButtonProps) => {
  if (!showScrollTop) return null

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        backgroundColor: "#10b981",
        color: "#000000",
        padding: "0.75rem",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s",
        transform: "scale(1)",
        zIndex: 50,
      }}
      onMouseEnter={(e) => {
        const target = e.target as HTMLButtonElement
        target.style.backgroundColor = "#059669"
        target.style.transform = "scale(1.1)"
      }}
      onMouseLeave={(e) => {
        const target = e.target as HTMLButtonElement
        target.style.backgroundColor = "#10b981"
        target.style.transform = "scale(1)"
      }}
    >
      <ArrowUp size={24} />
    </button>
  )
}
