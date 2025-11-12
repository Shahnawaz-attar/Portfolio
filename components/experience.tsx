"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

const experiences = [
  {
    company: "HCL",
    position: "Technical Lead",
    period: "03/2025 - Present",
    description:
      "Leading technical initiatives and managing high-performing development teams. Architecting scalable solutions and driving innovation in enterprise applications.",
    highlights: ["Team Leadership", "Architecture Design", "Technical Strategy"],
    icon: "🚀",
  },
  {
    company: "Happiest Minds Technologies",
    position: "Module Lead",
    period: "08/2023 - 03/2025",
    description:
      "Led the development of Career Edge, a job portal and e-learning platform. Implemented scalable frontend using Next.js and Redux.",
    highlights: ["Next.js", "Redux", "API Integration", "Performance Optimization"],
    icon: "💼",
  },
  {
    company: "Sonata Software Limited",
    position: "Full Stack Developer",
    period: "03/2023 - 08/2023",
    description: "Developed and maintained Bluestem, a large-scale e-commerce platform using Next.js and Bootstrap.",
    highlights: ["Next.js", "Bootstrap", "GraphQL", "E-commerce"],
    icon: "🛒",
  },
  {
    company: "Skills Outsource Think Pvt Ltd",
    position: "MERN Stack Developer",
    period: "10/2021 - 03/2023",
    description:
      "Developed Ownership NFT Exchange Platform with React, Redux, and Nest.js. Built mobile app using React Native.",
    highlights: ["React", "React Native", "Nest.js", "PostgreSQL", "NFT"],
    icon: "🎨",
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob opacity-20"></div>
        <div
          className="absolute bottom-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-blob opacity-10"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={ref} className="space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-black">
              Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">Building great products with amazing teams</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/20 border border-primary/30 hover:border-primary/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 backdrop-blur-sm ${
                  isInView ? "animate-slide-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: isInView ? `${idx * 100}ms` : "0ms",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl animate-pulse-glow"></div>
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-start gap-4 flex-col sm:flex-row">
                    <div className="flex gap-4 items-start flex-1">
                      <div className="text-4xl mt-2">{exp.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                        <p className="text-primary font-bold text-lg">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground px-4 py-2 bg-primary/20 rounded-full whitespace-nowrap font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-base">{exp.description}</p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {exp.highlights.map((tag, i) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/30 to-accent/20 text-primary text-sm font-bold border border-primary/50 hover:scale-110 transition-transform cursor-pointer"
                        style={{
                          animationDelay: `${i * 50}ms`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
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
