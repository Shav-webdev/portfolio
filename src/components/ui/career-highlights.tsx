"use client"

import { motion } from "framer-motion"
import { CareerHighlight } from "@/data/experience"
import { Badge } from "@/components/ui/badge"
import { 
  Award, 
  Users, 
  Lightbulb, 
  Trophy, 
  TrendingUp,
  Calendar
} from "lucide-react"
import { staggerContainer, staggerItem } from "@/lib/animations"

interface CareerHighlightsProps {
  highlights: CareerHighlight[]
}

const getCategoryIcon = (category: CareerHighlight['category']) => {
  switch (category) {
    case 'achievement':
      return <Trophy className="w-5 h-5" />
    case 'leadership':
      return <Users className="w-5 h-5" />
    case 'innovation':
      return <Lightbulb className="w-5 h-5" />
    case 'recognition':
      return <Award className="w-5 h-5" />
    default:
      return <TrendingUp className="w-5 h-5" />
  }
}

const getCategoryColor = (category: CareerHighlight['category']) => {
  switch (category) {
    case 'achievement':
      return 'bg-green-500/10 text-green-600 border-green-200'
    case 'leadership':
      return 'bg-blue-500/10 text-blue-600 border-blue-200'
    case 'innovation':
      return 'bg-purple-500/10 text-purple-600 border-purple-200'
    case 'recognition':
      return 'bg-yellow-500/10 text-yellow-600 border-yellow-200'
    default:
      return 'bg-gray-500/10 text-gray-600 border-gray-200'
  }
}

export function CareerHighlights({ highlights }: CareerHighlightsProps) {
  return (
    <motion.div
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {highlights.map((highlight) => (
        <motion.div
          key={highlight.id}
          variants={staggerItem}
          className="bg-background rounded-lg border border-border p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`p-2 rounded-lg ${getCategoryColor(highlight.category)}`}>
              {getCategoryIcon(highlight.category)}
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{highlight.year}</span>
            </div>
          </div>

          <h3 className="font-semibold text-foreground mb-2">
            {highlight.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-3">
            {highlight.description}
          </p>

          <div className="space-y-2">
            <Badge 
              variant="outline" 
              className={`text-xs capitalize ${getCategoryColor(highlight.category)}`}
            >
              {highlight.category}
            </Badge>
            
            <div className="bg-muted/50 rounded-md p-3">
              <p className="text-sm font-medium text-foreground mb-1">
                Impact:
              </p>
              <p className="text-xs text-muted-foreground">
                {highlight.impact}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
