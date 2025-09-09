"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X, Menu } from "lucide-react"
export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return <div className="w-full flex justify-center sticky top-0 z-50 ">
        <nav className=" px-6 md:px-8 rounded-2xl shadow-md bg-white mt-6 py-3 flex items-center justify-between w-full max-w-6xl">
            <img src="/logo.svg" alt="Logo" height={150} width={150} />

            <ul className="hidden md:flex gap-12 text-lg text-gray-600 ">
                <li className="hover:cursor-pointer hover:text-blue-700">Home</li>
                <li className="hover:cursor-pointer hover:text-blue-700">Features</li>
                <li className="hover:cursor-pointer hover:text-blue-700">Pricing</li>
            </ul>

            <div className="hidden md:block">
                <Button className="bg-blue-700 hover:bg-blue-600 cursor-pointer">
                    Get Started
                </Button>
            </div>

            <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {isOpen && (
                <div className="absolute top-25 left-1 w-full bg-white shadow-md rounded-xl px-6 mr-4 py-4 md:hidden z-40">
                    <ul className="flex flex-col gap-4 text-lg text-gray-600">
                        <li className="hover:cursor-pointer hover:text-blue-700">Home</li>
                        <li className="hover:cursor-pointer hover:text-blue-700">Feature</li>
                        <li className="hover:cursor-pointer hover:text-blue-700">Pricing</li>
                    </ul>
                    <div className="mt-6 ">
                        <Button className="w-full bg-blue-700 hover:bg-blue-600 cursor-pointer">
                            Get Started
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    </div>

}