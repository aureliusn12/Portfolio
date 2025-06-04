import { Shield, Code, Terminal, Lock } from "lucide-react"
import type { Skill } from "@/types"

export const skills: Skill[] = [
  {
    name: "Segurança Ofensiva",
    icon: Shield,
    items: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Social Engineering",
      "Red Team Operations",
      "Exploit Development",
      "OSINT",
      "Metasploit",
      "Nmap",
    ],
  },
  {
    name: "Segurança Defensiva",
    icon: Lock,
    items: [
      "SIEM",
      "Incident Response",
      "Threat Hunting",
      "Forensics",
      "Blue Team",
      "SOC Operations",
      "Splunk",
      "ELK Stack",
    ],
  },
  {
    name: "Desenvolvimento Seguro",
    icon: Code,
    items: [
      "Secure Coding",
      "OWASP Top 10",
      "Code Review",
      "SAST/DAST",
      "DevSecOps",
      "Container Security",
      "API Security",
      "Cryptography",
    ],
  },
  {
    name: "Infraestrutura & Cloud",
    icon: Terminal,
    items: [
      "AWS Security",
      "Azure Security",
      "Kubernetes Security",
      "Network Security",
      "Firewall Management",
      "VPN",
      "Zero Trust",
      "IAM",
    ],
  },
]
