"use client"

import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import BasicInformation from "./form-sections/BasicInformation"
import Location from "./form-sections/Location"
import Facilities from "./form-sections/Facilities"
import OwnerInformation from "./form-sections/OwnerInformation"
import ImageUpload from "./form-sections/ImageUpload"
import Description from "./form-sections/Description"
import { type LodgeFormData, defaultValues } from '../../../../types/lodgeTypes'

export default function AddLodgeForm() {
  const form = useForm<LodgeFormData>({
    defaultValues,
  })

  const onSubmit = (data: LodgeFormData) => {
    console.log(data)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      className="mx-auto p-4 md:p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className="w-full max-w-4xl mx-auto dark:bg-transparent">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">Add New Lodge</CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <BasicInformation control={form.control} />
              <Location control={form.control} />
              <Facilities control={form.control} />
              <OwnerInformation control={form.control} />
              <ImageUpload />
              <Description control={form.control} />
            </CardContent>
            <CardFooter className="flex justify-end space-x-4">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="submit">Save Lodge</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </motion.div>
  )
}

