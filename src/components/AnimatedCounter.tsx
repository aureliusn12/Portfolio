"use client"

import { useState, useEffect } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
}

export const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: AnimatedCounterProps) => {
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
