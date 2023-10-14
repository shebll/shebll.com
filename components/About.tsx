"use client"
import useActiveSectionInView from '@/utils/hooks/useActiveSectionInView';
import { variantsQ } from '@/utils/motion/variants';
import { motion, useScroll, useTransform } from 'framer-motion'

function About() {
  const {refSection} =useActiveSectionInView({sectionName:"About" ,amount:0.5})

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
  const Q5TranslateX=useTransform(scrollYProgress ,[0,1],["0px","290px"])
  const Q5TranslateY=useTransform(scrollYProgress ,[0,1],["-80px","56px"])
  const Q5Rotate=useTransform(scrollYProgress ,[0,1],[3,-15])
  //////////

  return (
    <section role='region' aria-labelledby='about-me-section' ref={refSection} id='about' className='scroll-m-28 flex justify-center items-center flex-col gap-12 relative'>
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 id='about-me-section' tabIndex={0} className='headerText'>About Me</h1>
        <p tabIndex={0} className='subText'>Answers To All Questions In Your Mind .</p>
      </div>
      <div className="w-[350px] md:w-[650px] flex flex-col gap-4">
        <h2 className='paragraph dark:!text-gray-50' tabIndex={0}>
        My name is Ahmed Mohamed, and I&apos;m a 21-year-old student studying computer science at Cairo University, specializing in Information Systems. I&apos;m  currently in my fourth year of studies. I reside in Cairo, Egypt.

        {/* I am dedicated to further expanding my knowledge and honing my programming skills to excel in the ever-evolving world of technology. */}
        </h2>
        <h3 className='paragraph dark:!text-gray-50' tabIndex={0}>
        I&apos;m deeply passionate about creating exceptional websites and apps using Next.js and React. With extensive experience in the field, I possess a confident mastery of Framer Motion, enabling me to craft professional and visually stunning user experiences.
        </h3>
      </div>   
      <div className="hidden xl:block">
        <motion.p
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{rotate:Q1Rotate,translateX:Q1TranslateX}}
          className="Question top-[14%] right-0
        ">
          What Are You Study ?        
        </motion.p>
        <motion.p
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{rotate:Q2Rotate,translateX:Q2TranslateX}}
          className="Question top-[22%] left-0
        ">
          What Is Your Passion ?                
        </motion.p>
        <motion.p
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{rotate:Q3Rotate,translateX:Q3TranslateX}}
          className="Question top-[40%] right-2
        ">
          How Old Are You ?        
        </motion.p>        
        <motion.p
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{rotate:Q4Rotate,translateX:Q4TranslateX}}
          className="Question top-[46%] left-2
        ">
        Where do you reside?  
        </motion.p>        
        <motion.p
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{rotate:Q5Rotate,translateX:Q5TranslateX ,translateY:Q5TranslateY}}
          className="Question bottom-[10%] left-10
        ">
          Which university are you attending ?      
        </motion.p> 
      </div>   
    </section>
  )
}

export default About
