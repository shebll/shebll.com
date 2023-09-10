"use client"
import { skillsData } from '@/lib/data'
import useActiveSectionInView from '@/utils/hooks/useActiveSectionInView'

function Skills() {
  const {refSection} =useActiveSectionInView({sectionName:"Skills" ,amount:0.5})
  return (
    <section ref={refSection} id="skills" className='flex justify-center items-center flex-col gap-12 scroll-m-28 max-w-[1400px] '>
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className='headerText'>Skills</h1>
        <h1 className='subText'>my all skills my all skills my all skills my all skills</h1>
      </div>
      <div className="flex gap-6 justify-center items-stretch flex-col lg:flex-row ">
        {skillsData.map((track,index)=>(
          <div key={index} className="flex gap-8 justify-start items-center flex-col flex-1 
            flex-wrap rounded-md shadow-xl bg-gray-200 px-8 py-10">
            <div className="flex gap-4 justify-center items-center flex-col">
              <div className="text-3xl font-bold ">{track.name}</div>
              <div className="text-lg font-medium text-gray-500 ">{track.description}</div>
            </div>
            <ul className="flex flex-row flex-wrap gap-4">
                {track.skills.map((skill,index)=>(
                  <li key={index} className="skill px-3 py-2 rounded-md shadow-xl text-white font-semibold ">
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      {/*<div className="slider ">
        <div className="slider-track">
          {skillsData.map((skill,index )=>(
            <div className="slide" key={index}>
              <Image src={`/skillsSVG/${skill}.svg`} alt={`${skill}-logo` } width={60} height={40}/>
            </div>
          ))}
          {skillsData.map((skill,index )=>(
            <div className="slide" key={index}>
              <Image src={`/skillsSVG/${skill}.svg`} alt={`${skill}-logo` } width={60} height={40}/>
            </div>
          ))}
          <div className="slide">
            <Image src={"/framer-motion.svg"} alt='framer-motion'  width={60} height={60}/>
          </div>
          <div className="slide">
            <Image src={"/reactjs.svg"} alt='reactjs-logo' width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"/Nextjs-logo.svg"} alt='Nextjs-logo' width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"/Git-logo-black.svg"} alt='Git-logo-black-logo' width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"/HTML5_logo_and_wordmark.svg"} alt='HTML5_logo_and_wordmarko' width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"/Unofficial_JavaScript_logo_2.svg"} alt="Unofficial_JavaScript_logo_2-logo" width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"/Sass_Logo_Color.svg"} alt='Sass_Logo_Color' width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"Typescript_logo_2020.svg"} alt='Sass_Logo_Color' width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"Tailwind_CSS_logo.svg"} alt='Tailwind_CSS_logo (1)' width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"/framer-motion.svg"} alt='framer-motion'  width={60} height={60}/>
          </div>
          <div className="slide">
            <Image src={"/reactjs.svg"} alt='reactjs-logo' width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"/Nextjs-logo.svg"} alt='Nextjs-logo' width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"/Git-logo-black.svg"} alt='Git-logo-black-logo' width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"/HTML5_logo_and_wordmark.svg"} alt='HTML5_logo_and_wordmarko' width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"/Unofficial_JavaScript_logo_2.svg"} alt="Unofficial_JavaScript_logo_2-logo" width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"/Sass_Logo_Color.svg"} alt='Sass_Logo_Color' width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"Typescript_logo_2020.svg"} alt='Sass_Logo_Color' width={60} height={60} />
          </div>
          <div className="slide">
            <Image src={"Tailwind_CSS_logo.svg"} alt='Tailwind_CSS_logo (1)' width={60} height={60} />
          </div> 

        </div>
      </div>*/}
    </section>
  )
}

export default Skills
