"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Card
      style={{
        backgroundColor: "#111827",
        border: "1px solid #374151",
        borderRadius: "0.5rem",
        overflow: "hidden",
        transition: "all 0.3s",
        transform: "scale(1)",
      }}
      className="scroll-animate slide-in-up group"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.5)"
        e.currentTarget.style.transform = "scale(1.05)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#374151"
        e.currentTarget.style.transform = "scale(1)"
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          style={{
            width: "100%",
            height: "12rem",
            objectFit: "cover",
            transition: "transform 0.3s",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            opacity: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            transition: "opacity 0.3s",
          }}
          className="group-hover:opacity-100"
        >
          <Button
            size="sm"
            style={{
              backgroundColor: "#10b981",
              color: "#000000",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Github size={16} />
            Código
          </Button>
          <Button
            size="sm"
            style={{
              backgroundColor: "transparent",
              color: "#10b981",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              border: "1px solid #10b981",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <ExternalLink size={16} />
            Demo
          </Button>
        </div>
      </div>
      <CardContent style={{ padding: "1.5rem" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            marginBottom: "0.75rem",
            color: "#ffffff",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            color: "#9ca3af",
            marginBottom: "1rem",
            lineHeight: "1.5",
          }}
        >
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {project.tech.map((tech) => (
            <span
              key={tech}
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                color: "#10b981",
                padding: "0.25rem 0.5rem",
                borderRadius: "0.25rem",
                fontSize: "0.75rem",
                fontWeight: "500",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
