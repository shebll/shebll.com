"use client"
import { links } from "@/lib/data"
import { LazyMotion, domAnimation, m } from "framer-motion"
import {usePathname} from "next/navigation"

import Link from "next/link"

function Header() {
  const currentPath= usePathname() 

  return (
  <LazyMotion features={domAnimation}>      
    <div className="fixed w-full z-50 flex justify-center sm:top-[30px]">
      <m.header className='py-3 px-8 rounded-none  sm:rounded-full border-white border-opacity-50
    bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]'
      initial={{y:-100, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        <nav className="flex gap-4 gap-y-2 justify-center flex-wrap overflow-hidden">
          {links.map((link,index) =>(
            <m.div key={index}
            initial={{y:-100 ,filter:"blur(3px)"}}
            animate={{y:0 ,filter:"blur(0px)"}}
            transition={{ duration: 1, type: "tween", stiffness: 50 , delay:0.4+(0.09 *index)}}>
              <Link href={link.hash} 
              className="relative z-10 px-4 py-2 flex justify-center items-center 
              text-gray-600 hover:text-gray-900 transition font-medium"
              >
                {/* {link.hash === currentPath.split("#")[1] && (
                  <motion.span layoutId='underline' className='w-full absolute h-full bg-green-400 rounded-full -z-10' />
                )} */}
                  {link.name} 
              </Link>
            </m.div>
          ))}
        </nav>
      </m.header>
    </div>
  </LazyMotion> 
  )
}
export default Header
