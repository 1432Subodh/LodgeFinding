'use client'
import { Camera, Mail, Phone } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { shallowEqual, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import Link from "next/link"

// This would come from your database
const user1 = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  image: null,
  bio: "Travel enthusiast and food lover. Always looking for new adventures and cozy places to stay.",
  accountType: "host", // or "guest"
  joinDate: "January 2022",
  location: "San Francisco, CA",
  verified: true,
  stats: {
    bookings: 12,
    reviews: 8,
    rating: 4.8,
  },
}



export default function ProfilePage() {

  const { user, loading }:any = useSelector(
    (state: RootState) => state.user,
    shallowEqual
  );
  console.log(user)
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and account preferences</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <Card>
          <CardHeader className="relative pb-0">
            <div className="flex flex-row items-center gap-4">
              <div className="relative">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={user?.image || ""} alt={user.firstnamename} />
                  <AvatarFallback className="text-2xl uppercase">{user.firstname?.charAt(0)}</AvatarFallback>
                </Avatar>
                <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 h-6 w-6 rounded-full">
                  <Camera className="h-3 w-3" />
                  <span className="sr-only">Change profile picture</span>
                </Button>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">{user.firstname} {user?.lastname}</h2>
                  {user1.verified && <Badge variant="success">Verified</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">
                  Normal User
                </p>
                {/* <p className="text-sm text-muted-foreground">{user1.location}</p> */}
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-6">
              <div>
                <h3 className="mb-2 font-medium">About</h3>
                <p>Travel enthusiast and food lover. Always looking for new adventures and cozy places to stay.</p>
              </div>
              <Separator />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{user.phone || 'NA'}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Stats</CardTitle>
              <CardDescription>Your activity on Lodge Finder</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Bookings</p>
                  <p className="font-medium">{user1.stats.bookings}</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Reviews</p>
                  <p className="font-medium">{user1.stats.reviews}</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Rating</p>
                  <div className="flex items-center">
                    <p className="font-medium">{user1.stats.rating}</p>
                    <StarRating rating={user1.stats.rating} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Type</CardTitle>
              <CardDescription>{user?.isAdmin ? 'This is Admin Account' : 'This is not Admin Account'}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Link href="/admin/dashboard" className="text-sm text-primary underline">Admin Dashboard</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex ml-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={star <= Math.round(rating) ? "currentColor" : "none"}
          stroke="currentColor"
          className="h-4 w-4 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ))}
    </div>
  )
}

