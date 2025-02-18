import { AnimatePresence, motion } from "framer-motion"
import type { UseFormReturn } from "react-hook-form"
import type * as z from "zod"
import { LodgeDetailsStep } from "./steps/lodge-details-step"
import { LocationStep } from "./steps/location-step"
import { FacilitiesStep } from "./steps/facilities-step"
import { OwnerDetailsStep } from "./steps/owner-details-step"
import { SummaryStep } from "./steps/summary-step"
import { formSchema } from "../../../../lib/form-schema"



interface FormStepsProps {
  currentStep: number
  form: UseFormReturn<z.infer<typeof formSchema>>
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export function FormSteps({ currentStep, form }: FormStepsProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={currentStep} {...fadeIn} transition={{ duration: 0.3 }}>
        {currentStep === 1 && <LodgeDetailsStep form={form} />}
        {currentStep === 2 && <LocationStep form={form} />}
        {currentStep === 3 && <FacilitiesStep form={form} />}
        {currentStep === 4 && <OwnerDetailsStep form={form} />}
        {currentStep === 5 && <SummaryStep form={form} />}
      </motion.div>
    </AnimatePresence>
  )
}

