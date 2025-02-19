"use client"

import { motion } from "framer-motion"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { itemVariants } from "../../../../../lib/animations"

export default function ImageUpload() {
  return (
    <motion.div variants={itemVariants} className="space-y-4">
      <h3 className="text-lg font-semibold">Lodge Images</h3>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <div className="mt-2">
          <Button variant="outline" type="button">
            Upload Images
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-2">Upload multiple images of your lodge</p>
      </div>
    </motion.div>
  )
}

