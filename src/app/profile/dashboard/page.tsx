import Link from "next/link"
import { Building, CreditCard, Heart, History, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// This would come from your database
const user = {
  name: "John Doe",
  accountType: "host", // or "guest"
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your {user.accountType === "host" ? "hosting" : "guest"} activity
        </p>
      </div>

      {user.accountType === "host" ? <HostDashboard /> : <GuestDashboard />}
    </div>
  )
}

function GuestDashboard() {
  // Mock data
  const recentBookings = [
    {
      id: 1,
      lodgeName: "Mountain View Cabin",
      dates: "Jun 15 - Jun 20, 2023",
      status: "completed",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 2,
      lodgeName: "Beachfront Villa",
      dates: "Aug 3 - Aug 10, 2023",
      status: "upcoming",
      image: "/placeholder.svg?height=100&width=200",
    },
  ]

  const favoriteCount = 5
  const reviewCount = 8
  const savedPaymentMethods = 2

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Recent Bookings</CardTitle>
          <CardDescription>Your latest lodge bookings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="flex items-center gap-4">
                <img
                  src={booking.image || "/placeholder.svg"}
                  alt={booking.lodgeName}
                  className="h-16 w-16 rounded-md object-cover"
                />
                <div className="flex-1 space-y-1">
                  <p className="font-medium">{booking.lodgeName}</p>
                  <p className="text-xs text-muted-foreground">{booking.dates}</p>
                  <p className="text-xs font-medium capitalize">{booking.status}</p>
                </div>
              </div>
            ))}
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/profile/bookings">
                <History className="mr-2 h-4 w-4" />
                View All Bookings
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Favorites</CardTitle>
          <CardDescription>Lodges you've saved</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex h-20 items-center justify-center rounded-md border-2 border-dashed">
            <p className="text-center text-xl font-medium">{favoriteCount}</p>
          </div>
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/profile/favorites">
              <Heart className="mr-2 h-4 w-4" />
              View Favorites
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Reviews</CardTitle>
          <CardDescription>Reviews you've written</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex h-20 items-center justify-center rounded-md border-2 border-dashed">
            <p className="text-center text-xl font-medium">{reviewCount}</p>
          </div>
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/profile/reviews">
              <Star className="mr-2 h-4 w-4" />
              View Reviews
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Payment Methods</CardTitle>
          <CardDescription>Your saved payment options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex h-20 items-center justify-center rounded-md border-2 border-dashed">
            <p className="text-center text-xl font-medium">{savedPaymentMethods}</p>
          </div>
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/profile/payment">
              <CreditCard className="mr-2 h-4 w-4" />
              Manage Payment Methods
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

function HostDashboard() {
  // Mock data
  const listingCount = 3
  const pendingBookings = 2
  const totalEarnings = "$4,250"
  const reviewCount = 12

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Your Listings</CardTitle>
          <CardDescription>Properties you're hosting</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex h-20 items-center justify-center rounded-md border-2 border-dashed">
            <p className="text-center text-xl font-medium">{listingCount}</p>
          </div>
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/profile/listings">
              <Building className="mr-2 h-4 w-4" />
              Manage Listings
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Pending Bookings</CardTitle>
          <CardDescription>Requests awaiting your response</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex h-20 items-center justify-center rounded-md border-2 border-dashed">
            <p className="text-center text-xl font-medium">{pendingBookings}</p>
          </div>
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/profile/bookings">
              <History className="mr-2 h-4 w-4" />
              View Booking Requests
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Total Earnings</CardTitle>
          <CardDescription>Your revenue this month</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex h-20 items-center justify-center rounded-md border-2 border-dashed">
            <p className="text-center text-xl font-medium">{totalEarnings}</p>
          </div>
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/profile/earnings">
              <CreditCard className="mr-2 h-4 w-4" />
              View Earnings
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Reviews</CardTitle>
          <CardDescription>Feedback from your guests</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex h-20 items-center justify-center rounded-md border-2 border-dashed">
            <p className="text-center text-xl font-medium">{reviewCount}</p>
          </div>
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/profile/reviews">
              <Star className="mr-2 h-4 w-4" />
              View Reviews
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

