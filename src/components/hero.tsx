"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton
import { useState } from "react";
import Link from "next/link";

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-4">
      <div className="relative w-full h-[450px] sm:h-[550px] md:h-[550px] rounded-lg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {!imageLoaded && <Skeleton className="absolute inset-0 h-full w-full" />}
          <Image
            src="/image.jpg"
            alt="Luxury lodge interior"
            fill
            className={`object-cover transition-opacity duration-500 sm:block hidden ${imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            priority
            onLoadingComplete={() => setImageLoaded(true)}
          />
          <Image
            src="/image2.jpg"
            alt="Luxury lodge interior"
            fill
            className={`object-cover transition-opacity duration-500 sm:hidden block ${imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            priority
            onLoadingComplete={() => setImageLoaded(true)}
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 dark:from-black/80 to-black/10" />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-end h-full max-w-2xl px-4 sm:px-6 py-12 sm:py-16">
          {/* Skeleton for Heading */}
          {!imageLoaded ? (
            <Skeleton className="h-10 w-3/4 mb-4" />
          ) : (
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3 sm:mb-5"
            >
              Subodh
              <br />
              Mountain Retreat
            </motion.h1>
          )}
          {/* Skeleton for Paragraph */}
          {!imageLoaded ? (
            <Skeleton className="h-6 w-5/6 mb-6" />
          ) : (
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg mb-6 sm:mb-8 text-zinc-300"
            >
              Discover cozy lodges and luxury cabins across stunning locations
            </motion.p>
          )}
          {/* Skeleton for Input and Button */}
          {!imageLoaded ? (
            <>
              <div className="w-full max-w-md flex gap-2">
                <Skeleton className="flex-1 h-10" />
                <Skeleton className="w-24 h-10" />
              </div>
              {/* <Skeleton className="w-24 h-10 mt-4" /> */}
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full max-w-md flex gap-2"
              >
                <Input type="search" placeholder="Search locations, amenities..." className="flex-1" />
                {/* <Button size="default" className="px-4 py-0.5">
                  Search
                </Button> */}
              <Link href={'/lodge'}>
              <Button size="default" className="px-4 py-0.5">Get Started</Button>
              </Link>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
