"use client"

import { motion } from "framer-motion"
import { Testimonial } from "./testimonial"

const testimonials = [
  {
    content:
      "Our stay at Mountain Vista Lodge was absolutely incredible. The views were breathtaking, and the amenities were top-notch. We can't wait to come back!",
    author: "Emily Johnson",
    location: "New York, NY",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    content:
      "Lakefront Retreat provided the perfect getaway for our family. The peaceful surroundings and cozy cabin made for an unforgettable vacation.",
    author: "Michael Chen",
    location: "San Francisco, CA",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    content:
      "The Forest Haven Cabin was a dream come true for nature lovers like us. We enjoyed hiking during the day and stargazing at night. Highly recommended!",
    author: "Sarah Thompson",
    location: "Seattle, WA",
    rating: 4,
    image: "/placeholder.svg",
  },
]

export function TestimonialSection() {
  return (
    <section className="py-12 bg-muted">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          What Our Guests Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Testimonial {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

