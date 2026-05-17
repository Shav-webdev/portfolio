"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

export function AboutHero() {
  return (
    <motion.section
      className="container mx-auto px-4 py-20"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-16">
        <motion.h1 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          About Me
        </motion.h1>
        <motion.p variants={staggerItem} className="text-xl text-muted-foreground mb-8">
          My journey from intern to senior software engineer
        </motion.p>
      </motion.div>

      <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.div variants={staggerItem}>
          <h2 className="text-3xl font-bold text-foreground mb-6">My Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I&apos;m a Frontend Engineer with 7+ years of experience building
              scalable, high-quality web applications using modern technologies such as
              React, Next.js, TypeScript, and Node.js. I specialize in creating performant,
              user-focused interfaces and enjoy working on complex products at scale.
            </p>
            <p>
              My professional background includes extensive experience with modern frontend
              architecture, state management (Redux, Zustand, TanStack Query), and UI systems
              such as Tailwind CSS, Radix UI, and shadcn/ui. I have also worked closely with
              backend services and CI/CD pipelines, and have hands-on experience monitoring
              production systems using tools like Grafana, ArgoCD, and Kargo.
            </p>
            <p>
              I value clean, maintainable code, strong collaboration, and continuous improvement.
              I take ownership of features from idea to production and consistently focus on
              performance, reliability, and user experience.
            </p>
          </div>
        </motion.div>

        <motion.div variants={staggerItem} className="space-y-6">
          <motion.div
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="relative p-6 bg-muted/50 rounded-lg border border-border overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "linear-gradient(135deg, var(--primary), transparent 65%)", mixBlendMode: "overlay" }}
            />
            <h3 className="text-xl font-semibold text-foreground mb-3">What Drives Me</h3>
            <p className="text-muted-foreground">
              I&apos;m passionate about creating scalable, performant web applications
              that solve real-world problems. I believe in continuous learning and
              staying up-to-date with the latest technologies.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="relative p-6 bg-muted/50 rounded-lg border border-border overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "linear-gradient(135deg, var(--secondary), transparent 65%)", mixBlendMode: "overlay" }}
            />
            <h3 className="text-xl font-semibold text-foreground mb-3">My Approach</h3>
            <p className="text-muted-foreground">
              I focus on writing clean, maintainable code and delivering great user
              experiences. I&apos;m committed to continuous learning and staying current
              with evolving technologies.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
