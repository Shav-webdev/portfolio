"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

export function ContactHero() {
  return (
    <motion.section
      className="container mx-auto px-4 py-20"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-16">
        <motion.h1 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Get In Touch
        </motion.h1>
        <motion.p variants={staggerItem} className="text-xl text-muted-foreground mb-8">
          Let&apos;s discuss your next project or just say hello.
          I&apos;m always open to new opportunities and collaborations.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
