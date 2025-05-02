"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Award, Bell, Settings, CheckCircle, TrendingUp, BookMarked, Target, Star } from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { UserGreeting } from "@/components/user-greeting"
import { RecentActivity } from "@/components/recent-activity"
import { UpcomingExams } from "@/components/upcoming-exams"
import { PerformanceChart } from "@/components/performance-chart"
import { RecommendedExams } from "@/components/recommended-exams"
import { NotificationsPanel } from "@/components/notifications-panel"

// Mock data for the dashboard
const mockUserData = {
  name: "Rahul Sharma",
  email: "rahul.sharma@example.com",
  avatar: "/placeholder.svg?height=40&width=40",
  joinDate: "August 2023",
  completedExams: 12,
  inProgressExams: 3,
  totalPracticeTime: "42h 15m",
  averageScore: 76,
  streak: 7,
  isPremium: true,
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Dashboard Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="container py-6 px-4 md:px-6 lg:px-8">
          {/* Header with greeting and quick actions */}
          <div className="mb-8">
            <UserGreeting user={mockUserData} />
          </div>

          {/* Dashboard Tabs */}
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="flex justify-between items-center">
              <TabsList className="bg-white border">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
                <TabsTrigger value="exams">Exams</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  Take New Test
                </Button>
              </div>
            </div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Completed Exams</CardDescription>
                    <CardTitle className="text-2xl flex items-center">
                      {mockUserData.completedExams}
                      <CheckCircle className="h-5 w-5 ml-2 text-green-500" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <span className="text-green-600 font-medium">+2</span> this week
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Average Score</CardDescription>
                    <CardTitle className="text-2xl flex items-center">
                      {mockUserData.averageScore}%
                      <TrendingUp className="h-5 w-5 ml-2 text-purple-500" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <span className="text-green-600 font-medium">+3%</span> from last month
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Study Streak</CardDescription>
                    <CardTitle className="text-2xl flex items-center">
                      {mockUserData.streak} days
                      <Target className="h-5 w-5 ml-2 text-orange-500" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">Keep it up!</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Total Study Time</CardDescription>
                    <CardTitle className="text-2xl flex items-center">
                      {mockUserData.totalPracticeTime}
                      <Clock className="h-5 w-5 ml-2 text-blue-500" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <span className="text-green-600 font-medium">+4h 20m</span> this week
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Dashboard Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Recent Activity */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Your latest exam attempts and practice sessions</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className="text-purple-600">
                        View All
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <RecentActivity />
                    </CardContent>
                  </Card>

                  {/* Performance Chart */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div>
                        <CardTitle>Performance Trends</CardTitle>
                        <CardDescription>Your score progression over time</CardDescription>
                      </div>
                      <Tabs defaultValue="week" className="w-[200px]">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="week">Week</TabsTrigger>
                          <TabsTrigger value="month">Month</TabsTrigger>
                          <TabsTrigger value="year">Year</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                      <PerformanceChart />
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Upcoming Exams */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div>
                        <CardTitle>Upcoming Exams</CardTitle>
                        <CardDescription>Scheduled tests and deadlines</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className="text-purple-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        Calendar
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <UpcomingExams />
                    </CardContent>
                  </Card>

                  {/* Recommended Exams */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div>
                        <CardTitle>Recommended For You</CardTitle>
                        <CardDescription>Based on your interests and progress</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <RecommendedExams />
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View More Recommendations
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Study Goals */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div>
                        <CardTitle>Study Goals</CardTitle>
                        <CardDescription>Your progress towards weekly targets</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className="text-purple-600">
                        Edit Goals
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Practice Tests (4/7)</span>
                          <span>57%</span>
                        </div>
                        <Progress value={57} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Study Hours (8/15)</span>
                          <span>53%</span>
                        </div>
                        <Progress value={53} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Flashcards (120/200)</span>
                          <span>60%</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Weak Areas */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle>Areas to Improve</CardTitle>
                      <CardDescription>Topics that need more attention</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                          <span>Quantitative Aptitude</span>
                        </div>
                        <span className="text-sm text-red-500">42% accuracy</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          <span>Logical Reasoning</span>
                        </div>
                        <span className="text-sm text-orange-500">58% accuracy</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                          <span>Data Interpretation</span>
                        </div>
                        <span className="text-sm text-yellow-500">63% accuracy</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Detailed Analysis
                    </Button>
                  </CardFooter>
                </Card>

                {/* Achievements */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle>Recent Achievements</CardTitle>
                      <CardDescription>Badges and milestones you've earned</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-1">
                          <Award className="h-6 w-6 text-purple-600" />
                        </div>
                        <span className="text-xs">Perfect Score</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                          <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                        <span className="text-xs">Speed Demon</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-1">
                          <Target className="h-6 w-6 text-green-600" />
                        </div>
                        <span className="text-xs">7-Day Streak</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-1">
                          <BookMarked className="h-6 w-6 text-orange-600" />
                        </div>
                        <span className="text-xs">Bookworm</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                          <Star className="h-6 w-6 text-gray-400" />
                        </div>
                        <span className="text-xs">Locked</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Achievements
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Progress Tab */}
            <TabsContent value="progress">
              <Card>
                <CardHeader>
                  <CardTitle>Your Learning Progress</CardTitle>
                  <CardDescription>Track your progress across different subjects and exams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Progress tracking content will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Exams Tab */}
            <TabsContent value="exams">
              <Card>
                <CardHeader>
                  <CardTitle>Your Exams</CardTitle>
                  <CardDescription>View all your attempted and scheduled exams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Exams content will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                  <CardDescription>Detailed insights into your performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Analytics content will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Notifications Panel */}
      <NotificationsPanel />
    </div>
  )
}
