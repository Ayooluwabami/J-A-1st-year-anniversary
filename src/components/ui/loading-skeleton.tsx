import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-40 w-full rounded-lg" />
    </div>
  )
}

function GallerySkeleton() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Skeleton className="h-12 w-64 mx-auto" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>
      
      <Skeleton className="h-96 w-full rounded-3xl" />
      
      <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} className="aspect-square rounded-xl" />
        ))}
      </div>
    </div>
  )
}

export { Skeleton, LoadingSkeleton, GallerySkeleton }