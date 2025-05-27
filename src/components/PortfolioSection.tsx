"use client"

import { ProjectCard } from "./ProjectCard"
import { projects } from "../data/projects"

export const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      style={{
        padding: "5rem 1rem",
        backgroundColor: "rgba(17, 24, 39, 0.5)",
      }}
    >
      <div style={{ maxWidth: "96rem", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "4rem",
            color: "#10b981",
          }}
        >
          Meu Portfólio
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
