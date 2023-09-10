"use client"
import { projectsData } from "@/lib/data"
import React from "react"
import Project from "./Project"
import useActiveSectionInView from "@/utils/hooks/useActiveSectionInView"

function Projects() {
  const {refSection} =useActiveSectionInView({sectionName:"Projects" ,amount:0.13})
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
