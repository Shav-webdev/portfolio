"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { workExperience } from "@/data/experience"
import { Building2, MapPin, Calendar, ChevronRight } from "lucide-react"

const recentCompanies = workExperience.slice(0, 4)

export function HomeCompanies() {
  return (
    <motion.section
      className="py-20"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={staggerItem} className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Building2 className="w-7 h-7 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Companies I&apos;ve Worked With</h2>
          </div>
          <p className="text-muted-foreground">Professional experience across international companies and diverse industries</p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentCompanies.map((exp) => (
            <motion.div
              key={exp.id}
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 16px 32px rgba(99,102,241,0.12)", transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="relative bg-background rounded-xl border border-border p-6 overflow-hidden group"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                style={{ background: "radial-gradient(ellipse at 0% 100%, var(--primary), transparent 65%)", mixBlendMode: "overlay" }}
              />
              {exp.isCurrent && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">Current</span>
                </div>
              )}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center font-bold text-primary text-lg border border-primary/20">
                  {exp.company.charAt(0)}
                </div>
                <div className="min-w-0 pr-16">
                  <h3 className="font-bold text-foreground text-lg leading-tight truncate">{exp.company}</h3>
                  <p className="text-primary text-sm font-medium">{exp.position}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{exp.duration}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
                <span className="px-2 py-0.5 rounded-full bg-muted border border-border">{exp.industry}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{exp.achievements[0]}</p>
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground border border-border">{tech}</span>
                ))}
                {exp.technologies.length > 5 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                    +{exp.technologies.length - 5} more
                  </span>
                )}
              </div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                style={{ transformOrigin: "left" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={staggerItem} className="text-center mt-10">
          <Link href="/experience">
            <Button size="lg" variant="outline" className="gap-2">
              View Full Experience <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
