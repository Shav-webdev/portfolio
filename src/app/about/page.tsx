import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "About — Shavarsh Abrahamyan",
  description:
    "Learn about Shavarsh Abrahamyan — Frontend Engineer with 7+ years of experience building high-quality web applications using React, Next.js, and TypeScript.",
}
import { AboutHero } from "@/features/AboutHero"
import { AboutEducation } from "@/features/AboutEducation"
import { AboutPhilosophy } from "@/features/AboutPhilosophy"
import { AboutFutureGoals } from "@/features/AboutFutureGoals"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <AboutHero />
        <AboutEducation />
        <AboutPhilosophy />
        <AboutFutureGoals />
      </main>
    </div>
  )
}
