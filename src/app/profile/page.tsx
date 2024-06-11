"use client";

import React from "react";
import {NOTIFICATION} from "@/constants";
import {useToaster} from "@/contexts/toaster/provider";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

const ProfilePage = () => {
    const {showToast} = useToaster();
    const { user} = useKindeBrowserClient();

    const handleShowToast = () => {
        showToast("This is a toast message", NOTIFICATION.INFO, 3000);
    }

    return (
        <main className='mx-auto max-w-screen-lg'>
            <div className="mt-3 text-center">
                <h1 className="text-4xl font-bold">My Profile</h1>
                <p className="text-lg mt-2">Hello, {user?.given_name}. This is your profile page</p>
                <button className="btn btn-primary mt-3" onClick={handleShowToast}>Show Toast</button>
            </div>
        </main>
    )
}

export default ProfilePage;