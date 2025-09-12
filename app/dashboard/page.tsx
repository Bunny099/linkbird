export default function Dashboard() {
  return (
    <div className="flex flex-col w-full min-h-screen p-4">
      {/* Page title */}
      <div className="flex gap-2 items-center">
        <h1 className="text-lg font-semibold text-gray-600">Dashboard</h1>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6 w-full py-6">
        {/* Left column */}
        <div className="flex flex-col gap-4 flex-1">
          <div className="h-[200px] md:h-[350px] shadow-xl border border-gray-200 rounded-xl p-4">
            <h1 className="text-lg font-semibold">Home</h1>
          </div>
          <div className="h-[200px] shadow-xl border border-gray-200 rounded-xl p-4">
            <h1 className="text-lg font-semibold">LinkedIn Accounts</h1>
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 shadow-xl border border-gray-200 rounded-xl p-4">
          <h1 className="text-lg font-semibold">Recent Activity</h1>
        </div>
      </div>
    </div>
  )
}
