import type { Project } from "@/types"

export const projects: Project[] = [
  {
    title: "Chat Bot Dimmy",
    description: "Chatbot inteligente com protocolos de segurança avançados e criptografia end-to-end",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["JavaScript", "Node.js", "Encryption", "Security APIs"],
    github: "https://github.com/aureliusn12/Chat-Bot-Dimmy",
    demo: "#",
  },
  {
    title: "Vulnerability Scanner",
    description: "Scanner automatizado de vulnerabilidades para aplicações web com relatórios detalhados",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["Python", "Nmap", "OWASP ZAP", "SQLMap"],
    github: "#",
    demo: "#",
  },
  {
    title: "SIEM Dashboard",
    description: "Dashboard de monitoramento de segurança em tempo real com alertas inteligentes",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["React", "ELK Stack", "Splunk", "Python"],
    github: "#",
    demo: "#",
  },
  {
    title: "Secure API Gateway",
    description: "Gateway de API com autenticação multi-fator e proteção contra ataques DDoS",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["Node.js", "JWT", "Rate Limiting", "WAF"],
    github: "#",
    demo: "#",
  },
]
