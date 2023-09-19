import { projectsData } from "@/lib/data"
import Image from "next/image"
type props={
  project: (typeof projectsData)[number] 
}
function Project({project} : props) { 
  return (
    <section role="region" aria-label="project" className="group projectCard flex flex-row-reverse even:flex-row gap-8 md:w-[800px] overflow-hidden
      bg-gray-200 hover:bg-gray-300 rounded-2xl shadow-2xl transition-all
      dark:bg-[#17181c] dark:hover:bg-[#26282e] ">
      <div className="px-10 py-14 flex justify-start flex-col flex-1 gap-6  ">
        <h1 className="text-3xl font-bold uppercase" tabIndex={0}>
          {project.title} 
        </h1>
        <p className="text-lg font-medium dark:text-gray-300" tabIndex={0}>
          {project.description}
        </p>
        <ul className="flex flex-row flex-wrap gap-3">
          {project.tags.map((skill,index)=>(
            <li key={index} tabIndex={0}
              className="px-3 py-2 bg-black/[0.05] dark:bg-black/[0.7] rounded-md shadow-md ">
              {skill}
            </li>
          ))}

        </ul>
        <div className="flex flex-col  md:flex-row gap-4 mt-5">
          <a href={project.demoUrl} className="btn primary dark:bg-black/[0.7] ">live Demo<Image src={"/skillsSVG/linkLogo.png"} alt="linkLogo" width={22} height={22}/></a>
          <a href={project.repoUrl} className="btn">Repo <Image src={"/skillsSVG/git2logo.png"} alt="Git logo" width={22} height={22}/> </a>
        </div>
      </div>
      <div className="relative flex-1 p-4 hidden md:block">
        <Image  src={project.imageUrl} alt="project image" width={560} height={560}
          className="absolute group-even:left-10 group-odd:right-10 bottom-[33px] scale-[1.4] transition-all rounded-2xl shadow-2xl 
        "/>
      </div>
    </section>  
  )
}

export default Project
