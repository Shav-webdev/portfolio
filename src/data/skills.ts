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
      { name: "HTML", category: "Front-End Technologies", proficiency: "Expert" },
      { name: "CSS", category: "Front-End Technologies", proficiency: "Expert" },
      { name: "JavaScript", category: "Front-End Technologies", proficiency: "Expert", years: 6 },
      { name: "React.js", category: "Front-End Technologies", proficiency: "Expert", years: 5 },
      { name: "Next.js", category: "Front-End Technologies", proficiency: "Advanced", years: 4 },
      { name: "jQuery", category: "Front-End Technologies", proficiency: "Proficient" },
    ],
  },
  {
    name: "UI Libraries & Frameworks",
    skills: [
      { name: "Tailwind CSS", category: "UI Libraries & Frameworks", proficiency: "Expert", years: 3 },
      { name: "Material-UI (MUI)", category: "UI Libraries & Frameworks", proficiency: "Advanced", years: 4 },
      { name: "Ant Design", category: "UI Libraries & Frameworks", proficiency: "Advanced", years: 3 },
      { name: "Bootstrap", category: "UI Libraries & Frameworks", proficiency: "Proficient", years: 2 },
      { name: "Chakra UI", category: "UI Libraries & Frameworks", proficiency: "Proficient", years: 2 },
    ],
  },
  {
    name: "Back-End Technologies",
    skills: [
      { name: "Node.js", category: "Back-End Technologies", proficiency: "Advanced", years: 4 },
      { name: "Nest.js", category: "Back-End Technologies", proficiency: "Advanced", years: 3 },
      { name: "Express.js", category: "Back-End Technologies", proficiency: "Advanced", years: 3 },
      { name: "MongoDB", category: "Back-End Technologies", proficiency: "Proficient", years: 2 },
      { name: "PostgreSQL", category: "Back-End Technologies", proficiency: "Proficient", years: 2 },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", category: "DevOps & Tools", proficiency: "Proficient", years: 2 },
      { name: "Git", category: "DevOps & Tools", proficiency: "Expert", years: 6 },
      { name: "GitHub/GitLab/Bitbucket", category: "DevOps & Tools", proficiency: "Expert", years: 6 },
      { name: "CI/CD (ArgoCD)", category: "DevOps & Tools", proficiency: "Proficient", years: 2 },
      { name: "Sentry", category: "DevOps & Tools", proficiency: "Proficient", years: 2 },
      { name: "Grafana (Loki)", category: "DevOps & Tools", proficiency: "Proficient", years: 2 },
      { name: "Fingerprint", category: "DevOps & Tools", proficiency: "Intermediate", years: 1 },
      { name: "Crowdin", category: "DevOps & Tools", proficiency: "Intermediate", years: 1 },
    ],
  },
  {
    name: "Collaboration Tools",
    skills: [
      { name: "Jira", category: "Collaboration Tools", proficiency: "Advanced", years: 4 },
      { name: "Trello", category: "Collaboration Tools", proficiency: "Proficient", years: 3 },
      { name: "Confluence", category: "Collaboration Tools", proficiency: "Proficient", years: 3 },
    ],
  },
  {
    name: "AI Tools",
    skills: [
      { name: "ChatGPT", category: "AI Tools", proficiency: "Advanced" },
      { name: "DeepSeek", category: "AI Tools", proficiency: "Advanced" },
      { name: "GitHub Copilot", category: "AI Tools", proficiency: "Advanced" },
      { name: "Cursor AI", category: "AI Tools", proficiency: "Advanced" },
    ],
  },
  {
    name: "Operating Systems",
    skills: [
      { name: "MacOS", category: "Operating Systems", proficiency: "Expert" },
      { name: "Linux", category: "Operating Systems", proficiency: "Advanced" },
      { name: "Windows", category: "Operating Systems", proficiency: "Proficient" },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Communication", category: "Soft Skills", proficiency: "Expert" },
      { name: "Organization", category: "Soft Skills", proficiency: "Expert" },
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
      { name: "Russian", category: "Languages", proficiency: "Advanced" },
      { name: "English", category: "Languages", proficiency: "Proficient" },
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

