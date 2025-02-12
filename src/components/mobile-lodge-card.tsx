import Image from "next/image"
import { Star, Users, Bath, Bed } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"

interface MobileLodgeCardProps {
  name: string
  price: number
  location: string
  image: string
  rating: number
  beds: number
  baths: number
  guests: number
}

export function MobileLodgeCard({ name, price, location, image, rating, beds, baths, guests }: MobileLodgeCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex">
          <div className="w-1/3 relative">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={120}
              height={120}
              className="object-cover h-full"
            />
          </div>
          <div className="w-2/3 px-3 py-2">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-sm line-clamp-1">{name}</h3>
              <div className="flex items-center">
                <Star className="w-3 h-3 fill-primary text-primary" />
                <span className="text-xs ml-1">{rating}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-1">{location}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{guests}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bed className="w-3 h-3" />
                <span>{beds}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-3 h-3" />
                <span>{baths}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-bold">${price}</span>
                <span className="text-xs text-muted-foreground">/night</span>
              </div>
              <Link href={'/lodge/view/3'}>

                <Button size="sm" className="text-xs">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

