"use client"

import { useState } from "react"
import Sidebar from "./components/sidebar"
import { Menu } from "lucide-react"


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  return (<div className="min-h-screen w-full flex bg-gray-50">

    <div className="hidden md:flex">
      <Sidebar isOpen={isOpen} toggleAction={() => setIsOpen(!isOpen)} />
    </div>
    {mobileOpen && (
      <div className="fixed inset-0 z-50 flex">
        <div className="w-64">
          <Sidebar isOpen={true} toggleAction={() => setMobileOpen(false)} />
        </div>
        <div className="bg-black/40 flex-1"
          onClick={() => setMobileOpen(false)} >
        </div>
      </div>
    )}

    <main className="flex-1 flex flex-col">
      <div className="p-3 flex items-center">
        <Menu
          className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-900 transition"
          onClick={() => {
            if (window.innerWidth < 768) setMobileOpen(true)
            else setIsOpen(!isOpen)
          }}
        />
      </div>
      <div className="p-4">{children}</div>
    </main>
  </div>

  )
}
