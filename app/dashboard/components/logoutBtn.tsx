"use client"
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
export default function LogoutButton(){
    const router = useRouter()
    async function handleLogout(){
        await authClient.signOut({
            fetchOptions:{
                onSuccess: ()=>{
                    router.push("/")
                }
            }
        })
    }
    return <Button  className="bg-blue-700 hover:bg-blue-600 cursor-pointer" onClick={handleLogout}>
        Logout
    </Button>
}