import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

export function LodgeCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Skeleton className="aspect-[1/0.7] w-full" />
      </CardHeader>
      <CardContent className="px-4 py-2">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-4 w-10" />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-10 w-24" />
      </CardFooter>
    </Card>
  )
}

