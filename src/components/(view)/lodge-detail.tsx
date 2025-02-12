"use client"

import { Heart, Star, MapPin, Users, User, Phone, Map } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"

export default function LodgeDetail() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)

  // Simulate loading
  setTimeout(() => setIsLoading(false), 2000)

  const images = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ]

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Skeleton className="aspect-square w-full rounded-lg" />
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="aspect-square rounded-lg" />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-8 w-full max-w-md" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-12 w-32" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-24" />
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-12 rounded-lg" />
                ))}
              </div>
            </div>
            <Skeleton className="h-12 w-full max-w-md" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <motion.div
            layoutId="main-image"
            className="relative aspect-square overflow-hidden rounded-lg border bg-muted"
          >
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

        {/* Lodge Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">
                <MapPin className="mr-1 h-3 w-3" />
                Mountain View
              </Badge>
              <Badge variant="secondary">
                <Users className="mr-1 h-3 w-3" />4 Guests
              </Badge>
            </div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-3xl font-bold"
            >
              Cozy Mountain Lodge
            </motion.h1>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                >
                  <Star
                    className={`h-5 w-5 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                  />
                </motion.div>
              ))}
              <span className="text-sm text-muted-foreground">(28 reviews)</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-2"
          >
            <div className="text-3xl font-bold">$199/night</div>
            <p className="text-sm text-muted-foreground">Includes all taxes and fees</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="space-y-4"
          >
            

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Lodge Details</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <MapPin className="h-4 w-4" />
                  <span>123 Mountain View Road, Pine Valley, CO 80517</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  <span>Owned by John & Sarah Mountain</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <Map className="h-4 w-4" />
                  <a
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View on Google Maps
                  </a>
                </motion.li>
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="prose max-w-none"
            >
              <h3 className="text-lg font-semibold">About the Lodge</h3>
              <p className="text-sm text-muted-foreground">
                Nestled in the heart of the Rocky Mountains, our Cozy Mountain Lodge offers a perfect blend of rustic
                charm and modern comfort. Built in 2015, this 2,000 sq ft lodge features panoramic mountain views, a
                spacious open-plan living area, and a large deck perfect for outdoor dining and stargazing. The lodge is
                situated on 5 acres of private land, ensuring peace and privacy for our guests.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button  className="flex-1">
              Book Now
            </Button>
            <Button  variant="outline">
              <Heart className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="rounded-lg border p-4"
          >
            <h3 className="font-semibold">Amenities</h3>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li>✓ Free WiFi</li>
              <li>✓ Mountain View</li>
              <li>✓ Fireplace</li>
              <li>✓ Fully Equipped Kitchen</li>
              <li>✓ Parking</li>
              <li>✓ Heating</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

