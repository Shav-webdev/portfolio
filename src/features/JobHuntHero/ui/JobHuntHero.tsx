"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, Sparkles } from "lucide-react"

export function JobHuntHero() {
  return (
    <section className="container mx-auto px-4 pt-12 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          Full-Stack &amp; AI · 2025 · in progress
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Job Hunt Copilot
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
          An end-to-end AI job-hunt assistant. A LangGraph agent searches jobs, scores them
          against your CV, and drafts cover letters &mdash; streamed live into a Next.js dashboard.
          Polyglot monorepo across Next.js, NestJS and two Python FastAPI services, deployed on
          Kubernetes via Helm + Tilt.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a
              href="https://github.com/Shav-webdev/job-hunt-copilot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/projects" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Other projects
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
