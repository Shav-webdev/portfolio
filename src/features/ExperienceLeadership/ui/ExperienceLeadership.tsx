"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function ExperienceLeadership() {
  return (
    <Section>
      <SectionHeader 
        title="Leadership & Management"
        subtitle="Experience leading teams and driving technical initiatives"
      />
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-8"
      >
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          className="relative bg-background rounded-lg border border-border p-6 overflow-hidden group"
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: "linear-gradient(135deg, var(--primary), transparent 60%)", mixBlendMode: "overlay" }}
          />
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Technical Leadership
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>
                <strong>Performance Optimization</strong> - Improved application 
                performance by 40% through SSR implementation and bundle optimization
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>
                <strong>DevOps Implementation</strong> - Set up monitoring dashboards 
                using Grafana and automated deployments with ArgoCD
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>
                <strong>Technology Adoption</strong> - Introduced modern frameworks 
                and tools, reducing development time by 40%
              </span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </Section>
  )
}
