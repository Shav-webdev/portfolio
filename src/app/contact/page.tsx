import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Contact — Shavarsh Abrahamyan",
  description:
    "Get in touch with Shavarsh Abrahamyan. Open to new opportunities, freelance projects, and collaborations in full-stack web development.",
}
import { ContactHero } from "@/features/ContactHero"
import { ContactDetails } from "@/features/ContactDetails"
import { ContactServices } from "@/features/ContactServices"
import { StructuredData, getContactPageSchema } from "@/features/StructuredData"


export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={getContactPageSchema()} id="ContactPage" />
      <Navigation />
      <main className="pt-20">
        <ContactHero />
        <ContactDetails />
        <ContactServices />
      </main>
    </div>
  )
}
