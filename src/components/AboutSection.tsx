"use client"

import type React from "react"

import { Code, Server, Shield, Database, Cpu, Globe } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface Skill {
  name: string
  level: number
  icon: React.ElementType
}

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const skills: Skill[] = [
    { name: "JavaScript/TypeScript", level: 90, icon: Code },
    { name: "React/Next.js", level: 85, icon: Code },
    { name: "Node.js", level: 80, icon: Server },
    { name: "Python", level: 75, icon: Code },
    { name: "Segurança Web", level: 70, icon: Shield },
    { name: "SQL/NoSQL", level: 85, icon: Database },
    { name: "DevOps/CI/CD", level: 65, icon: Cpu },
    { name: "API Design", level: 80, icon: Globe },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="sobre" className="py-20 px-4 bg-black/50" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="text-gray-400 text-sm mb-2">&gt; ./cat about.md</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text">Sobre</span> <span className="text-white">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-[#0f0]/50 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="terminal p-6 scan-line">
            <h3 className="text-xl font-bold mb-4 text-[#0f0]">Quem sou eu</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras e seguras. Com experiência em
                desenvolvimento web, automação e segurança de aplicações.
              </p>
              <p>
                Minha jornada na programação começou com a curiosidade sobre como as coisas funcionam por trás das
                interfaces que usamos diariamente. Essa curiosidade me levou a explorar diversas tecnologias e
                frameworks, sempre buscando as melhores práticas e soluções mais eficientes.
              </p>
              <p>
                Atualmente, foco meu trabalho em desenvolvimento web com JavaScript/TypeScript, React, Node.js e
                tecnologias relacionadas, sempre com atenção especial à segurança e performance.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3 text-[#0f0]">Educação & Certificações</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#0f0] mr-2">&#9654;</span>
                  <span>Bacharelado em Engenharia de Software</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f0] mr-2">&#9654;</span>
                  <span>Certificação em Desenvolvimento Web Full Stack</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f0] mr-2">&#9654;</span>
                  <span>Especialização em Segurança de Aplicações Web</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#0f0]">Habilidades Técnicas</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <skill.icon size={16} className="text-[#0f0] mr-2" />
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-[#0f0] text-sm">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill transition-all ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDuration: "3000ms",
                        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        transitionDelay: `${index * 300}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 text-[#0f0]">Áreas de Interesse</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="terminal p-3 text-center">
                  <Shield size={24} className="text-[#0f0] mx-auto mb-2" />
                  <div className="text-gray-300 text-sm">Segurança Web</div>
                </div>
                <div className="terminal p-3 text-center">
                  <Code size={24} className="text-[#0f0] mx-auto mb-2" />
                  <div className="text-gray-300 text-sm">Desenvolvimento Frontend</div>
                </div>
                <div className="terminal p-3 text-center">
                  <Server size={24} className="text-[#0f0] mx-auto mb-2" />
                  <div className="text-gray-300 text-sm">Arquitetura Backend</div>
                </div>
                <div className="terminal p-3 text-center">
                  <Cpu size={24} className="text-[#0f0] mx-auto mb-2" />
                  <div className="text-gray-300 text-sm">Automação & DevOps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
