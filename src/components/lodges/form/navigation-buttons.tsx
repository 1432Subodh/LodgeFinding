import type React from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface NavigationButtonsProps {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  stepsLength: number
}

export function NavigationButtons({ currentStep, setCurrentStep, stepsLength }: NavigationButtonsProps) {
  return (
    <motion.div
      className="flex justify-between pt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Button
        type="button"
        variant="outline"
        onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
        disabled={currentStep === 1}
        className="h-12 px-6"
      >
        Previous
      </Button>
      {currentStep < stepsLength ? (
        <Button
          type="button"
          onClick={() => setCurrentStep((prev) => Math.min(prev + 1, stepsLength))}
          className="h-12 px-6"
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <Button type="submit" className="h-12 px-8">
          Submit
        </Button>
      )}
    </motion.div>
  )
}

