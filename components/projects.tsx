"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

const projects = [
  {
    title: "Career Edge - Job Portal & E-Learning",
    description:
      "A comprehensive job portal and e-learning platform built from scratch with advanced features for job seekers and employers.",
    tech: ["Next.js", "Redux", "Material-UI", "NestJS", "MongoDB", "AWS"],
    highlights: ["Job search with Indeed API", "Moodle integration", "Open edX implementation", "SSR optimization"],
    icon: "🎯",
  },
  {
    title: "Bluestem - E-Commerce Platform",
    description: "Large-scale e-commerce platform with dynamic UI components and high-performance frontend.",
    tech: ["Next.js", "Bootstrap", "Redux", "GraphQL", "Node.js", "MongoDB"],
    highlights: ["Responsive design", "GraphQL queries", "AWS deployment", "Performance optimized"],
    icon: "🛍️",
  },
  {
    title: "Ownership - NFT Exchange Platform",
    description: "NFT ownership exchange platform with robust backend and user-friendly frontend.",
    tech: ["React", "Redux", "Nest.js", "PostgreSQL", "DynamoDB", "AWS"],
    highlights: ["Mobile-first UI", "Payment integration", "Microservices", "Real-time updates"],
    icon: "🎨",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-blob opacity-30"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-blob opacity-20"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={ref} className="space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-black">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
            <p className="text-muted-foreground text-lg md:text-xl">Showcasing some of my best work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`group relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-card/60 to-card/20 border border-primary/40 hover:border-primary/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-3 backdrop-blur-sm ${
                  isInView ? "animate-slide-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: isInView ? `${idx * 150}ms` : "0ms",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 animate-pulse-glow rounded-2xl"></div>
                </div>

                <div className="relative z-10 p-8 space-y-4 h-full flex flex-col">
                  <div className="flex gap-4 items-start">
                    <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                      {project.icon}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                    </div>
                  </div>

                  <div className="flex-1"></div>

                  <div className="space-y-4 pt-4 border-t border-primary/20">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((t, i) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-primary/40 to-accent/20 text-primary border border-primary/50 hover:scale-110 transition-transform"
                          style={{
                            animationDelay: `${i * 50}ms`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-2 group/item">
                          <span className="text-accent font-bold group-hover/item:scale-150 transition-transform">
                            →
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
