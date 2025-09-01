export const ProjectSkeleton = () => {
  return (
    <div className="bg-card flex w-full flex-col overflow-hidden rounded-xl border">
      {/* Image Skeleton */}
      <div className="bg-muted aspect-video animate-pulse"></div>

      {/* Content Skeleton */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          {/* Title Skeleton */}
          <div className="bg-muted mb-2 h-6 animate-pulse rounded"></div>

          {/* Description Skeleton */}
          <div className="mb-4 space-y-2">
            <div className="bg-muted h-4 animate-pulse rounded"></div>
            <div className="bg-muted h-4 w-3/4 animate-pulse rounded"></div>
            <div className="bg-muted h-4 w-1/2 animate-pulse rounded"></div>
          </div>
        </div>

        {/* Technologies Skeleton */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-muted h-6 animate-pulse rounded-full"
                style={{ width: `${60 + i * 20}px` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Action Button Skeleton */}
        <div className="border-t pt-2">
          <div className="bg-muted h-10 animate-pulse rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};
