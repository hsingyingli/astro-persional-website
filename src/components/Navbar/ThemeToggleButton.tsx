import { useEffect, useState } from "react"
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"

const ThemeToggleButton = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') || 'dark'
    }

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  })

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
    document.documentElement.setAttribute('data-color-mode', theme || "dark")
    setIsLoading(false)
  }, [theme])

  return (
    isLoading ? <div className="w-10 h-10"></div> :
      <button onClick={toggleTheme} className="p-2 rounded text-black dark:text-white bg-yellow-300 dark:bg-purple-700 hover:bg-yellow-400 hover:dark:bg-purple-500 transition-colors duration-200">
        {
          theme === "dark" ?
            <MoonIcon className='w-6 h-6' /> :
            <SunIcon className='w-6 h-6' />
        }
      </button>
  )
}

export default ThemeToggleButton
