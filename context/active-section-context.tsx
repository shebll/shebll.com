"use client"

import { links } from "@/lib/data"
import { error } from "console"
import { createContext, useContext, useState } from "react"

type sectionsName = (typeof links[number])["name"]
type contextActiveSectionType ={
  activeSection:sectionsName ,
  setActiveSection :React.Dispatch<React.SetStateAction<sectionsName>>
}
export const contextActiveSection = createContext<contextActiveSectionType | null>(null)

function ActiveSectionContext({children}:{ children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<sectionsName>("Home")

  return (
    <contextActiveSection.Provider value={{activeSection , setActiveSection}} >
      {children}
    </contextActiveSection.Provider>
  )
}
export function useActiveSection(){
  const context=useContext(contextActiveSection)
  if(!context){
    throw new Error("null contextActiveSection")
  }
  return context
}
export default ActiveSectionContext
