"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Briefcase, TrendingUp, Award } from "lucide-react"

export function ExperienceHero() {
  return (
    <motion.section
      className="container mx-auto px-4 py-20"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div
        variants={fadeInUp}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold text-foreground mb-6"
        >
          Professional Experience
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-muted-foreground mb-8"
        >
          Nearly 7 years of growth from intern to senior software engineer
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center space-x-2">
            <Briefcase className="w-4 h-4" />
            <span>5 Companies</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>12+ Projects</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4" />
            <span>International Experience</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
