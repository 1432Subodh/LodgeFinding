"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type * as z from "zod"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formSchema } from "../../../../lib/form-schema"
import { StepIndicator } from "./step-indicator"
import { FormSteps } from "./form-steps"
import { NavigationButtons } from "./navigation-buttons"

export const steps = [
  { id: 1, name: "Lodge Details", icon: "Building2" },
  { id: 2, name: "Location", icon: "MapPin" },
  { id: 3, name: "Facilities", icon: "Wifi" },
  { id: 4, name: "Owner Details", icon: "User" },
  { id: 5, name: "Summary", icon: "FileText" },
]

export default function LodgeForm() {
  const [currentStep, setCurrentStep] = React.useState(1)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      facilities: {
        wifi: false,
        parking: false,
        foodAvailable: false,
        airConditioning: false,
        laundryService: false,
      },
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className=" bg-gradient-to-b  p-4 lg:p-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="mx-auto max-w-4xl overflow-hidden shadow-lg">
          <CardHeader className="border-b bg-white/50 backdrop-blur-sm">
            <CardTitle className="text-2xl font-bold">Add New Lodge</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col gap-8 lg:flex-row">
              <StepIndicator steps={steps} currentStep={currentStep} />
              {/* Ensure FormProvider wraps the form */}
              <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
                  <FormSteps currentStep={currentStep} form={form} />
                  <NavigationButtons
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    stepsLength={steps.length}
                  />
                </form>
              </FormProvider>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
