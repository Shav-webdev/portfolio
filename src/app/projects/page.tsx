import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Projects — Shavarsh Abrahamyan",
  description:
    "Professional and personal projects by Shavarsh Abrahamyan — production apps built at companies, AI tools, full-stack applications, and open-source work.",
}
import { ProjectsGallery } from "@/features/ProjectsGallery"

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <ProjectsGallery />
      </main>
    </div>
  )
}
