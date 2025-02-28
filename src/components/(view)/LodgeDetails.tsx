"use client"

import { Heart, Star, MapPin, Users, User, Phone, Map } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function LodgeDetails({ lodgeName, roomPrice, place, state, pincode, city, owner = {}, maplink, description, lodgeType }: any) {
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
            {place || "Unknown Location"}
          </Badge>
          <Badge variant="secondary" className="capitalize">
            <Users className="mr-1 h-3 w-3 " />
            {lodgeType || "Not specified"}
          </Badge>
        </div>

        {/* Lodge Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-3xl font-bold capitalize"
        >
          {lodgeName || "Lodge Name Not Available"}
        </motion.h1>
      </div>

      <motion.div className="space-y-2">
        <div className="text-3xl font-bold">₹{roomPrice || "N/A"}/month</div>
        <p className="text-sm text-muted-foreground">Includes all taxes and fees</p>
      </motion.div>

      <motion.div className="space-y-4">
        <div className="prose max-w-none">
          <p className="text-muted-foreground">
            {description || "No description available for this lodge."}
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Lodge Details</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <motion.li className="flex items-center gap-2 capitalize">
              <MapPin className="h-4 w-4" />
              <span>{place || "Unknown Place"}, {city || "Unknown City"}, {state || "Unknown State"}, {pincode || "N/A"}</span>
            </motion.li>
            <motion.li className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Owned by {owner?.name || "Unknown Owner"}</span>
            </motion.li>
            <motion.li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={owner?.contact ? `tel:+91${owner.contact}` : "#"} className="text-primary hover:underline">
                {owner?.contact ? `+91 ${owner.contact}` : "No contact info"}
              </a>
            </motion.li>
            <motion.li className="flex items-center gap-2">
              <Map className="h-4 w-4" />
              <a href={maplink || "#"} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {maplink ? "View on Google Maps" : "Map link not available"}
              </a>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

