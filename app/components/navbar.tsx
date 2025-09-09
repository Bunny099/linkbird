import { Button } from "@/components/ui/button";


export default function Navbar() {

    return <div className="w-full flex justify-center sticky top-0 ">
        <nav className="  px-8 rounded-2xl shadow-md bg-white mt-6 py-3 flex items-center justify-between w-7xl">
            <img src="/logo.svg" className="" alt="" height={150} width={150} />

            <ul className="flex gap-12 text-lg text-gray-600 font-semibold">
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
            </ul>
            <div>
                <Button className="bg-blue-700 hover:bg-blue-600 cursor-pointer">
                    Get Started
                </Button>
            </div>
        </nav>
    </div>

}