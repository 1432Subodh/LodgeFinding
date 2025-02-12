import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingSkeleton() {
  return (
    <div className="mx-auto sm:px-12 px-4 py-6 mt-14 ">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <Skeleton className="aspect-square w-full rounded-lg" />
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="aspect-square rounded-lg" />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-8 w-full max-w-md" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-12 w-32" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-24" />
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-12 rounded-lg" />
              ))}
            </div>
          </div>
          <Skeleton className="h-12 w-full max-w-md" />
        </div>
      </div>
    </div>
  )
}

