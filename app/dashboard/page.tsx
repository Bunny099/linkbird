"use client"
import { authClient}  from "@/lib/auth-client" 
import { useRouter } from "next/navigation";

export default function Dashboard(){
    const router = useRouter()
    async function handleLogout(){

     await authClient.signOut(
        {
            fetchOptions:{
                onSuccess:()=>{
                    router.push("/login")
                }
            }
        }
     );
       
    }
    return <div>Dashboard page

        <button className="px-8 py-2 rounded bg-red-600" onClick={handleLogout}>Logout</button>
    </div>
}