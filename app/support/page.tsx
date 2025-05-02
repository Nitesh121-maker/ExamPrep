"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Coffee, Heart, CreditCard, IndianRupee, DollarSign, Globe, MapPin } from "lucide-react"
import { PaymentButton } from "@/components/payment-button"

export default function SupportPage() {
  const [isIndian, setIsIndian] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Detect user's location based on IP (simplified for demo)
  useEffect(() => {
    // In a real app, you would use a geolocation service or IP detection
    // For demo purposes, we'll just check if the browser timezone includes "India"
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const isIndianTimezone = timezone.includes("Asia/Kolkata")
    setIsIndian(isIndianTimezone)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form validation is now handled in the PaymentButton component
  }

  const toggleRegion = () => {
    setIsIndian(!isIndian)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800 mb-4">Support Us</div>
        <h1 className="text-4xl font-bold text-purple-700 mb-4 md:text-5xl">Buy Me a Coffee</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Help us keep ExamPrep running and growing with your support. Every contribution makes a difference!
        </p>
        <Button variant="outline" onClick={toggleRegion} className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          {isIndian ? "Switch to International" : "Switch to Indian"}
        </Button>
      </div>

      <div className="max-w-3xl mx-auto">
        {isIndian ? (
          <IndianSupportContent
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
            isSubmitting={isSubmitting}
            isSubmitted={isSubmitted}
            handleSubmit={handleSubmit}
          />
        ) : (
          <InternationalSupportContent
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
            isSubmitting={isSubmitting}
            isSubmitted={isSubmitted}
            handleSubmit={handleSubmit}
          />
        )}
      </div>

      {/* Why Support Us Section */}
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Support ExamPrep?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Fuel Our Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Your support helps us develop new features and improve existing ones, making ExamPrep better for
                everyone.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Support Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Your contribution helps us create more free educational content and keep basic features accessible to
                all.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Keep Servers Running</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Hosting costs add up! Your support helps us maintain our servers and ensure a smooth experience for all
                users.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">What Supporters Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Priya Sharma",
              message:
                "ExamPrep helped me clear my UPSC Prelims. Supporting this platform is the least I could do to say thanks!",
              location: "Delhi, India",
            },
            {
              name: "Michael Chen",
              message:
                "As an international student, finding quality practice tests was difficult until I found ExamPrep. Happy to support!",
              location: "London, UK",
            },
            {
              name: "Rahul Verma",
              message:
                "The detailed explanations for each question helped me understand concepts better. Worth every rupee!",
              location: "Mumbai, India",
            },
            {
              name: "Emma Wilson",
              message:
                "ExamPrep's IELTS practice tests were crucial for my preparation. I'm glad to contribute to keep it going.",
              location: "Sydney, Australia",
            },
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="text-gray-600 italic mb-4">"{testimonial.message}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <span className="text-purple-700 font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{testimonial.name}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="mt-6 space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Is my contribution tax-deductible?</h3>
              <p className="text-gray-600">
                No, contributions to ExamPrep are not tax-deductible as we are not registered as a non-profit
                organization.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Do I get any perks for supporting?</h3>
              <p className="text-gray-600">
                While we don't offer premium features in exchange for coffee donations, we do acknowledge our supporters
                on our website (with permission) and occasionally send special thank-you emails with exclusive content.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">How is my contribution used?</h3>
              <p className="text-gray-600">
                Your contribution goes directly toward server costs, content development, and platform improvements. We
                regularly share updates on how supporter funds are being used.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="payment" className="mt-6 space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                For Indian users, we accept UPI, net banking, and major credit/debit cards through Razorpay. For
                international users, we accept PayPal and major credit cards through Stripe.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Is my payment information secure?</h3>
              <p className="text-gray-600">
                Yes, all payments are processed through secure payment gateways (Razorpay and Stripe). We don't store
                your payment information on our servers.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Can I set up a recurring contribution?</h3>
              <p className="text-gray-600">
                Yes, you can choose to make your contribution monthly. Simply select the "Monthly Support" option during
                checkout.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Indian Support Content Component
function IndianSupportContent({
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
  isSubmitting,
  isSubmitted,
  handleSubmit,
}: {
  name: string
  setName: (value: string) => void
  email: string
  setEmail: (value: string) => void
  message: string
  setMessage: (value: string) => void
  isSubmitting: boolean
  isSubmitted: boolean
  handleSubmit: (e: React.FormEvent) => void
}) {
  return (
    <Card className="border-t-4 border-t-purple-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Coffee className="h-6 w-6 text-purple-600" />
          Buy Me a Coffee - Indian Support
        </CardTitle>
        <CardDescription>Support ExamPrep with a small contribution of ₹20</CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Thank You for Your Support!</h3>
            <p className="text-green-600 mb-4">
              Your contribution helps us continue to provide quality educational resources.
            </p>
            <p className="text-sm text-green-500">A receipt has been sent to your email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Your Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message (Optional)
              </label>
              <Input
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any message for the team?"
              />
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Amount</span>
                <div className="flex items-center text-purple-700 font-bold text-xl">
                  <IndianRupee className="h-5 w-5 mr-1" />
                  20
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-purple-200 bg-white hover:bg-purple-50"
                >
                  UPI
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-purple-200 bg-white hover:bg-purple-50"
                >
                  Card
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-purple-200 bg-white hover:bg-purple-50"
                >
                  Net Banking
                </Button>
              </div>
            </div>
          </form>
        )}
      </CardContent>
      {!isSubmitted && (
        <CardFooter>
          <PaymentButton isIndian={true} name={name} email={email} message={message} isSubmitting={isSubmitting} />
        </CardFooter>
      )}
    </Card>
  )
}

// International Support Content Component
function InternationalSupportContent({
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
  isSubmitting,
  isSubmitted,
  handleSubmit,
}: {
  name: string
  setName: (value: string) => void
  email: string
  setEmail: (value: string) => void
  message: string
  setMessage: (value: string) => void
  isSubmitting: boolean
  isSubmitted: boolean
  handleSubmit: (e: React.FormEvent) => void
}) {
  return (
    <Card className="border-t-4 border-t-purple-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Coffee className="h-6 w-6 text-purple-600" />
          Buy Me a Coffee - International Support
        </CardTitle>
        <CardDescription>Support ExamPrep with a small contribution of $1</CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Thank You for Your Support!</h3>
            <p className="text-green-600 mb-4">
              Your contribution helps us continue to provide quality educational resources.
            </p>
            <p className="text-sm text-green-500">A receipt has been sent to your email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Your Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message (Optional)
              </label>
              <Input
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any message for the team?"
              />
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Amount</span>
                <div className="flex items-center text-purple-700 font-bold text-xl">
                  <DollarSign className="h-5 w-5 mr-1" />1
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-purple-200 bg-white hover:bg-purple-50"
                >
                  PayPal
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-purple-200 bg-white hover:bg-purple-50"
                >
                  Credit Card
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-purple-200 bg-white hover:bg-purple-50"
                >
                  Apple Pay
                </Button>
              </div>
            </div>
          </form>
        )}
      </CardContent>
      {!isSubmitted && (
        <CardFooter>
          <PaymentButton isIndian={false} name={name} email={email} message={message} isSubmitting={isSubmitting} />
        </CardFooter>
      )}
    </Card>
  )
}
