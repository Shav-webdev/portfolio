import project1Image from "@/assets/img/project_1.jpg"
import project2Image from "@/assets/img/project_2.jpg"
import project3Image from "@/assets/img/project_3.jpg"
import project4Image from "@/assets/img/project_4.png"
import dinoImage from "@/assets/img/dino-img.png"
import fireGameImage from "@/assets/img/fire-game.png"
import weatherAppImage from "@/assets/img/weather_app.png"
import type { StaticImageData } from "next/image"

export interface Project {
  id: number
  name: string
  description: string
  longDescription?: string
  image: string | StaticImageData
  url: string
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
    id: 8,
    name: "Custom Video Player",
    description: "A modern video player application built with Next.js and React. Features custom video playback controls, resolution selection, chapter markers, and fullscreen support - all built from scratch without using video player libraries.",
    longDescription: "This video player project demonstrates my ability to build complex, feature-rich media applications from scratch. Built with Next.js 16, React 19, and HLS.js, the player features a custom-designed UI with full playback controls, resolution switching, chapter navigation, and fullscreen capabilities. The entire player interface and control logic was implemented without relying on existing video player packages, showcasing deep understanding of HTML5 video APIs and modern React patterns.",
    image: weatherAppImage,
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
