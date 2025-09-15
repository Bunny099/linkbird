
"use client"
import { useState } from "react"
import { X, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Video() {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className="flex justify-center px-4">
            <div className="relative cursor-pointer group w-full max-w-5xl aspect-video" onClick={() => setModalOpen(true)}>

                <video
                    className="w-full h-full border rounded-lg pointer-events-none"
                    width={1072}
                    height={600}
                    src="/promo.mp4"      
                    loop
                    muted
                    playsInline
                />

                <div className="absolute inset-0 bg-black/10 flex items-center justify-center rounded-2xl group-hover:bg-black/20 transition">
                    <div className="p-4 bg-gradient-to-b from-blue-950 to bg-blue-600 rounded-full">
                        <Play className="h-8 w-8 text-white" />
                    </div>

                </div>
            </div>

            {modalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className=" relative w-full max-w-5xl aspect-video">

                        <Button size={"icon"} onClick={() => setModalOpen(false)} className="absolute -top-10 right-0 border-gray-100 border-2 rounded-full text-white hover:text-gray-300 hover:cursor-pointer ">
                            <X className="w-8 h-8 " />
                        </Button>
                        <video
                            className="w-full h-full border-2 border-gray-100 rounded-2xl"
                            src="/promo.mp4"
                            autoPlay
                            controls
                            playsInline
                        />
                    </div>
                </div>
            )}
        </div>
    )
}