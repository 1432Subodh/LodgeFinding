import type { UseFormReturn } from "react-hook-form"
import type * as z from "zod"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { formSchema } from "../../../../../lib/form-schema"

interface SummaryStepProps {
  form: UseFormReturn<z.infer<typeof formSchema>>
}

export function SummaryStep({ form }: SummaryStepProps) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Lodge Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Enter lodge description"
                className="min-h-[150px] rounded-lg"
                {...field}
                value={field.value ?? ""} // ✅ Ensures the field is controlled
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
