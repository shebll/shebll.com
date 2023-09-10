"use client"
import { experiencesData } from "@/lib/data"
import useActiveSectionInView from "@/utils/hooks/useActiveSectionInView"

function Experience() {  
  const {refSection} =useActiveSectionInView({sectionName:"Experience" ,amount:0.5})
  return (
    <section ref={refSection} id="experience" className="flex flex-col justify-center items-center gap-12 scroll-m-28">
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
