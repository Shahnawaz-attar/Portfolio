"use client"

import type React from "react"

import { useInView } from "@/hooks/use-in-view"
import { useRef, useState } from "react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:shahnawazattar55@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Let&apos;s <span className="text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              I&apos;m always open to new opportunities and interesting projects
            </p>
          </div>

          <form onSubmit={handleSubmit} className={`space-y-6 ${isInView ? "animate-slide-up" : "opacity-0"}`}>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-foreground">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-foreground">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                placeholder="Project opportunity"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-foreground">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card - Clickable */}
            <a
              href="mailto:shahnawazattar55@gmail.com"
              className="group relative overflow-hidden p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col items-start gap-4">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-semibold mb-3 tracking-wider">Email</p>
                  <p className="font-semibold text-foreground text-base break-all">shahnawazattar55@gmail.com</p>
                </div>
                <div className="self-end">
                  <svg
                    className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Phone Card - Clickable */}
            <a
              href="tel:9945408542"
              className="group relative overflow-hidden p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-accent/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col items-start gap-4">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-semibold mb-3 tracking-wider">Phone</p>
                  <p className="font-semibold text-foreground text-base">+91 9945408542</p>
                </div>
                <div className="self-end">
                  <svg
                    className="w-8 h-8 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Location Card - Static */}
            <div className="group relative overflow-hidden p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-muted/50 transition-all duration-300">
              <div className="relative flex flex-col items-start gap-4">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-semibold mb-3 tracking-wider">Location</p>
                  <p className="font-semibold text-foreground text-base">Bangalore, India</p>
                </div>
                <div className="self-end">
                  <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
