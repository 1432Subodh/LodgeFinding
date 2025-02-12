import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function MobileLodgeCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex">
          <div className="w-1/3">
            <Skeleton className="h-[120px] w-full" />
          </div>
          <div className="w-2/3 p-3">
            <div className="flex justify-between items-start mb-2">
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-4 w-[40px]" />
            </div>
            <Skeleton className="h-3 w-[100px] mb-2" />
            <div className="flex items-center gap-2 mb-2">
              <Skeleton className="h-3 w-[30px]" />
              <Skeleton className="h-3 w-[30px]" />
              <Skeleton className="h-3 w-[30px]" />
            </div>
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-[60px]" />
              <Skeleton className="h-8 w-[80px]" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

