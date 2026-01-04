"use client"

import { motion } from "framer-motion"
import { WorkExperience } from "@/data/experience"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Building2, ArrowRight } from "lucide-react"
import { staggerItem } from "@/lib/animations"

interface ExperienceTimelineProps {
  experiences: WorkExperience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
      
      <div className="space-y-8">
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            variants={staggerItem}
            className="relative flex items-start space-x-6"
          >
            {/* Timeline dot */}
            <div className="hidden md:flex items-center justify-center w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg z-10">
              <div className="w-2 h-2 bg-background rounded-full" />
            </div>

            {/* Content */}
            <div className="flex-1 bg-background rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <div className="flex items-top sm:items-center  space-x-2 mb-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      {experience.position}
                    </h3>
                    {experience.isCurrent && (
                      <Badge variant="default" className="text-xs h-fit">
                        Current
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-2">
                    <div className="flex items-center space-x-1">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium text-foreground">{experience.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    {experience.teamSize && (
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{experience.teamSize}</span>
                      </div>
                    )}
                  </div>
                </div>
                <Badge variant="outline" className="mt-2 lg:mt-0">
                  {experience.industry}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-4">
                {experience.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                <ul className="space-y-1">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3 h-3 mt-1.5 text-primary flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              {experience.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-3 h-3 mt-1.5 text-green-500 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
