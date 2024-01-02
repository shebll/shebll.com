"use client"

import { LazyMotion, domAnimation, m } from "framer-motion"
import { useActiveSection } from "@/context/active-section-context"
import Link from "next/link"

import { links } from "@/lib/data"

function Header() {
  const {activeSection, setActiveSection}=useActiveSection()
  return (
    <header>
      <LazyMotion features={domAnimation}>      
        <div className="fixed w-full z-50 flex justify-center sm:top-[30px]">
          <m.section className=' px-7 py-3 flex justify-center items-center rounded-none  sm:rounded-full border-white
          bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] overflow-hidden
          dark:border-gray-900 dark:bg-[#0b0a1d] dark:bg-opacity-80 '
          initial={{y:-100, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <nav className="flex gap-4 gap-y-[0.1rem] justify-center flex-wrap ">
              {links.map((link,index) =>(
                <m.div key={index}
                initial={{y:-100 ,filter:"blur(3px)"}}
                animate={{y:0 ,filter:"blur(0px)"}}
                transition={{ duration: 1, type: "tween", stiffness: 50 , delay:0.4+(0.09 *index)}}>
                  <Link href={link.hash}
                  onClick={()=>setActiveSection(link.name)}
                  className={`relative z-10 px-4 py-2 flex justify-center items-center 
                  text-gray-600 hover:text-[#0b0a1d] transition font-medium
                    dark:text-gray-200 dark:hover:text-gray-50
                    ${link.name === activeSection ? "!text-gray-50 hover:!text-gray-50 dark:!text-[#0b0a1d] dark:!hover:text-[#0b0a1d]":""}`}
                  >
                    {link.name === activeSection && (
                      <m.span layoutId='underline' className=' inset-0  absolute bg-[#0b0a1d] rounded-full -z-10 dark:bg-[#e0e0e0]' />
                    )}
                      {link.name} 
                  </Link>
                </m.div>
              ))}
            </nav>
          </m.section>
        </div>
      </LazyMotion> 
    </header>
  )
}
export default Header
