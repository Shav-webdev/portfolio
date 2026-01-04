export interface ContactInfo {
  email: string
  phone: string
  location: string
  address: string
  linkedin: string
  github: string
  portfolio: string
}

export interface Availability {
  status: "Available" | "Busy" | "Unavailable"
  responseTime: string
  timeZone: string
  preferredMethods: string[]
}

export interface ProfessionalService {
  title: string
  description: string
  icon: string
}

export const contactInfo: ContactInfo = {
  email: "shavarsh.abrahamyan1993@gmail.com",
  phone: "+374 55-88-62-11",
  location: "Yerevan, Armenia",
  address: "Yerkatgits 6 apt. 2, Yerevan, Armenia",
  linkedin: "https://www.linkedin.com/in/shavarsh-abrahamyan-42065816a/",
  github: "https://github.com/Shav-webdev",
  portfolio: "https://shav-webdev.github.io/portfolio/",
}

export const availability: Availability = {
  status: "Available",
  responseTime: "24-48 hours",
  timeZone: "GMT+4 (Armenia Time)",
  preferredMethods: ["Email", "LinkedIn"],
}

export const professionalServices: ProfessionalService[] = [
  {
    title: "Web Application Development",
    description: "Full-stack web applications using React, Next.js, and Node.js",
    icon: "Code",
  },
  {
    title: "Performance Optimization",
    description: "Improving application performance, SEO, and user experience",
    icon: "Zap",
  },
]

export const projectTypes = [
  "Web Application",
  "Mobile Application",
  "E-commerce Platform",
  "SaaS Product",
  "Portfolio Website",
  "API Development",
  "Performance Optimization",
  "Other",
]

export const contactMethods = [
  "Email",
  "LinkedIn",
  "Phone",
  "GitHub",
]

