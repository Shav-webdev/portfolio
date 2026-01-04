"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function ExperienceInternational() {
  return (
    <Section background="muted">
      <SectionHeader 
        title="International Experience"
        subtitle="Working with global teams and adapting to diverse work cultures"
      />
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-background rounded-lg border border-border p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">🇪🇪</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                xDataGroup
              </h3>
              <p className="text-sm text-muted-foreground">
                Remote • September 2024 - Present
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Working with Estonian team on marketplace and e-commerce platform, 
            collaborating across time zones using modern DevOps practices and monitoring tools.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">International collaboration</span>
              <span className="font-medium">Advanced</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">DevOps & Monitoring</span>
              <span className="font-medium">Proficient</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Performance optimization</span>
              <span className="font-medium">Expert</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-background rounded-lg border border-border p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold text-lg">🌍</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                SDC
              </h3>
              <p className="text-sm text-muted-foreground">
                Remote • August 2021 - October 2022
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Collaborated with global software development company, working on multiple 
            client projects and adapting to diverse technical requirements and team structures.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Client collaboration</span>
              <span className="font-medium">Proficient</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Mentoring & Leadership</span>
              <span className="font-medium">Advanced</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Technical communication</span>
              <span className="font-medium">Excellent</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-background rounded-lg border border-border p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-yellow-600 font-bold text-lg">🇮🇱</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                BeeWeb
              </h3>
              <p className="text-sm text-muted-foreground">
                Onsite (Israel) • January 2021 - August 2021
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Worked onsite with Israeli client developing web applications for the American market, 
            adapting to cross-cultural work environment and international project requirements.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Cross-cultural collaboration</span>
              <span className="font-medium">Excellent</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">International market focus</span>
              <span className="font-medium">Proficient</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Onsite client work</span>
              <span className="font-medium">Advanced</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}
