"use client"
import { LazyMotion, domAnimation, m, motion } from 'framer-motion'
import React from 'react'

function Divider() {
  return (
    <LazyMotion features={domAnimation}>
    <m.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    viewport={{once:true}}
    transition={{delay:2.5}}  className='h-[100px] w-1 bg-[#e1e1e1] blur-[2px]'>     
    </m.div>
    </LazyMotion>
  )
}

export default Divider
