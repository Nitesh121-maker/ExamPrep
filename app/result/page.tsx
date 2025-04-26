"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { CheckCircle, XCircle, Home, ChevronDown, Clock, Award, AlertTriangle } from "lucide-react"

export default function ResultPage() {
  const router = useRouter()
  const [results, setResults] = useState<any>(null)

  useEffect(() => {
    // Get results from localStorage
    const storedResults = localStorage.getItem("examResults")
    if (!storedResults) {
      router.push("/")
      return
    }

    setResults(JSON.parse(storedResults))
  }, [router])

  if (!results) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading results...</p>
        </div>
      </div>
    )
  }

  // Calculate score percentage
  const scorePercentage = Math.round((results.correctAnswers / results.totalQuestions) * 100)

  // Format time spent
  const formatTimeSpent = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins} minutes ${secs} seconds`
  }

  // Get performance message
  const getPerformanceMessage = () => {
    if (scorePercentage >= 80) return "Excellent! You've mastered this subject."
    if (scorePercentage >= 60) return "Good job! You have a solid understanding."
    if (scorePercentage >= 40) return "You're on the right track. Keep practicing!"
    return "Keep studying. You'll improve with more practice."
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-2">Exam Results</h1>
        <p className="text-gray-600">{results.paperTitle}</p>
      </div>

      {/* Results Summary Card */}
      <Card className="mb-8 overflow-hidden border-t-4 border-t-purple-500">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
          <CardTitle className="text-2xl text-center text-purple-700">Performance Summary</CardTitle>
          <CardDescription className="text-center">{getPerformanceMessage()}</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
            <div className="relative w-40 h-40">
              <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-700">{scorePercentage}%</div>
                  <div className="text-sm text-gray-500">Score</div>
                </div>
              </div>
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke={scorePercentage >= 60 ? "#8b5cf6" : "#f59e0b"}
                  strokeWidth="8"
                  strokeDasharray={`${scorePercentage * 2.83} 283`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center text-green-600 mb-1">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">Correct Answers</span>
                </div>
                <div className="text-2xl font-bold">{results.correctAnswers}</div>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center text-red-500 mb-1">
                  <XCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">Wrong Answers</span>
                </div>
                <div className="text-2xl font-bold">{results.totalQuestions - results.correctAnswers}</div>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center text-blue-600 mb-1">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-medium">Total Questions</span>
                </div>
                <div className="text-2xl font-bold">{results.totalQuestions}</div>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center text-purple-600 mb-1">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-medium">Time Spent</span>
                </div>
                <div className="text-lg font-medium">{formatTimeSpent(results.timeSpent)}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analysis */}
      <Tabs defaultValue="mistakes" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="mistakes">Mistakes Analysis</TabsTrigger>
          <TabsTrigger value="improvement">Areas for Improvement</TabsTrigger>
        </TabsList>

        <TabsContent value="mistakes" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Your Mistakes</CardTitle>
              <CardDescription>
                Review the questions you answered incorrectly to improve your understanding.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {results.wrongAnswers.length === 0 ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-green-700">Perfect Score!</h3>
                  <p className="text-gray-600">You didn't make any mistakes. Excellent work!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.wrongAnswers.map((wrong: any, index: number) => (
                    <Collapsible key={index} className="border rounded-lg overflow-hidden">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50">
                        <div className="flex items-start">
                          <span className="bg-red-100 text-red-800 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                            {index + 1}
                          </span>
                          <div>
                            <h3 className="font-medium">{wrong.question}</h3>
                            <div className="mt-1 text-sm">
                              <span className="text-red-600">Your answer: {wrong.userAnswer}</span>
                            </div>
                          </div>
                        </div>
                        <ChevronDown className="h-5 w-5 text-gray-500 shrink-0" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="border-t bg-gray-50 p-4">
                        <div className="mb-2">
                          <span className="font-medium text-green-700">Correct answer:</span> {wrong.correctAnswer}
                        </div>
                        <div>
                          <span className="font-medium text-purple-700">Explanation:</span> {wrong.explanation}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="improvement" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Areas for Improvement</CardTitle>
              <CardDescription>
                Based on your performance, here are some areas you might want to focus on.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {results.wrongAnswers.length === 0 ? (
                <div className="text-center py-8">
                  <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-yellow-700">Outstanding Performance!</h3>
                  <p className="text-gray-600">You've mastered this subject. Consider trying a more advanced test!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg bg-amber-50 border-amber-200">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Focus Areas</h3>
                        <p className="mt-1 text-amber-700">
                          You missed {results.wrongAnswers.length} questions out of {results.totalQuestions}. Review the
                          explanations for each incorrect answer to understand the concepts better.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Suggested Study Plan</h3>
                    <ul className="space-y-2 list-disc list-inside text-gray-700">
                      <li>Review the explanations for each incorrect answer</li>
                      <li>Focus on understanding the core concepts</li>
                      <li>Practice similar questions to reinforce learning</li>
                      <li>Take the test again after studying to measure improvement</li>
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" className="flex items-center" onClick={() => router.push("/")}>
          <Home className="mr-2 h-4 w-4" />
          Return to Dashboard
        </Button>

        <Button
          className="bg-purple-600 hover:bg-purple-700 flex items-center"
          onClick={() => router.push(`/exam/${results.paperId}`)}
        >
          <Award className="mr-2 h-4 w-4" />
          Retake Test
        </Button>
      </div>
    </div>
  )
}
