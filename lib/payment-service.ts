// Payment service for handling Razorpay and Stripe integrations

// Types for payment data
export type PaymentData = {
  amount: number
  currency: string
  name: string
  email: string
  description?: string
  metadata?: Record<string, string>
}

export type PaymentResponse = {
  success: boolean
  orderId?: string
  paymentId?: string
  error?: string
  checkoutUrl?: string
}

// Mock API keys (in production, these would be environment variables)
const RAZORPAY_KEY_ID = "rzp_test_YourRazorpayTestKey"
const STRIPE_PUBLISHABLE_KEY = "pk_test_YourStripeTestKey"

/**
 * Initialize Razorpay payment for Indian users
 */
export async function initializeRazorpayPayment(data: PaymentData): Promise<PaymentResponse> {
  try {
    // In a real implementation, this would be a server call to create an order
    const response = await fetch("/api/payments/razorpay/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: data.amount * 100, // Razorpay expects amount in paise
        currency: data.currency,
        receipt: `receipt_${Date.now()}`,
        notes: {
          name: data.name,
          email: data.email,
          description: data.description || "Support payment",
          ...data.metadata,
        },
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || "Failed to create Razorpay order")
    }

    return {
      success: true,
      orderId: result.id,
    }
  } catch (error) {
    console.error("Razorpay initialization error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown payment error",
    }
  }
}

/**
 * Initialize Stripe payment for international users
 */
export async function initializeStripePayment(data: PaymentData): Promise<PaymentResponse> {
  try {
    // In a real implementation, this would be a server call to create a checkout session
    const response = await fetch("/api/payments/stripe/create-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: data.amount * 100, // Stripe expects amount in cents
        currency: data.currency,
        customerEmail: data.email,
        customerName: data.name,
        description: data.description || "Support payment",
        metadata: data.metadata,
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || "Failed to create Stripe checkout")
    }

    return {
      success: true,
      checkoutUrl: result.url,
      paymentId: result.id,
    }
  } catch (error) {
    console.error("Stripe initialization error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown payment error",
    }
  }
}

/**
 * Load Razorpay script dynamically
 */
export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true)
      return
    }

    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

/**
 * Handle Razorpay payment
 */
export async function handleRazorpayPayment(orderId: string, data: PaymentData): Promise<PaymentResponse> {
  const scriptLoaded = await loadRazorpayScript()

  if (!scriptLoaded) {
    return {
      success: false,
      error: "Failed to load Razorpay script",
    }
  }

  return new Promise((resolve) => {
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: data.amount * 100, // in paise
      currency: data.currency,
      name: "ExamPrep",
      description: data.description || "Support payment",
      order_id: orderId,
      prefill: {
        name: data.name,
        email: data.email,
      },
      theme: {
        color: "#9333ea", // Purple color to match the theme
      },
      handler: (response: any) => {
        resolve({
          success: true,
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
        })
      },
      modal: {
        ondismiss: () => {
          resolve({
            success: false,
            error: "Payment cancelled",
          })
        },
      },
    }

    const razorpayInstance = new (window as any).Razorpay(options)
    razorpayInstance.open()
  })
}

/**
 * Verify payment status
 */
export async function verifyPayment(paymentId: string, gateway: "razorpay" | "stripe"): Promise<boolean> {
  try {
    const endpoint = gateway === "razorpay" ? "/api/payments/razorpay/verify" : "/api/payments/stripe/verify"

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paymentId }),
    })

    const result = await response.json()
    return result.success
  } catch (error) {
    console.error("Payment verification error:", error)
    return false
  }
}
