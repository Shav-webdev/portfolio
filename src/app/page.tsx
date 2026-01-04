"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ui/project-card"
import { Navigation } from "@/components/navigation"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { getFeaturedProjects } from "@/data/projects"
import { Hero } from "@/features/Hero"
import Link from "next/link"

export default function Home() {
  const featuredProjects = getFeaturedProjects().slice(0, 3)
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <main className="pt-20">
        <Hero />

        {/* Quick Stats */}
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
                Professional Highlights
              </h2>
              <p className="text-muted-foreground">
                Key achievements and expertise in web development
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { number: "~7", label: "Years Experience" },
                { number: "20+", label: "Projects Completed" },
                { number: "15+", label: "Technologies Mastered" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="text-center p-6 bg-background rounded-lg shadow-sm border border-border"
                >
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

        {/* Featured Projects */}
        <motion.section
          className="py-20"
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
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                A selection of my best work showcasing different technologies and skills
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={staggerItem}
                  className="h-full"
                >
                  <ProjectCard
                    project={project}
                    onClick={() => window.open(project.url, '_blank')}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="text-center mt-12"
            >
              <Link href="/projects">
                <Button size="lg" variant="outline">
                  View All Projects
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
