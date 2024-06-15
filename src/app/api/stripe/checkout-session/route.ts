import {stripe} from "@/lib/stripe";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {backendServer} from "@/lib/server";
import {config} from "@/config";

export const POST = async (req: Request) => {
    const { price, quantity = 1 } = await req.json();
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    const userId = user?.id as string;

    if (!userId) {
        return new Response(JSON.stringify({error: "Unauthorized"}), {status: 401});
    }

    // get user from your database, here I am getting for my backend server
    const {data: dbUser} = await backendServer.getUser(userId);
    let customer;
    if (dbUser.stripe_customer_id) {
        customer = {id: dbUser.stripe_customer_id}
    } else {
        const customerData: { metadata: { dbId: string } } = {
            metadata: {
                dbId: userId
            }
        }
        const response = await stripe.customers.create(customerData);
        customer = {id: response.id};
        await backendServer.patchUser(userId, {stripe_customer_id: customer.id});
    }

    const baseUrl = config.app.url || "http://localhost:3000";
    try {
        const session = await stripe.checkout.sessions.create({
            success_url: `${baseUrl}/payment/success`,
            customer: customer.id,
            payment_method_types: ['card'],
            mode: 'subscription',
            line_items: [
                {
                    price,
                    quantity
                }
            ],
        });

        if (session) {
            return new Response(JSON.stringify({sessionId: session.id}), {status: 200});
        } else {
            return new Response(JSON.stringify({error: "Failed to create session"}), {status: 500});
        }
    } catch (e) {
        return new Response(JSON.stringify({error: e}), {status: 500});
    }
}