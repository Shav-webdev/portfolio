"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { staggerContainer, staggerItem } from "@/lib/animations"

interface SectionProps {
  children: ReactNode
  className?: string
  background?: "default" | "muted"
}

export function Section({ children, className = "", background = "default" }: SectionProps) {
  const bgClass = background === "muted" ? "bg-muted/50" : ""
  
  return (
    <motion.section
      className={`py-20 ${bgClass} ${className}`}
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </motion.section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerItem}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="text-3xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
