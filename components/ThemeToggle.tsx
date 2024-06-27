'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setIsDarkMode(true)
    }
  }

  return (
    <div className="relative inline-flex items-center p-1 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-colors duration-300 ease-in-out">
      <button
        className={`p-2 rounded-full transition-colors duration-300 ease-in-out ${
          isDarkMode ? 'bg-zinc-700' : 'bg-zinc-300'
        }`}
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? (
          <SunIcon className="w-6 h-6 text-zinc-100" />
        ) : (
          <MoonIcon className="w-6 h-6 text-zinc-800" />
        )}
      </button>
    </div>
  )
}
