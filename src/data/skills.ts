import type { StaticImageData } from "next/image"
import certAnthropicImg from "@/assets/img/certificates/cert-anthropic.png"
import certBewebImg from "@/assets/img/certificates/cert-beeweb.jpg"
import certSimplyImg from "@/assets/img/certificates/cert-simply-technologies.jpg"
import certAcaImg from "@/assets/img/certificates/cert-aca.jpg"

export interface Skill {
  name: string
  category: string
  proficiency: "Expert" | "Advanced" | "Proficient" | "Intermediate"
  years?: number
}

export interface Certification {
  name: string
  issuer: string
  issuerColor: string
  date: string
  description: string
  url?: string
  image?: StaticImageData
  badge?: string
}

export interface SkillCategory {
  name: string
  icon?: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Front-End Technologies",
    skills: [
      { name: "React.js", category: "Front-End Technologies", proficiency: "Expert", years: 7 },
      { name: "Next.js", category: "Front-End Technologies", proficiency: "Expert", years: 5 },
      { name: "TypeScript", category: "Front-End Technologies", proficiency: "Expert", years: 5 },
      { name: "JavaScript", category: "Front-End Technologies", proficiency: "Expert", years: 7 },
      { name: "HTML", category: "Front-End Technologies", proficiency: "Expert", years: 7 },
      { name: "CSS", category: "Front-End Technologies", proficiency: "Expert", years: 7 },
      { name: "Fingerprint", category: "Front-End Technologies", proficiency: "Expert", years: 3 },
      { name: "Crowdin", category: "Front-End Technologies", proficiency: "Advanced", years: 2 },
    ],
  },
  {
    name: "UI Libraries & Frameworks",
    skills: [
      { name: "Tailwind CSS", category: "UI Libraries & Frameworks", proficiency: "Expert", years: 3 },
      { name: "Chakra UI", category: "UI Libraries & Frameworks", proficiency: "Expert", years: 2 },
      { name: "Radix UI", category: "UI Libraries & Frameworks", proficiency: "Expert", years: 2 },
      { name: "Material-UI (MUI)", category: "UI Libraries & Frameworks", proficiency: "Expert", years: 1 },
      { name: "Ant Design", category: "UI Libraries & Frameworks", proficiency: "Expert", years: 3 },
      { name: "Bootstrap", category: "UI Libraries & Frameworks", proficiency: "Expert", years: 2 },
    ],
  },
  {
    name: "Back-End Technologies",
    skills: [
      { name: "Node.js", category: "Back-End Technologies", proficiency: "Advanced", years: 2 },
      { name: "Nest.js", category: "Back-End Technologies", proficiency: "Advanced", years: 2 },
      { name: "Express.js", category: "Back-End Technologies", proficiency: "Advanced", years: 2 },
      { name: "Python", category: "Back-End Technologies", proficiency: "Proficient", years: 1 },
      { name: "MongoDB", category: "Back-End Technologies", proficiency: "Advanced", years: 2 },
      { name: "PostgreSQL", category: "Back-End Technologies", proficiency: "Proficient", years: 2 },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", category: "DevOps & Tools", proficiency: "Advanced", years: 3 },
      { name: "Git", category: "DevOps & Tools", proficiency: "Expert", years: 7 },
      { name: "GitHub/GitLab/Bitbucket", category: "DevOps & Tools", proficiency: "Expert", years: 7 },
      { name: "CI/CD (ArgoCD)", category: "DevOps & Tools", proficiency: "Advanced", years: 2 },
      { name: "Sentry", category: "DevOps & Tools", proficiency: "Advanced", years: 2 },
      { name: "Grafana (Loki)", category: "DevOps & Tools", proficiency: "Advanced", years: 3 },
    ],
  },
  {
    name: "Collaboration Tools",
    skills: [
      { name: "Jira", category: "Collaboration Tools", proficiency: "Expert", years: 7 },
      { name: "Trello", category: "Collaboration Tools", proficiency: "Expert", years: 2 },
      { name: "Confluence", category: "Collaboration Tools", proficiency: "Expert", years: 5 },
    ],
  },
  {
    name: "AI Tools",
    skills: [
      { name: "Claude AI (Anthropic)", category: "AI Tools", proficiency: "Expert" },
      { name: "ChatGPT", category: "AI Tools", proficiency: "Expert" },
      { name: "DeepSeek", category: "AI Tools", proficiency: "Expert" },
      { name: "GitHub Copilot", category: "AI Tools", proficiency: "Expert" },
      { name: "Cursor AI", category: "AI Tools", proficiency: "Expert" },
    ],
  },
  {
    name: "Operating Systems",
    skills: [
      { name: "MacOS", category: "Operating Systems", proficiency: "Expert" },
      { name: "Linux", category: "Operating Systems", proficiency: "Expert" },
      { name: "Windows", category: "Operating Systems", proficiency: "Expert" },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Communication", category: "Soft Skills", proficiency: "Expert" },
      { name: "Organization", category: "Soft Skills", proficiency: "Advanced" },
      { name: "Multitasking", category: "Soft Skills", proficiency: "Advanced" },
      { name: "Problem Solving", category: "Soft Skills", proficiency: "Expert" },
      { name: "Team Collaboration", category: "Soft Skills", proficiency: "Expert" },
      { name: "Continuous Learning", category: "Soft Skills", proficiency: "Expert" },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "Armenian", category: "Languages", proficiency: "Expert" },
      { name: "Russian", category: "Languages", proficiency: "Expert" },
      { name: "English", category: "Languages", proficiency: "Advanced" },
    ],
  },
]

export const certifications: Certification[] = [
  {
    name: "Claude 101",
    issuer: "Anthropic",
    issuerColor: "#D97706",
    date: "May 14, 2026",
    description:
      "Certificate of Completion for Claude 101 — covering Claude AI model capabilities, prompt engineering, and building AI-powered applications with the Anthropic API.",
    url: "https://verify.skilljar.com/c/er76jev5ghpr",
    image: certAnthropicImg,
    badge: "🤖",
  },
  {
    name: "Certificate of Appreciation",
    issuer: "BeeWeb",
    issuerColor: "#F59E0B",
    date: "2021",
    description:
      "Awarded for outstanding teamwork and exceptional contribution to the successful launch of an application in the American market.",
    image: certBewebImg,
    badge: "🏆",
  },
  {
    name: "Certificate of Completion",
    issuer: "Simply Technologies",
    issuerColor: "#10B981",
    date: "March 13, 2020",
    description:
      "Awarded for successful completion of the internship program and active participation in the development of the \"Deliver.me\" application. Technologies learned: JavaScript, Node.js, MongoDB, React.js, Redux, Git.",
    image: certSimplyImg,
    badge: "🎓",
  },
  {
    name: "JavaScript Development",
    issuer: "Armenian Code Academy (ACA)",
    issuerColor: "#6366F1",
    date: "December 1, 2019",
    description:
      "Successfully completed a 4-month JavaScript Development course offered by Armenian Code Academy, covering core JS concepts, DOM manipulation, and modern development practices.",
    image: certAcaImg,
    badge: "📜",
  },
]

export const proficiencyColors = {
  Expert: "bg-green-500",
  Advanced: "bg-blue-500",
  Proficient: "bg-yellow-500",
  Intermediate: "bg-orange-500",
}

export const proficiencyLevels = {
  Expert: 100,
  Advanced: 80,
  Proficient: 60,
  Intermediate: 40,
}

