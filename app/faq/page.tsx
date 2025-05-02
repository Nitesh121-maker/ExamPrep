import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, HelpCircle, Mail } from "lucide-react"

export default function FAQPage() {
  // FAQ data organized by categories
  const faqData = {
    general: [
      {
        question: "What is ExamPrep?",
        answer:
          "ExamPrep is a Computer Based Test (CBT) platform designed to help students practice for exams. It offers a variety of practice tests across different subjects, with features like timed exams, detailed results analysis, and progress tracking.",
      },
      {
        question: "Is ExamPrep free to use?",
        answer:
          "Yes, ExamPrep offers a free tier with access to basic practice tests and features. We also offer premium subscriptions with additional features, more practice tests, and advanced analytics.",
      },
      {
        question: "Do I need to create an account to use ExamPrep?",
        answer:
          "While you can take some sample tests without an account, creating a free account allows you to save your progress, track your performance over time, and access personalized recommendations.",
      },
      {
        question: "What subjects are covered on ExamPrep?",
        answer:
          "ExamPrep covers a wide range of subjects including Mathematics, English Language, General Knowledge, Physics, Chemistry, Biology, Computer Science, Economics, Geography, and History. We're constantly adding new subjects and topics.",
      },
      {
        question: "How often is new content added?",
        answer:
          "We add new practice tests and questions regularly. Our content team works with educators to ensure that our question bank is up-to-date and aligned with current curricula and exam patterns.",
      },
    ],
    tests: [
      {
        question: "How long are the practice tests?",
        answer:
          "Most of our practice tests are designed to be completed in 90 minutes, similar to many standardized exams. Each test typically contains 100 multiple-choice questions.",
      },
      {
        question: "Can I pause a test and continue later?",
        answer:
          "Yes, your progress is automatically saved as you go. If you close the browser or navigate away from the test, you can return later and continue from where you left off.",
      },
      {
        question: "How are the tests scored?",
        answer:
          "Each question is worth one point, and there is no penalty for incorrect answers. Your final score is calculated as the percentage of correct answers out of the total number of questions.",
      },
      {
        question: "Can I review my answers after submitting a test?",
        answer:
          "Yes, after submitting a test, you'll see a detailed results page showing your score, the questions you got wrong, and explanations for the correct answers. This helps you learn from your mistakes.",
      },
      {
        question: "Are the practice tests similar to real exams?",
        answer:
          "Our practice tests are designed to simulate real exam conditions as closely as possible. The questions are created by experienced educators and follow similar formats and difficulty levels as actual exams.",
      },
    ],
    account: [
      {
        question: "How do I create an account?",
        answer:
          "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. Enter your email address, create a password, and fill in your basic information. Then verify your email address by clicking the link sent to your inbox.",
      },
      {
        question: "How do I reset my password?",
        answer:
          "If you've forgotten your password, click on the 'Sign In' button, then select 'Forgot Password'. Enter the email address associated with your account, and we'll send you a link to reset your password.",
      },
      {
        question: "Can I change my email address?",
        answer:
          "Yes, you can change your email address in your account settings. Go to your profile, select 'Account Settings', and update your email address. You'll need to verify your new email address before the change takes effect.",
      },
      {
        question: "How do I delete my account?",
        answer:
          "If you wish to delete your account, please contact our support team at support@examprep.com. Please note that account deletion is permanent and all your data, including test history and results, will be permanently removed from our system.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Yes, we take data security very seriously. All personal information is encrypted and stored securely. We never share your information with third parties without your consent. You can review our Privacy Policy for more details on how we handle your data.",
      },
    ],
    technical: [
      {
        question: "What browsers are supported?",
        answer:
          "ExamPrep supports all major modern browsers including Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. For the best experience, we recommend using the latest version of these browsers.",
      },
      {
        question: "Can I use ExamPrep on mobile devices?",
        answer:
          "Yes, ExamPrep is fully responsive and works on smartphones and tablets. However, for the best test-taking experience, we recommend using a desktop or laptop computer.",
      },
      {
        question: "What should I do if a test doesn't load properly?",
        answer:
          "If you're experiencing issues with loading tests, try refreshing the page, clearing your browser cache, or using a different browser. If the problem persists, please contact our support team with details about the issue.",
      },
      {
        question: "Is an internet connection required to use ExamPrep?",
        answer:
          "Yes, ExamPrep requires an active internet connection to load tests and save your progress. We recommend a stable connection to prevent any interruptions during your test-taking experience.",
      },
      {
        question: "What happens if my internet connection drops during a test?",
        answer:
          "If your internet connection drops briefly, the system will attempt to reconnect automatically. Your answers are saved as you go, so you shouldn't lose progress. If you can't reconnect, you can resume the test when your connection is restored.",
      },
    ],
    billing: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and in some regions, we offer additional local payment methods.",
      },
      {
        question: "How do I cancel my subscription?",
        answer:
          "To cancel your subscription, go to your account settings, select 'Subscription', and click on 'Cancel Subscription'. Your access will continue until the end of your current billing period.",
      },
      {
        question: "Can I get a refund if I'm not satisfied?",
        answer:
          "We offer a 14-day money-back guarantee for new subscribers. If you're not satisfied with our service within the first 14 days, contact our support team to request a refund.",
      },
      {
        question: "Will my subscription automatically renew?",
        answer:
          "Yes, subscriptions automatically renew at the end of each billing period. You can turn off auto-renewal in your account settings at any time before the next billing date.",
      },
      {
        question: "Are there any discounts for students or educators?",
        answer:
          "Yes, we offer special discounts for students, educators, and educational institutions. Contact our sales team for more information about our educational pricing.",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800 mb-4">
          Frequently Asked Questions
        </div>
        <h1 className="text-4xl font-bold text-purple-700 mb-4 md:text-5xl">How Can We Help?</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Find answers to commonly asked questions about ExamPrep. Can't find what you're looking for? Contact our
          support team.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative mb-12">
          <Input type="text" placeholder="Search for answers..." className="pl-10 h-12 text-base" />
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <Button className="absolute right-1.5 top-1.5 bg-purple-600 hover:bg-purple-700">Search</Button>
        </div>
      </div>

      {/* FAQ Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="general" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full max-w-3xl">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="tests">Tests</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="all">All FAQs</TabsTrigger>
            </TabsList>
          </div>

          {/* General FAQs */}
          <TabsContent value="general" className="mt-0">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">General Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqData.general.map((item, index) => (
                  <AccordionItem key={index} value={`general-item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* Tests FAQs */}
          <TabsContent value="tests" className="mt-0">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Test-Related Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqData.tests.map((item, index) => (
                  <AccordionItem key={index} value={`tests-item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* Account FAQs */}
          <TabsContent value="account" className="mt-0">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqData.account.map((item, index) => (
                  <AccordionItem key={index} value={`account-item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* Technical FAQs */}
          <TabsContent value="technical" className="mt-0">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqData.technical.map((item, index) => (
                  <AccordionItem key={index} value={`technical-item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* Billing FAQs */}
          <TabsContent value="billing" className="mt-0">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing & Subscription Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqData.billing.map((item, index) => (
                  <AccordionItem key={index} value={`billing-item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* All FAQs */}
          <TabsContent value="all" className="mt-0">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">All Frequently Asked Questions</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">General Questions</h3>
                <Accordion type="single" collapsible className="w-full mb-6">
                  {faqData.general.map((item, index) => (
                    <AccordionItem key={index} value={`all-general-${index}`}>
                      <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Test-Related Questions</h3>
                <Accordion type="single" collapsible className="w-full mb-6">
                  {faqData.tests.map((item, index) => (
                    <AccordionItem key={index} value={`all-tests-${index}`}>
                      <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Account Questions</h3>
                <Accordion type="single" collapsible className="w-full mb-6">
                  {faqData.account.map((item, index) => (
                    <AccordionItem key={index} value={`all-account-${index}`}>
                      <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Technical Questions</h3>
                <Accordion type="single" collapsible className="w-full mb-6">
                  {faqData.technical.map((item, index) => (
                    <AccordionItem key={index} value={`all-technical-${index}`}>
                      <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Billing & Subscription Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  {faqData.billing.map((item, index) => (
                    <AccordionItem key={index} value={`all-billing-${index}`}>
                      <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Still Have Questions Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block rounded-full bg-purple-100 p-3 mb-6">
            <HelpCircle className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact Support
            </Button>
            <Button variant="outline">Visit Help Center</Button>
          </div>
        </div>
      </div>

      {/* Popular Topics */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Popular Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Account Setup",
            "Taking Tests",
            "Billing & Payments",
            "Technical Issues",
            "Results & Analysis",
            "Practice Sets",
            "Mobile Access",
            "Privacy & Security",
          ].map((topic, index) => (
            <Button key={index} variant="outline" className="justify-start h-auto py-3">
              {topic}
            </Button>
          ))}
        </div>
      </div>

      {/* Feedback Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Was This Helpful?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">Help us improve our FAQ section by providing feedback.</p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline">Yes, it was helpful</Button>
          <Button variant="outline">No, I need more help</Button>
        </div>
      </div>
    </div>
  )
}
