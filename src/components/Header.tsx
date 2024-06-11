"use client"
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import Link from "next/link";
import ThemeButton from "@/components/ui/ThemeButton";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export const Header = () => {
  const { isAuthenticated } = useKindeBrowserClient();
  return (
    <header className="container p-5 flex justify-between items-center mx-auto">
      <Link href="/" className="logo text-primary text-2xl">next-boilerplate.</Link>
      <div className="actions flex gap-2 items-center">
        <ThemeButton />
        {isAuthenticated ? <LogoutLink className="btn btn-primary-900">Log out</LogoutLink> : <LoginLink className="btn btn-primary-900">Sign in</LoginLink>}
      </div>
    </header>
  )
}


export default Header;