"use client"

import { useEffect, useRef } from "react"

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01{}[]()<>/\\|;:.,?!@#$%^&*+-=_`~"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const speed = 0.6
    const density = 0.98

    let animationId: number
    let isRunning = true

    const draw = () => {
      if (!isRunning) return

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]

        // FIX: original had brightness=5 which gives rgba(0,1275,0) — clamped but wasteful
        // Use explicit color values instead
        const isHead = drops[i] * fontSize < canvas.height * 0.1
        ctx.fillStyle = isHead
          ? "rgba(200, 255, 200, 0.9)"   // bright head
          : "rgba(0, 200, 0, 0.7)"        // trailing chars

        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > density) {
          drops[i] = 0
        }

        drops[i] += speed
      }

      animationId = requestAnimationFrame(draw)
    }

    // FIX: pause animation when tab is not visible — saves CPU/battery
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false
        cancelAnimationFrame(animationId)
      } else {
        isRunning = true
        draw()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    draw()

    return () => {
      isRunning = false
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="matrix-canvas"
      aria-hidden="true"   // FIX: decorative — should be hidden from screen readers
    />
  )
}

export default MatrixBackground
