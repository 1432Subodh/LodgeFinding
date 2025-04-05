"use client"

import { Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { Api_PopularNearby } from "../../../helper/helper"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { fetchPopularLodgeNearby, removeLodgeDetails } from "@/redux/lodgeSlice"


export default function PopularLodges({id, location}:any) {

  const dispatch = useDispatch<AppDispatch>();
  const [dataFetched, setDataFetched] = useState(false);
  // const router = useRouter()

  // Select lodges, loading, and error state from Redux store
  const { populaLodgerNearby, loading, error }: any = useSelector(
      (state: RootState) => state.lodgeData,
      shallowEqual
  );
  // // console.log(populaLodgerNearby.results)
  
  useEffect(() => {
    if(id){
      
      dispatch(fetchPopularLodgeNearby({id:id, location:location}));
    }
    // // console.log(popularNearby)
  }, [dispatch, id]);


  return (

    
   
    <div className="grid gap-6 md:grid-cols-3">
      
      {populaLodgerNearby.results?.map((lodge: any, index: any) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-0">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image src={lodge.images[0] || "/placeholder.svg"} alt={lodge?.name || 'asd'} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{lodge.lodgeName}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold">₹{lodge.roomPrice}/month</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                    <span className="text-sm">{lodge.rating}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/lodge/view/${lodge._id}`} className="w-full">
                <Button variant="outline" className="w-full" onClick={()=>dispatch(removeLodgeDetails())}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
    
  )
}

