interface SkeletonProps {
  className?: string
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div className={`animate-pulse rounded-sm bg-neutral-800 ${className}`} />
  )
}

export function NewsCardSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="w-full h-56 md:h-64" />
      <Skeleton className="h-3 w-20" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  )
}

export function NewsDetailSkeleton() {
  return (
    <section className="bg-neutral-900 pt-24 md:pt-28">
      <div className="mx-auto px-5 max-w-5xl">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-4 w-40 mb-8" />
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-5/6 mb-8" />
        <Skeleton className="w-full h-72 md:h-96 mb-8" />
        <div className="flex flex-col gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className={`h-4 ${i % 3 === 2 ? 'w-4/5' : 'w-full'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function JobCardSkeleton() {
  return (
    <div className="border border-neutral-800 p-5 flex flex-col gap-3">
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-4 w-32" />
    </div>
  )
}

export function JobDetailSkeleton() {
  return (
    <section className="bg-neutral-900 py-12 md:py-16">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        <Skeleton className="h-9 w-2/3 mb-4" />
        <Skeleton className="h-4 w-48 mb-10" />
        <Skeleton className="h-6 w-36 mb-4" />
        <div className="flex flex-col gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>
      </div>
    </section>
  )
}
