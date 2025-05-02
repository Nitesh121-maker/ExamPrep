import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Target, Lightbulb, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800 mb-4">About Us</div>
        <h1 className="text-4xl font-bold text-purple-700 mb-4 md:text-5xl">Our Mission & Vision</h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg">
          ExamPrep is dedicated to helping students achieve academic excellence through innovative learning tools and
          comprehensive practice tests.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            ExamPrep was founded in 2020 with a simple mission: to make quality test preparation accessible to everyone.
            What started as a small collection of practice questions has grown into a comprehensive platform serving
            thousands of students worldwide.
          </p>
          <p className="text-gray-600 mb-4">
            Our team of experienced educators and technology experts work together to create an engaging, effective
            learning experience that helps students build confidence and achieve their academic goals.
          </p>
          <p className="text-gray-600 mb-6">
            We believe that practice is the key to success, and our platform is designed to provide students with the
            tools they need to practice effectively and track their progress over time.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Team working together"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Our Values Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These core principles guide everything we do at ExamPrep, from developing new features to supporting our
            users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-purple-500">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the quality of our questions to the user experience
                of our platform.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-purple-500">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Accessibility</h3>
              <p className="text-gray-600">
                We believe quality education should be accessible to everyone, regardless of their background or
                circumstances.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-purple-500">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate and improve our platform to provide the best learning experience possible.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of educators, developers, and support staff work together to create the best learning
            experience for our users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Nitesh Chauhan",
              role: "Founder & CEO",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Sarah Johnson",
              role: "Head of Education",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Michael Chen",
              role: "Lead Developer",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Priya Sharma",
              role: "Content Director",
              image: "/placeholder.svg?height=400&width=400",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-purple-100">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-purple-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud of the difference we're making in students' academic journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { number: "10,000+", label: "Students Helped" },
            { number: "500+", label: "Practice Tests" },
            { number: "50,000+", label: "Questions Created" },
            { number: "95%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-purple-700 mb-2">{stat.number}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-white rounded-xl p-12 shadow-md">
        <div className="inline-block rounded-full bg-purple-100 p-3 mb-6">
          <BookOpen className="h-8 w-8 text-purple-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Learning Journey?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Join thousands of students who are using ExamPrep to achieve their academic goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-purple-600 hover:bg-purple-700">Get Started Today</Button>
          <Button variant="outline">View Practice Tests</Button>
        </div>
      </div>
    </div>
  )
}
