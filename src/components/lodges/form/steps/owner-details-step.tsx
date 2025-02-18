import type { UseFormReturn } from "react-hook-form"
import type * as z from "zod"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "../../../../../lib/form-schema"

interface OwnerDetailsStepProps {
  form: UseFormReturn<z.infer<typeof formSchema>>
}

export function OwnerDetailsStep({ form }: OwnerDetailsStepProps) {
  return (
    <div className="space-y-6">
      {/* Owner Name */}
      <FormField
        control={form.control}
        name="owner.name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Owner Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter owner name"
                {...field}
                value={field.value ?? ""}
                className="h-12 rounded-lg"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Contact Number */}
      <FormField
        control={form.control}
        name="owner.contact"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contact Number</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter contact number"
                {...field}
                value={field.value ?? ""}
                className="h-12 rounded-lg"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Email Address */}
      <FormField
        control={form.control}
        name="owner.email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter email address"
                {...field}
                value={field.value ?? ""}
                className="h-12 rounded-lg"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
