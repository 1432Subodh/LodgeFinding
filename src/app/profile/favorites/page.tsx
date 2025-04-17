import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock data
const favoriteLodges = [
  {
    id: 1,
    name: "Lakeside Cottage",
    location: "Lake Tahoe, CA",
    price: "$180/night",
    rating: 4.9,
    reviews: 28,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Desert Oasis",
    location: "Scottsdale, AZ",
    price: "$220/night",
    rating: 4.7,
    reviews: 42,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Mountain Retreat",
    location: "Aspen, CO",
    price: "$250/night",
    rating: 4.8,
    reviews: 36,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Urban Loft",
    location: "New York, NY",
    price: "$190/night",
    rating: 4.6,
    reviews: 52,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Beachfront Villa",
    location: "Malibu, CA",
    price: "$350/night",
    rating: 4.9,
    reviews: 64,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function FavoritesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Favorites</h1>
        <p className="text-muted-foreground">Lodges you've saved for later</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {favoriteLodges.map((lodge) => (
          <Card key={lodge.id} className="overflow-hidden">
            <div className="flex flex-row h-32 sm:h-auto sm:flex-col">
              <div className="relative w-1/3 sm:w-full">
                <img
                  src={lodge.image || "/placeholder.svg"}
                  alt={lodge.name}
                  className="h-full w-full object-cover sm:aspect-[3/2]"
                />
                <Button variant="ghost" size="icon" className="absolute right-2 top-2 bg-white/80 hover:bg-white/90">
                  <Heart className="h-5 w-5 fill-rose-500 text-rose-500" />
                </Button>
              </div>
              <CardContent className="p-4 w-2/3 sm:w-full">
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{lodge.name}</h3>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-1 text-sm font-medium">{lodge.rating}</span>
                        <span className="ml-1 text-xs text-muted-foreground">({lodge.reviews})</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{lodge.location}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{lodge.price}</p>
                    <Button size="sm">View Lodge</Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

