"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, BookOpen } from "lucide-react"
import { verifyPayment } from "@/lib/payment-service"

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const [verificationStatus, setVerificationStatus] = useState<"loading" | "success" | "error">("loading")
  const [paymentDetails, setPaymentDetails] = useState<{
    gateway: string
    amount: string
    currency: string
    date: string
  }>({
    gateway: "",
    amount: "",
    currency: "",
    date: new Date().toLocaleDateString(),
  })

  useEffect(() => {
    async function verifyPaymentStatus() {
      try {
        const sessionId = searchParams.get("session_id")
        const paymentId = searchParams.get("payment_id")
        const razorpayPaymentId = searchParams.get("razorpay_payment_id")

        let isVerified = false
        let gateway = ""

        if (sessionId) {
          // Stripe payment
          isVerified = await verifyPayment(sessionId, "stripe")
          gateway = "Stripe"
          setPaymentDetails((prev) => ({
            ...prev,
            gateway,
            amount: "$1.00",
            currency: "USD",
          }))
        } else if (paymentId || razorpayPaymentId) {
          // Razorpay payment
          const id = paymentId || razorpayPaymentId
          if (id) {
            isVerified = await verifyPayment(id, "razorpay")
            gateway = "Razorpay"
            setPaymentDetails((prev) => ({
              ...prev,
              gateway,
              amount: "₹20.00",
              currency: "INR",
            }))
          }
        }

        setVerificationStatus(isVerified ? "success" : "error")
      } catch (error) {
        console.error("Error verifying payment:", error)
        setVerificationStatus("error")
      }
    }

    verifyPaymentStatus()
  }, [searchParams])

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <Card className="w-full max-w-md border-t-4 border-t-purple-500">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            {verificationStatus === "loading" ? (
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : verificationStatus === "success" ? (
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )}
          </div>

          <CardTitle className="text-2xl">
            {verificationStatus === "loading"
              ? "Verifying Payment..."
              : verificationStatus === "success"
                ? "Payment Successful!"
                : "Payment Verification Failed"}
          </CardTitle>
        </CardHeader>

        <CardContent>
          {verificationStatus === "loading" ? (
            <p className="text-center text-gray-600">Please wait while we verify your payment...</p>
          ) : verificationStatus === "success" ? (
            <div className="space-y-4">
              <p className="text-center text-gray-600 mb-6">
                Thank you for supporting ExamPrep! Your contribution helps us continue to provide quality educational
                resources.
              </p>

              <div className="bg-purple-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Gateway:</span>
                  <span className="font-medium">{paymentDetails.gateway}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-medium">{paymentDetails.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{paymentDetails.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium text-green-600">Paid</span>
                </div>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">A receipt has been sent to your email address.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-center text-gray-600 mb-6">
                We couldn't verify your payment. This could be due to a temporary issue or because the payment was
                cancelled.
              </p>

              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-sm text-red-600">
                  If you believe this is an error and your payment was successful, please contact our support team with
                  your payment reference.
                </p>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row gap-3">
          <Button asChild className="flex-1">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>

          <Button asChild variant="outline" className="flex-1">
            <Link href="/practice-sets">
              <BookOpen className="mr-2 h-4 w-4" />
              Practice Sets
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
