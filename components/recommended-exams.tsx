import { ArrowRight, BookOpen, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for recommended exams
const recommendedExams = [
  {
    id: 1,
    title: "UPSC Prelims - Indian Polity",
    difficulty: "Medium",
    duration: "45 min",
    questions: 50,
    rating: 4.8,
  },
  {
    id: 2,
    title: "SSC CGL - Quantitative Aptitude",
    difficulty: "Hard",
    duration: "60 min",
    questions: 25,
    rating: 4.5,
  },
  {
    id: 3,
    title: "English Grammar - Advanced",
    difficulty: "Medium",
    duration: "30 min",
    questions: 40,
    rating: 4.2,
  },
]

export function RecommendedExams() {
  return (
    <div className="space-y-3">
      {recommendedExams.map((exam) => (
        <div key={exam.id} className="border rounded-lg p-3 hover:bg-gray-50 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium text-sm">{exam.title}</h4>
            <div className="flex items-center text-amber-500">
              <Star className="h-3 w-3 fill-amber-500 mr-1" />
              <span className="text-xs">{exam.rating}</span>
            </div>
          </div>
          <div className="flex items-center text-xs text-gray-500 mb-3">
            <span className="mr-3">{exam.difficulty}</span>
            <div className="flex items-center mr-3">
              <Clock className="h-3 w-3 mr-1" />
              <span>{exam.duration}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-3 w-3 mr-1" />
              <span>{exam.questions} questions</span>
            </div>
          </div>
          <Button size="sm" variant="ghost" className="w-full justify-between text-purple-600 hover:text-purple-700">
            Start Exam <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  )
}
