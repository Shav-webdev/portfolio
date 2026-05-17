"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [mounted, setMounted]     = useState(false)
  const [visible, setVisible]     = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [clicked, setClicked]     = useState(false)

  const mx = useMotionValue(-300)
  const my = useMotionValue(-300)

  // Dot — near-instant
  const dotX = useSpring(mx, { stiffness: 3000, damping: 200 })
  const dotY = useSpring(my, { stiffness: 3000, damping: 200 })

  // Ring — soft trail
  const ringX = useSpring(mx, { stiffness: 140, damping: 20 })
  const ringY = useSpring(my, { stiffness: 140, damping: 20 })

  useEffect(() => {
    if (typeof window === "undefined") return
    // Only on mouse/trackpad devices
    if (window.matchMedia("(pointer: coarse)").matches) return

    setMounted(true)

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      setVisible(true)
      const el = document.elementFromPoint(e.clientX, e.clientY)
      setIsPointer(!!el?.closest('a, button, [role="button"], input, textarea, select, label, [tabindex]'))
    }
    const onLeave  = () => setVisible(false)
    const onEnter  = () => setVisible(true)
    const onDown   = () => setClicked(true)
    const onUp     = () => setClicked(false)

    document.addEventListener("mousemove",  onMove)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)
    document.addEventListener("mousedown",  onDown)
    document.addEventListener("mouseup",    onUp)
    return () => {
      document.removeEventListener("mousemove",  onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mousedown",  onDown)
      document.removeEventListener("mouseup",    onUp)
    }
  }, [mx, my])

  if (!mounted) return null

  return (
    <>
      {/* Trailing ring — border-only for a clean modern look */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: ringX, y: ringY,
          translateX: "-50%", translateY: "-50%",
          border: "1.5px solid white",
          mixBlendMode: "difference",
        }}
        animate={{
          width:   clicked ? 24 : isPointer ? 52 : 38,
          height:  clicked ? 24 : isPointer ? 52 : 38,
          opacity: visible ? 1 : 0,
          scale:   clicked ? 0.85 : 1,
        }}
        transition={{
          width:   { type: "spring", stiffness: 260, damping: 26 },
          height:  { type: "spring", stiffness: 260, damping: 26 },
          scale:   { type: "spring", stiffness: 400, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      />

      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX, y: dotY,
          translateX: "-50%", translateY: "-50%",
          backgroundColor: "white",
          mixBlendMode: "difference",
        }}
        animate={{
          width:   clicked ? 10 : isPointer ? 8 : 6,
          height:  clicked ? 10 : isPointer ? 8 : 6,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          width:   { type: "spring", stiffness: 600, damping: 40 },
          height:  { type: "spring", stiffness: 600, damping: 40 },
          opacity: { duration: 0.15 },
        }}
      />
    </>
  )
}
