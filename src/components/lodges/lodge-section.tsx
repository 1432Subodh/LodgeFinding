"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Grid, Menu, Search } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import type React from "react"
import UserData from "../user/user-data"
import SideBar from "./sidebar"
import LodgeCardSection from "./lodge-card-section"







export default function LodgeSection() {



  return (
    <div className="flex h-screen  ">
      {/* Sidebar for larger screens */}
      <div className="hidden w-64 border-r md:block dark:bg-[#0c0a09]">
        <SideBar />
      </div>


      {/* Main content */}
      <div className="flex-1 overflow-auto dark:bg-[#0c0a09]">
        <header className="flex z-50 items-center justify-between border-b px-3 py-3 md:px-6 md:py-4 bg-white dark:bg-[#0c0a09]">
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
              <form action={''} className="flex gap-2">

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

        <LodgeCardSection/>
      </div>
    </div>
  )
}

