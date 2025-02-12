"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-16 cta-background ">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready for Your Mountain Getaway?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your perfect lodge now and experience the beauty of nature combined with luxurious comfort.
          </p>
          <Link href={'/lodge'}>
          <Button size="lg" variant="secondary">
            Find Your Lodge
          </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

