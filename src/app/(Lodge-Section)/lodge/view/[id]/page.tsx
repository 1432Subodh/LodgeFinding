"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import LoadingSkeleton from "@/components/(view)/LoadingSkeleton"
import LodgeGallery from "@/components/(view)/LodgeGallery"
import LodgeDetails from "@/components/(view)/LodgeDetails"
import ReviewSection from "@/components/(view)/ReviewSection"
import PopularLodges from "@/components/(view)/PopularLodges"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"


export default function LodgePage() {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading
  setTimeout(() => setIsLoading(false), 1300)

  if (isLoading) {
    return <LoadingSkeleton />
  }

  return (
    <>
    <Header/>
      <div className="mx-auto px-4 md:px-10 py-6">
        <div className="grid gap-8 md:grid-cols-2">
          <LodgeGallery />
          <LodgeDetails />
        </div>
        {/* <NearbyAttractions /> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6">Popular Lodges Nearby</h2>
          <PopularLodges />
        </motion.div>
        <ReviewSection />
      </div>
      <Footer />
    </>
  )
}

