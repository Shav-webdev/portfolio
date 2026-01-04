"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Section } from "@/components/ui/section"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
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

export default function Skills() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <motion.section
          className="container mx-auto px-4 py-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Skills & Abilities
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-muted-foreground mb-8"
            >
              A comprehensive overview of my technical expertise and professional capabilities
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Skills Categories */}
        {skillCategories.map((category, categoryIndex) => {
          const Icon = categoryIcons[category.name] || Code
          
          return (
            <Section
              key={category.name}
              background={categoryIndex % 2 === 0 ? "default" : "muted"}
            >
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={staggerItem}
                  className="text-center mb-12"
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl font-bold text-foreground">
                      {category.name}
                    </h2>
                  </div>
                  <p className="text-muted-foreground">
                    {category.skills.length} skills in this category
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={staggerItem}
                      className="bg-background rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-foreground">
                          {skill.name}
                        </h3>
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

                      {/* Proficiency Bar */}
                      <div className="mb-2">
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <motion.div
                            className={`h-2.5 rounded-full ${proficiencyColors[skill.proficiency]}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${proficiencyLevels[skill.proficiency]}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </div>

                      {/* Years of Experience */}
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

        {/* Summary Section */}
        <Section>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={staggerItem}>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Continuous Learning & Growth
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Technology evolves rapidly, and I&apos;m committed to staying current with 
                the latest trends and best practices. My skill set continues to expand as 
                I explore new technologies, tools, and methodologies that enhance my 
                ability to deliver exceptional results.
              </p>
              <p className="text-muted-foreground">
                I believe in the power of continuous learning and hands-on experience. 
                Whether it&apos;s mastering a new framework, exploring emerging technologies, 
                or improving my soft skills, I&apos;m always eager to grow and adapt to 
                the ever-changing landscape of web development.
              </p>
            </motion.div>
          </motion.div>
        </Section>
      </main>
    </div>
  )
}

