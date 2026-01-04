import { Navigation } from "@/components/navigation"
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
