"use client"

import { AnimatedCounter } from "./AnimatedCounter"

export const StatsSection = () => {
  const stats = [
    { end: 50, suffix: "+", label: "Projetos Concluídos" },
    { end: 5, suffix: "+", label: "Anos de Experiência" },
    { end: 30, suffix: "+", label: "Clientes Satisfeitos" },
    { end: 100, suffix: "%", label: "Dedicação" },
  ]

  return (
    <section
      style={{
        padding: "5rem 1rem",
        backgroundColor: "rgba(17, 24, 39, 0.3)",
      }}
    >
      <div style={{ maxWidth: "96rem", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className={`scroll-animate fade-in-up animation-delay-${index * 200}`}>
              <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              <p style={{ color: "#9ca3af", marginTop: "0.5rem" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
