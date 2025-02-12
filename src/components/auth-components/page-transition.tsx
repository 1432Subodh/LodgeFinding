"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
    },
  },
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      {children}
    </motion.div>
  )
}

