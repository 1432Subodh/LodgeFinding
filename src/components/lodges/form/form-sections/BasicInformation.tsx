"use client"

import { motion } from "framer-motion"
import type { Control } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import type { LodgeFormData } from "@/types/lodgeTypes"
import { itemVariants } from "../../../../../lib/animations"
import { LodgeFormData } from "../../../../../types/lodgeTypes"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BasicInformationProps {
  control: Control<LodgeFormData>
}

export default function BasicInformation({ control }: BasicInformationProps) {
  return (
    <motion.div variants={itemVariants} className="space-y-4">
      <h3 className="text-lg font-semibold">Basic Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="lodgeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lodge Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter lodge name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="roomPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter price per night"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lodgeType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lodge Type</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Lodge Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="boys">Boys</SelectItem>
                    <SelectItem value="girls">Girls</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

      </div>
    </motion.div>
  )
}

