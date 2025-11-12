"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import Image from "next/image"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob opacity-20"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-blob opacity-10"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`space-y-16 transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`} ref={ref}>
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-black">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Crafting elegant solutions with modern technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Results-driven Full Stack Developer with 5+ years of experience in React.js, Next.js, Redux, Node.js,
                and PHP. Expertise in developing scalable web applications, microservices, and UI components for
                high-performance platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Skilled in frontend performance optimization, REST API development, and cloud deployments (AWS, Docker).
                Strong leadership as a Technical Lead at HCL, mentoring teams, managing project timelines, and
                delivering quality software.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Currently driving innovation and technical excellence across projects while leading cross-functional
                teams to deliver world-class solutions.
              </p>

              <div className="flex gap-4 pt-6 flex-wrap">
                {["Problem Solver", "Team Leader", "Tech Enthusiast"].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary font-semibold text-sm animate-pulse-glow"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] animate-slide-in-right group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-rotate-slow"></div>

              <div className="relative h-full bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-500 backdrop-blur-md">
                <Image
                  src="/profile.jpg"
                  alt="Shahnawaz Attar"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float"></div>
              <div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
