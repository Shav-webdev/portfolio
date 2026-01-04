"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { CareerStats } from "@/components/ui/career-stats"
import { careerStats } from "@/data/experience"

export function ExperienceCareerStats() {
  return (
    <Section background="muted">
      <SectionHeader 
        title="Career Overview"
        subtitle="Key metrics from my professional journey"
      />
      <CareerStats stats={careerStats} />
    </Section>
  )
}
