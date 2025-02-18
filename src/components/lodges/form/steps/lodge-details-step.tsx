import type { UseFormReturn } from "react-hook-form"
import type * as z from "zod"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "../../../../../lib/form-schema"

interface LodgeDetailsStepProps {
  form: UseFormReturn<z.infer<typeof formSchema>>
}

export function LodgeDetailsStep({ form }: LodgeDetailsStepProps) {
  return (
    <div className="space-y-6">
      {/* Lodge Name */}
      <FormField
        control={form.control}
        name="lodgeName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Lodge Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter lodge name"
                {...field}
                value={field.value ?? ""} // Ensure value is always defined
                className="h-12 rounded-lg"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Room Price */}
        <FormField
          control={form.control}
          name="roomPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room Price (per night)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter room price"
                  {...field}
                  value={field.value ?? ''} // Default to 0 instead of undefined
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  className="h-12 rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Available Rooms */}
        <FormField
          control={form.control}
          name="availableRooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Available Rooms</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Number of available rooms"
                  {...field}
                  value={field.value ?? ''} // Default to 0 instead of undefined
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  className="h-12 rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}
