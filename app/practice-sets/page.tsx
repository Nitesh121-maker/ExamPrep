import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, FileQuestion, Star, TrendingUp, BarChart, Bookmark, Filter, Search } from "lucide-react"

export default function PracticeSetsPage() {
  // Sample data for practice sets
  const practiceSets = {
    featured: [
      {
        id: "set1",
        title: "General Knowledge Master Pack",
        description: "Comprehensive general knowledge questions covering various topics.",
        papers: 5,
        questions: 500,
        difficulty: "Mixed",
        category: "General Knowledge",
        popular: true,
      },
      {
        id: "set2",
        title: "Mathematics Fundamentals",
        description: "Core mathematics concepts and problem-solving techniques.",
        papers: 4,
        questions: 400,
        difficulty: "Intermediate",
        category: "Mathematics",
        popular: true,
      },
      {
        id: "set3",
        title: "English Language Proficiency",
        description: "Grammar, vocabulary, and comprehension practice for language mastery.",
        papers: 3,
        questions: 300,
        difficulty: "Beginner",
        category: "English",
        new: true,
      },
    ],
    popular: [
      {
        id: "set4",
        title: "Science Combo Pack",
        description: "Combined practice tests covering Physics, Chemistry, and Biology.",
        papers: 6,
        questions: 600,
        difficulty: "Advanced",
        category: "Science",
        popular: true,
      },
      {
        id: "set5",
        title: "Computer Science Essentials",
        description: "Fundamental concepts in programming, data structures, and algorithms.",
        papers: 4,
        questions: 400,
        difficulty: "Intermediate",
        category: "Computer Science",
        popular: true,
      },
      {
        id: "set6",
        title: "History Through Ages",
        description: "Comprehensive history questions from ancient to modern times.",
        papers: 3,
        questions: 300,
        difficulty: "Intermediate",
        category: "History",
        popular: true,
      },
    ],
    new: [
      {
        id: "set7",
        title: "Geography Explorer",
        description: "World geography, maps, countries, and physical features.",
        papers: 3,
        questions: 300,
        difficulty: "Beginner",
        category: "Geography",
        new: true,
      },
      {
        id: "set8",
        title: "Economics Fundamentals",
        description: "Micro and macroeconomics principles and applications.",
        papers: 4,
        questions: 400,
        difficulty: "Intermediate",
        category: "Economics",
        new: true,
      },
      {
        id: "set9",
        title: "Advanced Physics",
        description: "Complex physics concepts and problem-solving for advanced students.",
        papers: 3,
        questions: 300,
        difficulty: "Advanced",
        category: "Physics",
        new: true,
      },
    ],
    categories: [
      {
        id: "cat1",
        name: "Mathematics",
        sets: 12,
        icon: <BarChart className="h-5 w-5" />,
      },
      {
        id: "cat2",
        name: "Science",
        sets: 15,
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        id: "cat3",
        name: "English",
        sets: 8,
        icon: <FileQuestion className="h-5 w-5" />,
      },
      {
        id: "cat4",
        name: "History",
        sets: 6,
        icon: <Clock className="h-5 w-5" />,
      },
      {
        id: "cat5",
        name: "Geography",
        sets: 5,
        icon: <TrendingUp className="h-5 w-5" />,
      },
      {
        id: "cat6",
        name: "Computer Science",
        sets: 7,
        icon: <Star className="h-5 w-5" />,
      },
    ],
  }

  // Function to render practice set card
  const renderPracticeSetCard = (set: any) => (
    <Card key={set.id} className="h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-purple-700">{set.title}</CardTitle>
          <div className="flex gap-2">
            {set.popular && (
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                Popular
              </Badge>
            )}
            {set.new && (
              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                New
              </Badge>
            )}
          </div>
        </div>
        <p className="text-gray-500 text-sm">{set.category}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{set.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <FileQuestion className="h-4 w-4 text-purple-500 mr-2" />
            <span className="text-sm text-gray-600">{set.papers} Papers</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 text-purple-500 mr-2" />
            <span className="text-sm text-gray-600">{set.questions} Questions</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-purple-500 mr-2" />
            <span className="text-sm text-gray-600">{set.difficulty}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-purple-500 mr-2" />
            <span className="text-sm text-gray-600">90 min each</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex w-full gap-2">
          <Button className="flex-1 bg-purple-600 hover:bg-purple-700">View Set</Button>
          <Button variant="outline" size="icon">
            <Bookmark className="h-4 w-4" />
            <span className="sr-only">Bookmark</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800 mb-4">
          Practice Sets
        </div>
        <h1 className="text-4xl font-bold text-purple-700 mb-4 md:text-5xl">Curated Practice Collections</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Explore our carefully crafted practice sets designed to help you master specific subjects and topics.
        </p>

        {/* Search and Filter */}
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search practice sets..."
              className="w-full pl-9 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {practiceSets.categories.map((category) => (
            <Link href={`#${category.id}`} key={category.id}>
              <div className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition-shadow h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  {category.icon}
                </div>
                <h3 className="font-medium text-gray-800">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.sets} sets</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Practice Sets Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="featured" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Practice Sets</h2>
            <TabsList>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="all">All Sets</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceSets.featured.map(renderPracticeSetCard)}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceSets.popular.map(renderPracticeSetCard)}
            </div>
          </TabsContent>

          <TabsContent value="new" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceSets.new.map(renderPracticeSetCard)}
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...practiceSets.featured, ...practiceSets.popular, ...practiceSets.new].map(renderPracticeSetCard)}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits of Practice Sets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our practice sets are designed to maximize your learning and help you achieve your academic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
              title: "Structured Learning",
              description: "Follow a structured approach to master topics progressively.",
            },
            {
              icon: <Star className="h-6 w-6 text-purple-600" />,
              title: "Curated Content",
              description: "Questions carefully selected by subject matter experts.",
            },
            {
              icon: <BarChart className="h-6 w-6 text-purple-600" />,
              title: "Progress Tracking",
              description: "Monitor your improvement across multiple practice tests.",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-purple-600" />,
              title: "Comprehensive Coverage",
              description: "Complete coverage of all important topics in each subject.",
            },
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Create Custom Set CTA */}
      <div className="text-center bg-white rounded-xl p-12 shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Your Own Practice Set</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Want to focus on specific topics? Create a custom practice set tailored to your learning needs.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700">Create Custom Set</Button>
      </div>
    </div>
  )
}
