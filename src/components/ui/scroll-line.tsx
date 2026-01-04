"use client"

import { useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface ScrollLineProps {
  className?: string
}

export function ScrollLine({ className }: ScrollLineProps) {
  const [scrollWidth, setScrollWidth] = useState(0)

  const calculateScrollProgress = useCallback(() => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY || document.documentElement.scrollTop

    // Calculate the maximum scrollable distance
    const maxScroll = documentHeight - windowHeight

    // Handle edge case when content is shorter than viewport
    if (maxScroll <= 0) {
      setScrollWidth(0)
      return
    }

    // Calculate scroll percentage (0-100)
    const percentScrolled = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100))
    setScrollWidth(percentScrolled)
  }, [])

  useEffect(() => {
    // Initial calculation
    calculateScrollProgress()

    // Use requestAnimationFrame for smooth updates
    let rafId: number | null = null
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          calculateScrollProgress()
          ticking = false
        })
        ticking = true
      }
    }

    const handleResize = () => {
      calculateScrollProgress()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [calculateScrollProgress])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-50 h-1 bg-primary will-change-[width]",
        className
      )}
      style={{
        width: `${scrollWidth}%`,
        transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      aria-hidden="true"
    />
  )
}

