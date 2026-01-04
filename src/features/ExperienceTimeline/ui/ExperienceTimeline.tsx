"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { ExperienceTimeline } from "@/components/ui/experience-timeline"
import { workExperience } from "@/data/experience"
import { staggerContainer } from "@/lib/animations"

export function ExperienceTimelineSection() {
  return (
    <Section>
      <SectionHeader 
        title="Work Experience Timeline"
        subtitle="My professional journey from intern to senior engineer"
      />
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <ExperienceTimeline experiences={workExperience} />
      </motion.div>
    </Section>
  )
}
