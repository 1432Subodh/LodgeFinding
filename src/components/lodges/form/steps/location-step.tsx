import type { UseFormReturn } from "react-hook-form"
import type * as z from "zod"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "../../../../../lib/form-schema"

interface LocationStepProps {
  form: UseFormReturn<z.infer<typeof formSchema>>
}

export function LocationStep({ form }: LocationStepProps) {
  return (
    <div className="space-y-6">
      {/* Place */}
      <FormField
        control={form.control}
        name="place"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Place</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter place"
                {...field}
                value={field.value ?? ""}
                className="h-12 rounded-lg"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {/* City */}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter city"
                  {...field}
                  value={field.value ?? "Hazaribagh"}
                  className="h-12 rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* State */}
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter state"
                  {...field}
                  value={field.value ?? "Jharkhand"}
                  className="h-12 rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Pincode */}
      <FormField
        control={form.control}
        name="pincode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Pincode</FormLabel>
            <FormControl>
              <Input
              type="number"
                placeholder="Enter pincode"
                {...field}
                value={field.value ?? 825301}
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
