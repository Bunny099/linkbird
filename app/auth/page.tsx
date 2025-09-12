"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"
import { ArrowLeft } from "lucide-react"
import { useAuthStore } from "@/lib/store/useAuthStore"
import Link from "next/link"

export default function AuthPage() {
  const { step, setStep, name, setName, email, setEmail, password, setPassword, reset } = useAuthStore()


  async function handleLoginGoogle() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    })
  }

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault()
    await authClient.signIn.email({ email, password, callbackURL: "/dashboard" })
    reset()
  }

  async function handleEmailSignup(e: React.FormEvent) {
    e.preventDefault()
    await authClient.signUp.email({ email, name, password, callbackURL: "/auth" })
    reset()
  }

  return (
    <div className="min-h-screen w-full fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 ">
      {step === "choose" && (
        <Card className="w-full max-w-md   shadow-lg rounded-2xl p-6">
          <CardHeader className="text-center">

            <div
              className="text-gray-700 flex items-center hover:cursor-pointer">
              <ArrowLeft className="w-5 h-5" /> <Link href="/">Back</Link>
            </div>
            <CardTitle className="text-2xl font-bold">Continue with an account</CardTitle>
            <CardDescription className="text-gray-800">You must log in or register to continue.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button
              onClick={handleLoginGoogle}
              className="bg-gray-200 text-black font-medium rounded-xl py-4 hover:bg-gray-300 hover:cursor-pointer"
            >
              Continue with Google
            </Button>
            <Button
              onClick={() => setStep("login")}
              className="bg-blue-700 font-medium rounded-xl py-4 hover:bg-blue-600 hover:cursor-pointer"
            >
              Continue with Email
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center gap-3">
            <span>New User?</span>
            <button onClick={() => setStep("register")} className="text-blue-800 hover:underline hover:cursor-pointer">
              Create An account
            </button>
          </CardFooter>
        </Card>
      )}

      {step === "login" && (
        <Card className="w-full max-w-md   shadow-lg rounded-2xl p-6 py-12">
          <CardHeader>
            <div className="flex flex-col  gap-2">
              <div

                className="text-gray-700 flex items-center hover:cursor-pointer "
                onClick={() => setStep("choose")}
              >
                <ArrowLeft className="w-5 h-5" /> Back
              </div>
              <div>
                <CardTitle className="text-2xl font-bold">Login with email</CardTitle>
                <CardDescription className="text-gray-600">Login using your email address.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your Email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your Password"
                />
              </div>
              <Button type="submit" className="w-full rounded-2xl bg-blue-700 hover:bg-blue-600  py-4">
                Login
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center gap-1 md:gap-2 text-sm text-gray-800 border-t border-gray-200">
            <span>Don&apos;t have an account?</span>
            <button onClick={() => setStep("register")} className="text-blue-800  hover:underline hover:cursor-pointer">
              Create New
            </button>
          </CardFooter>
        </Card>
      )}

      {step === "register" && (
        <Card className="w-full max-w-md  shadow-lg rounded-2xl p-6 py-4">
          <CardHeader>
            <div className="flex  flex-col  gap-2">
              <div

                className="text-gray-700 flex items-center hover:cursor-pointer "
                onClick={() => setStep("choose")}
              >
                <ArrowLeft className="w-5 h-5" /> Back
              </div>
              <div>
                <CardTitle className="text-2xl font-bold">Register with email</CardTitle>
                <CardDescription className="text-gray-600">Register using your email address.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleEmailSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your Email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your Password"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-600 rounded-xl py-4 hover:cursor-pointer">
                Create my Account
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center gap-2 text-sm text-gray-800 border-t border-gray-200">
            <span>Already have an account?</span>
            <button onClick={() => setStep("login")} className="text-blue-800 hover:underline hover:cursor-pointer">
              Login
            </button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
