import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialProps {
  content: string
  author: string
  location: string
  rating: number
  image: string
}

export function Testimonial({ content, author, location, rating, image }: TestimonialProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-grow">
          <p className="text-muted-foreground mb-4">&ldquo;{content}&rdquo;</p>
        </div>
        <div className="flex items-center mt-4">
          <Image src={image || "/placeholder.svg"} alt={author} width={48} height={48} className="rounded-full mr-4" />
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          <div className="ml-auto flex items-center">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

