"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bell, ShoppingCart, User, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex w-full items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 sm:gap-12">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/placeholder.svg" alt="LodgeFinder logo" width={32} height={32} className="text-primary" />
            <span className="text-xl font-semibold sm:inline-block hidden">LodgeFinder</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <AnimatePresence>
              {["Home", "Locations", "Amenities", "Contact"].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.button
            className="relative p-2 hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              2
            </span>
          </motion.button>
          <motion.button
            className="relative p-2 hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </motion.button>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-sm">Hello, Guest</span>
            <motion.button
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <User className="w-5 h-5" />
            </motion.button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {["Home", "Locations", "Amenities", "Contact"].map((item) => (
                  <Link key={item} href="#" className="text-lg font-medium hover:text-primary transition-colors">
                    {item}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

