"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

export function SkillsHero() {
  return (
    <motion.section
      className="container mx-auto px-4 py-20"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-16">
        <motion.h1 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Skills &amp; Abilities
        </motion.h1>
        <motion.p variants={staggerItem} className="text-xl text-muted-foreground">
          A comprehensive overview of my technical expertise and professional capabilities
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
