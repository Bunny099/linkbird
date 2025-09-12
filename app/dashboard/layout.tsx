"use client"
import { useState } from "react"
import LogoutButton from "./components/logoutBtn"
import Sidebar from "./components/sidebar"
import { Columns2 } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="min-h-screen w-full flex">
     
      {isOpen && <Sidebar />}

      <main className="flex-1 flex flex-col">
       
        <div className="p-2">
          <Columns2
            onClick={() => setIsOpen(!isOpen)}
            className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700 transition"
          />
        </div>

      
        <div className="p-4">{children}</div>
      </main>
    </div>
  )
}
