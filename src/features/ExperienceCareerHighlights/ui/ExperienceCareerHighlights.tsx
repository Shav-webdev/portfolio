"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { CareerHighlights } from "@/components/ui/career-highlights"
import { careerHighlights } from "@/data/experience"
import { staggerContainer } from "@/lib/animations"

export function ExperienceCareerHighlights() {
  return (
    <Section background="muted">
      <SectionHeader 
        title="Career Highlights"
        subtitle="Notable achievements and milestones throughout my career"
      />
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <CareerHighlights highlights={careerHighlights} />
      </motion.div>
    </Section>
  )
}
