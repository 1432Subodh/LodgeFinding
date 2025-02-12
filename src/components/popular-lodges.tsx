"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { LodgeCard, LodgeCardProps } from "./lodge-card"
import { MobileLodgeCard } from "./mobile-lodge-card"
import { LodgeCardSkeleton } from "./lodge-card-skeleton"
import { MobileLodgeCardSkeleton } from "./mobile-lodge-card-skeleton"
import { Button } from "./ui/button"

export const lodges: LodgeCardProps[] = [
  {
    name: "Mountain Vista Lodge",
    price: 299,
    location: "Aspen, Colorado",
    image: "/placeholder.svg",
    rating: 4.8,
    beds: 3,
    baths: 2,
    guests: 6,
  },
  {
    name: "Lakefront Retreat",
    price: 399,
    location: "Lake Tahoe, Nevada",
    image: "/placeholder.svg",
    rating: 4.9,
    beds: 4,
    baths: 3,
    guests: 8,
  },
  {
    name: "Forest Haven Cabin",
    price: 199,
    location: "Portland, Oregon",
    image: "/placeholder.svg",
    rating: 4.7,
    beds: 2,
    baths: 1,
    guests: 4,
  },
  {
    name: "Alpine Luxury Suite",
    price: 599,
    location: "Vail, Colorado",
    image: "/placeholder.svg",
    rating: 5.0,
    beds: 5,
    baths: 4,
    guests: 10,
  },
  {
    name: "Riverside Cottage",
    price: 249,
    location: "Jackson Hole, Wyoming",
    image: "/placeholder.svg",
    rating: 4.6,
    beds: 2,
    baths: 2,
    guests: 4,
  },
  {
    name: "Summit View Resort",
    price: 449,
    location: "Park City, Utah",
    image: "/placeholder.svg",
    rating: 4.8,
    beds: 4,
    baths: 3,
    guests: 8,
  },
]

export function PopularLodges() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate network request
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-8 sm:py-12 bg-muted/50">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold">Popular Lodges</h2>
          <Button variant="default" size="sm" className="text-xs sm:text-sm">
            View All
          </Button>
        </motion.div>
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {isLoading
            ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <LodgeCardSkeleton />
                  </motion.div>
                ))
            : lodges.slice(0, 4).map((lodge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <LodgeCard {...lodge} />
                </motion.div>
              ))}
        </div>
        <div className="sm:hidden flex flex-col space-y-4">
          {isLoading
            ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <MobileLodgeCardSkeleton />
                  </motion.div>
                ))
            : lodges.map((lodge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <MobileLodgeCard {...lodge} />
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  )
}

