"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { cn } from "@/lib/utils"

interface ScrollLineProps {
  className?: string
}

export function ScrollLine({ className }: ScrollLineProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const rafIdRef = useRef<number | null>(null)

  const calculateScrollProgress = useCallback(() => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY || document.documentElement.scrollTop

    // Calculate the maximum scrollable distance
    const maxScroll = documentHeight - windowHeight

    // Handle edge case when content is shorter than viewport
    if (maxScroll <= 0) {
      setScrollProgress(0)
      return
    }

    // Calculate scroll percentage (0-100)
    const percentScrolled = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100))
    setScrollProgress(percentScrolled)
  }, [])

  useEffect(() => {
    // Initial calculation
    calculateScrollProgress()

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current)
      }

      // Schedule update on next frame
      rafIdRef.current = window.requestAnimationFrame(() => {
        calculateScrollProgress()
        rafIdRef.current = null
      })
    }

    const handleResize = () => {
      // Cancel any pending animation frame
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current)
      }
      calculateScrollProgress()
    }

    // Use passive listeners for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [calculateScrollProgress])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-50 h-1 bg-primary origin-left",
        "will-change-transform", // Better for transform than width
        className
      )}
      style={{
        width: "100%",
        transform: `scaleX(${scrollProgress / 100})`,
        transformOrigin: "left center",
        // No transition for immediate updates, especially on mobile
      }}
      aria-hidden="true"
    />
  )
}

