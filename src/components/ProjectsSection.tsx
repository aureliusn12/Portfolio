"use client"

import { useState } from "react"
import { Github, ExternalLink, Code } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  demo?: string
}

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Chat Bot Dimmy",
      description: "Chatbot inteligente com interface interativa e respostas personalizadas",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["JavaScript", "Node.js", "AI", "API Integration"],
      github: "https://github.com/aureliusn12/Chat-Bot-Dimmy",
      demo: "#",
    },
    {
      id: 2,
      title: "Vulnerability Scanner",
      description: "Scanner automatizado de vulnerabilidades para aplicações web com relatórios detalhados",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Python", "Nmap", "OWASP ZAP", "SQLMap"],
      github: "#",
    },
    {
      id: 3,
      title: "SIEM Dashboard",
      description: "Dashboard de monitoramento de segurança em tempo real com alertas inteligentes",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["React", "ELK Stack", "Splunk", "Python"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Secure API Gateway",
      description: "Gateway de API com autenticação multi-fator e proteção contra ataques DDoS",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Node.js", "JWT", "Rate Limiting", "WAF"],
      github: "#",
    },
  ]

  return (
    <section id="projetos" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="text-gray-400 text-sm mb-2">&gt; ./list projects</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text">Projetos</span> <span className="text-white">Recentes</span>
          </h2>
          <div className="w-24 h-1 bg-[#0f0]/50 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="terminal overflow-hidden relative group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute top-0 left-0 w-full h-8 bg-black/80 flex items-center px-4 z-10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400 flex-1 text-center">{project.title}.exe</div>
              </div>

              <div className="p-6 pt-12">
                <div className="mb-4 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{ top: "2rem" }}
                  >
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#0f0]/10 rounded-full text-[#0f0] hover:bg-[#0f0]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                      >
                        <Github size={20} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-[#0f0]/10 rounded-full text-[#0f0] hover:bg-[#0f0]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-[#0f0]">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

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
                    {hoveredProject === project.id ? "Executando projeto..." : "Clique para ver detalhes do projeto"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
