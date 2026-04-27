import type { Project } from "@/types"

// FIX: demo field is now optional/null — no more "#" dead links
export const projects: Project[] = [
  {
    title: "Chat Bot Dimmy",
    description:
      "Chatbot inteligente em Python/Node.js com aprendizado por interações e integração com APIs externas.",
    image: "/projects/chatbot-dimmy.png",
    tech: ["JavaScript", "Node.js", "Python", "API Integration"],
    github: "https://github.com/aureliusn12/Chat-Bot-Dimmy",
    demo: null,
  },
  {
    title: "Vulnerability Scanner",
    description:
      "Scanner automatizado de vulnerabilidades para aplicações web. Integra Nmap, OWASP ZAP e SQLMap via Python.",
    image: "/projects/vuln-scanner.png",
    tech: ["Python", "Nmap", "OWASP ZAP", "SQLMap", "Bash"],
    github: null,
    demo: null,
  },
  {
    title: "SIEM Dashboard",
    description:
      "Dashboard de monitoramento de segurança em tempo real com correlação de eventos via ELK Stack.",
    image: "/projects/siem-dashboard.png",
    tech: ["React", "TypeScript", "ELK Stack", "Python"],
    github: null,
    demo: null,
  },
  {
    title: "Secure API Gateway",
    description:
      "Gateway de API com autenticação JWT, rate limiting e WAF básico contra DDoS e injeção.",
    image: "/projects/api-gateway.png",
    tech: ["Node.js", "TypeScript", "JWT", "Rate Limiting"],
    github: null,
    demo: null,
  },
]
