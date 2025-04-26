import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, FileQuestion, ArrowRight } from "lucide-react"

// Mock data for papers
const papers = [
  { id: "paper1", title: "General Knowledge", questions: 100, duration: 90 },
  { id: "paper2", title: "Mathematics", questions: 100, duration: 90 },
  { id: "paper3", title: "English Language", questions: 100, duration: 90 },
  { id: "paper4", title: "Physics", questions: 100, duration: 90 },
  { id: "paper5", title: "Chemistry", questions: 100, duration: 90 },
  { id: "paper6", title: "Biology", questions: 100, duration: 90 },
  { id: "paper7", title: "Computer Science", questions: 100, duration: 90 },
  { id: "paper8", title: "Economics", questions: 100, duration: 90 },
  { id: "paper9", title: "Geography", questions: 100, duration: 90 },
  { id: "paper10", title: "History", questions: 100, duration: 90 },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800 mb-4">
          Practice Makes Perfect
        </div>
        <h1 className="text-4xl font-bold text-purple-700 mb-4 md:text-5xl lg:text-6xl">ExamPrep CBT Platform</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Prepare for your exams with our comprehensive practice tests. Select a paper below to begin your journey to
          success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-purple-600 hover:bg-purple-700">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>

      {/* Available Tests Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Available Tests</h2>
          <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((paper) => (
            <Card
              key={paper.id}
              className="overflow-hidden border-t-4 border-t-purple-500 hover:shadow-lg transition-shadow"
            >
              <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
                <CardTitle className="text-xl text-purple-700">{paper.title}</CardTitle>
                <CardDescription>Practice Test Paper</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center text-sm">
                    <FileQuestion className="mr-2 h-4 w-4 text-purple-500" />
                    <span>{paper.questions} Questions</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="mr-2 h-4 w-4 text-purple-500" />
                    <span>{paper.duration} Minutes</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <BookOpen className="mr-2 h-4 w-4 text-purple-500" />
                    <span>Multiple Choice</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50">
                <Link href={`/exam/${paper.id}`} className="w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Start Test</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 border-t border-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose ExamPrep?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform is designed to help you succeed with features that enhance your learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg bg-white hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Timed Tests</h3>
            <p className="text-gray-600">
              Practice under exam conditions with our 90-minute timed tests to improve your time management skills.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-white hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FileQuestion className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Comprehensive Questions</h3>
            <p className="text-gray-600">
              Each test contains 100 carefully crafted questions covering all important topics in the subject.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-white hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Detailed Explanations</h3>
            <p className="text-gray-600">
              Learn from your mistakes with detailed explanations for each question in your results.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
