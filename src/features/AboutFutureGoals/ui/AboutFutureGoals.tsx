"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function AboutFutureGoals() {
  return (
    <motion.section
      className="py-20 bg-muted/50"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={staggerItem} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">Future Goals</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m excited about the future of web development and my role in shaping it.
            I&apos;m particularly interested in exploring emerging technologies like AI/ML
            integration in web applications, advanced performance optimization techniques,
            and contributing to open-source projects that benefit the developer community.
          </p>
          <p className="text-muted-foreground">
            My goal is to continue growing as a technical leader, mentoring other developers,
            and contributing to innovative projects that make a positive impact on users&apos; lives.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
