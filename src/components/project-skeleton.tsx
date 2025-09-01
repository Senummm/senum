export const ProjectSkeleton = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl border bg-card">
      {/* Image Skeleton */}
      <div className="aspect-video bg-muted animate-pulse"></div>
      
      {/* Content Skeleton */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          {/* Title Skeleton */}
          <div className="mb-2 h-6 bg-muted animate-pulse rounded"></div>
          
          {/* Description Skeleton */}
          <div className="mb-4 space-y-2">
            <div className="h-4 bg-muted animate-pulse rounded"></div>
            <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
            <div className="h-4 bg-muted animate-pulse rounded w-1/2"></div>
          </div>
        </div>

        {/* Technologies Skeleton */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-6 bg-muted animate-pulse rounded-full"
                style={{ width: `${60 + i * 20}px` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Action Button Skeleton */}
        <div className="pt-2 border-t">
          <div className="h-10 bg-muted animate-pulse rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};
