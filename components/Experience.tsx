"use client"

import { useActiveSection } from "@/context/active-section-context"
import { experiencesData } from "@/lib/data"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"

function Experience() {
  const refSection = useRef<HTMLElement>(null)
  const isView = useInView(refSection,{amount:0.5})
  const {setActiveSection}=useActiveSection()
  useEffect(()=>{
    if(isView){
      setActiveSection("Experience");
    }
  },[isView ,setActiveSection])
  return (
    <section ref={refSection} id="experience" className="flex flex-col justify-center items-center gap-8">
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className='headerText'>Experience</h1>
        <h1 className='subText'>my all Experience</h1>
      </div>
      <div className="hidden lg:block">
        {experiencesData.map((item,index)=>(
          <div key={index} className="cardExperience group w-1 h-56 bg-black/5 relative flex justify-center  ">
            <h1 className="bg-gray-200 rounded-full h-fit p-2 text-xl">{item.icon}</h1>
            <div className="flex gap-6 justify-center items-start flex-col w-[580px] absolute  -top-2 group-odd:left-12 
            group-even:right-12 
              rounded-md shadow-xl bg-gray-200 px-8 py-10">
              <h1 className="text-2xl font-semibold ">{item.title}</h1>
              <p className="text-lg font-medium text-gray-500 ">{item.description}</p>
              <p className="font-semibold">{item.date}</p>
            </div>
          </div>
        ))}

      </div>
      <div className="lg:hidden flex flex-col justify-center gap-6 ">
        {experiencesData.map((item,index)=>(
            <div key={index} className="flex gap-6 justify-center items-start flex-col  
              rounded-md shadow-xl bg-gray-200 px-8 py-10">
              <h1 className="text-2xl font-semibold ">{item.title}</h1>
              <p className="text-lg font-medium text-gray-500 ">{item.description}</p>
              <p className="font-semibold">{item.date}</p>
            </div>
        ))}

      </div>
    </section>
  )
}

export default Experience
