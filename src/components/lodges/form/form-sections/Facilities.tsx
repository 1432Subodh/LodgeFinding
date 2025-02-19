"use client"

import { motion } from "framer-motion"
import type { Control } from "react-hook-form"
import { Checkbox } from "@/components/ui/checkbox"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { type LodgeFormData, defaultValues } from '../../../../../types/lodgeTypes'
import { itemVariants } from "../../../../../lib/animations"

interface FacilitiesProps {
  control: Control<LodgeFormData>
}

export default function Facilities({ control }: FacilitiesProps) {
  return (
    <motion.div variants={itemVariants} className="space-y-4">
      <h3 className="text-lg font-semibold">Facilities</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.keys(defaultValues.facilities).map((facility) => (
          <FormField
            key={facility}
            control={control}
            name={`facilities.${facility as keyof typeof defaultValues.facilities}`}
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-2">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="!mt-0">{facility.replace(/([A-Z])/g, " $1").toLowerCase()}</FormLabel>
              </FormItem>
            )}
          />
        ))}
      </div>
    </motion.div>
  )
}

