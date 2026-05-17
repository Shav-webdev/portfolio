"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { Github, Linkedin, Mail } from "lucide-react"
import { contactInfo } from "@/data/contact"
import Link from "next/link"
import Image from "next/image"
import avatarImage from "@/assets/img/avatar.jpg"

const TypeAnimation = dynamic(
  () => import("react-type-animation").then(m => ({ default: m.TypeAnimation })),
  { ssr: false }
)

const techPills = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Docker", "AWS", "Claude AI",
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 })
  const rotateX = useTransform(springY, [-250, 250], [10, -10])
  const rotateY = useTransform(springX, [-250, 250], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.section
      ref={containerRef}
      className="container mx-auto px-4 py-20 relative overflow-hidden"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <motion.div
        variants={fadeInUp}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        {/* Avatar with parallax + glow ring */}
        <motion.div
          variants={staggerItem}
          className="mb-8 flex justify-center"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
        >
          <div className="relative">
            {/* Pulsing glow ring */}
            <motion.div
              className="absolute inset-[-6px] rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0px rgba(99,102,241,0.5)",
                  "0 0 0 10px rgba(99,102,241,0.08)",
                  "0 0 0 0px rgba(99,102,241,0.5)",
                ],
              }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Secondary ring */}
            <motion.div
              className="absolute inset-[-3px] rounded-full border-2 border-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{
                background: "conic-gradient(from 0deg, transparent 70%, rgba(99,102,241,0.5) 100%)",
                borderRadius: "50%",
              }}
            />
            <div className="relative w-32 h-32 md:w-50 md:h-50 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image
                src={avatarImage}
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Animated gradient title */}
        <motion.h1
          variants={staggerItem}
          className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
        >
          Senior Software Engineer
        </motion.h1>

        <motion.div
          variants={staggerItem}
          className="text-xl md:text-2xl text-muted-foreground mb-8 min-h-[3rem] flex items-center justify-center"
        >
          <TypeAnimation
            sequence={[
              "Building modern web applications with 7+ years of experience in React, Next.js, and TypeScript",
              1000,
            ]}
            speed={30}
            wrapper="span"
            cursor={true}
            repeat={0}
            className="text-center"
          />
        </motion.div>

        <motion.p
          variants={staggerItem}
          className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          Passionate about creating scalable, performant web applications.
          Experienced in full-stack development with international companies,
          specializing in modern JavaScript frameworks and cloud technologies.
        </motion.p>

        {/* Floating tech pills */}
        <motion.div
          variants={staggerItem}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {techPills.map((tech, i) => (
            <motion.span
              key={tech}
              className="tech-pill"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2.5 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
              whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={staggerItem}
        className="flex justify-center gap-4 relative z-10"
      >
        <Link href={contactInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
          <Button variant="ghost" size="icon" aria-label="GitHub profile" className="hover:scale-110 transition-transform hover:text-primary">
            <Github className="w-5 h-5" />
          </Button>
        </Link>
        <Link href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
          <Button variant="ghost" size="icon" aria-label="LinkedIn profile" className="hover:scale-110 transition-transform hover:text-primary">
            <Linkedin className="w-5 h-5" />
          </Button>
        </Link>
        <Link href={`mailto:${contactInfo.email}`} aria-label="Send email">
          <Button variant="ghost" size="icon" aria-label="Send email" className="hover:scale-110 transition-transform hover:text-primary">
            <Mail className="w-5 h-5" />
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  )
}
