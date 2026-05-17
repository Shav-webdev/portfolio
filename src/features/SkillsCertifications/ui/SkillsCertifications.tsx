"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { certifications } from "@/data/skills"
import { Award, ExternalLink, ImageIcon, X, ZoomIn } from "lucide-react"

import type { StaticImageData } from "next/image"

function CertificateImageModal({ src, title, onClose }: { src: StaticImageData; title: string; onClose: () => void }) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          className="relative z-10 max-w-3xl w-full"
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
          >
            <X className="w-4 h-4" /> Close
          </button>
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              <Image
                src={src}
                alt={title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
          <p className="text-center text-white/70 text-sm mt-3">{title}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function SkillsCertifications() {
  const [previewCert, setPreviewCert] = React.useState<{ src: StaticImageData; title: string } | null>(null)

  return (
    <>
      {previewCert && (
        <CertificateImageModal
          src={previewCert.src}
          title={previewCert.title}
          onClose={() => setPreviewCert(null)}
        />
      )}

      <Section background="muted">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Certifications</h2>
            </div>
            <p className="text-muted-foreground">
              {certifications.length} professional certifications earned throughout my career
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="cert-card p-6 flex flex-col overflow-hidden group"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[0.75rem]"
                  style={{ background: "linear-gradient(135deg, var(--primary), transparent 60%)", mixBlendMode: "overlay" }}
                />
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cert.badge}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: cert.issuerColor }}>
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-muted-foreground">{cert.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {cert.image && (
                      <button
                        onClick={() => setPreviewCert({ src: cert.image!, title: `${cert.name} — ${cert.issuer}` })}
                        className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                        title="View certificate"
                      >
                        <ZoomIn className="w-3.5 h-3.5" /> View
                      </button>
                    )}
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-medium text-primary hover:underline transition-colors"
                        title="Verify certificate"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Verify
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-base font-bold text-foreground mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{cert.description}</p>

                {cert.image && (
                  <button
                    onClick={() => setPreviewCert({ src: cert.image!, title: `${cert.name} — ${cert.issuer}` })}
                    className="mt-4 relative rounded-lg overflow-hidden border border-border group/thumb cursor-zoom-in"
                    style={{ height: 120 }}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300" />
                    </div>
                  </button>
                )}

                <div
                  className="mt-4 h-0.5 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${cert.issuerColor}, transparent)` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>
    </>
  )
}
