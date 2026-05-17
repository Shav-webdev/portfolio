"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { portfolioProjects, portfolioCompanies } from "@/data/portfolio-projects"
import { Briefcase, ExternalLink } from "lucide-react"

const ALL = "All"

export function HomePortfolio() {
  const [activeCompany, setActiveCompany] = useState(ALL)

  const filtered = activeCompany === ALL
    ? portfolioProjects
    : portfolioProjects.filter(p => p.company === activeCompany)

  return (
    <motion.section
      className="py-20 bg-muted/50"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="container mx-auto px-4">

        <motion.div
          className="text-center mb-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem} className="flex items-center justify-center gap-2 mb-3">
            <Briefcase className="w-7 h-7 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Professional Portfolio</h2>
          </motion.div>
          <motion.p variants={staggerItem} className="text-muted-foreground mb-8">
            Real products I built at companies — click any project to visit the live site
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-2">
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
                  {co && <span className="ml-1.5 opacity-70 text-xs">({co.count})</span>}
                </button>
              )
            })}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCompany}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group bg-background rounded-xl border border-border overflow-hidden flex flex-col"
              >
                <div className="relative overflow-hidden" style={{ height: 180 }}>
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
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-black/80 rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold text-foreground backdrop-blur-sm">
                      <ExternalLink className="w-3.5 h-3.5" /> Visit Site
                    </div>
                  </div>
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-xs font-bold shadow-md"
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
          </motion.div>
        </AnimatePresence>

      </div>
    </motion.section>
  )
}
