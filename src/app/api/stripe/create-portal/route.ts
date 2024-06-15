import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {backendServer} from "@/lib/server";
import {stripe} from "@/lib/stripe";
import {config} from "@/config";


export const POST = async (req: Request) => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    const userId = user?.id as string;

    if (!userId) {
        return new Response(JSON.stringify({error: "Unauthorized"}), {status: 401});
    }

    // get user from your database, here I am getting for my backend server
    const {data: dbUser} = await backendServer.getUser(userId);
    if (!dbUser) {
        return new Response(JSON.stringify({error: "User Not Found"}), {status: 404});
    }

    let customer;
    if (dbUser?.stripe_customer_id) {
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

    const url = await stripe.billingPortal.sessions.create({
        customer: customer.id,
        return_url: `${baseUrl}/billing`,
    });

    return new Response(JSON.stringify({ url }), {
        status: 200,
    });
}