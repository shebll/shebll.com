"use client"
import { experiencesData } from "@/lib/data"
import useActiveSectionInView from "@/utils/hooks/useActiveSectionInView"

function Experience() {  
  const {refSection} =useActiveSectionInView({sectionName:"Experience" ,amount:0.2})
  return (
    <section role="region" aria-label="Experiences"
      ref={refSection} id="experience" className="flex flex-col justify-center items-center gap-12 scroll-m-28">
      <div className="flex justify-center items-center flex-col gap-3 ">
        <h1 className='headerText' tabIndex={0}>Experience</h1>
        <h2 className='subText' tabIndex={0}>My All Experience Over one single year .</h2>
      </div>
      <div className="hidden lg:block ">
        {experiencesData.map((item,index)=>(
          <section role="region" aria-label="individual experience" key={index} className="cardExperience group w-1 h-56 bg-black/5 relative flex justify-center dark:bg-gray-50 " >
            <span className="bg-gray-200 rounded-full h-fit p-2 text-xl">{item.icon}</span>
            <div tabIndex={0} className="flex gap-6 justify-center items-start flex-col w-[580px] absolute -top-2 group-odd:left-12 
            group-even:right-12 dark:bg-[#17181c]
              rounded-md shadow-xl bg-gray-200 px-8 py-10">
              <h3 className="text-2xl font-semibold" tabIndex={0}>{item.title}</h3>
              <h4 className="text-lg font-medium text-gray-500 dark:text-gray-300" tabIndex={0}>{item.description}</h4>
              <p className="font-semibold" tabIndex={0}>{item.date}</p>
            </div>
          </section>
        ))}

      </div>
      
      <div className="lg:hidden flex flex-col justify-center gap-6 ">
        {experiencesData.map((item,index)=>(
            <div key={index} className="flex gap-6 justify-center items-start flex-col  
              rounded-md shadow-xl bg-gray-200 px-8 py-10 dark:bg-[#17181c]">
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
