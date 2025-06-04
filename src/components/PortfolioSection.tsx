"use client"

import { ProjectCard } from "./ProjectCard"
import { projects } from "@/data/projects"

export const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="py-20 px-4 bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-emerald-500"
        >
          Meu Portfólio
        </h2>

        <div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}