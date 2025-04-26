"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ArrowLeft, ArrowRight, Clock, AlertTriangle } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { getPaperData } from "@/lib/data"

export default function ExamPage({ params }: { params: { paperId: string } }) {
  const router = useRouter()
  const [paper, setPaper] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [timeLeft, setTimeLeft] = useState(90 * 60) // 90 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Load paper data
  useEffect(() => {
    const loadPaper = async () => {
      try {
        const data = await getPaperData(params.paperId)
        setPaper(data)

        // Check if there's saved progress
        const savedProgress = localStorage.getItem(`exam_${params.paperId}`)
        if (savedProgress) {
          const {
            answers: savedAnswers,
            timeLeft: savedTimeLeft,
            currentQuestion: savedCurrentQuestion,
          } = JSON.parse(savedProgress)
          setAnswers(savedAnswers || {})
          setTimeLeft(savedTimeLeft || 90 * 60)
          setCurrentQuestion(savedCurrentQuestion || 0)
        }

        setLoading(false)
      } catch (error) {
        console.error("Failed to load paper:", error)
        setLoading(false)
      }
    }

    loadPaper()
  }, [params.paperId])

  // Timer effect
  useEffect(() => {
    if (loading || timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1
        if (newTime <= 0) {
          clearInterval(timer)
          handleSubmit()
          return 0
        }
        return newTime
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [loading, timeLeft])

  // Save progress to localStorage
  useEffect(() => {
    if (loading || !paper) return

    localStorage.setItem(
      `exam_${params.paperId}`,
      JSON.stringify({
        answers,
        timeLeft,
        currentQuestion,
      }),
    )
  }, [answers, timeLeft, currentQuestion, params.paperId, loading, paper])

  const handleAnswerSelect = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: value,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < paper.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Submitting test...")
    setIsSubmitting(true)

    // Calculate results
    const results = {
      paperId: params.paperId,
      paperTitle: paper.title,
      totalQuestions: paper.questions.length,
      answers,
      correctAnswers: 0,
      wrongAnswers: [],
      timeSpent: 90 * 60 - timeLeft,
    }

    paper.questions.forEach((question: any, index: number) => {
      if (answers[index] === question.answer) {
        results.correctAnswers++
      } else {
        results.wrongAnswers.push({
          questionId: question.id,
          question: question.question,
          userAnswer: answers[index] || "Not answered",
          correctAnswer: question.answer,
          explanation: question.explanation,
        })
      }
    })

    // Store results and navigate to results page
    console.log("Storing results and navigating...")
    localStorage.setItem("examResults", JSON.stringify(results))
    localStorage.removeItem(`exam_${params.paperId}`) // Clear progress
    router.push("/result")
  }

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Calculate progress percentage
  const calculateProgress = () => {
    return (Object.keys(answers).length / (paper?.questions.length || 1)) * 100
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading exam paper...</p>
        </div>
      </div>
    )
  }

  if (!paper) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Paper Not Found</h1>
          <p className="mt-2 text-gray-600">The requested exam paper could not be found.</p>
          <Button className="mt-4" onClick={() => router.push("/")}>
            Return to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  const question = paper.questions[currentQuestion]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Exam Header */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-purple-700">{paper.title}</h1>
          <p className="text-gray-600">
            Question {currentQuestion + 1} of {paper.questions.length}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 ${timeLeft < 300 ? "text-red-600 animate-pulse" : "text-gray-700"}`}>
            <Clock className="h-5 w-5" />
            <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" disabled={isSubmitting}>
                Submit Test
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to submit?</AlertDialogTitle>
                <AlertDialogDescription>
                  You have answered {Object.keys(answers).length} out of {paper.questions.length} questions.
                  {Object.keys(answers).length < paper.questions.length && (
                    <div className="mt-2 flex items-center text-amber-600">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      <span>You have {paper.questions.length - Object.keys(answers).length} unanswered questions.</span>
                    </div>
                  )}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    handleSubmit()
                  }}
                >
                  Submit
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          {timeLeft <= 0 && (
            <Button variant="destructive" onClick={handleSubmit} className="ml-2 animate-pulse">
              Time's Up - Submit Now
            </Button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>
            {Object.keys(answers).length}/{paper.questions.length} Questions Answered
          </span>
        </div>
        <Progress value={calculateProgress()} className="h-2" />
      </div>

      {/* Question Card */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="mb-6">
            <h2 className="text-xl font-medium mb-4">{question.question}</h2>

            <RadioGroup value={answers[currentQuestion] || ""} onValueChange={handleAnswerSelect} className="space-y-3">
              {question.options.map((option: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-purple-50 transition-colors"
                >
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>

        <Button
          onClick={handleNext}
          disabled={currentQuestion === paper.questions.length - 1}
          className="bg-purple-600 hover:bg-purple-700"
        >
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
