"use client"

import { useEffect, useState } from "react"

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl transition-transform duration-100 ease-out"
      style={{
        left: `${position.x - 64}px`,
        top: `${position.y - 64}px`,
        transform: "translate(0, 0)",
      }}
    ></div>
  )
}
