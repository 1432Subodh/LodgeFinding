"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import UserData from "@/components/user/user-data";
import ExploreButton from "../../../context/ExploreButton";
import LodgeImage from "@/components/logo";
import { usePreloader } from "../../../context/PreloaderContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { setLoading } = usePreloader();
  const pathname = usePathname();
  

  // Handle scroll event to change header appearance
  useEffect(() => {
      setLoading(false)
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-card bg-opacity-60 shadow-lg py-3"
          : `bg-transparent py-5 ${pathname === "/" && "text-white" }`
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <LodgeImage/>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className=" hover:text-teal-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/lodges"
            className=" hover:text-teal-400 transition-colors duration-300"
          >
            Lodges
          </Link>
          <Link
            href="/destinations"
            className=" hover:text-teal-400 transition-colors duration-300"
          >
            Destinations
          </Link>
          <Link
            href="/about"
            className=" hover:text-teal-400 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className=" hover:text-teal-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side - Auth & Book buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />

          <UserData />
        </div>

        {/* Mobile Menu with shadcn Sheet component */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-0 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black  w-64 sm:w-80"
            >
              <SheetHeader>
                <SheetTitle className=" text-left">
                  Lodge<span className="text-teal-400">Finder</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col mt-8 space-y-4">
                <Link
                  href="/"
                  className=" hover:text-teal-400 py-2 transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/lodges"
                  className=" hover:text-teal-400 py-2 transition-colors duration-300"
                >
                  Lodges
                </Link>
                <Link
                  href="/destinations"
                  className=" hover:text-teal-400 py-2 transition-colors duration-300"
                >
                  Destinations
                </Link>
                <Link
                  href="/about"
                  className=" hover:text-teal-400 py-2 transition-colors duration-300"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className=" hover:text-teal-400 py-2 transition-colors duration-300"
                >
                  Contact
                </Link>
                
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
