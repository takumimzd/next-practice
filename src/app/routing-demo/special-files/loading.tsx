export default function Loading() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded w-1/3 mb-6"></div>
          <div className="space-y-4">
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-8">Loading...</p>
      </div>
    </div>
  )
}
