"use client"

import { useEffect } from "react"

export const MatrixBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("matrix-canvas") as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const matrixChars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]()<>/\\|;:.,?!@#$%^&*+-=_`~"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = new Array(columns).fill(1)

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    let animationId: number

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)]
        const opacity = Math.random() * 0.7 + 0.3
        ctx.fillStyle = `rgba(16, 185, 129, ${opacity})`
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) {
          drops[i] = 0
        }
        drops[i] += 0.7
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas id="matrix-canvas" />
}
