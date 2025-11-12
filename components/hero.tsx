"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import { LinkedInIcon, GitHubIcon, EmailIcon, TwitterIcon } from "./social-icons"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [rotation3D, setRotation3D] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return

    const container = e.currentTarget
    const rect = container.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const x = (e.clientY - centerY) / 50
    const y = (e.clientX - centerX) / 50

    setRotation3D({ x, y })
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setRotation3D({ x: 0, y: 0 })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob opacity-60"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-blob opacity-40"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob opacity-30"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
          <div className="space-y-8 order-2 md:order-1">
            <div className="inline-block animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary text-sm font-bold animate-pulse-glow">
                ✨ Welcome to my digital space
              </span>
            </div>

            <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
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

            <p
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              Building scalable web applications with React, Next.js, and Node.js. Currently leading teams at HCL with
              5+ years of proven expertise.
            </p>

            <div className="flex gap-4 flex-wrap pt-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  View My Work
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex gap-4 pt-8" style={{ animationDelay: "0.5s" }}>
              <a
                href="https://linkedin.com/in/shahnawaz-attar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/shahnawaz-attar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
                title="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50"
                title="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="mailto:shahnawazattar55@gmail.com"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
                title="Email"
              >
                <EmailIcon />
              </a>
            </div>
          </div>

          <div
            className="order-1 md:order-2 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
            id="hero-image-container"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full aspect-square" style={{ perspective: "1200px" }}>
              <div
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `perspective(1200px) rotateX(${rotation3D.x}deg) rotateY(${rotation3D.y}deg)`,
                  transition: "transform 0.2s ease-out",
                }}
              >
                <div
                  className="absolute inset-0 rounded-3xl border-2 border-primary/40 animate-spin-slow"
                  style={{
                    animationDuration: "20s",
                  }}
                ></div>

                <div
                  className="absolute inset-4 rounded-3xl border-2 border-accent/25 animate-spin-slow"
                  style={{
                    animationDuration: "25s",
                    animationDirection: "reverse",
                  }}
                ></div>

                <div
                  className="absolute inset-8 rounded-3xl border-2 border-primary/15 animate-spin-slow"
                  style={{
                    animationDuration: "30s",
                  }}
                ></div>

                <div
                  className="absolute inset-12 rounded-3xl overflow-hidden border-4 border-gradient-to-r from-primary via-accent to-primary shadow-2xl shadow-primary/30 animate-pulse-glow"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Shahnawaz Attar - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                    quality={95}
                  />
                </div>
              </div>

              <div
                className="absolute inset-0 -z-10 rounded-3xl blur-3xl opacity-50"
                style={{
                  background: `radial-gradient(circle at 50% 50%, 
                    rgba(124, 58, 237, 0.2) 0%,
                    transparent 100%
                  )`,
                }}
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
