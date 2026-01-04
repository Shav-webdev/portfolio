"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Section, SectionHeader } from "@/components/ui/section"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import {
  professionalServices,
} from "@/data/contact"
import {
  Code,
  Palette,
  Zap,
  Users,
} from "lucide-react"
import { ContactForm } from "@/features/ContactForm"
import { ContactInformation } from "@/features/ContactInformation"
import { StructuredData, getContactPageSchema } from "@/features/StructuredData"

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Palette,
  Zap,
  Users,
}

export default function Contact() {

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={getContactPageSchema()} id="ContactPage" />
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <motion.section
          className="container mx-auto px-4 py-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-muted-foreground mb-8"
            >
              Let&apos;s discuss your next project or just say hello. 
              I&apos;m always open to new opportunities and collaborations.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Contact Information & Form */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ContactInformation />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </Section>

        {/* Professional Services */}
        <Section background="muted">
          <SectionHeader
            title="Professional Services"
            subtitle="Types of projects and services I offer"
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2  gap-6"
          >
            {professionalServices.map((service, index) => {
              const Icon = serviceIcons[service.icon] || Code
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-background rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </Section>
      </main>
    </div>
  )
}

