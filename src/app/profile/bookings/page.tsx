import { Check, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would come from your database
const user = {
  accountType: "host", // or "guest"
}

// Mock data
const guestBookings = [
  {
    id: 1,
    lodgeName: "Mountain View Cabin",
    location: "Aspen, CO",
    hostName: "Sarah Johnson",
    dates: "Jun 15 - Jun 20, 2023",
    status: "completed",
    price: "$750",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    id: 2,
    lodgeName: "Beachfront Villa",
    location: "Malibu, CA",
    hostName: "Michael Brown",
    dates: "Aug 3 - Aug 10, 2023",
    status: "upcoming",
    price: "$1,200",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    id: 3,
    lodgeName: "City Loft",
    location: "New York, NY",
    hostName: "Emily Davis",
    dates: "Oct 5 - Oct 8, 2023",
    status: "upcoming",
    price: "$450",
    image: "/placeholder.svg?height=150&width=250",
  },
]

const hostBookings = [
  {
    id: 1,
    lodgeName: "Cozy Mountain Cabin",
    guestName: "Sarah Johnson",
    dates: "Jul 10 - Jul 15, 2023",
    status: "pending",
    amount: "$750",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    id: 2,
    lodgeName: "Downtown Loft",
    guestName: "Michael Brown",
    dates: "Aug 22 - Aug 25, 2023",
    status: "confirmed",
    amount: "$600",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    id: 3,
    lodgeName: "Cozy Mountain Cabin",
    guestName: "Emily Davis",
    dates: "Sep 5 - Sep 10, 2023",
    status: "confirmed",
    amount: "$750",
    image: "/placeholder.svg?height=150&width=250",
  },
]

export default function BookingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{user.accountType === "host" ? "Booking Requests" : "Your Bookings"}</h1>
        <p className="text-muted-foreground">
          {user.accountType === "host"
            ? "Manage reservation requests for your properties"
            : "View and manage your lodge reservations"}
        </p>
      </div>

      {user.accountType === "host" ? <HostBookings /> : <GuestBookings />}
    </div>
  )
}

function GuestBookings() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="mb-6 grid w-full grid-cols-3">
        <TabsTrigger value="all">All Bookings</TabsTrigger>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>

      <TabsContent value="all" className="space-y-6">
        {guestBookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} userType="guest" />
        ))}
      </TabsContent>

      <TabsContent value="upcoming" className="space-y-6">
        {guestBookings
          .filter((booking) => booking.status === "upcoming")
          .map((booking) => (
            <BookingCard key={booking.id} booking={booking} userType="guest" />
          ))}
      </TabsContent>

      <TabsContent value="completed" className="space-y-6">
        {guestBookings
          .filter((booking) => booking.status === "completed")
          .map((booking) => (
            <BookingCard key={booking.id} booking={booking} userType="guest" />
          ))}
      </TabsContent>
    </Tabs>
  )
}

function HostBookings() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="mb-6 grid w-full grid-cols-3">
        <TabsTrigger value="all">All Requests</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
      </TabsList>

      <TabsContent value="all" className="space-y-6">
        {hostBookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} userType="host" />
        ))}
      </TabsContent>

      <TabsContent value="pending" className="space-y-6">
        {hostBookings
          .filter((booking) => booking.status === "pending")
          .map((booking) => (
            <BookingCard key={booking.id} booking={booking} userType="host" />
          ))}
      </TabsContent>

      <TabsContent value="confirmed" className="space-y-6">
        {hostBookings
          .filter((booking) => booking.status === "confirmed")
          .map((booking) => (
            <BookingCard key={booking.id} booking={booking} userType="host" />
          ))}
      </TabsContent>
    </Tabs>
  )
}

function BookingCard({ booking, userType }) {
  const isHost = userType === "host"
  const isPending = booking.status === "pending"

  return (
    <Card>
      <CardContent className="p-0">
        <div className="flex flex-row">
          <div className="w-1/3 max-w-[150px]">
            <img
              src={booking.image || "/placeholder.svg"}
              alt={booking.lodgeName}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col p-4">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="font-semibold">{booking.lodgeName}</h3>
                {booking.location && <p className="text-sm text-muted-foreground">{booking.location}</p>}
                <p className="text-sm">{isHost ? `Guest: ${booking.guestName}` : `Host: ${booking.hostName}`}</p>
                <p className="text-sm text-muted-foreground">{booking.dates}</p>
              </div>
              <Badge
                variant={
                  booking.status === "pending" ? "outline" : booking.status === "completed" ? "secondary" : "default"
                }
              >
                {booking.status}
              </Badge>
            </div>

            <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <p className="font-medium">{isHost ? booking.amount : booking.price}</p>

              {isHost && isPending ? (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <X className="mr-2 h-4 w-4" />
                    Decline
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Check className="mr-2 h-4 w-4" />
                    Accept
                  </Button>
                </div>
              ) : (
                <div className="flex gap-2">
                  {booking.status === "upcoming" && (
                    <Button variant="outline" size="sm">
                      Cancel Booking
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

