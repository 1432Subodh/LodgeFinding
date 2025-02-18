import React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import * as LucideIcons from "lucide-react"

interface StepIndicatorProps {
  steps: { id: number; name: string; icon: string }[]
  currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <>
      {/* Progress Steps - Desktop */}
      <div className="relative hidden lg:flex lg:flex-col lg:gap-2">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-2">
            <motion.div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                currentStep === step.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : currentStep > step.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted bg-background"
              }`}
              initial={false}
              animate={{
                scale: currentStep === step.id ? 1.1 : 1,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              {currentStep > step.id ? (
                <Check className="h-5 w-5" />
              ) : (
                // @ts-ignore
                React.createElement(LucideIcons[step.icon], { className: "h-5 w-5" })
              )}
            </motion.div>
            <span
              className={`text-sm font-medium ${currentStep === step.id ? "text-primary" : "text-muted-foreground"}`}
            >
              {step.name}
            </span>
          </div>
        ))}
      </div>

      {/* Progress Steps - Mobile */}
      <div className="flex items-center justify-center gap-2 pb-6 lg:hidden">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`h-2 rounded-full ${currentStep >= step.id ? "bg-primary" : "bg-muted"}`}
            style={{ width: index === currentStep - 1 ? 24 : 12 }}
            animate={{
              width: index === currentStep - 1 ? 24 : 12,
              transition: { duration: 0.2 },
            }}
          />
        ))}
      </div>
    </>
  )
}

