"use client"
import { useActiveSection } from "@/context/active-section-context";
import type { sectionsName } from "@/types/typing";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
type props={
  sectionName: sectionsName,
  amount:number
}
function useActiveSectionInView({sectionName ,amount}:props) {
  const refSection = useRef<HTMLElement>(null)
  const isView = useInView(refSection,{amount:amount})
  const {setActiveSection}=useActiveSection()
  useEffect(()=>{
    if(isView){
      setActiveSection(sectionName);
    }
  },[isView ,setActiveSection ,sectionName])
  return {refSection}
}

export default useActiveSectionInView
