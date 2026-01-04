"use client"

import { Modal } from "./modal"
import { Button } from "./button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import type { StaticImageData } from "next/image"

interface ProjectModalProps {
  project: {
    id: number
    name: string
    description: string
    longDescription?: string
    image: string | StaticImageData
    url: string
    github: string
    technologies: string[]
    category: string
    featured: boolean
    year: string
    highlights?: string[]
    challenges?: string[]
    results?: string[]
  } | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.name}>
      <div className="relative">
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-muted-foreground">{project.year}</span>
        </div>
        
        <p className="text-muted-foreground mb-6">
          {project.longDescription || project.description}
        </p>
        
        {project.highlights && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Key Highlights
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="text-muted-foreground flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4">
          <Button
            className="flex-1"
            onClick={() => window.open(project.url, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Live Demo
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open(project.github, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View Code
          </Button>
        </div>
      </div>
    </Modal>
  )
}
