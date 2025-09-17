import Footer from "./components/footer";
import Navbar from "./components/navbar";



export default function LandingSietLayout({children}:{children:React.ReactNode}){


    return <div >
        <Navbar/>
      
        <main className="bg-gradient-to-b from-white  to-blue-50 min-h-screen w-full">
             {children}
        </main>
        <Footer/>
       
    </div>
}