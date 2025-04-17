import { Building, Edit, Eye, Plus } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock data
const listings = [
  {
    id: 1,
    name: "Cozy Mountain Cabin",
    location: "Aspen, CO",
    price: "$150/night",
    status: "active",
    bookings: 12,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Downtown Loft",
    location: "New York, NY",
    price: "$200/night",
    status: "active",
    bookings: 8,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Beach House",
    location: "Malibu, CA",
    price: "$300/night",
    status: "inactive",
    bookings: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function ListingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Your Listings</h1>
          <p className="text-muted-foreground">Manage your properties and create new listings</p>
        </div>
        <Button className="mt-4 sm:mt-0">
          <Plus className="mr-2 h-4 w-4" />
          Add New Listing
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <Card key={listing.id} className="overflow-hidden">
            <div className="flex flex-row h-32 sm:h-auto sm:flex-col">
              <div className="w-1/3 sm:w-full">
                <img
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.name}
                  className="h-full w-full object-cover sm:aspect-[3/2]"
                />
              </div>
              <div className="relative w-2/3 sm:w-full">
                <Badge
                  className="absolute right-2 top-2"
                  variant={listing.status === "active" ? "default" : "secondary"}
                >
                  {listing.status}
                </Badge>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">{listing.name}</h3>
                      <p className="text-sm text-muted-foreground">{listing.location}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{listing.price}</p>
                      <p className="text-sm text-muted-foreground">{listing.bookings} bookings</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}

        <Card className="flex h-full flex-col items-center justify-center p-6">
          <div className="mb-4 rounded-full bg-primary/10 p-3">
            <Building className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-1 text-center text-lg font-medium">Add a new property</h3>
          <p className="mb-4 text-center text-sm text-muted-foreground">List your property and start earning</p>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Listing
          </Button>
        </Card>
      </div>
    </div>
  )
}

