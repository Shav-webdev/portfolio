import * as z from "zod"

// Schema matches Formspree field names
export const contactFormSchema = z.object({
  fromName: z.string().min(2, "Name must be at least 2 characters"),
  from_email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  projectType: z.string().optional(),
  preferredMethod: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

