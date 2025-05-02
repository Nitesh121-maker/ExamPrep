"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  handleRazorpayPayment,
  initializeRazorpayPayment,
  initializeStripePayment,
  type PaymentData,
} from "@/lib/payment-service"
import { IndianRupee, DollarSign } from "lucide-react"

interface PaymentButtonProps {
  isIndian: boolean
  name: string
  email: string
  message?: string
  disabled?: boolean
  isSubmitting?: boolean
}

export function PaymentButton({
  isIndian,
  name,
  email,
  message = "",
  disabled = false,
  isSubmitting = false,
}: PaymentButtonProps) {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(isSubmitting)

  const handlePayment = async () => {
    if (!name || !email) {
      alert("Please provide your name and email")
      return
    }

    setIsProcessing(true)

    try {
      if (isIndian) {
        // Indian payment flow (Razorpay)
        const paymentData: PaymentData = {
          amount: 20,
          currency: "INR",
          name,
          email,
          description: "ExamPrep Support",
          metadata: {
            message: message || "Support payment",
          },
        }

        // Initialize Razorpay order
        const orderResponse = await initializeRazorpayPayment(paymentData)

        if (!orderResponse.success || !orderResponse.orderId) {
          throw new Error(orderResponse.error || "Failed to create order")
        }

        // Handle Razorpay payment
        const paymentResponse = await handleRazorpayPayment(orderResponse.orderId, paymentData)

        if (paymentResponse.success && paymentResponse.paymentId) {
          // Redirect to success page
          router.push(`/support/success?payment_id=${paymentResponse.paymentId}`)
        } else {
          throw new Error(paymentResponse.error || "Payment failed")
        }
      } else {
        // International payment flow (Stripe)
        const paymentData: PaymentData = {
          amount: 1,
          currency: "USD",
          name,
          email,
          description: "ExamPrep Support",
          metadata: {
            message: message || "Support payment",
          },
        }

        // Initialize Stripe checkout
        const checkoutResponse = await initializeStripePayment(paymentData)

        if (!checkoutResponse.success || !checkoutResponse.checkoutUrl) {
          throw new Error(checkoutResponse.error || "Failed to create checkout")
        }

        // Redirect to Stripe checkout
        window.location.href = checkoutResponse.checkoutUrl
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("Payment failed. Please try again.")
      setIsProcessing(false)
    }
  }

  return (
    <Button
      type="button"
      className="w-full bg-purple-600 hover:bg-purple-700"
      disabled={disabled || isProcessing}
      onClick={handlePayment}
    >
      {isProcessing ? (
        <>
          <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
          Processing...
        </>
      ) : isIndian ? (
        <>
          Support with ₹20 <IndianRupee className="ml-2 h-4 w-4" />
        </>
      ) : (
        <>
          Support with $1 <DollarSign className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  )
}
