"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { ExperienceTimeline } from "@/components/ui/experience-timeline"
import { CareerHighlights } from "@/components/ui/career-highlights"
import { CareerStats } from "@/components/ui/career-stats"
import { Section, SectionHeader } from "@/components/ui/section"
import { workExperience, careerHighlights, careerStats } from "@/data/experience"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Briefcase, TrendingUp, Award } from "lucide-react"

export default function Experience() {
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
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Professional Experience
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground mb-8"
            >
              Nearly 7 years of growth from intern to senior software engineer
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center space-x-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4" />
                <span>5 Companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>12+ Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>International Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Career Stats */}
        <Section background="muted">
          <SectionHeader 
            title="Career Overview"
            subtitle="Key metrics from my professional journey"
          />
          <CareerStats stats={careerStats} />
        </Section>

        {/* Work Experience Timeline */}
        <Section>
          <SectionHeader 
            title="Work Experience Timeline"
            subtitle="My professional journey from intern to senior engineer"
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <ExperienceTimeline experiences={workExperience} />
          </motion.div>
        </Section>

        {/* Career Highlights */}
        <Section background="muted">
          <SectionHeader 
            title="Career Highlights"
            subtitle="Notable achievements and milestones throughout my career"
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <CareerHighlights highlights={careerHighlights} />
          </motion.div>
        </Section>

        {/* Leadership & Management Experience */}
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
              className="bg-background rounded-lg border border-border p-6"
            >
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

        {/* International Experience */}
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

        {/* Call to Action */}
        <Section>
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I bring nearly 7 years of full-stack development experience, international 
              collaboration skills, and a passion for building exceptional user experiences. 
              Let&apos;s discuss how I can contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                View My Projects
              </a>
            </div>
          </motion.div>
        </Section>
      </main>
    </div>
  )
}
