export interface Skill {
  name: string
  category: string
  proficiency: "Expert" | "Advanced" | "Proficient" | "Intermediate"
  years?: number
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

