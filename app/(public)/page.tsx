import { Button } from "@/components/ui/button";
import Link from "next/link";
import Video from "./components/video";
import { FaqAccordion } from "./components/accordion";
import FeaturesSection from "./components/feature";
export default function Home() {
  return (<div className=" min-h-screen pt-8">

    <section className="flex flex-col items-center text-center px-4 py-12">
  <div className="px-3 py-1 shadow-md shadow-blue-400 mb-4 text-xs md:text-sm text-gray-700 rounded-full border border-blue-500">
    Boost Your LinkedIn Presence
  </div>

  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-balance">
    Optimize Your{" "}
    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
      LinkedIn Profile
    </span>{" "}
    for{" "}
    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
      Maximum Opportunities
    </span>
  </h1>

  <h2 className="mt-4 text-base sm:text-lg md:text-2xl text-gray-700 font-normal max-w-2xl leading-relaxed text-balance">
   Turn your LinkedIn into an opportunity magnet with LinkFly.
  </h2>

  <Button className="mt-6 md:mt-8 bg-blue-700 hover:bg-blue-600 cursor-pointer px-6 py-3 text-base md:text-lg  shadow-md">
    <Link href="/auth">Get Started Free</Link>
  </Button>
</section>



    <section className="my-8">
      <Video />
    </section>


    <section id="features" className="relative max-w-5xl mx-auto px-6  py-24">


      <div className="flex flex-col justify-center items-center text-center mb-16">

        <div className=" px-4 py-2 text-center  w-[200px] shadow-md shadow-blue-400 mb-4 text-xs md:text-sm text-gray-700 rounded-full border border-blue-500">Learn How Its Works</div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-1">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Features
          </span>
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Designed to Help You Shine on LinkedIn
        </p>
      </div>
      <FeaturesSection />

    </section>

    <section id="faq" className="flex flex-col justify-center items-center w-full bg-white py-24">
      <div className=" px-4 py-2 text-center  w-[150px] shadow-md shadow-blue-400 mb-4 text-xs md:text-sm text-gray-700 rounded-full border border-blue-500">Any Questions?</div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Frequently Asked Questions!
          </span>
        </h2>

        <FaqAccordion />

      </div>
    </section>

  </div>

  );
}
