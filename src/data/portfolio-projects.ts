import type { StaticImageData } from "next/image"
import okidokiImg from "@/assets/img/portfolio/okidoki.jpg"
import xpasswordImg from "@/assets/img/portfolio/xpassword.png"
import docusImg from "@/assets/img/portfolio/docus.png"
import rentbaseImg from "@/assets/img/portfolio/rentbase.jpg"
import sdcImg from "@/assets/img/portfolio/sdc.jpg"
import amxImg from "@/assets/img/portfolio/amx.jpg"
import cdaImg from "@/assets/img/portfolio/cda.jpg"
import gmmImg from "@/assets/img/portfolio/gmm.jpg"

export interface PortfolioProject {
  id: string
  name: string
  description: string
  image: StaticImageData
  url: string
  company: string
  companyColor: string
  period: string
  tags: string[]
  type: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "okidoki",
    name: "Okidoki",
    description: "Armenia's largest classified ads marketplace — buy & sell cars, real estate, jobs and goods. Built a high-performance SSR platform with advanced SEO and Fingerprint fraud-detection.",
    image: okidokiImg,
    url: "https://www.okidoki.am",
    company: "xDataGroup",
    companyColor: "#6366F1",
    period: "2024 – Present",
    tags: ["Next.js", "TypeScript", "ChakraUI", "Fingerprint", "SSR"],
    type: "Marketplace",
  },
  {
    id: "xpassword",
    name: "xPassword",
    description: "Secure offline password manager — no cloud, no sync, total control. Designed and implemented the entire front-end from scratch with a focus on security and UX.",
    image: xpasswordImg,
    url: "https://xpassword.vercel.app",
    company: "xDataGroup",
    companyColor: "#6366F1",
    period: "2024 – Present",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    type: "Security Tool",
  },
  {
    id: "docus",
    name: "Docus AI Platform",
    description: "AI-powered health platform for diagnostic labs — automates interpretation, follow-ups, and compliance workflows. Migrated pages router to app router and implemented GA4, Structured Data and PWA.",
    image: docusImg,
    url: "https://docus.ai",
    company: "Docus.ai",
    companyColor: "#0EA5E9",
    period: "2022 – 2024",
    tags: ["Next.js", "React", "TypeScript", "Ant Design", "GA4"],
    type: "AI / HealthTech",
  },
  {
    id: "rentbase",
    name: "RentBase",
    description: "CRM web application for rental agents — organize leads, landlords and listings, auto-match properties, and streamline the full rental workflow. Built 20+ reusable React components.",
    image: rentbaseImg,
    url: "https://beewebsystems.com/works/rentbase",
    company: "BeeWeb",
    companyColor: "#F59E0B",
    period: "2021",
    tags: ["React.js", "Redux Saga", "TypeScript", "Ant Design"],
    type: "SaaS / CRM",
  },
  {
    id: "sdc",
    name: "SDC Projects",
    description: "Delivered multiple full-stack web applications for clients across various industries. Led development of 3 major projects from concept to deployment, mentoring junior developers along the way.",
    image: sdcImg,
    url: "https://sdc.am",
    company: "SDC",
    companyColor: "#8B5CF6",
    period: "2021 – 2022",
    tags: ["React.js", "Next.js", "TypeScript", "Redux Saga"],
    type: "Software Services",
  },
  {
    id: "amx",
    name: "AMX — Armenian Stock Exchange",
    description: "Official platform of the Armenian Stock Exchange — real-time securities data, market analytics, and investor portal. Full-stack MERN development with HighCharts data visualizations.",
    image: amxImg,
    url: "https://amx.am",
    company: "Floopen Studio",
    companyColor: "#10B981",
    period: "2019 – 2021",
    tags: ["React", "Redux", "Node.js", "HighCharts", "MongoDB"],
    type: "FinTech",
  },
  {
    id: "cda",
    name: "CDA — Central Depository of Armenia",
    description: "Official platform of the Central Depository of Armenia — securities depository and settlement system with live stock ticker and settlement data dashboards.",
    image: cdaImg,
    url: "https://cda.am",
    company: "Floopen Studio",
    companyColor: "#10B981",
    period: "2019 – 2021",
    tags: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    type: "FinTech",
  },
  {
    id: "gmm",
    name: "GMM — Garage Masters' Mall",
    description: "E-commerce and service marketplace for Armenia's premier auto parts mall — product catalog, service booking, and vendor management system.",
    image: gmmImg,
    url: "https://gmm.am",
    company: "Floopen Studio",
    companyColor: "#10B981",
    period: "2019 – 2021",
    tags: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    type: "E-commerce",
  },
]

export const portfolioCompanies = [
  { name: "xDataGroup",     color: "#6366F1", count: 2 },
  { name: "Docus.ai",       color: "#0EA5E9", count: 1 },
  { name: "BeeWeb",         color: "#F59E0B", count: 1 },
  { name: "SDC",            color: "#8B5CF6", count: 1 },
  { name: "Floopen Studio", color: "#10B981", count: 3 },
]
