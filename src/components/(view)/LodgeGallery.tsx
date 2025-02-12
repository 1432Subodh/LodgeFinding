"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const images = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
]

export default function LodgeGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <motion.div layoutId="main-image" className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt="Lodge main image"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid grid-cols-4 gap-4"
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative aspect-square overflow-hidden rounded-lg border bg-muted cursor-pointer"
            onClick={() => setSelectedImage(i)}
          >
            <Image src={src || "/placeholder.svg"} alt={`Lodge thumbnail ${i + 1}`} fill className="object-cover" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

