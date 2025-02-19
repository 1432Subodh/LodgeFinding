"use client"

import { motion } from "framer-motion"
import type { Control } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { itemVariants } from "../../../../../lib/animations"
import { LodgeFormData } from "../../../../../types/lodgeTypes"

interface DescriptionProps {
  control: Control<LodgeFormData>
}

export default function Description({ control }: DescriptionProps) {
  return (
    <motion.div variants={itemVariants} className="space-y-4">
      <h3 className="text-lg font-semibold">Description</h3>
      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea placeholder="Enter lodge description" className="min-h-[100px]" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </motion.div>
  )
}

