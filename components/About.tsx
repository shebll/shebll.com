"use client"
import { useActiveSection } from '@/context/active-section-context';
import { variantsQ } from '@/utils/variants';
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

function About() {
  const  refSection =useRef<HTMLInputElement>(null);

  const {scrollYProgress }=useScroll({
    target :refSection,
    offset:["center end", "end 600px"]
  })
  const Q1TranslateX=useTransform(scrollYProgress ,[0,1],["0px","240px"])
  const Q1Rotate=useTransform(scrollYProgress ,[0,1],[3,26])

  //////////
  const Q2TranslateX=useTransform(scrollYProgress ,[0,1],["0px","-240px"])
  const Q2Rotate=useTransform(scrollYProgress ,[0,1],[6,-26])
  //////////
  const Q3TranslateX=useTransform(scrollYProgress ,[0,1],["0px","220px"])
  const Q3Rotate=useTransform(scrollYProgress ,[0,1],[8,-26])
  //////////
  const Q4TranslateX=useTransform(scrollYProgress ,[0,1],["0px","-280px"])
  const Q4Rotate=useTransform(scrollYProgress ,[0,1],[-8,26])
  //////////
  const Q5TranslateX=useTransform(scrollYProgress ,[0,1],["0px","-210px"])
  const Q5Rotate=useTransform(scrollYProgress ,[0,1],[3,26])
  //////////
  const isView = useInView(refSection,{amount:0.5})
  const {setActiveSection}=useActiveSection()
  if(isView){
    setActiveSection("About");
  }
  return (
    <section ref={refSection} id='about' className='scroll-m-28 flex justify-center items-center flex-col gap-12 relative'>
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className='headerText'>About Me</h1>
        <p className='subText'>here about my section</p>
      </div>
      <div className="w-[350px] md:w-[650px] flex flex-col gap-4">
        <span className='paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam dolorum repudiandae cupiditate maxime illum obcaecati qui officiis!  Magnam nostrum eos earum, error voluptatum, sunt quos, et ipsum voluptatem vel doloremque?
        </span>
        <span className='paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam dolorum repudiandae cupiditate maxime illum obcaecati qui officiis! Magnam nostrum eos earum, error voluptatum, sunt quos, et ipsum voluptatem vel doloremque?
        </span>
      </div>   
      <div className="hidden xl:block">
        <motion.div
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{rotate:Q1Rotate,translateX:Q1TranslateX}}
          className="Question top-[14%] right-0
        ">
          what are u stady?        
        </motion.div>
        <motion.div
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{rotate:Q2Rotate,translateX:Q2TranslateX}}
          className="Question top-[22%] left-0
        ">
          what is your university?                
        </motion.div>
        <motion.div
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{rotate:Q3Rotate,translateX:Q3TranslateX}}
          className="Question top-[40%] right-2
        ">
          how old are you ?        
        </motion.div>        
        <motion.div
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{rotate:Q4Rotate,translateX:Q4TranslateX}}
          className="Question top-[46%] left-2
        ">
        where do live ?   
        </motion.div>        
        <motion.div
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{rotate:Q5Rotate,translateX:Q5TranslateX}}
          className="Question bottom-[10%] left-10
        ">
          what is your university?       
        </motion.div> 
      </div>   
    </section>
  )
}

export default About
