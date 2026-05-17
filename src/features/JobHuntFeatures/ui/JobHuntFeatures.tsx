"use client"

import { motion } from "framer-motion"
import { Brain, FileText, Target, Wand2, Workflow, Container } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Agent chat that streams its work",
    body: "A LangGraph ReAct agent runs against a tool surface backed by the Nest API. Every tool call, LLM token, and final answer is published to Redis and streamed live to the dashboard over Server-Sent Events.",
  },
  {
    icon: FileText,
    title: "CV parsing PDF → structured JSON",
    body: "Upload a PDF CV; the ai-core service extracts text with pypdf and prompts Gemini to return a typed ParsedCV (name, summary, skills, experience, education). Stored as JSONB alongside the raw text.",
  },
  {
    icon: Target,
    title: "CV ↔ Job scoring with reasoning",
    body: "For any saved job, Gemini scores 0.0–1.0 with three concise reasons. The score is cached and shown next to each application card.",
  },
  {
    icon: Wand2,
    title: "Streamed cover letters",
    body: "Pick a job, click Draft. The ai-core proxies Gemini's generate_content_stream over SSE so the letter writes itself into the UI token by token.",
  },
  {
    icon: Workflow,
    title: "Application kanban",
    body: "Saved / Applied / Interview / Rejected / Offer — each application has a status and notes, with Drizzle relations to user, job, and CV.",
  },
  {
    icon: Container,
    title: "Production-shape local dev",
    body: "A single `tilt up` brings up Postgres, Redis, four services, and ingress on k3d. Live-update reloads each service on file change without rebuilding the image.",
  },
]

export function JobHuntFeatures() {
  return (
    <section className="container mx-auto px-4 pb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What it does</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="rounded-xl border border-border bg-background p-5 hover:border-primary/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
