import type { UseFormReturn } from "react-hook-form"
import type * as z from "zod"
import { motion } from "framer-motion"

import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { formSchema } from "../../../../../lib/form-schema"

interface FacilitiesStepProps {
  form: UseFormReturn<z.infer<typeof formSchema>>
}

export function FacilitiesStep({ form }: FacilitiesStepProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(form.getValues().facilities || {}).map(([key, value]) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FormField
              control={form.control}
              name={`facilities.${key}` as any}
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2 rounded-lg p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="!mt-0 flex-1 cursor-pointer hover:text-muted-foreground">
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </FormLabel>
                </FormItem>
              )}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

