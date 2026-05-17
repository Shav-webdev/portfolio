"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ProjectCard } from "@/components/ui/project-card"
import { ProjectModal } from "@/components/ui/project-modal"
import { StatsSection } from "@/components/ui/stats-section"
import { Section, SectionHeader } from "@/components/ui/section"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { projects, categories, getProjectsByCategory } from "@/data/projects"
import { portfolioProjects, portfolioCompanies } from "@/data/portfolio-projects"
import { ExternalLink, Code2, Briefcase } from "lucide-react"

const ALL = "All"

type Tab = "personal" | "professional"

export function ProjectsGallery() {
  const [tab, setTab] = useState<Tab>("professional")

  const [selectedCategory, setSelectedCategory] = useState(ALL)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const filteredPersonal = getProjectsByCategory(selectedCategory)

  const [activeCompany, setActiveCompany] = useState(ALL)
  const filteredProfessional = activeCompany === ALL
    ? portfolioProjects
    : portfolioProjects.filter(p => p.company === activeCompany)

  return (
    <>
      <Section>
        <SectionHeader
          title="Projects"
          subtitle="Professional work built at companies and personal projects built for fun and learning"
        />

        <div className="flex justify-center mb-10">
          <div className="flex gap-1 p-1 bg-muted rounded-xl border border-border">
            <button
              onClick={() => setTab("professional")}
              className={`flex items-center gap-1.5 px-3 py-2 sm:px-6 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                tab === "professional"
                  ? "bg-background text-foreground shadow-sm border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Briefcase className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">Professional Work</span>
              <span className="sm:hidden">Work</span>
              <span className="px-1.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                {portfolioProjects.length}
              </span>
            </button>
            <button
              onClick={() => setTab("personal")}
              className={`flex items-center gap-1.5 px-3 py-2 sm:px-6 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                tab === "personal"
                  ? "bg-background text-foreground shadow-sm border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Code2 className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">Personal Projects</span>
              <span className="sm:hidden">Personal</span>
              <span className="px-1.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                {projects.length}
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {tab === "professional" && (
            <motion.div
              key="professional"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {[ALL, ...portfolioCompanies.map(c => c.name)].map((name) => {
                  const co = portfolioCompanies.find(c => c.name === name)
                  const isActive = activeCompany === name
                  return (
                    <button
                      key={name}
                      onClick={() => setActiveCompany(name)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                        isActive
                          ? "text-white border-transparent shadow-md"
                          : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                      }`}
                      style={isActive ? { backgroundColor: co?.color ?? "#6366f1" } : {}}
                    >
                      {name}
                      {co && <span className="ml-1.5 opacity-75 text-xs">({co.count})</span>}
                    </button>
                  )
                })}
              </div>

              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredProfessional.map((project) => (
                    <motion.a
                      key={project.id}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      layout
                      initial={{ opacity: 0, scale: 0.93 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.93 }}
                      transition={{ duration: 0.22 }}
                      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                      className="group bg-background rounded-xl border border-border overflow-hidden flex flex-col cursor-pointer"
                    >
                      <div className="relative overflow-hidden" style={{ height: 200 }}>
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                          style={{ backgroundColor: project.companyColor, mixBlendMode: "multiply" }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-black/80 rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium backdrop-blur-sm">
                            <ExternalLink className="w-3.5 h-3.5" /> Visit Site
                          </div>
                        </div>
                        <div
                          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-xs font-bold shadow"
                          style={{ backgroundColor: project.companyColor }}
                        >
                          {project.company}
                        </div>
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur-sm">
                          {project.type}
                        </div>
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-foreground text-base leading-tight">{project.name}</h3>
                          <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">{project.period}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-muted border border-border text-muted-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${project.companyColor}, transparent)` }} />
                    </motion.a>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}

          {tab === "personal" && (
            <motion.div
              key="personal"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-muted-foreground border-border hover:border-primary hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {filteredPersonal.length > 0 ? (
                <motion.div
                  key={selectedCategory}
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredPersonal.map((project) => (
                    <motion.div key={project.id} variants={staggerItem}>
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
            </motion.div>
          )}
        </AnimatePresence>
      </Section>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <StatsSection />
    </>
  )
}
