"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Material-UI", "React Native"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Nest.js", "PHP", "REST API", "GraphQL", "Microservices"],
  },
  {
    category: "Database & Cloud",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Docker", "Ansible", "DynamoDB"],
  },
  {
    category: "Tools & Testing",
    skills: ["Git", "Jest", "React Testing", "Webpack", "Vercel", "Linux", "Unit Testing"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg">Tools and technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 group ${
                  isInView ? "animate-slide-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: isInView ? `${idx * 100}ms` : "0ms",
                }}
              >
                <h3 className="text-lg font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-sm border border-primary/20 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
