"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { GraduationCap, Award, Users, Target } from "lucide-react"

export default function About() {
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
              About Me
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-muted-foreground mb-8"
            >
              My journey from intern to senior software engineer
            </motion.p>
          </motion.div>

          {/* Personal Story */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <motion.div variants={staggerItem}>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I&apos;m a passionate full-stack developer with over 6 years of experience 
                  building modern web applications. My journey began in 2019 as an intern 
                  at Esterox, where I discovered my love for web development.
                </p>
                <p>
                  Over the years, I&apos;ve had the privilege of working with international 
                  companies including Menu Group UK and Docus.ai, where I&apos;ve honed my 
                  skills in React, Next.js, and modern JavaScript frameworks.
                </p>
                <p>
                  Currently, I&apos;m a Software Development Engineer at XData, where I focus 
                  on building responsive UI pages and improving application performance 
                  using cutting-edge technologies like Docker, ArgoCD, and Grafana.
                </p>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-6">
              <div className="p-6 bg-muted/50 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  What Drives Me
                </h3>
                <p className="text-muted-foreground">
                  I&apos;m passionate about creating scalable, performant web applications 
                  that solve real-world problems. I believe in continuous learning and 
                  staying up-to-date with the latest technologies.
                </p>
              </div>
              
              <div className="p-6 bg-muted/50 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  My Approach
                </h3>
                <p className="text-muted-foreground">
                  I focus on writing clean, maintainable code and delivering great user 
                  experiences. I&apos;m committed to continuous learning and staying current 
                  with evolving technologies.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.section
            variants={staggerContainer}
            className="py-20 bg-muted/50"
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
                  Education & Certifications
                </h2>
                <p className="text-muted-foreground">
                  My academic background and continuous learning journey
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <motion.div
                  variants={staggerItem}
                  className="p-6 bg-background rounded-lg shadow-sm border border-border"
                >
                  <GraduationCap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Armenian Code Academy
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    JavaScript & React JS Course
                  </p>
                  <p className="text-sm text-muted-foreground">
                    August 2019 - January 2020
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="p-6 bg-background rounded-lg shadow-sm border border-border"
                >
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    National Research Nuclear University MEPhI
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Master&apos;s Degree - Automation and Electronics
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2016 - 2018
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="p-6 bg-background rounded-lg shadow-sm border border-border"
                >
                  <GraduationCap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    National Polytechnic University of Armenia
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Bachelor&apos;s Degree - Power Engineering
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2010 - 2016
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Professional Philosophy */}
          <motion.section
            variants={staggerContainer}
            className="py-20"
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
                  Professional Philosophy
                </h2>
                <p className="text-muted-foreground">
                  My values and approach to software development
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                <motion.div
                  variants={staggerItem}
                  className="text-center p-6"
                >
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Problem Solving
                  </h3>
                  <p className="text-muted-foreground">
                    I approach every challenge with a systematic, analytical mindset, 
                    breaking down complex problems into manageable solutions.
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="text-center p-6"
                >
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Collaboration
                  </h3>
                  <p className="text-muted-foreground">
                    I believe in the power of teamwork and open communication. 
                    I thrive in collaborative environments where ideas are shared freely.
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="text-center p-6"
                >
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Quality First
                  </h3>
                  <p className="text-muted-foreground">
                    I&apos;m committed to writing high-quality, maintainable code that 
                    follows best practices and industry standards.
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="text-center p-6"
                >
                  <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Continuous Learning
                  </h3>
                  <p className="text-muted-foreground">
                    Technology evolves rapidly, and I&apos;m committed to staying current 
                    with the latest trends and best practices in web development.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Future Goals */}
          <motion.section
            variants={staggerContainer}
            className="py-20 bg-muted/50"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-4">
              <motion.div
                variants={staggerItem}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Future Goals
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  I&apos;m excited about the future of web development and my role in shaping it. 
                  I&apos;m particularly interested in exploring emerging technologies like AI/ML 
                  integration in web applications, advanced performance optimization techniques, 
                  and contributing to open-source projects that benefit the developer community.
                </p>
                <p className="text-muted-foreground">
                  My goal is to continue growing as a technical leader, mentoring other developers, 
                  and contributing to innovative projects that make a positive impact on users&apos; lives.
                </p>
              </motion.div>
            </div>
          </motion.section>
        </motion.section>
      </main>
    </div>
  )
}
