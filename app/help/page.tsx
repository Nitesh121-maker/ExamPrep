import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import {
  HelpCircle,
  BookOpen,
  FileQuestion,
  Clock,
  Settings,
  User,
  Search,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800 mb-4">Help Center</div>
        <h1 className="text-4xl font-bold text-purple-700 mb-4 md:text-5xl">How Can We Help You?</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Find answers to common questions and learn how to make the most of ExamPrep.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <Input type="text" placeholder="Search for help articles..." className="pl-10 h-12 text-base" />
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <Button className="absolute right-1.5 top-1.5 bg-purple-600 hover:bg-purple-700">Search</Button>
        </div>
      </div>

      {/* Help Categories */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Browse Help Topics</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <BookOpen className="h-6 w-6 text-purple-600" />,
              title: "Getting Started",
              description: "Learn the basics of using ExamPrep and setting up your account.",
              link: "#getting-started",
            },
            {
              icon: <FileQuestion className="h-6 w-6 text-purple-600" />,
              title: "Taking Tests",
              description: "Everything you need to know about taking practice tests on our platform.",
              link: "#taking-tests",
            },
            {
              icon: <Clock className="h-6 w-6 text-purple-600" />,
              title: "Time Management",
              description: "Tips and tricks for managing your time during exams.",
              link: "#time-management",
            },
            {
              icon: <User className="h-6 w-6 text-purple-600" />,
              title: "Account & Profile",
              description: "Manage your account settings, profile, and preferences.",
              link: "#account",
            },
            {
              icon: <Settings className="h-6 w-6 text-purple-600" />,
              title: "Technical Support",
              description: "Troubleshooting common issues and technical problems.",
              link: "#technical-support",
            },
            {
              icon: <HelpCircle className="h-6 w-6 text-purple-600" />,
              title: "General FAQ",
              description: "Answers to frequently asked questions about our platform.",
              link: "/faq",
            },
          ].map((category, index) => (
            <Link href={category.link} key={index} className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Getting Started Section */}
      <div id="getting-started" className="mb-16 scroll-mt-20">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
            <BookOpen className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Getting Started</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I create an account?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 mb-4">
                Creating an account on ExamPrep is simple and free. Follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Click on the "Sign Up" button in the top right corner of the homepage</li>
                <li>Enter your email address and create a password</li>
                <li>Fill in your basic information</li>
                <li>Verify your email address by clicking the link sent to your inbox</li>
                <li>Start exploring practice tests!</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How do I find practice tests?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 mb-4">You can find practice tests in several ways:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Browse the available tests on the homepage</li>
                <li>Use the search function to find tests by subject or topic</li>
                <li>Visit the "Practice Sets" page for curated collections of tests</li>
                <li>Check your recommended tests based on your previous activity</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Is ExamPrep free to use?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">
                Yes, ExamPrep offers a free tier with access to basic practice tests and features. We also offer premium
                subscriptions with additional features, more practice tests, and advanced analytics. You can compare the
                different plans on our pricing page.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Taking Tests Section */}
      <div id="taking-tests" className="mb-16 scroll-mt-20">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
            <FileQuestion className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Taking Tests</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I start a practice test?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 mb-4">Starting a practice test is easy:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Browse the available tests on the homepage or Practice Sets page</li>
                <li>Click on the test you want to take</li>
                <li>Review the test details (number of questions, time limit, etc.)</li>
                <li>Click the "Start Test" button</li>
                <li>The timer will start automatically and you can begin answering questions</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Can I pause a test and continue later?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">
                Yes, your progress is automatically saved as you go. If you close the browser or navigate away from the
                test, you can return later and continue from where you left off. The timer will resume from the point
                where you paused.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How are my results calculated?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">
                Your results are calculated based on the number of correct answers. Each question is worth one point,
                and there is no penalty for incorrect answers. After submitting your test, you'll see a detailed
                breakdown of your performance, including your score, the questions you got wrong, and explanations for
                the correct answers.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Time Management Section */}
      <div id="time-management" className="mb-16 scroll-mt-20">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
            <Clock className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Time Management</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I manage my time during a test?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 mb-4">Here are some tips for managing your time effectively during a test:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Read all instructions carefully before starting</li>
                <li>Keep an eye on the timer displayed at the top of the screen</li>
                <li>Don't spend too much time on any single question</li>
                <li>If you're unsure about a question, mark it for review and come back to it later</li>
                <li>Try to leave some time at the end to review your answers</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What happens if I run out of time?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">
                If the timer reaches zero, the test will automatically be submitted with your current answers. Any
                unanswered questions will be marked as incorrect. It's important to manage your time well and try to
                answer all questions before the time limit expires.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Can I see how much time I spent on each question?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">
                Yes, in your test results, you can see a breakdown of how much time you spent on each question. This can
                help you identify areas where you might need to improve your time management skills or topics that
                require more study.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Account & Profile Section */}
      <div id="account" className="mb-16 scroll-mt-20">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
            <User className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Account & Profile</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I update my profile information?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 mb-4">To update your profile information:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Click on your profile icon in the top right corner</li>
                <li>Select "Profile Settings" from the dropdown menu</li>
                <li>Update your information as needed</li>
                <li>Click "Save Changes" to apply your updates</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How do I change my password?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 mb-4">To change your password:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Click on your profile icon in the top right corner</li>
                <li>Select "Profile Settings" from the dropdown menu</li>
                <li>Go to the "Security" tab</li>
                <li>Enter your current password and your new password</li>
                <li>Click "Update Password" to save your changes</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How do I delete my account?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">
                If you wish to delete your account, please contact our support team at support@examprep.com. Please note
                that account deletion is permanent and all your data, including test history and results, will be
                permanently removed from our system.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Technical Support Section */}
      <div id="technical-support" className="mb-16 scroll-mt-20">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
            <Settings className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Technical Support</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What browsers are supported?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 mb-4">ExamPrep supports the following browsers:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Google Chrome (recommended)</li>
                <li>Mozilla Firefox</li>
                <li>Safari</li>
                <li>Microsoft Edge</li>
              </ul>
              <p className="text-gray-600 mt-4">
                For the best experience, we recommend using the latest version of these browsers.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>The test isn't loading properly. What should I do?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 mb-4">
                If you're experiencing issues with loading tests, try these troubleshooting steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Refresh the page</li>
                <li>Clear your browser cache and cookies</li>
                <li>Try using a different browser</li>
                <li>Check your internet connection</li>
                <li>Disable browser extensions that might be interfering</li>
              </ol>
              <p className="text-gray-600 mt-4">
                If the problem persists, please contact our support team with details about the issue.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How do I report a bug or technical issue?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 mb-4">To report a bug or technical issue:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Go to the Contact page</li>
                <li>Fill out the contact form with details about the issue</li>
                <li>Select "Technical Support" as the subject</li>
                <li>Include screenshots if possible</li>
                <li>Provide information about your device and browser</li>
              </ol>
              <p className="text-gray-600 mt-4">
                Our technical team will investigate the issue and get back to you as soon as possible.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Contact Support Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Still Need Help?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            If you couldn't find the answer to your question, our support team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <HelpCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Contact Support</h3>
                <p className="text-gray-600 mb-6">
                  Our support team is available Monday through Friday, 9am-5pm to assist you with any questions or
                  issues.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">Contact Support</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit FAQ Page</h3>
                <p className="text-gray-600 mb-6">
                  Check out our comprehensive FAQ page for answers to the most common questions about ExamPrep.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  View FAQs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Video Tutorials Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Video Tutorials</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Learn how to use ExamPrep with our step-by-step video tutorials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Getting Started with ExamPrep",
              duration: "3:45",
              thumbnail: "/placeholder.svg?height=200&width=350",
            },
            {
              title: "How to Take a Practice Test",
              duration: "5:12",
              thumbnail: "/placeholder.svg?height=200&width=350",
            },
            {
              title: "Understanding Your Results",
              duration: "4:30",
              thumbnail: "/placeholder.svg?height=200&width=350",
            },
          ].map((video, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-purple-600 border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <Button className="mt-8" variant="outline">
          View All Tutorials
        </Button>
      </div>
    </div>
  )
}
