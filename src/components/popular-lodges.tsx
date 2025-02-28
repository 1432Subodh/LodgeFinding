"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { LodgeCard } from "./lodge-card"
import { MobileLodgeCard } from "./mobile-lodge-card"
import { LodgeCardSkeleton } from "./lodge-card-skeleton"
import { MobileLodgeCardSkeleton } from "./mobile-lodge-card-skeleton"
import { Button } from "./ui/button"
import axios from "axios"
import { Api_Popular } from "../../helper/helper"


export function PopularLodges() {
  const [isLoading, setIsLoading] = useState(true)
  const [popularLodge, setPopularLodge] = useState([])

  useEffect(() => {
    // Simulate network request
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    axios.get(Api_Popular).then((res)=>{
      setPopularLodge(res.data.randomLodge)
    })

    return () => clearTimeout(timer)
  }, [])

  console.log(popularLodge)

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
            ? Array(4).fill(0).map((_, i) => <LodgeCardSkeleton key={i} />)
            : popularLodge.length === 0 ? <p>no lodge found</p> : popularLodge?.map((lodge: any, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <LodgeCard
                  name={lodge?.lodgeName}
                  price={lodge.roomPrice}
                  location={`${lodge.place}, ${lodge.city}, ${lodge.state}`}
                  image={lodge?.images[0]}
                  rating={3}
                  beds={2}
                  baths={2}
                  id={lodge._id}
                  lodgeType={lodge?.lodgeType}

                />
              </motion.div>
            ))}
        </div>
        {/* <div className="sm:hidden flex flex-col space-y-4">
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
        </div> */}
      </div>
    </section>
  )
}

