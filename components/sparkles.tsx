"use client"

import { useEffect, useState } from "react"

export function SparklesCore() {
  const [sparkles, setSparkles] = useState<any[]>([])

  useEffect(() => {
    const generateSparkle = () => {
      const sparkle = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 3 + 2,
      }
      setSparkles((prev) => [...prev, sparkle])

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id))
      }, sparkle.duration * 1000)
    }

    const interval = setInterval(generateSparkle, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="pointer-events-none fixed animate-sparkle-fade"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animation: `sparkle-fade ${sparkle.duration}s ease-out forwards`,
          }}
        >
          <div className="w-full h-full bg-accent rounded-full blur-sm shadow-lg shadow-accent/50"></div>
        </div>
      ))}
    </>
  )
}
