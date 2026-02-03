export function EventSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-32 rounded-xl bg-gray-200" />
      <div className="h-6 w-1/2 bg-gray-200 rounded" />
      <div className="space-y-3">
        <div className="h-20 bg-gray-200 rounded-xl" />
        <div className="h-20 bg-gray-200 rounded-xl" />
      </div>
    </div>
  )
}
