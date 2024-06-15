import Link from "next/link";


const PaymentSuccess = () => {
    return (
        <main className='mx-auto max-w-screen-lg'>
            <div className="mt-3 text-center flex flex-col gap-5">
                <h1 className="text-4xl font-bold">Payment Success</h1>

                <div role="alert" className="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Thank you for your subscription!</span>
                </div>

                <p>Go back to <Link href={"/billing"}>Billing</Link></p>
            </div>
        </main>
    )
}

export default PaymentSuccess;