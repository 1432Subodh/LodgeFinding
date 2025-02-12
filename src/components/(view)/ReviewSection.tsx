"use client"

import { useState } from "react"
import { Star, ThumbsUp } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const reviews = [
  {
    id: 1,
    user: "Alice W.",
    rating: 5,
    content:
      "Absolutely stunning lodge with breathtaking views. The amenities were top-notch and the hosts were incredibly accommodating. Can't wait to come back!",
    helpful: 12,
    date: "2023-05-15",
  },
  {
    id: 2,
    user: "Bob M.",
    rating: 4,
    content:
      "Great experience overall. The lodge was clean and comfortable. Only minor issue was the weak WiFi signal in some areas.",
    helpful: 8,
    date: "2023-06-02",
  },
  {
    id: 3,
    user: "Charlie D.",
    rating: 5,
    content:
      "Perfect getaway spot! The surrounding nature is beautiful and the lodge itself is cozy and well-equipped. We'll definitely return.",
    helpful: 15,
    date: "2023-06-20",
  },
]

export default function ReviewSection() {
  const [expandedReview, setExpandedReview] = useState<number | null>(null)
  const [newReview, setNewReview] = useState("")
  const [newRating, setNewRating] = useState(5)
  const [newUser, setNewUser] = useState("")

  const handleReviewSubmit = () => {
    if (newReview.trim() && newUser.trim()) {
      reviews.unshift({
        id: reviews.length + 1,
        user: newUser,
        rating: newRating,
        content: newReview,
        helpful: 0,
        date: new Date().toISOString().split("T")[0],
      })
      setNewReview("")
      setNewUser("")
      setNewRating(5)
    }
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const ratingCounts = reviews.reduce(
    (counts, review) => {
      counts[review.rating] = (counts[review.rating] || 0) + 1
      return counts
    },
    {} as Record<number, number>,
  )

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12"
    >
      <h2 className="text-2xl font-bold mb-6">Guest Reviews</h2>
      <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold">{averageRating.toFixed(1)}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(averageRating) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{reviews.length} reviews</p>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="text-sm w-2">{rating}</span>
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Progress value={((ratingCounts[rating] || 0) / reviews.length) * 100} className="h-2" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border-b pb-4 last:border-b-0"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarFallback>{review.user[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{review.user}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className={`text-sm ${expandedReview === review.id ? "" : "line-clamp-3"}`}>{review.content}</p>
              {review.content.length > 150 && (
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => setExpandedReview(expandedReview === review.id ? null : review.id)}
                  className="mt-2 p-0 h-auto"
                >
                  {expandedReview === review.id ? "Show less" : "Show more"}
                </Button>
              )}
              <div className="flex items-center gap-2 mt-2">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Helpful ({review.helpful})
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Write a Review Section */}
      <div className="mt-8 p-6 border rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
            />
          </div>
          <div>
            <Label>Rating</Label>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 cursor-pointer ${
                    i < newRating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                  }`}
                  onClick={() => setNewRating(i + 1)}
                />
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="review">Your Review</Label>
            <Textarea
              id="review"
              placeholder="Share your experience..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              rows={3}
            />
          </div>
          <Button onClick={handleReviewSubmit} disabled={!newReview.trim() || !newUser.trim()}>
            Submit Review
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
