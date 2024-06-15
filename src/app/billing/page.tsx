import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import SubscribeButton from "@/components/ui/SubscribeButton";
import {PREMIUM_SUB_PRICE_ID} from "@/constants";
import {backendServer} from "@/lib/server";
import ManageSubscriptionButton from "@/components/ui/ManageSubscriptionButton";

const Billing = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    const userId = user?.id as string;
    const {data: dbUser} = await backendServer.getUser(userId);

    return (
        <main className='mx-auto max-w-screen-lg'>
            <div className="mt-3 text-center flex flex-col gap-5">
                <h1 className="text-4xl font-bold">Billing page</h1>
                <p>Email: {user?.email}</p>
                <p>Plan: {dbUser.subscription_plan}</p>
                <ManageSubscriptionButton/>
                {/*{dbUser.subscribed ? (*/}
                {/*    <ManageSubscriptionButton/>*/}
                {/*) : (*/}
                {/*    <SubscribeButton price={PREMIUM_SUB_PRICE_ID} userId={userId}/>*/}
                {/*)}*/}
            </div>
        </main>
    )
}

export default Billing;