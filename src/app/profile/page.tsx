import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const Profile = async () => {
    const { getUser} = getKindeServerSession();
    const user = await getUser();

    return (
        <main className='mx-auto max-w-screen-lg'>
            <div className="mt-3 text-center">
                <h1 className="text-4xl font-bold">My Profile</h1>
                <p className="text-lg mt-2">Hello, {user?.given_name}. This is your profile page</p>
            </div>
        </main>
    )
}

export default Profile;