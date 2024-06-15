import {loadStripe, Stripe} from '@stripe/stripe-js'
import {config} from "@/config";

let stripePromise: Promise<Stripe | null>

export const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(config.stripe.publishableKey)
    }

    return stripePromise
}