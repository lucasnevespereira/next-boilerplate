"use client"

import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function ThemeClient({ children }: any) {
  const { theme } = useContext<any>(ThemeContext)
  return <div className="p-5 text-foreground min-h-screen flex flex-col justify-between" data-theme={theme}>{children}</div>
}