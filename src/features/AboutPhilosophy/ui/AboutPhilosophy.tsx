"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { GraduationCap, Award, Users, Target } from "lucide-react"

export function AboutPhilosophy() {
  return (
    <motion.section
      className="py-20"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={staggerItem} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Professional Philosophy</h2>
          <p className="text-muted-foreground">My values and approach to software development</p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="relative text-center p-6 rounded-xl border border-border bg-background overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 0%, var(--primary), transparent 70%)", mixBlendMode: "overlay" }}
            />
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Problem Solving</h3>
            <p className="text-muted-foreground">
              I approach every challenge with a systematic, analytical mindset,
              breaking down complex problems into manageable solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="relative text-center p-6 rounded-xl border border-border bg-background overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 0%, var(--secondary), transparent 70%)", mixBlendMode: "overlay" }}
            />
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Collaboration</h3>
            <p className="text-muted-foreground">
              I believe in the power of teamwork and open communication.
              I thrive in collaborative environments where ideas are shared freely.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="relative text-center p-6 rounded-xl border border-border bg-background overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 0%, var(--accent), transparent 70%)", mixBlendMode: "overlay" }}
            />
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Quality First</h3>
            <p className="text-muted-foreground">
              I&apos;m committed to writing high-quality, maintainable code that
              follows best practices and industry standards.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="relative text-center p-6 rounded-xl border border-border bg-background overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 0%, var(--primary), transparent 70%)", mixBlendMode: "overlay" }}
            />
            <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Continuous Learning</h3>
            <p className="text-muted-foreground">
              Technology evolves rapidly, and I&apos;m committed to staying current
              with the latest trends and best practices in web development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
