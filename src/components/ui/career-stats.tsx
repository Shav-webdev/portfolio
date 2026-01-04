"use client"

import { motion } from "framer-motion"
import { 
  Calendar, 
  Building2, 
  Code, 
  Layers, 
  Users, 
  Globe 
} from "lucide-react"
import { staggerContainer, staggerItem } from "@/lib/animations"

interface CareerStatsProps {
  stats: {
    totalExperience: string
    companiesWorked: string
    projectsDelivered: string
    technologiesMastered: string
    teamMembersMentored: string
    internationalExperience: string
  }
}

const statItems = [
  {
    key: 'totalExperience' as keyof CareerStatsProps['stats'],
    label: 'Years of Experience',
    icon: Calendar,
    color: 'text-blue-600'
  },
  {
    key: 'companiesWorked' as keyof CareerStatsProps['stats'],
    label: 'Companies Worked',
    icon: Building2,
    color: 'text-green-600'
  },
  {
    key: 'projectsDelivered' as keyof CareerStatsProps['stats'],
    label: 'Projects Delivered',
    icon: Code,
    color: 'text-purple-600'
  },
  {
    key: 'technologiesMastered' as keyof CareerStatsProps['stats'],
    label: 'Technologies Mastered',
    icon: Layers,
    color: 'text-orange-600'
  },
  {
    key: 'teamMembersMentored' as keyof CareerStatsProps['stats'],
    label: 'Team Members Mentored',
    icon: Users,
    color: 'text-pink-600'
  },
  {
    key: 'internationalExperience' as keyof CareerStatsProps['stats'],
    label: 'International Experience',
    icon: Globe,
    color: 'text-indigo-600'
  }
]

export function CareerStats({ stats }: CareerStatsProps) {
  return (
    <motion.div
      variants={staggerContainer}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
    >
      {statItems.map((item) => {
        const Icon = item.icon
        return (
          <motion.div
            key={item.key}
            variants={staggerItem}
            className="text-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 mx-auto mb-3 ${item.color}`}>
              <Icon className="w-full h-full" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {stats[item.key]}
            </div>
            <div className="text-sm text-muted-foreground">
              {item.label}
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
