"use client"

import { useEffect, useRef } from "react"

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar canvas para ocupar toda a tela
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Caracteres para a cascata (incluindo caracteres de código, japoneses e símbolos)
    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01{}[]()<>/\\|;:.,?!@#$%^&*+-=_`~"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []

    // Inicializar drops com posições aleatórias
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    // Variáveis para controle de velocidade e densidade
    const speed = 0.6 // Velocidade de queda (menor = mais lento)
    const density = 0.98 // Probabilidade de resetar (maior = mais denso)

    let animationId: number

    const draw = () => {
      // Criar efeito de fade com fundo semi-transparente
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        // Escolher caractere aleatório
        const char = chars[Math.floor(Math.random() * chars.length)]

        // opacidade e brilho
        const opacity = 1
        const brightness = 5

        // Cor verde com variação de brilho
        ctx.fillStyle = `rgba(0, ${Math.floor(255 * brightness)}, 0, ${opacity})`

        // Desenhar o caractere
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        // Resetar drop quando sair da tela ou aleatoriamente
        if (drops[i] * fontSize > canvas.height && Math.random() > density) {
          drops[i] = 0
        }

        drops[i] += speed
      }

      animationId = requestAnimationFrame(draw)
    }

    // Iniciar animação
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} id="matrix-canvas" />
}

export default MatrixBackground
