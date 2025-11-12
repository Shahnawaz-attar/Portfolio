"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById("hero-image-container")
      if (!container) return

      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / 20
      const y = (e.clientY - rect.top - rect.height / 2) / 20

      setMousePos({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob opacity-40"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob opacity-30"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob opacity-20"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
          <div className="space-y-8 order-2 md:order-1">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary text-sm font-bold animate-pulse-glow">
                ✨ Welcome to my digital space
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow text-5xl md:text-7xl">
                  Shahnawaz
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-bold text-muted-foreground">
                Full Stack Developer & Technical Lead
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Building scalable web applications with React, Next.js, and Node.js. Currently leading teams at HCL with
              5+ years of proven expertise.
            </p>

            <div className="flex gap-4 flex-wrap pt-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 cursor-pointer"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex gap-6 pt-8">
              {[
                { label: "LinkedIn", href: "https://linkedin.com", icon: "🔗" },
                { label: "GitHub", href: "https://github.com", icon: "🚀" },
                { label: "Email", href: "mailto:shahnawazattar55@gmail.com", icon: "✉️" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-semibold text-sm hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                >
                  <span className="text-2xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2" id="hero-image-container">
            <div className="relative w-full aspect-square perspective">
              <div
                className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-spin-slow"
                style={{
                  animationDuration: "20s",
                  transform: `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              ></div>
              <div
                className="absolute inset-4 rounded-2xl border-2 border-accent/20 animate-spin-slow"
                style={{
                  animationDuration: "25s",
                  animationDirection: "reverse",
                  transform: `perspective(1000px) rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              ></div>
              <div
                className="absolute inset-8 rounded-2xl border-2 border-primary/10 animate-spin-slow"
                style={{
                  animationDuration: "30s",
                  transform: `perspective(1000px) rotateX(${mousePos.y * 0.2}deg) rotateY(${mousePos.x * 0.2}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              ></div>

              <div className="absolute inset-12 rounded-2xl overflow-hidden border-4 border-gradient-to-r from-primary via-accent to-primary shadow-2xl shadow-primary/50 animate-pulse-glow">
                <Image
                  src="/profile.png"
                  alt="Shahnawaz Attar - Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                  quality={95}
                />
              </div>

              <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/30 rounded-full blur-xl animate-float"></div>
              <div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-muted-foreground text-sm">Scroll down</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center animate-bounce-slow">
            <div className="w-1 h-2 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
