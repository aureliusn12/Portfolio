"use client"

import { useState } from "react"
import { Github, ExternalLink, Code, Clock } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  github: string | null   // FIX: null = link not yet available (shows badge instead of dead #)
  demo?: string | null
  status?: "live" | "wip" | "concept"  // FIX: honest project status
}

const projects: Project[] = [
  {
    id: 1,
    title: "Chat Bot Dimmy",
    description:
      "Chatbot inteligente desenvolvido em Python/Node.js com aprendizado por interações e integração com APIs externas. Projeto real com código disponível no GitHub.",
    image: "/projects/chatbot-dimmy.png", // substituir com screenshot real
    tech: ["JavaScript", "Node.js", "Python", "API Integration"],
    github: "https://github.com/aureliusn12/Chat-Bot-Dimmy",
    demo: null,
    status: "live",
  },
  {
    id: 2,
    title: "Vulnerability Scanner",
    description:
      "Scanner automatizado de vulnerabilidades para aplicações web com relatórios detalhados em HTML. Integra Nmap, OWASP ZAP e SQLMap via Python.",
    image: "/projects/vuln-scanner.png",
    tech: ["Python", "Nmap", "OWASP ZAP", "SQLMap", "Bash"],
    github: null, // FIX: honest — show "em breve" instead of dead link
    demo: null,
    status: "wip",
  },
  {
    id: 3,
    title: "SIEM Dashboard",
    description:
      "Dashboard de monitoramento de segurança em tempo real com alertas inteligentes e correlação de eventos de log via ELK Stack.",
    image: "/projects/siem-dashboard.png",
    tech: ["React", "TypeScript", "ELK Stack", "Python", "Splunk"],
    github: null,
    demo: null,
    status: "concept",
  },
  {
    id: 4,
    title: "Secure API Gateway",
    description:
      "Gateway de API com autenticação JWT, rate limiting, WAF básico e proteção contra ataques DDoS e injeção.",
    image: "/projects/api-gateway.png",
    tech: ["Node.js", "TypeScript", "JWT", "Rate Limiting", "WAF"],
    github: null,
    demo: null,
    status: "concept",
  },
]

// FIX: status labels map
const statusConfig = {
  live:    { label: "Disponível",  cls: "bg-[#0f0]/10 text-[#0f0] border-[#0f0]/30" },
  wip:     { label: "Em andamento", cls: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
  concept: { label: "Em breve",    cls: "bg-gray-500/10 text-gray-400 border-gray-500/30" },
}

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projetos" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="text-gray-400 text-sm mb-2">&gt; ./list projects --all</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text">Projetos</span>{" "}
            <span className="text-white">Recentes</span>
          </h2>
          <div className="w-24 h-1 bg-[#0f0]/50 mx-auto"></div>
        </div>

        {/* FIX: <article> for semantic correctness — better SEO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const status = statusConfig[project.status ?? "concept"]
            return (
              <article
                key={project.id}
                className="terminal overflow-hidden relative group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Terminal title bar */}
                <div className="absolute top-0 left-0 w-full h-8 bg-black/80 flex items-center px-4 z-10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-400 flex-1 text-center">
                    {project.title}.sh
                  </div>
                  {/* FIX: status badge in title bar */}
                  <span className={`text-xs px-2 py-0.5 rounded border ${status.cls}`}>
                    {status.label}
                  </span>
                </div>

                <div className="p-6 pt-12">
                  {/* Image with lazy loading */}
                  <div className="mb-4 overflow-hidden rounded-md bg-black/40 h-48 flex items-center justify-center relative">
                    <img
                      src={project.image}
                      alt={`Screenshot do projeto ${project.title}`}
                      // FIX: lazy loading — don't block LCP for off-screen images
                      loading="lazy"
                      className="w-full h-48 object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                      // FIX: graceful fallback if screenshot missing
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = "none"
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-gray-600 text-xs gap-2"><span class="text-3xl">⚙️</span><span>Screenshot em breve</span></div>`
                        }
                      }}
                    />

                    {/* Hover overlay — FIX: only shows real links */}
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Código fonte de ${project.title}`}
                          className="p-3 bg-[#0f0]/10 rounded-full text-[#0f0] hover:bg-[#0f0]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                        >
                          <Github size={20} />
                        </a>
                      ) : (
                        // FIX: no dead links — show disabled state with tooltip
                        <span
                          title="Repositório será publicado em breve"
                          className="p-3 bg-gray-800/50 rounded-full text-gray-600 cursor-not-allowed"
                          aria-label="Repositório em breve"
                        >
                          <Clock size={20} />
                        </span>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Demo ao vivo de ${project.title}`}
                          className="p-3 bg-[#0f0]/10 rounded-full text-[#0f0] hover:bg-[#0f0]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-[#0f0]">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-[#0f0]/10 text-[#0f0] rounded-md border border-[#0f0]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-xs text-gray-500">
                    <Code size={14} className="mr-2" />
                    <span>
                      {hoveredProject === project.id
                        ? "Analisando código..."
                        : project.github
                        ? "Código disponível no GitHub"
                        : "Repositório será publicado em breve"}
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* FIX: CTA to GitHub profile */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/aureliusn12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#0f0]/40 text-[#0f0] rounded-md hover:bg-[#0f0]/10 transition-all duration-300 text-sm"
          >
            <Github size={16} />
            Ver todos os repositórios no GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
