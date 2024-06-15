"use client";
import {useState} from "react";
import {getStripe} from "@/lib/stripe/client";
import {useRouter} from "next/navigation";

type Props = {
    userId?: string,
    price: string
}

const SubscribeButton = ({userId, price}: Props) => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    const handleCheckout = async (price: string) => {
        if (!userId) {
            router.push('/api/auth/login');
        }

        setLoading(true);

        try {
            const {sessionId} = await fetch('/api/stripe/checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({price})
            }).then((res) => res.json());

            const stripe = await getStripe();
            stripe?.redirectToCheckout({sessionId});
        } catch (error) {
            setLoading(false);
            console.log('Subscribe Button Error', error)
        }
    }
    return (
        <button className={"btn btn-primary"} disabled={loading} onClick={() => handleCheckout(price)}>{
            loading ? <>
                    <span className="loading loading-spinner loading-md"></span>
                    Please Wait
                </> :
                "Upgrade Your Plan"}</button>
    )
}

export default SubscribeButton;