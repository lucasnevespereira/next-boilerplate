import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import DeleteAccountButton from "@/components/ui/DeleteAccountButton";

const Settings = async () => {
    const { getUser} = getKindeServerSession();
    const user = await getUser();
    const userId = user?.id as string;
    return (
        <main className='mx-auto max-w-screen-lg'>
            <div className="mt-3 text-center flex flex-col gap-5">
                <h1 className="text-4xl font-bold">Settings page</h1>
                <p>Email: {user?.email}</p>
                <DeleteAccountButton userId={userId} />
            </div>
        </main>
    )
}

export default Settings;