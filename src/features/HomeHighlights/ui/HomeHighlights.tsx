"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { Code2, FolderOpen, Cpu } from "lucide-react"

function AnimatedCounter({ target, prefix = "", suffix = "" }: {
  target: number; prefix?: string; suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress >= 1) { setCount(target); clearInterval(timer) }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

const stats = [
  { Icon: Code2,      prefix: "", target: 7,  suffix: "+", label: "Years Experience",      description: "Building production apps since 2019" },
  { Icon: FolderOpen, prefix: "", target: 20, suffix: "+", label: "Projects Completed",    description: "From startups to enterprise platforms" },
  { Icon: Cpu,        prefix: "", target: 15, suffix: "+", label: "Technologies Mastered", description: "React, Next.js, TypeScript, Node.js…" },
]

export function HomeHighlights() {
  return (
    <motion.section
      className="py-20 bg-muted/50 relative overflow-hidden"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={staggerItem} className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground mb-3">Professional Highlights</h2>
          <p className="text-muted-foreground">Key achievements across 7+ years of web development</p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map(({ Icon, prefix, target, suffix, label, description }, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="relative bg-background rounded-xl border border-border p-8 overflow-hidden group cursor-default"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                style={{ background: "linear-gradient(135deg, var(--primary), transparent 70%)", mixBlendMode: "overlay" }}
              />
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b from-primary via-secondary to-accent" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">
                    <AnimatedCounter target={target} prefix={prefix} suffix={suffix} />
                  </div>
                  <div className="font-semibold text-foreground mb-1">{label}</div>
                  <div className="text-sm text-muted-foreground">{description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
