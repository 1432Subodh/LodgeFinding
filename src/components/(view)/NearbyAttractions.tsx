"use client"

import { MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const attractions = [
  {
    name: "Mountain Peak Trail",
    type: "Hiking",
    distance: "2.5 miles",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Crystal Clear Lake",
    type: "Swimming",
    distance: "1.8 miles",
    image: "/placeholder.svg?height=100&width=100",
  },
  { name: "Old Town Square", type: "Cultural", distance: "3.2 miles", image: "/placeholder.svg?height=100&width=100" },
  {
    name: "Sunset Viewpoint",
    type: "Sightseeing",
    distance: "0.5 miles",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function NearbyAttractions() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12"
    >
      <h2 className="text-2xl font-bold mb-6">Nearby Attractions</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {attractions.map((attraction, index) => (
          <motion.div
            key={attraction.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16 rounded-md overflow-hidden">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{attraction.name}</h3>
                    <div className="flex items-center mt-1">
                      <Badge variant="secondary" className="mr-2">
                        {attraction.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {attraction.distance}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

