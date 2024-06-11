"use client"

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Home() {
  const { user, isAuthenticated } = useKindeBrowserClient();
  return (
    <main className='mx-auto max-w-screen-lg'>
      {isAuthenticated ? (
        <div className="mt-3 text-center">
          <h2 className="text-2xl font-bold">Welcome {user?.given_name}</h2>
          <p className="text-lg mt-2">You are authenticated</p>
        </div>
      ) : (
        <div className="mt-3 text-center">
          <h1 className="text-4xl font-bold">next-boilerplate</h1>
          <p className="text-lg mt-2">Simple boilerplate for Next application</p>
        </div>
      )}

    </main>
  );
}
