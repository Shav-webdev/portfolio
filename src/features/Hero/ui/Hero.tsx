"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { Github, Linkedin, Mail } from "lucide-react"
import { contactInfo } from "@/data/contact"
import Link from "next/link"
import Image from "next/image"
import avatarImage from "@/assets/img/avatar.jpg"
import { TypeAnimation } from "react-type-animation"

export function Hero() {
  return (
    <motion.section
      className="container mx-auto px-4 py-20"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div
        variants={fadeInUp}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Avatar Image */}
        <motion.div
          variants={staggerItem}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-32 h-32 md:w-50 md:h-50 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
            <Image
              src={avatarImage}
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="text-4xl md:text-6xl font-bold text-foreground mb-6"
        >
          Senior Software Engineer
        </motion.h1>
        <motion.div
          variants={staggerItem}
          className="text-xl md:text-2xl text-muted-foreground mb-8 min-h-[3rem] flex items-center justify-center"
        >
          <TypeAnimation
            sequence={[
              "Building modern web applications with nearly 7 years of experience in React, Next.js, and TypeScript",
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
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={staggerItem}
        className="flex justify-center gap-4 mt-12"
      >
        <Link
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <Github className="w-5 h-5" />
          </Button>
        </Link>
        <Link
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <Linkedin className="w-5 h-5" />
          </Button>
        </Link>
        <Link
          href={`mailto:${contactInfo.email}`}
        >
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <Mail className="w-5 h-5" />
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  )
}

