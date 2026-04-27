"use client"

import { Shield, Terminal, Code, Bug, Search, Lock, Globe, Cpu } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// FIX: replaced subjective % bars with concrete skill badges grouped by domain
const skillGroups = [
  {
    label: "Segurança Ofensiva",
    icon: Shield,
    color: "text-red-400 border-red-400/30 bg-red-400/10",
    items: ["Kali Linux", "Nmap", "Metasploit", "Burp Suite", "SQLMap", "OWASP ZAP", "OSINT", "Pentest Web"],
  },
  {
    label: "Desenvolvimento",
    icon: Code,
    color: "text-[#0f0] border-[#0f0]/30 bg-[#0f0]/10",
    items: ["Python", "JavaScript", "TypeScript", "React", "Node.js", "Java", "REST APIs", "Git"],
  },
  {
    label: "Infraestrutura",
    icon: Terminal,
    color: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    items: ["Linux", "Bash", "Docker", "SSH", "Redes TCP/IP", "Firewall", "VPN", "Wireshark"],
  },
  {
    label: "Análise & Dados",
    icon: Search,
    color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    items: ["Python/Pandas", "Automação", "Web Scraping", "APIs Twilio", "Análise de Logs", "SIEM"],
  },
]

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section id="sobre" className="py-20 px-4 bg-black/50" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="text-gray-400 text-sm mb-2">&gt; ./cat about.md</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text">Sobre</span>{" "}
            <span className="text-white">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-[#0f0]/50 mx-auto"></div>
        </div>

        {/* Bio + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="terminal p-6 scan-line">
            <h3 className="text-xl font-bold mb-4 text-[#0f0]">Quem sou eu</h3>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              {/* FIX: bio now leads with security objective */}
              <p>
                Sou graduando em{" "}
                <span className="text-[#0f0]">Engenharia de Software</span> na
                iCEV com foco em{" "}
                <span className="text-[#0f0]">segurança ofensiva</span> — Red
                Team e Pentest são onde quero construir minha carreira.
              </p>
              <p>
                Atuo como estagiário de{" "}
                <span className="text-[#0f0]">Cientista de Dados na Fadex</span>
                , desenvolvendo automações em Python e integrações com APIs.
                Paralelamente, exploro ativamente testes de invasão, análise de
                vulnerabilidades e ferramentas de segurança ofensiva como Kali
                Linux, Nmap e Burp Suite.
              </p>
              <p>
                Em julho de 2024, atuei como{" "}
                <span className="text-[#0f0]">tradutor técnico</span> no evento{" "}
                Hub Investe Piauí, conectando empresas do setor apícola a
                investidores de seis países — o que reforçou minha visão global
                e comunicação sob pressão.
              </p>
              <p>
                Inglês avançado (Wizard by Pearson, 6 anos). Busco estágio ou
                trainee em{" "}
                <span className="text-[#0f0]">
                  cibersegurança / pentest / Red Team
                </span>
                .
              </p>
            </div>

            {/* FIX: real education and certs */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3 text-[#0f0]">
                Educação & Certificações
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#0f0] mt-0.5">▶</span>
                  <span>
                    Bacharelado em Engenharia de Software — iCEV (2024–2028)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f0] mt-0.5">▶</span>
                  <span>
                    Red Hat: Getting Started with Linux Fundamentals (RH104)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f0] mt-0.5">▶</span>
                  <span>
                    Segurança em Aplicações Web e Testes de Invasão — iCEV
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f0] mt-0.5">▶</span>
                  <span>Monitor de Inglês II & Líder de Turma — iCEV 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f0] mt-0.5">▶</span>
                  <span>
                    Inglês Avançado — Wizard by Pearson (2014–2020)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* FIX: Areas of interest updated to security-focused */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#0f0]">
              Áreas de Interesse
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Bug, label: "Red Team & Pentest" },
                { icon: Shield, label: "Segurança Ofensiva" },
                { icon: Lock, label: "Exploit Development" },
                { icon: Globe, label: "Pentest Web (OWASP)" },
                { icon: Search, label: "OSINT & Reconhecimento" },
                { icon: Terminal, label: "Scripting & Automação" },
                { icon: Code, label: "Desenvolvimento Seguro" },
                { icon: Cpu, label: "Infraestrutura Linux" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className={`terminal p-3 text-center transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${["Red Team & Pentest","Segurança Ofensiva","Exploit Development","Pentest Web (OWASP)","OSINT & Reconhecimento","Scripting & Automação","Desenvolvimento Seguro","Infraestrutura Linux"].indexOf(label) * 80}ms`,
                  }}
                >
                  <Icon size={22} className="text-[#0f0] mx-auto mb-2" />
                  <div className="text-gray-300 text-xs">{label}</div>
                </div>
              ))}
            </div>

            {/* FIX: Availability badge */}
            <div className="terminal p-4 border border-[#0f0]/40 bg-[#0f0]/5">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0f0] animate-pulse shadow-[0_0_6px_#0f0]"></div>
                <div>
                  <div className="text-[#0f0] font-semibold text-sm">
                    Open to Work
                  </div>
                  <div className="text-gray-400 text-xs mt-0.5">
                    Disponível para estágio / trainee em Red Team, Pentest ou
                    Cibersegurança — Presencial (Teresina) ou Remoto
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FIX: Skill badges grid — replaces meaningless % bars */}
        <div>
          <h3 className="text-xl font-bold mb-8 text-center text-[#0f0]">
            Stack Técnica
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map(({ label, icon: Icon, color, items }) => (
              <div key={label} className="terminal p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={16} className="text-[#0f0]" />
                  <h4 className="text-sm font-semibold text-[#0f0]">{label}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 text-xs rounded border font-medium ${color}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
