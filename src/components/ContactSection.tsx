"use client"

import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"
import { personalInfo } from "../data/personalInfo"

export const ContactSection = () => {
  return (
    <section id="contact" style={{ padding: "5rem 1rem" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "4rem",
            color: "#10b981",
          }}
        >
          Entre em Contato
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
          }}
        >
          <div className="scroll-animate slide-in-left">
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "1.5rem",
                color: "#10b981",
              }}
            >
              Vamos Trabalhar Juntos!
            </h3>
            <p
              style={{
                color: "#d1d5db",
                marginBottom: "2rem",
                lineHeight: "1.7",
              }}
            >
              Estou sempre aberto a novos projetos e oportunidades. Se você tem uma ideia incrível ou precisa de ajuda
              com desenvolvimento, não hesite em entrar em contato!
            </p>

            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <Mail style={{ width: "1.5rem", height: "1.5rem", color: "#10b981" }} />
                <span style={{ color: "#d1d5db" }}>{personalInfo.email}</span>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "#10b981",
                    color: "#000000",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.25rem",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "all 0.3s",
                    transform: "scale(1)",
                  }}
                  onClick={() => window.open(personalInfo.github, "_blank")}
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
                  <Github size={16} />
                  GitHub
                </Button>
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "#10b981",
                    color: "#000000",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.25rem",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "all 0.3s",
                    transform: "scale(1)",
                  }}
                  onClick={() => window.open(personalInfo.linkedin, "_blank")}
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
                  <Linkedin size={16} />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          <Card
            style={{
              backgroundColor: "#111827",
              border: "1px solid #374151",
              borderRadius: "0.5rem",
            }}
            className="scroll-animate slide-in-right"
          >
            <CardContent style={{ padding: "1.5rem" }}>
              <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#10b981",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      backgroundColor: "#1f2937",
                      border: "1px solid #374151",
                      borderRadius: "0.5rem",
                      color: "#ffffff",
                      outline: "none",
                      transition: "border-color 0.3s",
                    }}
                    placeholder="Seu nome"
                    onFocus={(e) => (e.target.style.borderColor = "#10b981")}
                    onBlur={(e) => (e.target.style.borderColor = "#374151")}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#10b981",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      backgroundColor: "#1f2937",
                      border: "1px solid #374151",
                      borderRadius: "0.5rem",
                      color: "#ffffff",
                      outline: "none",
                      transition: "border-color 0.3s",
                    }}
                    placeholder="seu@email.com"
                    onFocus={(e) => (e.target.style.borderColor = "#10b981")}
                    onBlur={(e) => (e.target.style.borderColor = "#374151")}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#10b981",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      backgroundColor: "#1f2937",
                      border: "1px solid #374151",
                      borderRadius: "0.5rem",
                      color: "#ffffff",
                      outline: "none",
                      resize: "none",
                      transition: "border-color 0.3s",
                    }}
                    placeholder="Sua mensagem..."
                    onFocus={(e) => (e.target.style.borderColor = "#10b981")}
                    onBlur={(e) => (e.target.style.borderColor = "#374151")}
                  />
                </div>
                <Button
                  style={{
                    width: "100%",
                    backgroundColor: "#10b981",
                    color: "#000000",
                    fontWeight: "600",
                    padding: "0.75rem",
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
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
