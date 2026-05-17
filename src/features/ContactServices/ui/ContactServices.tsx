"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { professionalServices } from "@/data/contact"
import { Code, Palette, Zap, Users } from "lucide-react"

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Palette,
  Zap,
  Users,
}

export function ContactServices() {
  return (
    <Section background="muted">
      <SectionHeader
        title="Professional Services"
        subtitle="Types of projects and services I offer"
      />
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {professionalServices.map((service, index) => {
          const Icon = serviceIcons[service.icon] || Code
          return (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="relative bg-background rounded-lg border border-border p-6 overflow-hidden group"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "linear-gradient(135deg, var(--primary), transparent 65%)", mixBlendMode: "overlay" }}
              />
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
