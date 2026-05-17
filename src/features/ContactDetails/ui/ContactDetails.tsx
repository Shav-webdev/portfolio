import { Section } from "@/components/ui/section"
import { ContactInformation } from "@/features/ContactInformation"
import { ContactForm } from "@/features/ContactForm"

export function ContactDetails() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactInformation />
        <ContactForm />
      </div>
    </Section>
  )
}
