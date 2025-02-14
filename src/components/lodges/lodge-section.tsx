"use client"

import { useState, useEffect as ReactuseEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { Bell, Grid, LayoutGrid, Menu, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import type React from "react"
// import LodgeCard from "./lodge-card"
import { LodgeCard } from "../lodge-card"
import { ThemeToggle } from "../theme-toggle"
import { LodgeCardSkeleton } from "../lodge-card-skeleton"
import { motion } from "framer-motion"
import { MobileLodgeCardSkeleton } from "../mobile-lodge-card-skeleton"
import { MobileLodgeCard } from "../mobile-lodge-card"
import LodgeImage from "../logo"
import UserDropdown from "./user-components"


interface NavItemProps {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  active?: boolean
}

function NavItem({ href, icon, children, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn("flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-lg", active && "bg-gray-100")}
    >
      {icon}
      <span>{children}</span>
    </Link>
  )
}

// function FolderItem({ href, children }: { href: string; children: React.ReactNode }) {
//   return (
//     <Link href={href} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
//       <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
//         />
//       </svg>
//       <span>{children}</span>
//     </Link>
//   )
// }

// function LodgeCard({
//   name,
//   location,
//   price,
//   rating,
//   thumbnail,
// }: { name: string; location: string; price: number; rating: number; thumbnail: string }) {
//   return (
//     <div className="group relative overflow-hidden rounded-lg border  ">
//       <div className="aspect-[4/3] overflow-hidden">
//         <Image
//           src={thumbnail || "/placeholder.svg"}
//           alt={name}
//           width={400}
//           height={300}
//           className="h-full w-full object-cover transition-transform group-hover:scale-105"
//         />
//       </div>
//       <div className="p-4">
//         <h3 className="font-medium text-gray-900">{name}</h3>
//         <p className="text-sm text-gray-500">{location}</p>
//         <div className="mt-2 flex items-center justify-between">
//           <span className="text-lg font-bold">${price}/night</span>
//           <span className="text-sm text-yellow-500">★ {rating.toFixed(1)}</span>
//         </div>
//       </div>
//     </div>
//   )
// }


export default function LodgeSection() {
  const [isLoading, setIsLoading] = useState(true)
  const [priceRange, setPriceRange] = useState([50, 500])
  const [popularOnly, setPopularOnly] = useState(false)

  // Simulate loading
  ReactuseEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const Sidebar = () => (
    <>
      <div className="p-4">
        <LodgeImage/>
      </div>
      <nav className="space-y-1 px-2">
        <NavItem href="#" icon={<LayoutGrid className="h-4 w-4" />} active>
          All Lodges
        </NavItem>
        <NavItem href="#" icon={<Bell className="h-4 w-4" />}>
          Boys
        </NavItem>
        <NavItem href="#" icon={<Grid className="h-4 w-4" />}>
          Girls
        </NavItem>
      </nav>
      <div className="py-3">
        <div className="px-3 text-xs font-medium uppercase text-gray-500">Filters</div>
        <div className="mt-2 px-3">
          <div className="mb-4">
            <label className="text-sm font-medium">Price Range</label>
            <Slider min={0} max={1000} step={10} value={priceRange} onValueChange={setPriceRange} className="mt-2" />
            <div className="mt-1 text-sm text-gray-500">
              ${priceRange[0]} - ${priceRange[1]}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="popular" checked={popularOnly} onCheckedChange={setPopularOnly} />
            <label htmlFor="popular" className="text-sm font-medium">
              Popular only
            </label>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </>
  )

  return (
    <div className="flex h-screen  ">
      {/* Sidebar for larger screens */}
      <div className="hidden w-64 border-r md:block">
        <Sidebar />
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
                <Sidebar />
              </SheetContent>
            </Sheet>
            <div className="relative w-full flex  gap-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Search..." className="pl-9 sm:w-96 pr-4 py-1 text-sm md:text-base" />
              <Button variant="outline" size="sm" className=" sm:px-0 px-3 mr-3 py-2">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Bell className="h-4 w-4" />
            </Button>
              {/* <Image
                src="/placeholder.svg"
                alt="Avatar"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              /> */}
              <UserDropdown/>
          </div>
        </header>

        <div className="sm:p-6 p-3">
          {/* <div className="mb-6 flex items-center gap-4 overflow-x-auto">
            <Button className="gap-2 whitespace-nowrap">
              <Plus className="h-4 w-4" />
              Add New Lodge
            </Button>
            <Button variant="outline" className="gap-2 whitespace-nowrap">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Upload Photos
            </Button>
            <Button variant="outline" className="gap-2 whitespace-nowrap">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM12 14a2 2 0 100-4 2 2 0 000 4z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Manage Bookings
            </Button>
          </div> */}

          <div className="mb-6">
            <Tabs defaultValue="all" >
              <TabsList>
                <TabsTrigger value="all">All Lodges</TabsTrigger>
                <TabsTrigger value="available">Boys</TabsTrigger>
                <TabsTrigger value="booked">Girls</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {isLoading ? (
              <>
                <LodgeCardSkeleton />
                <LodgeCardSkeleton />
                <LodgeCardSkeleton />
              </>
            ) : (
              <>

                <LodgeCard 
                 name={'/placeholder.svg'}
                 price={23}
                 location={'asdf'}
                 image={'/placeholder.svg'}
                 rating={4}
                 beds={2}
                 baths={2}
                 guests={34}/>
                <LodgeCard 
                 name={'/placeholder.svg'}
                 price={23}
                 location={'asdf'}
                 image={'/placeholder.svg'}
                 rating={4}
                 beds={2}
                 baths={2}
                 guests={34}/>
                <LodgeCard 
                 name={'/placeholder.svg'}
                 price={23}
                 location={'asdf'}
                 image={'/placeholder.svg'}
                 rating={4}
                 beds={2}
                 baths={2}
                 guests={34}/>
              </>
              
            )}
          </div> */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {isLoading
              ?

              <LodgeCardSkeleton />

              :
              <>
                <LodgeCard
                  name={'/placeholder.svg'}
                  price={23}
                  location={'asdf'}
                  image={'/placeholder.svg'}
                  rating={4}
                  beds={2}
                  baths={2}
                  guests={34} />
                <LodgeCard
                  name={'/placeholder.svg'}
                  price={23}
                  location={'asdf'}
                  image={'/placeholder.svg'}
                  rating={4}
                  beds={2}
                  baths={2}
                  guests={34} />
                <LodgeCard
                  name={'/placeholder.svg'}
                  price={23}
                  location={'asdf'}
                  image={'/placeholder.svg'}
                  rating={4}
                  beds={2}
                  baths={2}
                  guests={34} />
                <LodgeCard
                  name={'/placeholder.svg'}
                  price={23}
                  location={'asdf'}
                  image={'/placeholder.svg'}
                  rating={4}
                  beds={2}
                  baths={2}
                  guests={34} />
              </>
            }
          </div>
          <div className="sm:hidden flex flex-col space-y-4">
            {isLoading
              ?
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <MobileLodgeCardSkeleton />
              </motion.div>

              :
              <motion.div

                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <MobileLodgeCard
                  name={'/placeholder.svg'}
                  price={23}
                  location={'asdf'}
                  image={'/placeholder.svg'}
                  rating={4}
                  beds={2}
                  baths={2}
                  guests={34} />
              </motion.div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

