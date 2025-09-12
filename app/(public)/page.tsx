import Image from "next/image";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (<div className="min-h-screen pt-12">

    <section className="flex justify-center flex-col items-center">
      <div className="px-4 py-1 shadow-2xl shadow-blue-800 mb-4 text-sm text-gray-700 rounded-4xl border border-blue-500">Boost Your LinkedIn Presence - No Guesswork</div>

       <h1 className="text-3xl md:text-6xl px-2 md:px-1 py-4 font-bold text-center">
          Optimize Your LinkedIn Profile <br /> for Maximum Opportunities
        </h1>
       <h2 className="text-base md:text-2xl text-gray-700 md:text-gray-600 text-center py-1 md:py-4 md:font-light">
          LinkFly helps you craft a professional LinkedIn profile, <br />
          attract recruiters, and grow your network with ease.
        </h2>
      <Button className="mt-8 md:mt-4  bg-blue-700 hover:bg-blue-600 cursor-pointer">
          <Link href="/auth">Start Optimizing</Link>
        
      </Button>
    </section>

  </div>

  );
}
