"use client"

import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function ThemeClient({ children }: any) {
  const { theme } = useContext<any>(ThemeContext)
  return <div data-theme={theme} className="app min-h-screen text-foreground flex flex-col justify-between">{children}</div>
}