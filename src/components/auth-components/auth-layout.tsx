import { motion } from "framer-motion"
import type React from "react"

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const circleVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 0.9,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: 0.2,
    },
  },
}

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  contentPosition: "left" | "right"
}

const AnimationSection = () => (
  <div className="hidden lg:block relative h-full overflow-hidden">
    <motion.div
      variants={circleVariants}
      initial="initial"
      animate="animate"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="w-96 h-96 rounded-full bg-[url(/image2.jpg)] bg-cover"
      whileInView={{
        x: [0, 100, -100, 0],
        y: [0, -100, 100, 0],
        transition: {
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        },
      }}
    />
  </div>
)

const ContentSection = ({
  children,
  title,
  subtitle,
}: { children: React.ReactNode; title: string; subtitle: string }) => (
  <motion.div
    variants={containerVariants}
    initial="initial"
    animate="animate"
    className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
  >
    <div className="mx-auto max-w-lg">
      <motion.div variants={itemVariants} className="space-y-2 text-center">
        <motion.h1 variants={itemVariants} className="text-2xl font-semibold tracking-tight">
          {title}
        </motion.h1>
        <motion.p variants={itemVariants} className="text-muted-foreground">
          {subtitle}
        </motion.p>
      </motion.div>
      <motion.div variants={itemVariants} className="mt-8">
        {children}
      </motion.div>
    </div>
  </motion.div>
)

export function AuthLayout({ children, title, subtitle, contentPosition }: AuthLayoutProps) {
  return (
    <div className="min-h-[88vh] grid sm:px-32 px-5 lg:grid-cols-2">
      {contentPosition === "right" ? (
        <>
          <AnimationSection />
          <ContentSection title={title} subtitle={subtitle}>
            {children}
          </ContentSection>
        </>
      ) : (
        <>
          <ContentSection title={title} subtitle={subtitle}>
            {children}
          </ContentSection>
          <AnimationSection />
        </>
      )}
    </div>
  )
}

