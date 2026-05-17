"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function SkillsSummary() {
  return (
    <Section>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.div variants={staggerItem}>
          <h2 className="text-3xl font-bold text-foreground mb-6">Continuous Learning &amp; Growth</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Technology evolves rapidly, and I&apos;m committed to staying current with
            the latest trends and best practices. My skill set continues to expand as
            I explore new technologies, tools, and methodologies that enhance my
            ability to deliver exceptional results.
          </p>
          <p className="text-muted-foreground">
            I believe in the power of continuous learning and hands-on experience.
            Whether it&apos;s mastering a new framework, exploring emerging technologies,
            or improving my soft skills, I&apos;m always eager to grow and adapt to
            the ever-changing landscape of web development.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  )
}
