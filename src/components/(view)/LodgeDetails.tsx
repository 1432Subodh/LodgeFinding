"use client"

import { Heart, Star, MapPin, Users, User, Phone, Map } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function LodgeDetails({ lodgeName, roomPrice, place, state, htmlMapLink, pincode, city, owner, maplink, description, lodgeType }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">
            <MapPin className="mr-1 h-3 w-3" />
            Mountain View
          </Badge>
          <Badge variant="secondary" className="capitalize">
            <Users className="mr-1 h-3 w-3 " />{lodgeType}
          </Badge>
        </div>

        {/* Lodge Type displayed before the lodge name */}


        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-3xl font-bold capitalize"
        >
          {lodgeName}
        </motion.h1>
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
            >
              <Star className={`h-5 w-5 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`} />
            </motion.div>
          ))}
          <span className="text-sm text-muted-foreground">(28 reviews)</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="space-y-2"
      >
        <div className="text-3xl font-bold">₹{roomPrice}/month</div>
        <p className="text-sm text-muted-foreground">Includes all taxes and fees</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="space-y-4"
      >
        <div className="prose max-w-none">
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>


        <div className="space-y-2 ">
          <h3 className="text-lg font-semibold">Lodge Details</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-2 capitalize"
            >
              <MapPin className="h-4 w-4" />
              <span>{place}, {city}, {state}, {pincode}</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <User className="h-4 w-4" />
              <span>Owned by {owner?.name}</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              <a href={`tel:+91${owner?.contact}`} className="text-primary hover:underline">
                +91 {owner?.contact}
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <Map className="h-4 w-4" />
              <a
                href={maplink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View on Google Maps
              </a>
            </motion.li>
          </ul>
        </div>
        <div className="relative">

          <iframe
            src={`https://www.google.com/maps?q=${htmlMapLink}&t=k&output=embed`}
            width="100%"
            height="250"
            loading="lazy"
            className="border-0 mt-5"
            allowFullScreen></iframe>
          <div className="mt-4 text-center absolute -top-2 left-2 bg-white p-2 pr-[180px] ">
            <h1 className="text-black font-semibold">{lodgeName}</h1>
            <a
              href={maplink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:underline text-blue-500 p-0"
            >
              View Larger Map
            </a>
          </div>
        </div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d933116.5784465566!2d84.75554985298359!3d23.996249059441435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f49d2181d95899%3A0x39191c689743b1e!2sChhotu%20lodge!5e0!3m2!1sen!2sin!4v1744092913714!5m2!1sen!2sin" width="400" height="300"></iframe> */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="prose max-w-none"
        >
          <h3 className="text-lg font-semibold">About the Lodge</h3>
          <p className="text-sm text-muted-foreground">
            Nestled in the heart of the Rocky Mountains, our Cozy Mountain Lodge offers a perfect blend of rustic charm
            and modern comfort. Built in 2015, this 2,000 sq ft lodge features panoramic mountain views, a spacious
            open-plan living area, and a large deck perfect for outdoor dining and stargazing. The lodge is situated on
            5 acres of private land, ensuring peace and privacy for our guests.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <Button className="flex-1">
          Book Now
        </Button>
        <Button variant="outline">
          <Heart className="h-5 w-5" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="rounded-lg border p-4"
      >
        <h3 className="font-semibold">Amenities</h3>
        <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <li>✓ Free WiFi</li>
          <li>✓ Mountain View</li>
          <li>✓ Fireplace</li>
          <li>✓ Fully Equipped Kitchen</li>
          <li>✓ Parking</li>
          <li>✓ Heating</li>
        </ul>
      </motion.div>
    </motion.div>
  )
}
