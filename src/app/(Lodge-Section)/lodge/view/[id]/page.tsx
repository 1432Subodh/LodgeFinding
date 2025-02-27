"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import LoadingSkeleton from "@/components/(view)/LoadingSkeleton"
import LodgeGallery from "@/components/(view)/LodgeGallery"
import LodgeDetails from "@/components/(view)/LodgeDetails"
import ReviewSection from "@/components/(view)/ReviewSection"
import PopularLodges from "@/components/(view)/PopularLodges"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { useParams } from "next/navigation"
import axios from "axios"
import { Api_getLodge } from "../../../../../../helper/helper"


export default function LodgePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [lodge, setLodge] = useState<any>({})
  const param = useParams()
  const id = param.id

  // Simulate loading

  useEffect(() => {
    axios.post(Api_getLodge, {id}).then(res=>setLodge(res.data.lodge))
  }, [])
  console.log(lodge)
  
  setTimeout(() => setIsLoading(false), 1300)

  if (isLoading) {
    return <LoadingSkeleton />
  }

  return (
    <>
    <Header/>
      <div className="mx-auto px-4 md:px-10 py-6">
        <div className="grid gap-8 md:grid-cols-2">
          <LodgeGallery images={lodge.images}/>
          <LodgeDetails 
          lodgeName= {lodge.lodgeName}
          roomPrice = {lodge.roomPrice}
           place = {lodge.place} 
           state = {lodge.state} 
           pincode = {lodge.pincode} 
           city = {lodge.city} 
           owner = {lodge.owner} 
           maplink = {lodge.maplink} 
           description = {lodge.description}
           lodgeType = {lodge.lodgeType}
          />
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

