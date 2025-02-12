import Image from "next/image"
import { Star, Users, Bath, Bed } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"

export interface LodgeCardProps {
  name: string
  price: number
  location: string
  image: string
  rating: number
  beds: number
  baths: number
  guests: number
}

export function LodgeCard({ name, price, location, image, rating, beds, baths, guests }: LodgeCardProps) {
  return (
    <Card className="overflow-hidden">  
      <CardHeader className="p-0">
        <div className="aspect-[1/0.7] relative">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-3 sm:px-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-sm sm:text-base line-clamp-1">{name}</h3>
          <div className="flex items-center">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
            <span className="text-xs sm:text-sm ml-1">{rating}</span>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3">{location}</p>
        <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{guests}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{baths}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-3 sm:px-4 pt-0 flex items-center justify-between">
        <div>
          <span className="text-lg sm:text-xl font-bold">${price}</span>
          <span className="text-xs sm:text-sm text-muted-foreground">/night</span>
        </div>
        <Link href={'/lodge/view/3'}>
        <Button size="sm" className="text-xs sm:text-sm">
          Book Now
        </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

