import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function Footer() {

    return <div className="w-full border-t border-gray-700 ">
        <footer >
            <div className="flex justify-between px-6 pt-22">
                 <div className="flex flex-col space-y-4">
                <img src="/logo.svg" height={150} width={150} />
                <div className="text-lg text-gray-600">
                    <h1>Automate Your B2B LinkedIn Outreach</h1>
                    <h1>Made with ❤️ by Sales Leaders</h1>
                </div>
                <div>
                     <Button className="bg-blue-700 hover:bg-blue-600 cursor-pointer mt-4">
                    Get Started Now
                </Button>
                </div>
               

            </div>
            <div className="grid grid-cols-3 gap-12">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-xl font-semibold text-gray-700">Product</h1>
                    <Link className="linktext" href="/auth/login">Login</Link>
                    <Link className="linktext" href="#">Features</Link>
                    <Link className="linktext" href="#">Pricing</Link>
                    <Link className="linktext" href="#">Affiliate</Link>


                </div>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-xl font-semibold text-gray-700">Company</h1>
                    <Link className="linktext" href="#">Contact Us</Link>
                    <Link className="linktext" href="#">Help & Support</Link>
                    <Link className="linktext" href="#">Roadmap</Link>
                    <Link className="linktext" href="#">Blogs</Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-xl font-semibold text-gray-700">Legal</h1>
                    <Link className="linktext" href="#">Terms & Conditions</Link>
                    <Link className="linktext" href="#">Fair use Policy</Link>
                    <Link className="linktext" href="#">Privacy Policy</Link>
                   
                </div>

            </div>
            </div>
            <div className="  border-t border-gray-300 shadow-md mt-8">
                <p className="text-center text-gray-500 text-sm pt-4">LinkBird-LinkedIn automation tool for agencies, sales teams and GTM operators &#169; 2025</p>
            </div>
           
        </footer>
    </div>
}