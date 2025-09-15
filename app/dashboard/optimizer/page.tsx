"use client"

import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Sparkles, FileText, Briefcase, History, Copy } from "lucide-react"
import { motion } from "framer-motion"

type Suggestion = {
  suggestedHeading: string
  suggestedAboutme: string
  suggestedExperience: string
}

export default function ProfileOptimizerPage() {
  const [heading, setHeading] = useState("")
  const [aboutMe, setAboutMe] = useState("")
  const [experience, setExperience] = useState("")
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null)
  const [history, setHistory] = useState<Suggestion[]>([])
  const [loading, setLoading] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  async function linkedInOptimizeFun(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post("/api/optimizer", {
        heading,
        aboutMe,
        experience,
      })
      setSuggestion(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  async function fetchHistory() {
    try {
      const res = await axios.get("/api/optimizer")
      setHistory(res.data.slice(0, 3))
      setShowHistory(true)
    } catch (err) {
      console.error("Error fetching history", err)
    }
  }

  function copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="flex flex-col w-full h-full">

      <div className="flex items-center justify-between gap-2 p-4 border-b bg-white/80 backdrop-blur sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-900">Profile Optimizer</h1>
        </div>
        <Button onClick={fetchHistory} size="sm" variant="outline" className="flex items-center gap-2 cursor-pointer bg-blue-600 text-white hover:bg-blue-500 hover:text-white">
          <History className="w-4 h-4" /> Get Last 3
        </Button>
      </div>


      <div className="flex-1 overflow-y-auto p-6 space-y-10">

        <motion.form 
        
        onSubmit={linkedInOptimizeFun} 
         initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
        className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1  items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" /> Headline
            </label>
            <textarea
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              placeholder="Enter  headline..."
              rows={3}
              className="w-full p-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1  items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" /> About You
            </label>
            <textarea
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              placeholder="Enter about you..."
              rows={4}
              className="w-full p-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1  items-center gap-2">
              <Briefcase className="w-4 h-4 text-green-600" /> Experience
            </label>
            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Add your professional experience..."
              rows={5}
              className="w-full p-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>


          <div className="flex justify-end">
            <Button
              disabled={loading}
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-8 py-3 rounded-xl shadow-lg"
            >
              {loading ? "Optimizing..." : "Optimize Profile "}
            </Button>
          </div>
        </motion.form>

        {suggestion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-lg font-semibold text-gray-800">Suggestions</h2>

            <div className="space-y-4">
              <div className="relative bg-blue-50 border border-blue-200 p-4 rounded-xl">
                <span className="block text-sm font-semibold text-blue-600 mb-2">Headline</span>
                <p className="text-blue-900">{suggestion.suggestedHeading}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 hover:bg-blue-50 rounded-full"
                  onClick={() => copyToClipboard(suggestion.suggestedHeading, "Headline")}
                >
                  <Copy className="w-4 h-4 text-gray-600" />
                </Button>
                {copied === "Headline" && (
                  <span className="text-xs text-green-600">Copied!</span>
                )}
              </div>

              <div className="relative bg-purple-50 border border-purple-200 p-4 rounded-xl">
                <span className="block text-sm font-semibold text-purple-600 mb-2">About</span>
                <p className="text-purple-900 whitespace-pre-line">{suggestion.suggestedAboutme}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 hover:bg-blue-50 rounded-full"
                  onClick={() => copyToClipboard(suggestion.suggestedAboutme, "About")}
                >
                  <Copy className="w-4 h-4 text-gray-600" />
                </Button>
                {copied === "About" && (
                  <span className="text-xs text-green-600">Copied!</span>
                )}
              </div>

              <div className="relative bg-green-50 border border-green-200 p-4 rounded-xl">
                <span className="block text-sm font-semibold text-green-600 mb-2">Experience</span>
                <p className="text-green-900 whitespace-pre-line">{suggestion.suggestedExperience}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 hover:bg-blue-50 rounded-full "
                  onClick={() => copyToClipboard(suggestion.suggestedExperience, "Experience")}
                >
                  <Copy className="w-4 h-4 text-gray-600" />
                </Button>
                {copied === "Experience" && (
                  <span className="text-xs text-green-600">Copied</span>
                )}
              </div>
            </div>
          </motion.div>
        )}


        {showHistory && history.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6"> Recent Optimizations</h2>
            <div className="relative border-l border-gray-300 pl-6 space-y-6">
              {history.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold">
                    {i + 1}
                  </span>
                  <div className="bg-white shadow-md rounded-xl p-4 space-y-2">
                    <p className="text-sm"><span className="font-semibold text-blue-600">Headline:</span> {h.suggestedHeading}</p>
                    <p className="text-sm"><span className="font-semibold text-purple-600">About:</span> {h.suggestedAboutme}</p>
                    <p className="text-sm"><span className="font-semibold text-green-600">Experience:</span> {h.suggestedExperience}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 hover:bg-blue-50 rounded-full"
                    onClick={() =>
                      copyToClipboard(
                        `${h.suggestedHeading}\n\n${h.suggestedAboutme}\n\n${h.suggestedExperience}`,
                        `History ${i + 1}`
                      )
                    }
                  >
                    <Copy className="w-4 h-4 text-gray-600" />
                  </Button>
                  {copied === `History ${i + 1}` && (
                    <span className="absolute bottom-2 right-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full shadow-sm">
                      Copied
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
