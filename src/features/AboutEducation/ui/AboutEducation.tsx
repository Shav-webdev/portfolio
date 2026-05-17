"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { GraduationCap, Award } from "lucide-react"

export function AboutEducation() {
  return (
    <motion.section
      className="py-20 bg-muted/50"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={staggerItem} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Education &amp; Certifications</h2>
          <p className="text-muted-foreground">My academic background and continuous learning journey</p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="relative p-6 bg-background rounded-lg shadow-sm border border-border overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "linear-gradient(135deg, var(--primary), transparent 65%)", mixBlendMode: "overlay" }}
            />
            <GraduationCap className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Armenian Code Academy</h3>
            <p className="text-muted-foreground mb-2">JavaScript &amp; React JS Course</p>
            <p className="text-sm text-muted-foreground">August 2019 - January 2020</p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="relative p-6 bg-background rounded-lg shadow-sm border border-border overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "linear-gradient(135deg, var(--secondary), transparent 65%)", mixBlendMode: "overlay" }}
            />
            <Award className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">National Research Nuclear University MEPhI</h3>
            <p className="text-muted-foreground mb-2">Master&apos;s Degree - Automation and Electronics</p>
            <p className="text-sm text-muted-foreground">2016 - 2018</p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="relative p-6 bg-background rounded-lg shadow-sm border border-border overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "linear-gradient(135deg, var(--accent), transparent 65%)", mixBlendMode: "overlay" }}
            />
            <GraduationCap className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">National Polytechnic University of Armenia</h3>
            <p className="text-muted-foreground mb-2">Bachelor&apos;s Degree - Power Engineering</p>
            <p className="text-sm text-muted-foreground">2010 - 2016</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
