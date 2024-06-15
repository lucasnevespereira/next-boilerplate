"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";

const SubscribeButton = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    const redirectToCustomerPortal = async () => {
        setLoading(true);

        try {
            const { url } = await fetch('/api/stripe/create-portal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => res.json());

            router.push(url.url);

        } catch (error) {
            setLoading(false);
            console.log('Manage Subscription Button Error', error)
        }
    }


    return (
        <button className={"btn btn-primary"} disabled={loading} onClick={redirectToCustomerPortal}>{
            loading ? <>
                    <span className="loading loading-spinner loading-md"></span>
                    Please Wait
                </> :
                "Manage Your Plan"}</button>
    )
}

export default SubscribeButton;