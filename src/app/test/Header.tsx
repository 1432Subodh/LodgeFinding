"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader,
  SheetTitle,
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
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
      className={`absolute w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-90 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-white text-2xl font-bold">
            Lodge<span className="text-teal-400">Finder</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-white hover:text-teal-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link 
            href="/lodges" 
            className="text-white hover:text-teal-400 transition-colors duration-300"
          >
            Lodges
          </Link>
          <Link 
            href="/destinations" 
            className="text-white hover:text-teal-400 transition-colors duration-300"
          >
            Destinations
          </Link>
          <Link 
            href="/about" 
            className="text-white hover:text-teal-400 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className="text-white hover:text-teal-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side - Auth & Book buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="/login" 
            className="text-white hover:text-teal-400 transition-colors duration-300"
          >
            Login
          </Link>
          <Button 
            asChild
            className="bg-teal-500 hover:bg-teal-600 rounded-full text-white font-medium transition-colors duration-300"
          >
            <Link href="/book-now">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu with shadcn Sheet component */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-0 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white w-64 sm:w-80">
              <SheetHeader>
                <SheetTitle className="text-white text-left">
                  Lodge<span className="text-teal-400">Finder</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col mt-8 space-y-4">
                <Link 
                  href="/" 
                  className="text-white hover:text-teal-400 py-2 transition-colors duration-300"
                >
                  Home
                </Link>
                <Link 
                  href="/lodges" 
                  className="text-white hover:text-teal-400 py-2 transition-colors duration-300"
                >
                  Lodges
                </Link>
                <Link 
                  href="/destinations" 
                  className="text-white hover:text-teal-400 py-2 transition-colors duration-300"
                >
                  Destinations
                </Link>
                <Link 
                  href="/about" 
                  className="text-white hover:text-teal-400 py-2 transition-colors duration-300"
                >
                  About Us
                </Link>
                <Link 
                  href="/contact" 
                  className="text-white hover:text-teal-400 py-2 transition-colors duration-300"
                >
                  Contact
                </Link>
                <div className="pt-4 mt-4 border-t border-gray-700">
                  <Link 
                    href="/login" 
                    className="text-white hover:text-teal-400 py-2 transition-colors duration-300 block mb-4"
                  >
                    Login
                  </Link>
                  <Button 
                    asChild
                    className="w-full bg-teal-500 hover:bg-teal-600 rounded-full text-white font-medium transition-colors duration-300"
                  >
                    <Link href="/book-now">Book Now</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}