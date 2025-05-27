"use client"

import { SkillCard } from "./SkillCard"
import { personalInfo } from "@/data/personalInfo"
import { skills } from "@/data/skills"

export const AboutSection = () => {
  return (
    <section id="about" style={{ padding: "5rem 1rem" }}>
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
          Sobre Mim
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "4rem",
          }}
        >
          <div className="animate-slide-in-left">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Aurelius Navi"
              style={{
                borderRadius: "1rem",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
                width: "100%",
                maxWidth: "28rem",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>
          <div className="animate-slide-in-right">
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "1.5rem",
                color: "#10b981",
              }}
            >
              {personalInfo.bio.title}
            </h3>
            <p
              style={{
                color: "#d1d5db",
                marginBottom: "1.5rem",
                lineHeight: "1.7",
              }}
            >
              {personalInfo.bio.paragraph1}
            </p>
            <p
              style={{
                color: "#d1d5db",
                marginBottom: "1.5rem",
                lineHeight: "1.7",
              }}
            >
              {personalInfo.bio.paragraph2}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {personalInfo.bio.mainTechs.map((tech) => (
                <span
                  key={tech}
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    color: "#10b981",
                    padding: "0.5rem 1rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
