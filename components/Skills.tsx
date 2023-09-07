import Image from 'next/image'
import React from 'react'
import { FaCss3Alt, FaGit, FaHtml5, FaJsSquare, FaPython, FaReact, FaSass } from 'react-icons/fa'

function Skills() {
  return (
    <section className='flex justify-center items-center flex-col gap-8'>
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className='headerText'>Skills</h1>
        <h1 className='subText'>my all skills my all skills my all skills my all skills</h1>
      </div>
      <div className="slider ">
        <div className="slider-track">
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
      </div>
    </section>
  )
}

export default Skills