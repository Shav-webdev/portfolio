import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Experience — Shavarsh Abrahamyan",
  description:
    "7+ years of professional experience across international companies. Full-stack engineer specialising in React, Next.js, TypeScript, and cloud technologies.",
}
import { ExperienceHero } from "@/features/ExperienceHero"
import { ExperienceCareerStats } from "@/features/ExperienceCareerStats"
import { ExperienceTimelineSection } from "@/features/ExperienceTimeline"
import { ExperienceCareerHighlights } from "@/features/ExperienceCareerHighlights"
import { ExperienceLeadership } from "@/features/ExperienceLeadership"
import { ExperienceInternational } from "@/features/ExperienceInternational"
import { ExperienceCallToAction } from "@/features/ExperienceCallToAction"


export default function Experience() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <ExperienceHero />
        <ExperienceCareerStats />
        <ExperienceTimelineSection />
        <ExperienceCareerHighlights />
        <ExperienceLeadership />
        <ExperienceInternational />
        <ExperienceCallToAction />
      </main>
    </div>
  )
}
