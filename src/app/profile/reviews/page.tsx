import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would come from your database
const user = {
  accountType: "host", // or "guest"
}

// Mock data
const reviewsWritten = [
  {
    id: 1,
    lodgeName: "Mountain View Cabin",
    hostName: "Sarah Johnson",
    date: "Jun 22, 2023",
    rating: 5,
    comment: "Amazing place with breathtaking views. The host was very accommodating.",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 2,
    lodgeName: "Beachfront Villa",
    hostName: "Michael Brown",
    date: "Aug 12, 2023",
    rating: 4,
    comment: "Beautiful property right on the beach. Kitchen could use some updating.",
    image: "/placeholder.svg?height=100&width=150",
  },
]

const reviewsReceived = [
  {
    id: 1,
    guestName: "Robert Wilson",
    lodgeName: "Cozy Mountain Cabin",
    date: "Jul 16, 2023",
    rating: 5,
    comment:
      "Absolutely stunning cabin with all the amenities you could ask for. The host was very responsive and helpful.",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 2,
    guestName: "Jennifer Lee",
    lodgeName: "Downtown Loft",
    date: "Aug 26, 2023",
    rating: 4,
    comment: "Great location and beautiful space. The only issue was the noise from the street, but otherwise perfect.",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 3,
    guestName: "David Miller",
    lodgeName: "Cozy Mountain Cabin",
    date: "Sep 18, 2023",
    rating: 5,
    comment:
      "We had an amazing stay! The cabin was clean, cozy, and had everything we needed. Will definitely be back!",
    image: "/placeholder.svg?height=100&width=150",
  },
]

export default function ReviewsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Reviews</h1>
        <p className="text-muted-foreground">
          {user.accountType === "host"
            ? "Reviews from your guests and reviews you've written"
            : "Reviews you've written about your stays"}
        </p>
      </div>

      {user.accountType === "host" ? (
        <Tabs defaultValue="received" className="w-full">
          <TabsList className="mb-6 grid w-full grid-cols-2">
            <TabsTrigger value="received">Reviews Received</TabsTrigger>
            <TabsTrigger value="written">Reviews Written</TabsTrigger>
          </TabsList>

          <TabsContent value="received" className="space-y-6">
            {reviewsReceived.map((review) => (
              <ReviewCard key={review.id} review={review} type="received" />
            ))}
          </TabsContent>

          <TabsContent value="written" className="space-y-6">
            {reviewsWritten.map((review) => (
              <ReviewCard key={review.id} review={review} type="written" />
            ))}
          </TabsContent>
        </Tabs>
      ) : (
        <div className="space-y-6">
          {reviewsWritten.map((review) => (
            <ReviewCard key={review.id} review={review} type="written" />
          ))}
        </div>
      )}
    </div>
  )
}

function ReviewCard({ review, type }:any) {
  const isReceived = type === "received"

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-row gap-4">
          <img
            src={review.image || "/placeholder.svg"}
            alt={isReceived ? review.lodgeName : review.lodgeName}
            className="h-20 w-20 rounded-md object-cover"
          />
          <div className="flex-1">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="font-semibold">{isReceived ? review.lodgeName : review.lodgeName}</h3>
                <p className="text-sm text-muted-foreground">
                  {isReceived ? `From ${review.guestName} • ${review.date}` : `To ${review.hostName} • ${review.date}`}
                </p>
              </div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm">{review.comment}</p>
            <div className="mt-4 flex justify-end">
              {isReceived ? (
                <Button variant="outline" size="sm">
                  Reply
                </Button>
              ) : (
                <Button variant="outline" size="sm">
                  Edit Review
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

