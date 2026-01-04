"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { contactInfo, availability } from "@/data/contact"
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github, Clock,
    CheckCircle2
} from "lucide-react"
import Link from "next/link"

export function ContactInformation() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div variants={staggerItem} className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Contact Information
        </h2>
        <p className="text-muted-foreground">
          Feel free to reach out through any of these channels. 
          I typically respond within 24-48 hours.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.a
          variants={staggerItem}
          href={`mailto:${contactInfo.email}`}
          className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow group"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <div className="font-semibold text-foreground">Email</div>
            <div className="text-sm text-muted-foreground">
              {contactInfo.email}
            </div>
          </div>
        </motion.a>

        <motion.a
          variants={staggerItem}
          href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:shadow-lg  transition-shadow group"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <div className="font-semibold text-foreground">Phone</div>
            <div className="text-sm text-muted-foreground">
              {contactInfo.phone}
            </div>
          </div>
        </motion.a>

        <motion.div
          variants={staggerItem}
          className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <div className="font-semibold text-foreground">Location</div>
            <div className="text-sm text-muted-foreground">
              {contactInfo.location}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="flex items-center gap-4 pt-4"
        >
          <Link
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow group"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
          <Link
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow group"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Availability */}
      <motion.div
        variants={staggerItem}
        className="mt-8 p-6 bg-muted/50 rounded-lg border border-border"
      >
        <div className="flex items-center gap-3 mb-4">
          <Clock className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            Availability
          </h3>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Status:</span>
            <span className="font-medium text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              {availability.status}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Response Time:</span>
            <span className="font-medium text-foreground">
              {availability.responseTime}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Time Zone:</span>
            <span className="font-medium text-foreground">
              {availability.timeZone}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

