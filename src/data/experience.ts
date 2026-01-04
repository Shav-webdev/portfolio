export interface WorkExperience {
  id: string
  company: string
  position: string
  duration: string
  startDate: string
  endDate?: string
  isCurrent: boolean
  location: string
  description: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
  teamSize?: string
  industry: string
}

export interface CareerHighlight {
  id: string
  title: string
  description: string
  year: string
  category: 'achievement' | 'leadership' | 'innovation' | 'recognition'
  impact: string
}

export const workExperience: WorkExperience[] = [
  {
    id: 'xdata',
    company: 'xDataGroup',
    position: 'Software Development Engineer',
    duration: 'September 2024 - Present',
    startDate: '2024-09',
    isCurrent: true,
    location: 'Remote',
    description: 'Building responsive UI pages and improving application performance using cutting-edge technologies.',
    responsibilities: [
      'Building responsive UI pages using Next.js and ChakraUI',
      'Developing new user-facing features and maintaining existing web-based software applications',
      'Improving APP performance, SEO optimization, and SSR implementation',
      'Using Grafana and Argo CD to monitor application logs and deployments'
    ],
    achievements: [
      'Improved application performance by 40% through SSR implementation',
      'Reduced deployment time by 60% using ArgoCD automation',
      'Enhanced SEO scores by implementing structured data and meta optimization',
      'Established monitoring dashboard using Grafana for better observability',
      'Implemented Payments Frontend module for the marketplace',
      'Participated in and managed code freezing processes for stable releases',
      'Led release preparation activities including version planning and coordination',
      'Conducted production testing to ensure system reliability and performance',
      'Implemented system monitoring with Sentry and Grafana for real-time error tracking and observability',
      'Managed deployments using Kargo and ArgoCD for automated CI/CD pipelines'
    ],
    technologies: [
      'React.js', 'Next.js (app router)', 'SSR', 'TypeScript', 'Tailwind', 'ChakraUI', 'Radix UI', 'shadcn/ui', 'framer motion', 'GSAP', 
      'React Query', 'Zustand', 'NGINX', 'Crowdin', 'Fingerprint', 'Sentry', 'Docker', 'ArgoCD', 'Kargo', 'Loki (Grafana)'
    ],
    teamSize: '8-12 developers',
    industry: 'Marketplace, E-commerce'
  },
  {
    id: 'docus',
    company: 'Docus.ai',
    position: 'Software Development Engineer',
    duration: 'November 2022 - August 2024',
    startDate: '2022-11',
    endDate: '2024-08',
    isCurrent: false,
    location: 'Onsite',
    description: 'Developed responsive web applications and maintained existing software solutions with focus on PWA performance.',
    responsibilities: [
      'Building responsive UI pages using Next.js and Styled Components',
      'Developing new user-facing features and maintaining existing web-based software applications',
      'Improving PWA performance and SEO optimization',
      'Keeping application packages up to date'
    ],
    achievements: [
      'Optimized bundle size by 25% through code splitting and lazy loading',
      'Add structured data to the website for better SEO',
      'Add GA4 to the website for better analytics',
      'Reduced loading time by 30% through performance optimization',
      'Update Next.js pages router to app router',
      'Implemented UI design system using Antd Design Components'
    ],
    technologies: [
      'React.js', 'Next.js (app/pages)', 'TypeScript', 'Styled Components', 'Tailwind', 
      'Antd Design Components', 'GA4', 'Structured data'
    ],
    teamSize: '6-8 developers',
    industry: 'AI/Healthcare'
  },
  {
    id: 'tsdc',
    company: 'The Software Development Company',
    position: 'Mid Level JS Developer',
    duration: 'August 2021 - October 2022',
    startDate: '2021-08',
    endDate: '2022-10',
    isCurrent: false,
    location: 'Remote',
    description: 'Developed web applications and provided technical support for various client projects.',
    responsibilities: [
      'Making web applications and providing support',
      'Adding new functionalities and features',
      'Developing new user-facing features and maintaining existing web-based software applications'
    ],
    achievements: [
      'Led development of 3 major web applications from concept to deployment',
      'Mentored 2 junior developers on React best practices',
      'Improved code quality by implementing TypeScript across projects',
      'Reduced bug reports by 50% through better testing practices'
    ],
    technologies: [
      'React.js', 'Redux (Saga)', 'TypeScript', 'Next.js (v13)', 
      'Styled Components', 'HTML', 'CSS', 'SCSS'
    ],
    teamSize: '4-6 developers',
    industry: 'Software Services'
  },
  {
    id: 'beeweb',
    company: 'BeeWeb',
    position: 'Mid Level ReactJS Developer',
    duration: 'January 2021 - August 2021',
    startDate: '2021-01',
    endDate: '2021-08',
    isCurrent: false,
    location: 'Onsite',
    description: 'Developed web applications and maintained existing software solutions.',
    responsibilities: [
      'Making web applications and providing support',
      'Adding new functionalities and features',
      'Developing new user-facing features and maintaining existing web-based software applications'
    ],
    achievements: [
      'Redesigned the entire frontend application in a short timeframe, enabling successful launch in the American market',
      'Received Certificate of Appreciation from client for outstanding contribution to application introduction in America',
      'Built 20+ reusable React components using Ant Design',
      'Improved application performance by 20% through optimization',
      'Established coding standards and best practices for the team'
    ],
    technologies: [
      'React.js', 'Redux (Saga)', 'TypeScript', 'Ant Design', 
      'HTML', 'CSS', 'SCSS'
    ],
    teamSize: '3-8 developers',
    industry: 'Web Development'
  },
  {
    id: 'floopen',
    company: 'Floopen Studio',
    position: 'Full Stack JavaScript Developer (MERN Stack)',
    duration: 'March 2019 - May 2021',
    startDate: '2019-03',
    endDate: '2021-05',
    isCurrent: false,
    location: 'Hybrid',
    description: 'Developed full-stack web applications using MERN stack technologies.',
    responsibilities: [
      'Adding new functionalities and features',
      'Developing new user-facing features and maintaining existing web-based software applications'
    ],
    achievements: [
      'Mentored 2 junior developers in React and Redux, improving team productivity and code quality',
      'Managed project release process to Digital Ocean, ensuring smooth deployments',
      'Implemented PM2 service for process management and application monitoring',
      'Built complete MERN stack applications from database to frontend',
      'Implemented user authentication and authorization systems',
      'Created responsive dashboards with data visualization',
      'Optimized database queries improving response time by 35%'
    ],
    technologies: [
      'React', 'Redux (Thunk)', 'React Bootstrap', 'HighCharts', 
      'AntDesign', 'Node.js', 'Express', 'MongoDB', 'Passport.js',
      'Nginx', 'PM2', 'Digital Ocean'
    ],
    teamSize: '2-4 developers',
    industry: 'Software Development'
  },
]

export const careerHighlights: CareerHighlight[] = [
  {
    id: 'senior-promotion',
    title: 'Promotion to Software Development Engineer',
    description: 'Advanced to senior role at xDataGroup, leading performance optimization initiatives',
    year: '2025',
    category: 'achievement',
    impact: 'Improved app performance by 40%'
  },
  {
    id: 'pwa-implementation',
    title: 'PWA Implementation at Docus.ai',
    description: 'Successfully implemented Progressive Web App features across the platform',
    year: '2023',
    category: 'innovation',
    impact: 'Increased user engagement by 35% and improved mobile experience'
  },
  {
    id: 'mentoring-juniors',
    title: 'Junior Developer Mentoring',
    description: 'Mentored 2 junior developers on React best practices and Redux(Saga)',
    year: '2020',
    category: 'leadership',
    impact: 'Improved team productivity and code quality standards'
  },
  {
    id: 'mern-expertise',
    title: 'Full-Stack MERN Development',
    description: 'Mastered complete MERN stack development at Floopen Studio',
    year: '2020',
    category: 'achievement',
    impact: 'Built end-to-end applications from database design to frontend implementation'
  },
  {
    id: 'career-start',
    title: 'Professional Journey Begins',
    description: 'Started professional development career at Esterox and Simply Technologies as an intern',
    year: '2019',
    category: 'achievement',
    impact: 'Laid foundation for nearly 7 years of continuous growth in web development'
  }
]

export const careerStats = {
  totalExperience: '~ 7',
  companiesWorked: '5',
  projectsDelivered: '12+',
  technologiesMastered: '20+',
  teamMembersMentored: '5+',
  internationalExperience: '3 country'
}
