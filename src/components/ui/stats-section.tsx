"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { Code, Globe, Calendar, Github } from "lucide-react"

interface StatItem {
  number: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const stats: StatItem[] = [
  { number: "7", label: "Total Projects", icon: Code },
  { number: "4", label: "Featured Projects", icon: Globe },
  { number: "3", label: "Game Projects", icon: Calendar },
  { number: "100%", label: "Open Source", icon: Github },
]

export function StatsSection() {
  return (
    <motion.section
      className="py-20 bg-muted/50"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerItem}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Project Statistics
          </h2>
          <p className="text-muted-foreground">
            Overview of my development work and achievements
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center p-6 bg-background rounded-lg shadow-sm border border-border"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
