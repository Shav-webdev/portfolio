import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Skills — Shavarsh Abrahamyan",
  description:
    "Technical skills and certifications of Shavarsh Abrahamyan — React, Next.js, TypeScript, Node.js, Python, Docker, AWS, and more across 9 skill categories.",
}
import { SkillsHero } from "@/features/SkillsHero"
import { SkillsCertifications } from "@/features/SkillsCertifications"
import { SkillsCategories } from "@/features/SkillsCategories"
import { SkillsSummary } from "@/features/SkillsSummary"


export default function Skills() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <SkillsHero />
        <SkillsCertifications />
        <SkillsCategories />
        <SkillsSummary />
      </main>
    </div>
  )
}
