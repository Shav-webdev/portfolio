"use client"

import { motion } from "framer-motion"
import { Button } from "./button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  project: {
    id: number
    name: string
    description: string
    image: string
    url: string
    github: string
    technologies: string[]
    category: string
    featured: boolean
    year: string
  }
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="group bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          width={600}
          height={400}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex gap-2 mt-auto">
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation()
              window.open(project.url, '_blank')
            }}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={(e) => {
              e.stopPropagation()
              window.open(project.github, '_blank')
            }}
          >
            <Github className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
