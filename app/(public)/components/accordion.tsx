import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqAccordion() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      
      <Accordion
        type="single"
        collapsible
        className="space-y-4"
        defaultValue="item-1"
      >
        <AccordionItem
          value="item-1"
          className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
        >
          <AccordionTrigger className="px-4 py-3 text-lg font-medium hover:no-underline hover:cursor-pointer">
            What is Linkfly?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-600 dark:text-gray-300">
            Linkfly is a LinkedIn optimization tool designed to help students
            and professionals improve their profiles for better visibility,
            stronger networking, and enhanced career opportunities.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
        >
          <AccordionTrigger className="px-4 py-3 text-lg font-medium hover:no-underline hover:cursor-pointer">
            Who can use Linkfly?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-600 dark:text-gray-300">
            Anyone with a LinkedIn profile! Whether you’re a student preparing
            for internships, a fresher looking for your first job, or a
            professional aiming to grow your network and career, Linkfly is
            built for you.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
        >
          <AccordionTrigger className="px-4 py-3 text-lg font-medium hover:no-underline hover:cursor-pointer">
            How does it improve my profile?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-600 dark:text-gray-300 space-y-2">
            <p>
              Linkfly analyzes your profile, highlights areas of improvement,
              and provides actionable suggestions for sections like your
              headline, summary, skills, and experience.
            </p>
            <p>
              This ensures your profile is more attractive to recruiters and
              industry peers.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

     
      <Accordion
        type="single"
        collapsible
        className="space-y-4"
        defaultValue="item-4"
      >
        <AccordionItem
          value="item-4"
          className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
        >
          <AccordionTrigger className="px-4 py-3 text-lg font-medium hover:no-underline hover:cursor-pointer">
            Do I need to share my LinkedIn password?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-600 dark:text-gray-300">
            No, never. Linkfly does not require your password or direct login
            credentials. Our tool works with publicly available information to
            provide optimization suggestions.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
        >
          <AccordionTrigger className="px-4 py-3 text-lg font-medium hover:no-underline hover:cursor-pointer">
            Can Linkfly guarantee a job?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-600 dark:text-gray-300">
            While Linkfly significantly improves your profile visibility and
            makes it more appealing to recruiters, we do not guarantee jobs or
            internships. Our goal is to maximize your chances of being noticed
            and shortlisted.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-6"
          className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
        >
          <AccordionTrigger className="px-4 py-3 text-lg font-medium hover:no-underline hover:cursor-pointer">
            Is it free to use?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-600 dark:text-gray-300">
            Yes! Linkfly is currently 100% free to use with all available
            features. We want to make LinkedIn optimization accessible to
            everyone without any cost.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
