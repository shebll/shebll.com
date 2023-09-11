"use client"
import React, { useEffect, useState } from 'react'
type theme ="dark"|"light"|""
function ThemeSwitch() {
  const [theme, setTheme] = useState<theme>("")
  const ThemeSwitchHandle =()=>{
    if(theme === "light"){
      setTheme("dark")
      window.localStorage.setItem("theme","dark")
      document.documentElement.classList.add("dark")
    }else{
      setTheme("light")
      window.localStorage.setItem("theme","light")
      document.documentElement.classList.remove("dark")
    }
  }
  const detectTheme =()=>{
    const matches = window.matchMedia('(prefers-color-scheme: dark)')
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',({ matches }) => {
      if (matches) {
        setTheme("dark")
        window.localStorage.setItem("theme","dark")
        document.documentElement.classList.add("dark")
      } else {
        setTheme("light")
        window.localStorage.setItem("theme","light")
        document.documentElement.classList.remove("dark")
      }
    })
    if (matches.matches) {
      setTheme("dark")
      window.localStorage.setItem("theme","dark")
      document.documentElement.classList.add("dark")
    } else {
      setTheme("light")
      window.localStorage.setItem("theme","light")
      document.documentElement.classList.remove("dark")
    }
  }
  useEffect(() => {
    const themeFormLocal= window.localStorage.getItem("theme")  as theme| null
    if(themeFormLocal){
      if(themeFormLocal == "dark"){
        setTheme(themeFormLocal)
        document.documentElement.classList.add("dark")
      }else{
        setTheme(themeFormLocal)
        document.documentElement.classList.remove("dark")
      }
    }else{
      console.log("no local")
      detectTheme()
    }
    return(
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener("change",({ matches }) => {
        if (matches) {
          setTheme("dark")
          window.localStorage.setItem("theme","dark")
          document.documentElement.classList.add("dark")
        } else {
          setTheme("light")
          window.localStorage.setItem("theme","light")
          document.documentElement.classList.remove("dark")
        }
      })
    )
  }, [])
  
  return (
    <button className='bg-gray-200 border-black/5 shadow-md shadow-[#b9b9b9bb]
      p-2 rounded-full border-[1.4px] 
      fixed bottom-8 right-10 text-2xl  transition-all
      hover:scale-[1.1] active:scale-[0.9]
      dark:bg-[#0b0a1d] dark:border-gray-50 dark:shadow-[#e0da9dbb]'
      onClick={ThemeSwitchHandle}>
      {
        theme===""? ("☁️") : (theme === "light" ? ("🌤️"):("🌙") ) 
      }
    </button>
  )
}

export default ThemeSwitch
