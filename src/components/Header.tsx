"use client"

import Link from "next/link";
import ThemeButton from "@/components/ui/ThemeButton";

export const Header = () => {
  return (
    <header className="container flex justify-between items-center mx-auto">
      <Link href="/" className="logo text-primary text-2xl">next-boilerplate.</Link>
      <div className="actions flex gap-2 items-center">
        <ThemeButton />
        <button className="btn btn-primary-900">Log in</button>
      </div>
    </header>
  )
}


export default Header;