"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"
import { ArrowLeft,Eye,EyeOff } from "lucide-react"
import { useAuthStore } from "@/lib/store/useAuthStore"
import { useState } from "react"
import Link from "next/link"

export default function AuthPage() {
  const { step, setStep, name, setName, email, setEmail, password, setPassword, loading, setLoading, reset, } = useAuthStore();
 const [showPassword, setShowPassword] = useState(false);

  async function handleLoginGoogle() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    })
  }

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await authClient.signIn.email({ email, password,callbackURL: "/dashboard" })
      reset()
    } catch (err) {
      console.error("Error while Email Logging:", err)
    } finally {
      setLoading(false)
    }


  }

  async function handleEmailSignup(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await authClient.signUp.email({ email, name, password, callbackURL: "/auth" })
      reset()
    } finally {
      setLoading(false)
    }

  }

  const backButton = (
    <div className="flex items-center text-gray-700 hover:cursor-pointer gap-1" onClick={() => setStep("choose")}>
      <ArrowLeft className="w-5 h-5" /> Back
    </div>
  )
  const PasswordInput = (
    <div className="relative">
      <Input
        id="password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Enter your Password"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
      >
        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>
    </div>
  );
 
  return (
    <div className="min-h-screen w-full fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center p-4">


      {step === "choose" && (
        <Card className="w-full max-w-md shadow-lg rounded-2xl p-6">
          <CardHeader className="text-center space-y-2">
            <div className="text-left mb-2">
              <Link href="/" className="flex items-center text-gray-700 gap-1 hover:underline">
                <ArrowLeft className="w-5 h-5" /> Back
              </Link>
            </div>
            <CardTitle className="text-2xl font-bold">Continue with an account</CardTitle>
            <CardDescription className="text-gray-700">You must log in or register to continue.</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <Button
              onClick={handleLoginGoogle}
              variant="outline"
              className="flex items-center justify-center gap-2 rounded-xl py-4 cursor-pointer hover:bg-gray-100"
            >
              Continue with Google
            </Button>

            <Button
              onClick={() => setStep("login")}
              className="flex items-center justify-center gap-2 bg-blue-700 text-white rounded-xl py-4 cursor-pointer hover:bg-blue-600"
            >
              Continue with Email
            </Button>
          </CardContent>

          <CardFooter className="flex justify-center gap-2 text-sm text-gray-700">
            <span>New User?</span>
            <button onClick={() => setStep("register")} className="text-blue-800 hover:underline hover:cursor-pointer">
              Create an account
            </button>
          </CardFooter>
        </Card>
      )}


      {step === "login" && (
        <Card className="w-full max-w-md shadow-lg rounded-2xl p-6 py-12">
          <CardHeader>
            <div className="flex flex-col gap-4">
              {backButton}
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
                 {PasswordInput}
                
              </div>
              <Button disabled={loading} type="submit" className="w-full rounded-2xl bg-blue-700 cursor-pointer hover:bg-blue-600 py-4">
                {loading ? "Logging..." : "LogIn"}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center gap-2 text-sm text-gray-700 border-t border-gray-200">
            <span>Don't have an account?</span>
            <button onClick={() => setStep("register")} className="text-blue-800 hover:underline hover:cursor-pointer">
              Create New
            </button>
          </CardFooter>
        </Card>
      )}


      {step === "register" && (
        <Card className="w-full max-w-md shadow-lg rounded-2xl p-6 py-4">
          <CardHeader>
            <div className="flex flex-col gap-4">
              {backButton}
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
                <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your Email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                {PasswordInput}
              </div>
              <Button disabled={loading} type="submit" className="w-full bg-blue-700 hover:bg-blue-600 cursor-pointer rounded-xl py-4">
                {loading ? "Creating Account..." : "Create my Account"}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center gap-2 text-sm text-gray-700 border-t border-gray-200">
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
