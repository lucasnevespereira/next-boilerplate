"use client"

import { DEFAULT_THEME } from "@/constants";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(DEFAULT_THEME)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const storedTheme = localStorage.getItem("theme") || DEFAULT_THEME
    setTheme(storedTheme)
  }, [])

  if (!isMounted) {
    return null
  }

  const changeTheme = (theme: string) => {
    setTheme(theme)
    localStorage.setItem("theme", theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}