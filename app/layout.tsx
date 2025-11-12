import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { SparklesCore } from "@/components/sparkles"
import { MouseFollower } from "@/components/mouse-follower"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shahnawaz Attar - Full Stack Developer & Technical Lead",
  description:
    "Professional portfolio showcasing Full Stack Developer expertise in React, Next.js, Node.js, and modern web technologies with 5+ years of experience.",
  keywords: "Full Stack Developer, React, Next.js, Node.js, Technical Lead, Portfolio",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <SparklesCore />
        <MouseFollower />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
