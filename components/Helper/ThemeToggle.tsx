"use client"


import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'


const ThemeToggle = () => {

    const [mounted, setMounted] = useState(false)
        const { theme, setTheme, systemTheme} = useTheme();

    useEffect(() => {
        setMounted(true)
    },[])

    if(!mounted) return null;
    const currentTheme = theme === "system" ? 'light'
     : theme

  return (
    <button className='p-2 transition' onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}>
      {
        currentTheme === 'dark' ? 
        (<BiSun className='text-white w-8 h-8 cursor-pointer '/>)
        :
        (<BiMoon className='text-white w-8 h-8 cursor-pointer '/>)
      }
    </button>
  )
}

export default ThemeToggle
