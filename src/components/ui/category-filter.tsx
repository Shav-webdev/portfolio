"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <motion.div
      variants={staggerContainer}
      className="flex flex-wrap justify-center gap-4 mb-12"
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          variants={staggerItem}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full border transition-all ${
            selectedCategory === category
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background text-muted-foreground border-border hover:border-primary hover:text-foreground"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  )
}
