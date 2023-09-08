import { projectsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
type props={
  project: (typeof projectsData)[number] 
}
function Project({project} : props) {
  return (
      <section className="group projectCard flex flex-row-reverse even:flex-row gap-8 w-[800px] overflow-hidden
        bg-gray-200 hover:bg-gray-300 rounded-2xl shadow-2xl transition-all ">
        <div className="px-10 py-14 flex justify-start flex-col flex-1 gap-6  ">
          <h1 className="text-2xl font-semibold uppercase  ">
            {project.title} 
          </h1>
          <p className="text-lg font-medium text-gray-500">
            {project.description}
          </p>
          <ul className="flex flex-row flex-wrap gap-4">
            {project.tags.map((skill,index)=>(
              <li key={index} className="px-3 py-2 bg-black/[0.05] rounded-md shadow-md ">
                {skill}
              </li>
            ))}

          </ul>
          <div className="flex  flex-row gap-4 mt-5">
          <a href="/" className="btn primary">live Demo <Image src={"/skillsSVG/linkLogo.png"} alt="linkLogo" width={22} height={22}/></a>
          <a href="/" className="btn">Repo <Image src={"/skillsSVG/git2logo.png"} alt="Git logo" width={22} height={22}/> </a>
          </div>
        </div>
        <div className="relative flex-1 p-4">
          <Image  src={project.imageUrl} alt="project image" width={560} height={560}
            className="absolute group-even:left-10 group-odd:right-10 bottom-[-10px] scale-[1.4] transition-all rounded-2xl shadow-2xl 
          "/>
        </div>
      </section>  
  )
}

export default Project
