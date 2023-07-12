import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState(null)

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })

    if (result.error) {
      setError(result.error.message)
    } else {
      setPaymentMethod(result.paymentMethod)
    }
  }

  const handleConfirmPayment = async () => {
    const response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paymentMethodId: paymentMethod.id,
      }),
    })

    const result = await response.json()

    if (result.error) {
      setError(result.error)
    } else {
      // The payment has been processed!
      alert("Payment successful!")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {paymentMethod && (
        <button onClick={handleConfirmPayment}>Confirm Payment</button>
      )}
    </form>
  )
}

const App = () => {
  const stripePromise = loadStripe(process.env.STRIPE_API_KEY)

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default App
