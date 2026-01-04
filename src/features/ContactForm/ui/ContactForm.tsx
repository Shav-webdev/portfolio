"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { projectTypes, contactMethods } from "@/data/contact"
import { Send, CheckCircle2, Loader2 } from "lucide-react"
import { useForm as useFormspree, ValidationError } from "@formspree/react"
import { useForm as useReactHookForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useRef } from "react"
import { FORMSPREE_FORM_ID } from "../model/config"
import { contactFormSchema, type ContactFormData } from "../model/types"

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formspreeState, formspreeHandleSubmit] = useFormspree(FORMSPREE_FORM_ID)

  // React Hook Form for client-side validation
  const {
    register,
    handleSubmit: handleReactHookFormSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useReactHookForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
  })

  // Combined submit handler: validate first, then submit to Formspree
  const onSubmit = handleReactHookFormSubmit(async () => {
    // If validation passes, submit the form to Formspree
    if (formRef.current) {
      // Create a synthetic submit event for Formspree
      const form = formRef.current
      const event = new Event("submit", {
        bubbles: true,
        cancelable: true,
      }) as unknown as React.FormEvent<HTMLFormElement>
      
      // Set form as target
      Object.defineProperty(event, "currentTarget", {
        value: form,
        writable: false,
      })
      Object.defineProperty(event, "target", {
        value: form,
        writable: false,
      })
      Object.defineProperty(event, "preventDefault", {
        value: () => {},
        writable: false,
      })

      // Submit to Formspree
      await formspreeHandleSubmit(event)
    }
  })

  useEffect(() => {
    if (!formspreeState.result && !formspreeState.succeeded) return

    if (formspreeState.result && formspreeState.succeeded && formRef.current) {
      setTimeout(() => {
        formRef.current?.reset()
        reset() // Also reset react-hook-form
      }, 1000)
    }
  }, [formspreeState.succeeded, formspreeState.result, reset])

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div variants={staggerItem} className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Send a Message
        </h2>
        <p className="text-muted-foreground">
          Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>
      </motion.div>

      <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
        <motion.div variants={staggerItem}>
          <Label htmlFor="fromName">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fromName"
            type="text"
            {...register("fromName" as keyof ContactFormData)}
            placeholder="Your name"
            className="mt-2"
          />
          {errors.fromName && (
            <p className="text-sm text-destructive mt-1">
              {errors.fromName.message}
            </p>
          )}
          <ValidationError
            prefix="Name"
            field="fromName"
            errors={formspreeState.errors}
            className="text-sm text-destructive mt-1"
          />
        </motion.div>

        <motion.div variants={staggerItem}>
          <Label htmlFor="from_email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="from_email"
            type="email"
            {...register("from_email" as keyof ContactFormData)}
            placeholder="your.email@example.com"
            className="mt-2"
          />
          {errors.from_email && (
            <p className="text-sm text-destructive mt-1">
              {errors.from_email.message}
            </p>
          )}
          <ValidationError
            prefix="Email"
            field="email"
            errors={formspreeState.errors}
            className="text-sm text-destructive mt-1"
          />
        </motion.div>

        <motion.div variants={staggerItem}>
          <Label htmlFor="subject">
            Subject <span className="text-destructive">*</span>
          </Label>
          <Input
            id="subject"
            type="text"
            {...register("subject")}
            placeholder="What is this regarding?"
            className="mt-2"
          />
          {errors.subject && (
            <p className="text-sm text-destructive mt-1">
              {errors.subject.message}
            </p>
          )}
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={formspreeState.errors}
            className="text-sm text-destructive mt-1"
          />
        </motion.div>

        <motion.div variants={staggerItem}>
          <Label htmlFor="projectType">Project Type (Optional)</Label>
          <select
            id="projectType"
            {...register("projectType")}
            className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div variants={staggerItem}>
          <Label htmlFor="message">
            Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Tell me about your project or inquiry..."
            className="mt-2 min-h-[120px]"
          />
          {errors.message && (
            <p className="text-sm text-destructive mt-1">
              {errors.message.message}
            </p>
          )}
          <ValidationError
            prefix="Message"
            field="message"
            errors={formspreeState.errors}
            className="text-sm text-destructive mt-1"
          />
        </motion.div>

        <motion.div variants={staggerItem}>
          <Label htmlFor="preferredMethod">
            Preferred Contact Method (Optional)
          </Label>
          <select
            id="preferredMethod"
            {...register("preferredMethod")}
            className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select preferred method</option>
            {contactMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </motion.div>

        {formspreeState.succeeded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green dark:bg-green-500 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5 text-white dark:text-white" />
            <p className="text-sm text-white dark:text-white">
              Thank you! Your message has been sent. I&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}

        {formspreeState.errors && Object.keys(formspreeState.errors).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
          >
            <p className="text-sm text-red-800 dark:text-red-200">
              There was an error submitting your form. Please try again.
            </p>
          </motion.div>
        )}

        <motion.div variants={staggerItem}>
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting || formspreeState.submitting}
          >
            {isSubmitting || formspreeState.submitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  )
}

