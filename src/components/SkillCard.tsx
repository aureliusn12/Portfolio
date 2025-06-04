"use client"

import { Card, CardContent } from "../components/ui/card"
import type { Skill } from "@/types"

interface SkillCardProps {
  skill: Skill
  index: number
}

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <Card
      style={{
        backgroundColor: "#111827",
        border: "1px solid #374151",
        borderRadius: "0.5rem",
        transition: "all 0.3s",
        transform: "scale(1)",
      }}
      className="scroll-animate slide-in-up hover:border-emerald-500/50"
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.5)"
        e.currentTarget.style.transform = "scale(1.05)"
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.borderColor = "#374151"
        e.currentTarget.style.transform = "scale(1)"
      }}
    >
      <CardContent style={{ padding: "1.5rem", textAlign: "center" }}>
        <skill.icon
          style={{
            width: "3rem",
            height: "3rem",
            color: "#10b981",
            margin: "0 auto 1rem auto",
          }}
        />
        <h4
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            marginBottom: "0.75rem",
            color: "#ffffff",
          }}
        >
          {skill.name}
        </h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {skill.items.map((item) => (
            <li
              key={item}
              style={{
                color: "#9ca3af",
                fontSize: "0.875rem",
                marginBottom: "0.25rem",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}