"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import jobHuntCopilot1 from "@/assets/img/job-hunt-copilot-1.png"
import jobHuntCopilot2 from "@/assets/img/job-hunt-copilot-2.png"

export function JobHuntCover() {
  return (
    <section className="container mx-auto px-4 pb-16 space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl overflow-hidden border border-border bg-muted/30"
      >
        <Image
          src={jobHuntCopilot1}
          alt="Job Hunt Copilot — dashboard"
          className="w-full h-auto"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl overflow-hidden border border-border bg-muted/30"
      >
        <Image
          src={jobHuntCopilot2}
          alt="Job Hunt Copilot — agent chat"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  )
}
