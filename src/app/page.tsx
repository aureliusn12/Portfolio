"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const personalInfo = {
  name: "Aurelius Navi",
  title: "Desenvolvedor Full Stack & Designer UI/UX",
  description:
    "Transformo ideias em experiências digitais incríveis. Especializado em React, Node.js e design responsivo.",
  email: "seu.email@exemplo.com",
  github: "https://github.com/seuusuario",
  linkedin: "https://linkedin.com/in/seuusuario",
  bio: {
    title: "Desenvolvedor Apaixonado por Tecnologia",
    paragraph1:
      "Com mais de X anos de experiência em desenvolvimento web, sou especializado em criar soluções digitais inovadoras e funcionais. Minha paixão é transformar ideias complexas em interfaces intuitivas e experiências de usuário excepcionais.",
    paragraph2:
      "Trabalho com as mais modernas tecnologias do mercado, sempre buscando aprender e me atualizar com as últimas tendências do desenvolvimento web e mobile.",
    mainTechs: ["React", "Node.js", "TypeScript", "Figma", "Git"],
  },
}

const skills = [
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

// Hook personalizado para animações de scroll
const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    // Observar todos os elementos com classe de animação
    const animatedElements = document.querySelectorAll(".scroll-animate")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}

// Componente de contador animado
const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
}: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById(`counter-${end}`)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [end])

  return (
    <span id={`counter-${end}`} className="text-4xl font-bold text-emerald-500">
      {count}
      {suffix}
    </span>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useScrollAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })

      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com React, Node.js e MongoDB",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com drag & drop",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico com gráficos interativos",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["React", "Chart.js", "OpenWeather API"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media App",
      description: "Rede social com chat em tempo real",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Next.js", "Socket.io", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-emerald-500">Portfolio</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "portfolio", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 hover:text-emerald-500 ${
                    activeSection === item ? "text-emerald-500" : "text-white"
                  }`}
                >
                  {item === "about"
                    ? "Sobre"
                    : item === "portfolio"
                      ? "Portfólio"
                      : item === "contact"
                        ? "Contato"
                        : "Home"}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-emerald-500/20">
            <div className="px-4 py-4 space-y-4">
              {["home", "about", "portfolio", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-white hover:text-emerald-500 transition-colors duration-300"
                >
                  {item === "about"
                    ? "Sobre"
                    : item === "portfolio"
                      ? "Portfólio"
                      : item === "contact"
                        ? "Contato"
                        : "Home"}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Olá, eu sou <span className="text-emerald-500 animate-pulse">{personalInfo.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
              {personalInfo.title}
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              {personalInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Ver Projetos
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-500">Sobre Mim</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="João Silva"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-6 text-emerald-500">{personalInfo.bio.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{personalInfo.bio.paragraph1}</p>
              <p className="text-gray-300 mb-6 leading-relaxed">{personalInfo.bio.paragraph2}</p>
              <div className="flex flex-wrap gap-3">
                {personalInfo.bio.mainTechs.map((tech) => (
                  <span
                    key={tech}
                    className="bg-emerald-500/20 text-emerald-500 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="bg-gray-900 border-gray-800 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 scroll-animate slide-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <skill.icon className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3 text-white">{skill.name}</h4>
                  <ul className="space-y-1">
                    {skill.items.map((item, itemIndex) => (
                      <li
                        key={item}
                        className="text-gray-400 text-sm scroll-animate fade-in opacity-0"
                        style={{ animationDelay: `${index * 150 + itemIndex * 50}ms` }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="scroll-animate fade-in-up">
              <AnimatedCounter end={50} suffix="+" />
              <p className="text-gray-400 mt-2">Projetos Concluídos</p>
            </div>
            <div className="scroll-animate fade-in-up animation-delay-200">
              <AnimatedCounter end={5} suffix="+" />
              <p className="text-gray-400 mt-2">Anos de Experiência</p>
            </div>
            <div className="scroll-animate fade-in-up animation-delay-400">
              <AnimatedCounter end={30} suffix="+" />
              <p className="text-gray-400 mt-2">Clientes Satisfeitos</p>
            </div>
            <div className="scroll-animate fade-in-up animation-delay-600">
              <AnimatedCounter end={100} suffix="%" />
              <p className="text-gray-400 mt-2">Dedicação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-500">Meu Portfólio</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-gray-900 border-gray-800 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 scroll-animate slide-in-up overflow-hidden group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4 scroll-animate scale-in">
                      <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white scroll-animate slide-in-left">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 scroll-animate slide-in-left animation-delay-100">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="bg-emerald-500/20 text-emerald-500 px-2 py-1 rounded text-xs font-medium scroll-animate fade-in"
                        style={{ animationDelay: `${200 + techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-500">Entre em Contato</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-animate slide-in-left">
              <h3 className="text-2xl font-semibold mb-6 text-emerald-500">Vamos Trabalhar Juntos!</h3>
              <p className="text-gray-300 mb-8 leading-relaxed scroll-animate fade-in animation-delay-200">
                Estou sempre aberto a novos projetos e oportunidades. Se você tem uma ideia incrível ou precisa de ajuda
                com desenvolvimento, não hesite em entrar em contato!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 scroll-animate slide-in-left animation-delay-400">
                  <Mail className="w-6 h-6 text-emerald-500" />
                  <span className="text-gray-300">{personalInfo.email}</span>
                </div>
                <div className="flex gap-4 mt-6 scroll-animate slide-in-left animation-delay-600">
                  <Button
                    size="sm"
                    className="bg-emerald-500 hover:bg-emerald-600 text-black transform hover:scale-105 transition-all duration-300"
                    onClick={() => window.open(personalInfo.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    className="bg-emerald-500 hover:bg-emerald-600 text-black transform hover:scale-105 transition-all duration-300"
                    onClick={() => window.open(personalInfo.linkedin, "_blank")}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            <Card className="bg-gray-900 border-gray-800 scroll-animate slide-in-right">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="scroll-animate fade-in animation-delay-200">
                    <label className="block text-sm font-medium text-emerald-500 mb-2">Nome</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="scroll-animate fade-in animation-delay-400">
                    <label className="block text-sm font-medium text-emerald-500 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="scroll-animate fade-in animation-delay-600">
                    <label className="block text-sm font-medium text-emerald-500 mb-2">Mensagem</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white resize-none"
                      placeholder="Sua mensagem..."
                    />
                  </div>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 scroll-animate scale-in animation-delay-800">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 {personalInfo.name}. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-emerald-500 hover:bg-emerald-600 text-black p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
