"use client"

import { motion } from "framer-motion"
import type { Control } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { itemVariants } from "../../../../../lib/animations"
import { LodgeFormData } from "../../../../../types/lodgeTypes"

interface OwnerInformationProps {
  control: Control<LodgeFormData>
}

export default function OwnerInformation({ control }: OwnerInformationProps) {
  return (
    <motion.div variants={itemVariants} className="space-y-4">
      <h3 className="text-lg font-semibold">Owner Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="owner.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Owner name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="owner.contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact</FormLabel>
              <FormControl>
                <Input placeholder="Contact number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="owner.email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="availableRooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Available Rooms</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Number of available rooms"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </motion.div>
  )
}

