"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { ProjectCard } from "@/components/ui/project-card"
import { ProjectModal } from "@/components/ui/project-modal"
import { CategoryFilter } from "@/components/ui/category-filter"
import { StatsSection } from "@/components/ui/stats-section"
import { Section, SectionHeader } from "@/components/ui/section"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { useState } from "react"
import { projects, categories, getProjectsByCategory } from "@/data/projects"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = getProjectsByCategory(selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <Section>
          <SectionHeader
            title="My Projects"
            subtitle="A showcase of my work spanning web applications, React projects, and interactive games"
          />

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <motion.div
              key={selectedCategory}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={staggerItem}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </Section>

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Stats Section */}
        <StatsSection />
      </main>
    </div>
  )
}
