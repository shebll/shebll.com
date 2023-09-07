"use client"
import { ImageVariants, TextVariants, btnVariants, waveVariants } from "@/utils/variants"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { BsArrowRight } from "react-icons/bs"
import { BsDownload } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

import Image from "next/image"
import Link from "next/link"


function Inter() {
  return (
  <LazyMotion features={domAnimation}>   
    <section className="pt-[200px] flex justify-center items-center flex-col gap-12">
      <div className="flex justify-center items-center flex-col relative">
        <m.div variants={ImageVariants} initial={"initial"} animate={"animate"}>
          <Image src={"/shebllImage.jpeg"} alt="shebll image" priority={true} quality={92} width={150} height={100}
            className="rounded-full bg-cover border-[3px] border-white shadow-xl pointer-events-none "/>
        </m.div>
        <m.span variants={waveVariants} initial={"initial"} animate={"animate"}
          className="hi bottom-0 text-5xl right-2 absolute pointer-events-none">👋</m.span>
      </div>
      <div className="flex justify-center items-center  flex-col gap-8">
        <m.h1 variants={TextVariants} initial={"initial"} animate={"animate"}
          className="text-[24px] md:text-4xl text-center leading-[33px] md:leading-[46px] tracking-tight">
          Hello, I&apos;m <span className="font-bold">Ahmed Shebl</span>.
          I&apos;m a junior <span className="font-bold">Full-Stack Developer</span> <br />
          with <span className="font-bold">1</span> years of experience. I enjoy building<br />
          sites & apps. My focus is React <Link href={"https://nextjs.org/"} target="blank" className="font-bold underline">( Next.js )</Link>.
        </m.h1>
        <m.div variants={btnVariants} initial={"initial"} animate={"animate"}
          className="flex justify-center items-center gap-3 flex-col md:flex-row w-[250px] md:w-full">
          <Link href={"#contact"} className="btn primary">
            Contact Me 
            <BsArrowRight/>
          </Link>
          <button className="btn">
            Download CV
            <BsDownload/>
          </button>
          <Link className="btn rounded-full" href={"/"} target="blank" ><FaLinkedinIn/></Link>
          <Link className="btn" href={"/"} target="blank"><FaGithub/></Link>
        </m.div>
      </div>
    </section>
  </LazyMotion> 
  )
}

export default Inter
