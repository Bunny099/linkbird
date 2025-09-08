"use client"
import { authClient } from "@/lib/auth-client"
export default function LoginGooglePage(){


    async function handleLogin (){
        await authClient.signIn.social({
            provider:"google",
            callbackURL:"/dashboard"
        })
    }
    return <div>
        <button type="button" onClick={handleLogin} className="px-8 py-4 rounded bg-blue-800 text-2xl font-bold">Login with Google</button>
    </div>
}