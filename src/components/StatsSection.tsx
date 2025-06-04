"use client"

import { AnimatedCounter } from "./AnimatedCounter"
import { Shield, Bug, Eye, Award } from "lucide-react"

export const StatsSection = () => {
  const stats = [
    {
      end: 500,
      suffix: "+",
      label: "Vulnerabilidades Descobertas",
      icon: Bug,
      description: "Em sistemas críticos",
    },
    {
      end: 15,
      suffix: "+",
      label: "Certificações de Segurança",
      icon: Award,
      description: "Reconhecidas internacionalmente",
    },
    {
      end: 50,
      suffix: "+",
      label: "Sistemas Protegidos",
      icon: Shield,
      description: "Infraestruturas corporativas",
    },
    {
      end: 24,
      suffix: "/7",
      label: "Monitoramento Ativo",
      icon: Eye,
      description: "Detecção de ameaças",
    },
  ]

  return (
    <section
      style={{
        padding: "5rem 1rem",
        backgroundColor: "rgba(17, 24, 39, 0.4)",
        borderTop: "1px solid rgba(16, 185, 129, 0.2)",
        borderBottom: "1px solid rgba(16, 185, 129, 0.2)",
      }}
    >
      <div style={{ maxWidth: "96rem", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "3rem",
            color: "#10b981",
          }}
        >
          Resultados em Segurança
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`scroll-animate fade-in-up animation-delay-${index * 200}`}
              style={{
                textAlign: "center",
                padding: "2rem 1rem",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: "1rem",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.5)"
                e.currentTarget.style.transform = "translateY(-5px)"
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(16, 185, 129, 0.2)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.2)"
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <stat.icon
                style={{
                  width: "3rem",
                  height: "3rem",
                  color: "#10b981",
                  margin: "0 auto 1rem auto",
                }}
              />
              <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              <p style={{ color: "#ffffff", marginTop: "0.5rem", fontWeight: "600", fontSize: "1.1rem" }}>
                {stat.label}
              </p>
              <p style={{ color: "#9ca3af", marginTop: "0.25rem", fontSize: "0.875rem" }}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}