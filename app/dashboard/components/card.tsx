"use client"

import { useRouter } from "next/navigation"
import { UserCheck, FlaskConical } from "lucide-react";



export default function DashboardCard() {
    const router = useRouter()

    const actions = [
        {
            title: "Optimize Profile",
            description: "Improve your LinkedIn profile.",
            icon: <UserCheck className="w-6 h-6 text-indigo-600" />,
            onClick: () => router.push("/dashboard/optimizer"),
        },
        {
            title: "Generate Post",
            description: "Create engaging LinkedIn posts instantly.",
            icon: <FlaskConical className="w-6 h-6 text-indigo-600" />,
            onClick: () => router.push("/dashboard/post"),
        }

    ]

    return <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {actions.map((action, idx) => (
            <div
                key={idx}
                onClick={action.onClick}
                className="cursor-pointer shadow-lg border border-gray-200 rounded-xl p-6 hover:shadow-xl transition group"
            >
                <div className="flex items-center gap-3 mb-3">
                    {action.icon}
                    <h2 className="text-lg font-semibold text-gray-700 group-hover:text-indigo-600">
                        {action.title}
                    </h2>
                </div>
                <p className="text-sm text-gray-500">{action.description}</p>
            </div>
        ))}
    </div>
}