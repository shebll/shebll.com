"use client"
import { ImageVariants, TextVariants, btnVariants, waveVariants } from "@/utils/motion/variants"
import { LazyMotion, domAnimation, m } from "framer-motion"
import useActiveSectionInView from "@/utils/hooks/useActiveSectionInView"

import Image from "next/image"
import Link from "next/link"


function Inter() {
  const {refSection} =useActiveSectionInView({sectionName:"Home" ,amount:0.5})

  return (
  <LazyMotion features={domAnimation} >   
    <section ref={refSection} className="pt-[147px] lg:pt-[200px] flex justify-center items-center flex-col gap-12">
      <div className="flex justify-center items-center flex-col relative">
        <m.div variants={ImageVariants} initial={"initial"} animate={"animate"}>
          <Image src={"/personalImages/shebllImage.png"} alt="shebll image" priority={true} quality={92} width={150} height={100}
            className="rounded-full bg-cover border-[3px] border-white shadow-xl pointer-events-none "/>
        </m.div>
        <m.span variants={waveVariants} initial={"initial"} animate={"animate"}
          className="hi bottom-0 text-5xl right-2 absolute pointer-events-none">👋🏽</m.span>
      </div>
      <div className="flex justify-center items-center  flex-col gap-8">
        <m.h1 variants={TextVariants} initial={"initial"} animate={"animate"}
          className="text-[24px] md:text-4xl leading-[33px] md:leading-[46px] text-center tracking-tight">
          Hello, I&apos;m <span className="font-bold">Ahmed Shebl</span>.
          I&apos;m a junior <span className="font-bold">Full-Stack Developer</span> <br />
          with <span className="font-bold">1</span> years of experience. I enjoy building<br />
          sites & apps. My focus is React <Link href={"https://nextjs.org/"} target="blank" className="font-bold underline">( Next.js )</Link>.
        </m.h1>
        <m.div variants={btnVariants} initial={"initial"} animate={"animate"}
          className="flex justify-center items-stretch gap-3 flex-col md:flex-row w-[250px] md:w-full">
          <Link href={"#contact"} className="btn primary flex justify-center items-center">
            Contact Me here
            <span className="text-[22px] relative top-[-3px]" >📨</span>
          </Link>
          <a className="btn btn flex justify-center items-center" href="/cv.pdf" download={true}>
            Download CV
            <span className="text-[19.5px]">📑</span>
          </a>
          <Link className="btn rounded-full btn flex justify-center items-center"
            href={"https://www.linkedin.com/in/ahmed-shebl-07a331268/"}target="blank">
            <Image src={"/skillsSVG/icon-linkedin.svg"} alt="Git logo" width={26} height={26} />
          </Link>
          <Link className="btn btn flex justify-center items-center"
            href={"https://github.com/shebll"} target="blank">
            <Image src={"/skillsSVG/icons8-git (1).svg"} alt="Git logo" width={26} height={26} />
          </Link>
        </m.div>
      </div>
    </section>
  </LazyMotion> 
  )
}

export default Inter
