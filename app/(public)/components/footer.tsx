import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="w-full border-t border-gray-200 bg-gray-50">
      <footer className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col items-start space-y-4 max-w-md">
            <Link href={"/"}>
              <img src="/fly.png" height={120} width={120} alt="LinkFly logo" />
            </Link>

            <p className="text-gray-600 text-base leading-relaxed">
              Optimize your LinkedIn profile for <br />
              maximum reach. Built to help professionals <br />
              grow their network 🚀
            </p>

            <Button className="bg-blue-700 hover:bg-blue-600 cursor-pointer mt-2">
              <Link href={"/auth"}>Try Free Now</Link>
            </Button>
          </div>

        
          <div className="flex flex-col space-y-3 text-left">
            <h2 className="text-lg font-semibold text-gray-700">Quick Links</h2>
            <Link className="text-gray-600 hover:text-blue-700 transition-colors" href="/auth/">Login</Link>
            <Link className="text-gray-600 hover:text-blue-700 transition-colors" href="/">Features</Link>
            <Link className="text-gray-600 hover:text-blue-700 transition-colors" href="/">About</Link>
          </div>
        </div>

       
        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} LinkFly - LinkedIn optimization tool for professionals and businesses
          </p>
        </div>
      </footer>
    </div>
  )
}
