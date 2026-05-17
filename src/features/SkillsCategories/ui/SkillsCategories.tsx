"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { skillCategories, proficiencyColors, proficiencyLevels } from "@/data/skills"
import { Code, Database, Cloud, Users, Brain, Monitor, Globe, Briefcase } from "lucide-react"

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Front-End Technologies": Code,
  "UI Libraries & Frameworks": Code,
  "Back-End Technologies": Database,
  "DevOps & Tools": Cloud,
  "Collaboration Tools": Users,
  "AI Tools": Brain,
  "Operating Systems": Monitor,
  "Soft Skills": Briefcase,
  "Languages": Globe,
}

export function SkillsCategories() {
  return (
    <>
      {skillCategories.map((category, categoryIndex) => {
        const Icon = categoryIcons[category.name] || Code
        return (
          <Section key={category.name} background={categoryIndex % 2 === 0 ? "default" : "muted"}>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={staggerItem} className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">{category.name}</h2>
                </div>
                <p className="text-muted-foreground">{category.skills.length} skills in this category</p>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={staggerItem}
                    whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(99,102,241,0.12)", transition: { type: "spring", stiffness: 300, damping: 20 } }}
                    className="relative bg-background rounded-lg border border-border p-6 overflow-hidden group"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "linear-gradient(135deg, var(--primary), transparent 65%)", mixBlendMode: "overlay" }}
                    />
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          skill.proficiency === "Expert"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : skill.proficiency === "Advanced"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : skill.proficiency === "Proficient"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                        }`}
                      >
                        {skill.proficiency}
                      </span>
                    </div>

                    <div className="mb-2">
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <motion.div
                          className={`h-2.5 rounded-full ${proficiencyColors[skill.proficiency]}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${proficiencyLevels[skill.proficiency]}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.08 }}
                        />
                      </div>
                    </div>

                    {skill.years && (
                      <p className="text-sm text-muted-foreground">
                        {skill.years} {skill.years === 1 ? "year" : "years"} of experience
                      </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Section>
        )
      })}
    </>
  )
}
