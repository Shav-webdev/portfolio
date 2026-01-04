"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { fadeInUp } from "@/lib/animations"

export function ExperienceCallToAction() {
  return (
    <Section>
      <motion.div
        variants={fadeInUp}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to Work Together?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          I bring nearly 7 years of full-stack development experience, international 
          collaboration skills, and a passion for building exceptional user experiences. 
          Let&apos;s discuss how I can contribute to your next project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
          >
            View My Projects
          </Link>
        </div>
      </motion.div>
    </Section>
  )
}
