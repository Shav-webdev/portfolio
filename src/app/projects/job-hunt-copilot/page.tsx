import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Job Hunt Copilot — Shavarsh Abrahamyan",
  description:
    "Case study: Job Hunt Copilot — an AI-powered job-hunt assistant built with Next.js, NestJS, LangGraph, and Gemini. Features live-streamed agent chat, CV scoring, and cover-letter generation.",
}
import { JobHuntHero } from "@/features/JobHuntHero"
import { JobHuntCover } from "@/features/JobHuntCover"
import { JobHuntProblem } from "@/features/JobHuntProblem"
import { JobHuntArchitecture } from "@/features/JobHuntArchitecture"
import { JobHuntFeatures } from "@/features/JobHuntFeatures"
import { JobHuntTechStack } from "@/features/JobHuntTechStack"
import { JobHuntLearnings } from "@/features/JobHuntLearnings"
import { JobHuntCTA } from "@/features/JobHuntCTA"

export default function JobHuntCopilotCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <JobHuntHero />
        <JobHuntCover />
        <JobHuntProblem />
        <JobHuntArchitecture />
        <JobHuntFeatures />
        <JobHuntTechStack />
        <JobHuntLearnings />
        <JobHuntCTA />
      </main>
    </div>
  )
}
