"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import LoadingSkeleton from "@/components/(view)/LoadingSkeleton"
import LodgeGallery from "@/components/(view)/LodgeGallery"
import LodgeDetails from "@/components/(view)/LodgeDetails"
import ReviewSection from "@/components/(view)/ReviewSection"
import PopularLodges from "@/components/(view)/PopularLodges"
import { Footer } from "@/components/footer"
import { useParams } from "next/navigation"
import axios from "axios"
import { Api_getLodge } from "../../../../../../helper/helper"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { fetchLodgeDetails } from "@/redux/lodgeSlice"
import { loadGetInitialProps } from "next/dist/shared/lib/utils"
import toast from "react-hot-toast"
import { Erica_One } from "next/font/google"
import { usePreloader } from "../../../../../../context/PreloaderContext"
import Header from "@/app/test/Header"


export default function LodgePage() {
  const param = useParams()
  const id = param.id

  // Simulate loading

  const dispatch = useDispatch<AppDispatch>();
  const [dataFetched, setDataFetched] = useState(false);

  // Select lodges, loading, and error state from Redux store
  const { lodgeDetails, loading, error }: any = useSelector(
    (state: RootState) => state.lodgeData,
    shallowEqual
  );


  useEffect(() => {
    dispatch(fetchLodgeDetails(id)).finally(() => setDataFetched(true));
  }, [dispatch]);


  return (

    <>

      <Header />
      <div className="mx-auto px-4 md:px-10 py-6 mt-20">
        <div className="grid gap-8 md:grid-cols-2">
          <LodgeGallery images={lodgeDetails.lodge?.images} />
          <LodgeDetails
            lodgeName={lodgeDetails.lodge?.lodgeName}
            roomPrice={lodgeDetails.lodge?.roomPrice}
            place={lodgeDetails.lodge?.place}
            state={lodgeDetails.lodge?.state}
            pincode={lodgeDetails.lodge?.pincode}
            city={lodgeDetails.lodge?.city}
            owner={lodgeDetails.lodge?.owner}
            maplink={lodgeDetails.lodge?.maplink}
            description={lodgeDetails.lodge?.description}
            lodgeType={lodgeDetails.lodge?.lodgeType}
            htmlMapLink= {lodgeDetails.lodge?.htmlMapLink}
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
          {/* {lodgeDetails.lodge?._id} */}
          <PopularLodges id={lodgeDetails.lodge?._id} location={lodgeDetails.lodge?.place} />
        </motion.div>
        <ReviewSection />
      </div>
      <Footer />
    </>
  )
}

