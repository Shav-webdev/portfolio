import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Shavarsh Abrahamyan — Senior Software Engineer",
  description:
    "Portfolio of Shavarsh Abrahamyan, a Senior Software Engineer with 7+ years of experience building scalable web applications with React, Next.js, and TypeScript.",
}
import { Hero } from "@/features/Hero"
import { HomeHighlights } from "@/features/HomeHighlights"
import { HomeCompanies } from "@/features/HomeCompanies"
import { HomePortfolio } from "@/features/HomePortfolio"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <HomeHighlights />
        <HomeCompanies />
        <HomePortfolio />
      </main>
    </div>
  )
}
