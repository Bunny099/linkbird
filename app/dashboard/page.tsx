
import { HousePlus } from "lucide-react"
import DashboardCard from "./components/card"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function Dashboard() {

  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) {
    return <p>No logged In</p>
  }
  const { name, email, image } = session.user

  return (<div className="flex flex-col w-full h-full">

    <div className="flex items-center justify-between gap-2 p-4 border-b bg-white/80 backdrop-blur sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <HousePlus className="w-6 h-6 text-blue-600" />
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>

      </div>

    </div>

    <div className="mt-8">
      <div className="flex flex-col md:flex-row items-center gap-6 w-full p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow">
        <img
          src={image ?? "/fly.png"}
          alt={name ?? "User"}
          className="h-24 w-24 rounded-full border-4 border-blue-100 object-cover"
        />

        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800">
            Welcome, <span className="text-blue-600">{name}</span>
          </h3>
          <p className="text-gray-600 text-base">{email}</p>
        </div>
      </div>

    </div>
    <div><DashboardCard /></div>

  </div>



  )
}
