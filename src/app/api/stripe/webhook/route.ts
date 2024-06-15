import Stripe from "stripe";
import {stripe} from "@/lib/stripe";
import {config} from "@/config";
import {backendServer} from "@/lib/server";

const relevantEvents = new Set([
    "checkout.session.completed",
    "customer.subscription.updated",
    "customer.subscription.deleted",
    "customer.subscription.created",
]);

// TODO: Move this webhook to backend server
export async function POST(req: Request) {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature") as string;
    const webHookSecret =
        process.env.NODE_ENV === "production"
            ? config.stripe.webhookSecret
            : config.stripe.webhookLocalSecret;

    if (!webHookSecret) {
        throw new Error("STRIPE_WEBHOOK_SECRET is not set");
    }

    if (!signature) return;

    const event = stripe.webhooks.constructEvent(body, signature, webHookSecret);

    const data = event.data.object as Stripe.Subscription;
    const stripeCustomerId = data.customer as string

    if (relevantEvents.has(event.type)) {
        switch (event.type) {
            case "customer.subscription.created": {
                await backendServer.createSubscription(stripeCustomerId);
                break;
            }
            case "customer.subscription.deleted": {
                await backendServer.deleteSubscription(stripeCustomerId);
                break;
            }
            default: {
                break;
            }
        }
    }

    return new Response(
        JSON.stringify({
            received: true,
        }),
        { status: 200 }
    );
}