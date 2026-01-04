import { Variants } from "framer-motion"

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
}

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
}

// Fade in animation
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Stagger animation for lists
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

export const hoverRotate = {
  whileHover: { rotate: 5 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
}

// Skill bar animation
export const skillBarVariants: Variants = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
}

// Card hover animation
export const cardHover: Variants = {
  initial: {
    y: 0,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
}
