import project1Image from "@/assets/img/project_1.jpg"
import project2Image from "@/assets/img/project_2.jpg"
import project3Image from "@/assets/img/project_3.jpg"
import project4Image from "@/assets/img/project_4.png"
import dinoImage from "@/assets/img/dino-img.png"
import fireGameImage from "@/assets/img/fire-game.png"
import weatherAppImage from "@/assets/img/weather_app.png"
import videoPlayerImage from "@/assets/img/video-player.png"
import settingsManagementImage from "@/assets/img/settings-management.png"
import ticTacToeImage from "@/assets/img/tic-tac-toe.png"
import jobHuntCopilot1 from "@/assets/img/job-hunt-copilot-1.png"
import jobHuntCopilot2 from "@/assets/img/job-hunt-copilot-2.png"
import type { StaticImageData } from "next/image"

export interface Project {
  id: number
  name: string
  description: string
  longDescription?: string
  image: string | StaticImageData
  images?: (string | StaticImageData)[]
  url: string
  liveUrl?: string | null
  github: string
  technologies: string[]
  category: string
  featured: boolean
  year: string
  status: 'completed' | 'in-progress' | 'archived'
  highlights?: string[]
  challenges?: string[]
  results?: string[]
}

export const projects: Project[] = [
  {
    id: 9,
    name: "Job Hunt Copilot",
    description: "An end-to-end AI job-hunt assistant: a LangGraph agent that searches jobs, scores them against your CV, and drafts cover letters — streamed live to a Next.js dashboard. Polyglot monorepo across Next.js, NestJS, and two Python FastAPI services, deployed on Kubernetes via Helm + Tilt.",
    longDescription: "Job Hunt Copilot is a full-stack AI product I built end-to-end to learn modern agent architecture, multi-service orchestration, and production-shaped infra. The web app (Next.js 16 + NextAuth) gives the user a dashboard, job board, application kanban, and an agent chat that streams tool events over Server-Sent Events. The Nest API (NestJS 11 + Drizzle ORM + Postgres/pgvector) owns auth, CVs, jobs, and applications. A Python ai-core service wraps Gemini for CV parsing, CV↔JD scoring, and streamed cover-letter drafting. A Python agent service runs a LangGraph ReAct agent that uses the API as its tool surface, publishing every tool start/end and LLM token to Redis pub/sub so the web app can render them live. The whole stack runs locally on k3d with a Helm umbrella chart and Tilt hot-reload.",
    image: jobHuntCopilot1,
    images: [jobHuntCopilot1, jobHuntCopilot2],
    url: "https://github.com/Shav-webdev/job-hunt-copilot",
    liveUrl: "/projects/job-hunt-copilot",
    github: "https://github.com/Shav-webdev/job-hunt-copilot",
    technologies: [
      "Next.js 16",
      "React 19",
      "NestJS 11",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL + pgvector",
      "Redis",
      "Python",
      "FastAPI",
      "LangGraph",
      "Gemini 2.5 Flash",
      "Server-Sent Events",
      "Helm",
      "k3d",
      "Tilt",
      "Docker",
      "pnpm workspaces",
    ],
    category: "Full-Stack & AI",
    featured: true,
    year: "2026",
    status: "in-progress",
    highlights: [
      "Polyglot monorepo (TS + Python) wired with pnpm workspaces",
      "LangGraph ReAct agent with a hard 10-tool-call ceiling and friendly Gemini error messages",
      "Live SSE streaming of agent events (start, tool_start, tool_end, llm_chunk, done) via Redis pub/sub",
      "Streamed cover-letter generation with Gemini's generate_content_stream",
      "CV parsing PDF → structured JSON, plus CV↔job scoring with reasoning",
      "Kubernetes-shaped local dev: Helm umbrella chart + k3d + Tilt with live-reload",
    ],
    challenges: [
      "Designing a clean boundary between the Nest API (data) and Python agent/ai-core (LLM) without coupling",
      "Streaming agent tool events end-to-end (LangGraph → Redis → FastAPI SSE → Next API proxy → client)",
      "Handling Gemini free-tier rate limits (20 req/day) gracefully with typed, user-facing error messages",
      "Setting up a Helm umbrella chart with four subcharts and a Tilt live-update loop",
    ],
    results: [
      "Working agent flow: a goal turns into searched jobs, scored matches, and a drafted cover letter — all visible live",
      "Local production-shape stack reproducible with a single `tilt up`",
      "Clean schema (users / cvs / jobs / applications) with Drizzle relations and pgvector ready for semantic search",
      "Phases 1–4 complete and pushed to GitHub; deploy-to-prod is the next milestone",
    ],
  },
  {
    id: 10,
    name: "Settings Management Dashboard",
    description: "A schema-driven account settings dashboard built with Next.js 16, Material UI 7, and Neon PostgreSQL. Adding a new setting requires only a schema entry — the form renders and persists it automatically across five field types (boolean, text, number, select, multiselect).",
    longDescription: "Built as a TRIVO technical assignment, this full-stack application demonstrates schema-first thinking and clean architecture. Settings are declared in a central configuration object; the dynamic form adapts automatically with no per-field custom UI logic. Supports boolean, text, number, select, and multiselect field types. Each account's settings are stored independently in Neon PostgreSQL via Drizzle ORM and Next.js Route Handlers. The project follows Feature-Sliced Design (FSD) with strict layer import rules — widgets → features → entities → shared — and is fully type-safe from schema definition through to the database.",
    image: settingsManagementImage,
    url: "https://settings-management.vercel.app/",
    github: "https://github.com/Shav-webdev/settings-management",
    technologies: ["Next.js", "React 19", "TypeScript", "Material UI", "React Hook Form", "Drizzle ORM", "Neon PostgreSQL", "Feature-Sliced Design"],
    category: "Full Stack Application",
    featured: true,
    year: "2025",
    status: "completed",
    highlights: [
      "Schema-driven UI — new settings appear in the form with zero custom UI code",
      "Five field types: boolean, text, number, select, multiselect",
      "Feature-Sliced Design with enforced layer import rules",
      "Neon PostgreSQL persistence via Drizzle ORM and Route Handlers",
      "Material UI 7 with SSR-safe Emotion cache for App Router",
    ],
    challenges: [
      "Inferring a fully type-safe SettingsValues type directly from the schema object",
      "Configuring MUI Emotion for correct SSR hydration in Next.js App Router",
      "Enforcing FSD import boundaries across all feature layers",
    ],
    results: [
      "Extensible settings system — new field types need one switch branch only",
      "Production deployment on Vercel with Neon Postgres",
      "Fully type-safe data flow from schema to UI to database",
    ],
  },
  {
    id: 8,
    name: "Custom Video Player",
    description: "A modern video player application built with Next.js and React. Features custom video playback controls, resolution selection, chapter markers, and fullscreen support - all built from scratch without using video player libraries.",
    longDescription: "This video player project demonstrates my ability to build complex, feature-rich media applications from scratch. Built with Next.js 16, React 19, and HLS.js, the player features a custom-designed UI with full playback controls, resolution switching, chapter navigation, and fullscreen capabilities. The entire player interface and control logic was implemented without relying on existing video player packages, showcasing deep understanding of HTML5 video APIs and modern React patterns.",
    image: videoPlayerImage,
    url: "https://video-player-ivory-zeta.vercel.app/",
    github: "https://github.com/Shav-webdev/video-player",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HLS.js", "HTML5 Video API"],
    category: "React Application",
    featured: true,
    year: "2024",
    status: "completed",
    highlights: [
      "Custom-built video player UI from scratch",
      "Resolution selection and quality switching",
      "Chapter markers and navigation",
      "Fullscreen support",
      "Modern React 19 and Next.js 16 implementation"
    ],
    challenges: [
      "Implementing custom video controls without libraries",
      "HLS.js integration for adaptive streaming",
      "Building responsive video player interface",
      "Managing video state and playback synchronization"
    ],
    results: [
      "Fully functional custom video player",
      "Zero dependency on video player libraries",
      "Production-ready deployment on Vercel",
      "Clean, maintainable codebase with TypeScript"
    ]
  },
  {
    id: 1,
    name: "Todo List Application",
    description: "A modern, responsive todo list application built with vanilla JavaScript. Features include task creation, editing, deletion, and local storage persistence.",
    longDescription: "This project demonstrates my proficiency in vanilla JavaScript and DOM manipulation. The application features a clean, intuitive interface with full CRUD operations, local storage integration, and responsive design. It showcases my ability to build functional web applications without frameworks while maintaining clean, maintainable code.",
    image: project1Image,
    url: "https://shav-webdev.github.io/to_do_list.github.io",
    github: "https://github.com/Shav-webdev/to_do_list.github.io",
    technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage", "DOM Manipulation"],
    category: "Web Application",
    featured: true,
    year: "2020",
    status: "completed",
    highlights: [
      "Full CRUD operations for task management",
      "Local storage persistence",
      "Responsive design for all devices",
      "Clean, intuitive user interface"
    ],
    challenges: [
      "Implementing smooth animations without external libraries",
      "Managing state with vanilla JavaScript",
      "Creating a responsive design that works on all screen sizes"
    ],
    results: [
      "Fully functional todo application",
      "Zero external dependencies",
      "Fast loading and smooth performance"
    ]
  },
  {
    id: 2,
    name: "Interactive Slider Component",
    description: "A custom-built image slider with smooth transitions, touch support, and responsive design. Built with vanilla JavaScript and modern CSS.",
    longDescription: "This slider component showcases my expertise in creating reusable UI components. It features smooth transitions, touch/swipe support for mobile devices, and a responsive design that adapts to different screen sizes. The component is built with performance in mind, using efficient event handling and CSS animations.",
    image: project2Image,
    url: "https://shav-webdev.github.io/slider",
    github: "https://github.com/Shav-webdev/slider",
    technologies: ["JavaScript", "CSS3", "Touch Events", "Responsive Design", "CSS Animations"],
    category: "UI Component",
    featured: true,
    year: "2020",
    status: "completed",
    highlights: [
      "Touch and swipe support for mobile",
      "Smooth CSS transitions",
      "Responsive design",
      "Customizable navigation controls"
    ],
    challenges: [
      "Implementing smooth touch gestures",
      "Creating responsive breakpoints",
      "Optimizing performance for large image sets"
    ],
    results: [
      "Reusable slider component",
      "Mobile-friendly touch interactions",
      "Smooth performance across devices"
    ]
  },
  {
    id: 3,
    name: "Data Table with Sorting",
    description: "A feature-rich data table component with sorting, filtering, and pagination capabilities. Optimized for performance with large datasets.",
    longDescription: "This data table component demonstrates my ability to work with complex data structures and implement efficient algorithms. It features client-side sorting, filtering, and pagination, all optimized for performance with large datasets. The component is built with accessibility in mind, supporting keyboard navigation and screen readers.",
    image: project3Image,
    url: "https://shav-webdev.github.io/dataTable/",
    github: "https://github.com/Shav-webdev/dataTable",
    technologies: ["JavaScript", "DOM Manipulation", "Performance Optimization", "Algorithms", "Accessibility"],
    category: "Data Visualization",
    featured: true,
    year: "2020",
    status: "completed",
    highlights: [
      "Client-side sorting and filtering",
      "Pagination for large datasets",
      "Keyboard navigation support",
      "Performance optimized for 1000+ rows"
    ],
    challenges: [
      "Implementing efficient sorting algorithms",
      "Managing memory usage with large datasets",
      "Creating accessible table navigation"
    ],
    results: [
      "High-performance data table",
      "Accessible design patterns",
      "Scalable to large datasets"
    ]
  },
  {
    id: 4,
    name: "React Todo Application",
    description: "A full-featured todo application built with React, featuring state management, component architecture, and modern React patterns.",
    longDescription: "This React application showcases my transition from vanilla JavaScript to modern React development. It demonstrates component architecture, state management, and modern React patterns including hooks and functional components. The application features a clean, modern interface with smooth animations and responsive design.",
    image: project4Image,
    url: "https://shav-webdev.github.io/react_to_do_app/",
    github: "https://github.com/Shav-webdev/react_to_do_app",
    technologies: ["React", "JavaScript", "Component Architecture", "State Management", "React Hooks"],
    category: "React Application",
    featured: true,
    year: "2021",
    status: "completed",
    highlights: [
      "Modern React patterns and hooks",
      "Component-based architecture",
      "State management without external libraries",
      "Responsive design with animations"
    ],
    challenges: [
      "Learning React component lifecycle",
      "Implementing state management patterns",
      "Creating reusable components"
    ],
    results: [
      "Modern React application",
      "Reusable component library",
      "Clean, maintainable code structure"
    ]
  },
  {
    id: 5,
    name: "Dino Game Clone",
    description: "A browser-based game inspired by Chrome's offline dino game. Built with HTML5 Canvas and JavaScript, featuring smooth animations and collision detection.",
    longDescription: "This game project demonstrates my ability to work with HTML5 Canvas and implement game development concepts. It features smooth animations, collision detection, score tracking, and responsive controls. The game showcases my understanding of game loops, physics simulation, and performance optimization for real-time applications.",
    image: dinoImage,
    url: "https://shav-webdev.github.io/dino_game/",
    github: "https://github.com/Shav-webdev/dino_game",
    technologies: ["HTML5 Canvas", "JavaScript", "Game Development", "Animation", "Collision Detection"],
    category: "Game Development",
    featured: false,
    year: "2021",
    status: "completed",
    highlights: [
      "Smooth 60fps animations",
      "Collision detection system",
      "Score tracking and high scores",
      "Responsive game controls"
    ],
    challenges: [
      "Implementing smooth game loop",
      "Creating realistic physics simulation",
      "Optimizing canvas performance"
    ],
    results: [
      "Fully playable game",
      "Smooth performance across devices",
      "Engaging gameplay mechanics"
    ]
  },
  {
    id: 6,
    name: "Fire Fight Game",
    description: "An interactive 2D game built with HTML5 Canvas featuring real-time gameplay, collision detection, and smooth animations.",
    longDescription: "This game project showcases advanced game development techniques including real-time rendering, complex collision detection, and interactive gameplay mechanics. It demonstrates my ability to create engaging user experiences through game design and technical implementation.",
    image: fireGameImage,
    url: "https://shav-webdev.github.io/fire-fight-game-canvas/",
    github: "https://github.com/Shav-webdev/fire-fight-game-canvas",
    technologies: ["HTML5 Canvas", "JavaScript", "Game Physics", "Real-time Rendering", "Event Handling"],
    category: "Game Development",
    featured: false,
    year: "2021",
    status: "completed",
    highlights: [
      "Real-time multiplayer mechanics",
      "Advanced collision detection",
      "Smooth 60fps rendering",
      "Interactive game controls"
    ],
    challenges: [
      "Implementing real-time game mechanics",
      "Creating responsive game controls",
      "Optimizing canvas rendering performance"
    ],
    results: [
      "Engaging interactive game",
      "Smooth performance",
      "Intuitive game controls"
    ]
  },
  {
    id: 11,
    name: "Tic Tac Toe",
    description: "A classic Tic Tac Toe game built with vanilla JavaScript. Features two-player mode, win detection, draw detection, and score tracking — all with a clean, responsive interface.",
    longDescription: "A clean implementation of the classic Tic Tac Toe game using vanilla JavaScript, HTML5, and CSS3. The game supports two-player mode on the same device with real-time win and draw detection across all rows, columns, and diagonals. Score tracking persists across rounds and the board resets smoothly after each game. Built without any frameworks, it demonstrates core JavaScript logic, DOM manipulation, and event handling.",
    image: ticTacToeImage,
    url: "https://shav-webdev.github.io/Tic-Tac-Toe/",
    github: "https://github.com/Shav-webdev/Tic-Tac-Toe",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation", "Game Logic"],
    category: "Game Development",
    featured: false,
    year: "2021",
    status: "completed",
    highlights: [
      "Two-player mode on the same device",
      "Win detection across all rows, columns, and diagonals",
      "Draw detection and score tracking across rounds",
      "Smooth board reset between games",
    ],
    challenges: [
      "Implementing complete win-condition checking for all lines",
      "Managing game state and turn switching without a framework",
    ],
    results: [
      "Fully playable two-player game",
      "Zero external dependencies",
      "Clean, responsive interface",
    ]
  },
  {
    id: 7,
    name: "Weather Application",
    description: "A responsive weather application that fetches real-time weather data from APIs. Features location-based weather information and beautiful UI design.",
    longDescription: "This weather application demonstrates my ability to work with external APIs and create user-friendly interfaces for data visualization. It features location-based weather information, responsive design, and integration with weather APIs. The application showcases my skills in API integration, data handling, and creating intuitive user experiences.",
    image: weatherAppImage,
    url: "https://shav-webdev.github.io/weather_app/",
    github: "https://github.com/Shav-webdev/weather_app",
    technologies: ["API Integration", "JavaScript", "Responsive Design", "Weather APIs", "Data Visualization"],
    category: "Web Application",
    featured: true,
    year: "2021",
    status: "completed",
    highlights: [
      "Real-time weather data",
      "Location-based services",
      "Responsive design",
      "Beautiful data visualization"
    ],
    challenges: [
      "Integrating with weather APIs",
      "Handling API rate limits",
      "Creating responsive weather displays"
    ],
    results: [
      "Functional weather application",
      "Reliable API integration",
      "User-friendly interface"
    ]
  }
]

export const categories = [
  "All",
  "Full-Stack & AI",
  "Full Stack Application",
  "Web Application",
  "React Application",
  "UI Component",
  "Data Visualization",
  "Game Development"
]

export const getFeaturedProjects = () => projects.filter(project => project.featured)

export const getProjectsByCategory = (category: string) => 
  category === "All" ? projects : projects.filter(project => project.category === category)

export const getProjectById = (id: number) => projects.find(project => project.id === id)
