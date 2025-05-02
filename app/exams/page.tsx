import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  Clock,
  FileQuestion,
  Star,
  Search,
  Filter,
  Globe,
  MapPin,
  Bookmark,
  TrendingUp,
  BarChart,
} from "lucide-react"

export default function ExamsPage() {
  // Sample data for exams
  const exams = {
    indian: [
      {
        id: "upsc-prelims",
        title: "UPSC Prelims",
        description: "Civil Services Preliminary Examination conducted by the Union Public Service Commission.",
        papers: 5,
        questions: 500,
        difficulty: "Hard",
        category: "Civil Services",
        popular: true,
      },
      {
        id: "ssc-cgl",
        title: "SSC CGL",
        description: "Combined Graduate Level Examination conducted by the Staff Selection Commission.",
        papers: 4,
        questions: 400,
        difficulty: "Intermediate",
        category: "Government Jobs",
        popular: true,
      },
      {
        id: "ibps-po",
        title: "IBPS PO",
        description: "Probationary Officer Examination conducted by the Institute of Banking Personnel Selection.",
        papers: 3,
        questions: 300,
        difficulty: "Intermediate",
        category: "Banking",
        new: true,
      },
      {
        id: "cat",
        title: "CAT",
        description: "Common Admission Test for admission to Indian Institutes of Management.",
        papers: 3,
        questions: 300,
        difficulty: "Hard",
        category: "MBA Entrance",
        popular: true,
      },
      {
        id: "gate",
        title: "GATE",
        description: "Graduate Aptitude Test in Engineering for admission to postgraduate programs in engineering.",
        papers: 4,
        questions: 400,
        difficulty: "Hard",
        category: "Engineering",
        popular: true,
      },
      {
        id: "neet",
        title: "NEET",
        description: "National Eligibility cum Entrance Test for admission to medical colleges in India.",
        papers: 3,
        questions: 300,
        difficulty: "Hard",
        category: "Medical",
        popular: true,
      },
    ],
    international: [
      {
        id: "ielts",
        title: "IELTS",
        description: "International English Language Testing System for non-native English language speakers.",
        papers: 5,
        questions: 500,
        difficulty: "Intermediate",
        category: "Language Proficiency",
        popular: true,
      },
      {
        id: "toefl",
        title: "TOEFL",
        description: "Test of English as a Foreign Language for non-native English language speakers.",
        papers: 4,
        questions: 400,
        difficulty: "Intermediate",
        category: "Language Proficiency",
        popular: true,
      },
      {
        id: "gre",
        title: "GRE",
        description: "Graduate Record Examination for admission to graduate schools in the United States.",
        papers: 3,
        questions: 300,
        difficulty: "Hard",
        category: "Graduate Admissions",
        popular: true,
      },
      {
        id: "gmat",
        title: "GMAT",
        description: "Graduate Management Admission Test for admission to graduate management programs.",
        papers: 3,
        questions: 300,
        difficulty: "Hard",
        category: "MBA Entrance",
        popular: true,
      },
      {
        id: "sat",
        title: "SAT",
        description: "Scholastic Assessment Test for college admissions in the United States.",
        papers: 4,
        questions: 400,
        difficulty: "Intermediate",
        category: "Undergraduate Admissions",
        popular: true,
      },
      {
        id: "cambridge-english",
        title: "Cambridge English",
        description: "Cambridge English Qualifications for English language proficiency.",
        papers: 3,
        questions: 300,
        difficulty: "Mixed",
        category: "Language Proficiency",
        new: true,
      },
    ],
    european: [
      {
        id: "delf-dalf",
        title: "DELF/DALF",
        description:
          "Diplôme d'Études en Langue Française/Diplôme Approfondi de Langue Française for French proficiency.",
        papers: 4,
        questions: 400,
        difficulty: "Mixed",
        category: "Language Proficiency",
        popular: true,
      },
      {
        id: "goethe-zertifikat",
        title: "Goethe-Zertifikat",
        description: "German language proficiency examination provided by the Goethe Institute.",
        papers: 3,
        questions: 300,
        difficulty: "Mixed",
        category: "Language Proficiency",
        new: true,
      },
      {
        id: "dele",
        title: "DELE",
        description: "Diplomas of Spanish as a Foreign Language for Spanish language proficiency.",
        papers: 3,
        questions: 300,
        difficulty: "Mixed",
        category: "Language Proficiency",
        popular: true,
      },
      {
        id: "epso",
        title: "EPSO",
        description: "European Personnel Selection Office tests for EU institution jobs.",
        papers: 4,
        questions: 400,
        difficulty: "Hard",
        category: "Government Jobs",
        new: true,
      },
      {
        id: "ecce-ecpe",
        title: "ECCE/ECPE",
        description: "Examination for the Certificate of Competency in English by the University of Michigan.",
        papers: 3,
        questions: 300,
        difficulty: "Intermediate",
        category: "Language Proficiency",
        new: true,
      },
      {
        id: "telc",
        title: "telc",
        description: "The European Language Certificates for various European languages.",
        papers: 3,
        questions: 300,
        difficulty: "Mixed",
        category: "Language Proficiency",
        new: true,
      },
    ],
    categories: [
      {
        id: "civil-services",
        name: "Civil Services",
        exams: 8,
        icon: <BarChart className="h-5 w-5" />,
      },
      {
        id: "language",
        name: "Language Proficiency",
        exams: 12,
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        id: "engineering",
        name: "Engineering",
        exams: 6,
        icon: <FileQuestion className="h-5 w-5" />,
      },
      {
        id: "medical",
        name: "Medical",
        exams: 4,
        icon: <Clock className="h-5 w-5" />,
      },
      {
        id: "mba",
        name: "MBA Entrance",
        exams: 5,
        icon: <TrendingUp className="h-5 w-5" />,
      },
      {
        id: "government",
        name: "Government Jobs",
        exams: 10,
        icon: <Star className="h-5 w-5" />,
      },
    ],
  }

  // Function to render exam card
  const renderExamCard = (exam: any) => (
    <Card key={exam.id} className="h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-purple-700">{exam.title}</CardTitle>
          <div className="flex gap-2">
            {exam.popular && (
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                Popular
              </Badge>
            )}
            {exam.new && (
              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                New
              </Badge>
            )}
          </div>
        </div>
        <p className="text-gray-500 text-sm">{exam.category}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{exam.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <FileQuestion className="h-4 w-4 text-purple-500 mr-2" />
            <span className="text-sm text-gray-600">{exam.papers} Papers</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 text-purple-500 mr-2" />
            <span className="text-sm text-gray-600">{exam.questions} Questions</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-purple-500 mr-2" />
            <span className="text-sm text-gray-600">{exam.difficulty}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-purple-500 mr-2" />
            <span className="text-sm text-gray-600">90 min each</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex w-full gap-2">
          <Button className="flex-1 bg-purple-600 hover:bg-purple-700">View Exam</Button>
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
          Exam Preparation
        </div>
        <h1 className="text-4xl font-bold text-purple-700 mb-4 md:text-5xl">Comprehensive Exam Library</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Prepare for a wide range of competitive exams with our curated practice tests designed by experts.
        </p>

        {/* Search and Filter */}
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input type="text" placeholder="Search exams by name or category..." className="pl-9 pr-4 py-2" />
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
          {exams.categories.map((category) => (
            <Link href={`#${category.id}`} key={category.id}>
              <div className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition-shadow h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  {category.icon}
                </div>
                <h3 className="font-medium text-gray-800">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.exams} exams</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Exams Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="indian" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Available Exams</h2>
            <TabsList>
              <TabsTrigger value="indian" className="flex items-center gap-1">
                <MapPin className="h-4 w-4" /> Indian
              </TabsTrigger>
              <TabsTrigger value="international" className="flex items-center gap-1">
                <Globe className="h-4 w-4" /> International
              </TabsTrigger>
              <TabsTrigger value="european" className="flex items-center gap-1">
                <Globe className="h-4 w-4" /> European
              </TabsTrigger>
              <TabsTrigger value="all">All Exams</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="indian" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exams.indian.map(renderExamCard)}
            </div>
          </TabsContent>

          <TabsContent value="international" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exams.international.map(renderExamCard)}
            </div>
          </TabsContent>

          <TabsContent value="european" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exams.european.map(renderExamCard)}
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...exams.indian, ...exams.international, ...exams.european].map(renderExamCard)}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Exam Preparation?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our exam preparation platform is designed to help you succeed with features that enhance your learning
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FileQuestion className="h-6 w-6 text-purple-600" />,
              title: "Authentic Questions",
              description: "Questions designed by experts who understand exam patterns and requirements.",
            },
            {
              icon: <Clock className="h-6 w-6 text-purple-600" />,
              title: "Real Exam Environment",
              description: "Simulated test environment with timed sections just like the actual exam.",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-purple-600" />,
              title: "Detailed Explanations",
              description: "Comprehensive explanations for each question to enhance understanding.",
            },
            {
              icon: <BarChart className="h-6 w-6 text-purple-600" />,
              title: "Performance Analytics",
              description: "Detailed performance reports to track your progress and identify weak areas.",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Rahul Sharma",
              exam: "UPSC Prelims",
              message:
                "The practice tests on ExamPrep were instrumental in my UPSC preparation. The questions were very similar to the actual exam, and the detailed explanations helped me understand concepts better.",
              result: "AIR 45",
            },
            {
              name: "Priya Patel",
              exam: "IELTS",
              message:
                "I needed a band score of 7.5 for my university application. The IELTS practice tests on ExamPrep helped me identify my weak areas and improve them. I ended up scoring 8.0!",
              result: "Band 8.0",
            },
            {
              name: "Michael Chen",
              exam: "GRE",
              message:
                "The GRE practice tests on ExamPrep were comprehensive and challenging. The performance analytics helped me focus my studies on areas where I needed improvement. Highly recommended!",
              result: "330/340",
            },
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-700 font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{testimonial.name}</p>
                    <div className="flex items-center">
                      <Badge variant="outline" className="text-purple-600">
                        {testimonial.exam}
                      </Badge>
                      <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-200 border-0">
                        {testimonial.result}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.message}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-white rounded-xl p-12 shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Exam Preparation?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Join thousands of students who are using ExamPrep to achieve their academic and career goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-purple-600 hover:bg-purple-700">Sign Up Now</Button>
          <Button variant="outline">Explore Free Tests</Button>
        </div>
      </div>
    </div>
  )
}
