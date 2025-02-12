"use client"

import { Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const popularLodges = [
  { name: "Sunset Peak Cabin", price: 179, rating: 4.7, image: "/placeholder.svg" },
  { name: "Lakeside Retreat", price: 225, rating: 4.9, image: "/placeholder.svg" },
  { name: "Pine Forest Lodge", price: 159, rating: 4.5, image: "/placeholder.svg" },
]

export default function PopularLodges() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {popularLodges.map((lodge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-0">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image src={lodge.image || "/placeholder.svg"} alt={lodge.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{lodge.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold">${lodge.price}/night</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                    <span className="text-sm">{lodge.rating}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

