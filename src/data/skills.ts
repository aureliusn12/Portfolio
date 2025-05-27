import { Code, Palette, Smartphone } from "lucide-react"
import type { Skill } from "../types"

export const skills: Skill[] = [
  {
    name: "Frontend",
    icon: Code,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vue.js"],
  },
  {
    name: "Backend",
    icon: Code,
    items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    name: "Design & UI/UX",
    icon: Palette,
    items: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "UI/UX Design",
      "Responsive Design",
      "Prototyping",
      "Wireframing",
      "Design Systems",
    ],
  },
  {
    name: "Ferramentas & DevOps",
    icon: Smartphone,
    items: ["Git", "GitHub", "Docker", "AWS", "Vercel", "VS Code", "Postman", "Linux"],
  },
]
