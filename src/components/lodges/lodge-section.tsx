"use client"

import { useState, useEffect as ReactuseEffect, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { Bell, Grid, LayoutGrid, Menu, Search } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import type React from "react"
// import LodgeCard from "./lodge-card"
import { LodgeCard, LodgeCardSkeleton } from "../lodge-card"
import { ThemeToggle } from "../theme-toggle"
// import { LodgeCardSkeleton } from "../lodge-card-skeleton"
import { motion } from "framer-motion"
import LodgeImage from "../logo"
import UserData from "../user/user-data"
import axios from "axios"
import { Api_getAllLodge, Api_Search } from "../../../helper/helper"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import toast from "react-hot-toast"
import SideBar from "./sidebar"
// import UserDropdown from "./user-components"






export default function LodgeSection() {
  const [isLoading, setIsLoading] = useState(true)
const [lodge, setLodge] = useState<any[]>([])
  const router = useRouter()
  const searchParams = useSearchParams()


  // Simulate loading
  useEffect(() => {
    const fetchLodges = async () => {
      try {
        setIsLoading(true);
        const search = searchParams.get("search");
  
        let response;
        if (!search) {
          console.log("Fetching all lodges...");
          response = await axios.get(Api_getAllLodge);
          if (response.data.lodges) {
            setLodge(response.data.lodges);
          }
        } else {
          console.log("Searching lodges...");
          response = await axios.post(Api_Search, { search });
          if (response.data.results) {
            setLodge(response.data.results);
          }
        }
  
        console.log("Lodge data updated:", response?.data?.lodges || response?.data?.results);
      } catch (error) {
        console.error("Error fetching lodges:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchLodges();
  }, [searchParams]); // Depend on `searchParams` so it triggers correctly
  


  


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // Debugging: Log all form values
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    const data = formData.get("search");

    if (!data) {
      toast.error("Search flied is empty")
      return;
    }

    console.log("Redirecting to:", `/lodge?search=${data}`);
    router.push(`/lodge?search=${data}`)
  };


  return (
    <div className="flex h-screen  ">
      {/* Sidebar for larger screens */}
      <div className="hidden w-64 border-r md:block">
        <SideBar />
      </div>


      {/* Main content */}
      <div className="flex-1 overflow-auto dark:bg-[#101010]">
        <header className="flex z-50 items-center justify-between border-b px-3 py-3 md:px-6 md:py-4 bg-white dark:bg-black">
          <div className="flex items-center gap-2 md:gap-4 ">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <SideBar />
              </SheetContent>
            </Sheet>
            <div className="relative w-full flex  gap-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <form action="" onSubmit={handleSubmit} className="flex gap-2">

                <Input type="search" placeholder="Search..." name="search" className="pl-9 h-9 sm:w-96 pr-4 py-1 text-sm md:text-base" />
                <Button variant="outline" type="submit" size="sm" className=" px-3 mr-3 py-2 ">
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Bell className="h-4 w-4" />
            </Button>
            <UserData />
          </div>
        </header>

        <div className="sm:p-6 p-3">
          <div className="mb-6">
            <Tabs defaultValue="all" >
              <TabsList>
                <TabsTrigger value="all">All Lodges</TabsTrigger>
                <TabsTrigger value="available">Boys</TabsTrigger>
                <TabsTrigger value="booked">Girls</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {isLoading
              ? Array(4).fill(0).map((_, i) => <LodgeCardSkeleton key={i} />)
              : lodge.length === 0 ? <p>no lodge found</p>:lodge?.map((lodge: any, i) => (
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
                    image={lodge.images[0]}
                    rating={3}
                    beds={2}
                    baths={2}
                    id={lodge._id}
                    lodgeType = {lodge?.lodgeType}

                  />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

