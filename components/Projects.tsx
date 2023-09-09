"use client"
import { projectsData } from "@/lib/data"
import React, { useEffect, useRef } from "react"
import Project from "./Project"
import { useActiveSection } from "@/context/active-section-context"
import { useInView } from "framer-motion"

function Projects() {
  const refSection = useRef<HTMLElement>(null)
  const isView = useInView(refSection,{amount:0.13})
  const {setActiveSection}=useActiveSection()
  useEffect(()=>{
    if(isView){
      setActiveSection("Projects");
    }
  },[isView ,setActiveSection])
  return (
    <section ref={refSection} id="projects" className="flex justify-center items-center flex-col gap-12 scroll-m-28">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className='headerText'>My Projects</h1>
        <p className='subText'>Every Project Pice Of Art.</p>
      </div>
      {projectsData.map((project,index)=>(
        <React.Fragment key={index}>
          <Project project={project}/>
        </React.Fragment>
      ))}
    </section>
  )
}

export default Projects
