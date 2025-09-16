"use client"
import { motion } from "framer-motion"
import { Sparkles, Lightbulb, Users } from "lucide-react"

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-blue-600" />,
    title: "Profile Analysis",
    desc: "Get a comprehensive scan of your LinkedIn profile, highlighting strengths while uncovering hidden opportunities for improvement. Instantly see what’s working and what needs attention.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
    title: "Smart Suggestions",
    desc: "Receive actionable, AI-powered recommendations to optimize your headline, summary, and skills. Transform your profile into a magnet for recruiters and networking opportunities.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Student & Professional Friendly",
    desc: "Whether you’re just starting your career or already climbing the ladder, our tool adapts to your goals. Perfect for students, job seekers, and working professionals aiming to stand out.",
  },
]

const container = {
  hidden:{opacity:0},
  show:{
    opacity:1,
    tarnistion:{staggerChildren:0.3}
  }
}


const item={
  hidden:{opacity:0,y:40},
  show:{
    opacity:1,
    y:0,
    transition:{duration:0.6,ease:"easeOut" as const}
  }
}

export default function FeaturesSection() {
  return ( <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="space-y-16"
      >
       
        {features.map((feature,i)=>(
          <motion.div key={i} variants={item} className="flex flex-col md:flex-row items-start gap-6 ">
            <div className="flex-shrink-0 p-4 rounded-2xl bg-gray-100 shadow-md ">{feature.icon}</div>
            <div>
             
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    
  )
}


