'use client'
import { useState } from "react"
import LodgeImage from "../logo"
import { Bell, Grid, LayoutGrid } from "lucide-react"
import { Slider } from "../ui/slider"
import { Switch } from "../ui/switch"
import { ThemeToggle } from "../theme-toggle"
import Link from "next/link"
import { cn } from "@/lib/utils"


interface NavItemProps {
    href: string
    icon: React.ReactNode
    children: React.ReactNode
    active?: boolean
  }
  

  
  const SideBar = () => {

    const [priceRange, setPriceRange] = useState([50, 500])
    const [popularOnly, setPopularOnly] = useState(false)


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
    return (
        <>
        <div className="p-4" >
          <LodgeImage />
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
  }
  
  export default SideBar