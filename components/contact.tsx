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
      <div className="max-w-2xl mx-auto">
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

          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Email", value: "shahnawazattar55@gmail.com" },
              { label: "Phone", value: "9945408542" },
              { label: "Location", value: "Bangalore, India" },
            ].map((contact) => (
              <div key={contact.label} className="p-4 rounded-lg bg-card border border-border/50">
                <p className="text-xs text-muted-foreground mb-1">{contact.label}</p>
                <p className="font-semibold text-foreground text-sm">{contact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
