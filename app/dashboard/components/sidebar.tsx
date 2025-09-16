"use client"

import { HousePlus, UserCheck, FlaskConical, LogOut, ChevronLeft, ChevronRight } from "lucide-react"
import LogoutButton from "./logoutBtn"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export default function Sidebar({ isOpen = true, toggleAction }: { isOpen?: boolean; toggleAction?: () => void }) {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: HousePlus },
    { href: "/dashboard/optimizer", label: "Profile", icon: UserCheck },
    { href: "/dashboard/post", label: "Post", icon: FlaskConical },
  ]

  return (
    <div
      className={clsx(
        "min-h-screen  rounded-2xl bg-white/80 backdrop-blur-md shadow-xl border border-gray-100 flex flex-col transition-all duration-300",
        isOpen ? "w-64" : "w-20"
      )}
    >

      <div className="flex items-center justify-between py-6 px-4 border-b border-gray-100">
        <img
          src="/fly.png"
          width={isOpen ? 80 : 40}
          height={80}
          alt="logo"
          className="drop-shadow-sm transition-all"
        />
        {toggleAction && (
          <button
            onClick={toggleAction}
            className="p-1 rounded-md hover:bg-gray-100 transition"
          >
            {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        )}
      </div>


      <div className="flex flex-col px-3 py-6 space-y-2 flex-1">
        <p
          className={clsx(
            "uppercase tracking-wide text-gray-400 font-semibold mb-2 text-xs transition-all",
            !isOpen && "opacity-0 hidden"
          )}
        >
          Menu
        </p>

        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                active
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {isOpen && <span>{label}</span>}
            </Link>
          )
        })}
      </div>


      <div className="border-t border-gray-100 p-3">
        <LogoutButton className="flex items-center gap-2 bg-red-50 text-sm font-medium text-red-600 hover:bg-red-100 w-full px-3 py-2 cursor-pointer rounded-lg transition">
          <LogOut className="h-5 w-5" />
          {isOpen && <span>Logout</span>}
        </LogoutButton>

      </div>
    </div>
  )
}
