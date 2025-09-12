"use client"
import { HousePlus, UserCheck, FlaskConical } from "lucide-react"
import LogoutButton from "./logoutBtn"
import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="w-60 min-h-screen m-2 rounded-xl shadow-xl bg-white flex flex-col">
     
      <div className="flex items-center justify-center py-6 border-b border-gray-200">
        <img src="/fly.png" width={100} height={100} alt="logo" />
      </div>

     
      <div className="flex flex-col px-4 py-6 space-y-2">
        <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
          Overview
        </p>

        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
        >
          <HousePlus className="h-5 w-5" />
          Dashboard
        </Link>

        <Link
          href="/dashboard/optimizer"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
        >
          <UserCheck className="h-5 w-5" />
          Profile
        </Link>

        <Link
          href="/dashboard/post"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
        >
          <FlaskConical className="h-5 w-5" />
          Post
        </Link>
      </div>

    
      <div className="flex-1" />

     
      <div className="border-t border-gray-200 p-4">
        <LogoutButton />
      </div>
    </div>
  )
}
