"use client";

import React, {useRef} from 'react'
import { projectsData } from "@/lib/data"
import Image from 'next/image';
import {motion, useScroll} from "framer-motion"



type ProjectProps = typeof projectsData[number]

export default function Project({title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLElement>(null)
  {/* useScroll : a hook provided by framer-motion */}
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1","1.33 1"],
    /* distance from target to activate hook, 0 1 activate when cross top of the target, 1.33 1 stops when bottom passes 33%*/
  })

  return <motion.section ref={ref} style={{scale:scrollYProgress,opacity:scrollYProgress}}
  className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-[2rm] relative mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition">
    
    
    {/* mt-auto : pushes the element to take up all the available space in the container above it */}
    
    <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm-pt-10 sm:max-w-[50%] sm:h-[20rem] flex flex-col h-full font-mono group-odd:ml-[23rem] odd:pr-2">
      <b> <h3 className="text-xl">{title}</h3> </b>
      <span className="mt-2 leading-relaxed text-gray-700"> {description}</span>    
      {/* ul is unordered list, li is a sinlge list item */}
      {/* wrap means allow to occupy multiple lines */}
      <ul className="flex flex-wrap mt-4 gap-2 pb-7 sm:mt-auto">
        {tags.map((tag,index) => (
          <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70" key={index}>{tag}</li>
        ))}
      </ul>
    </div>

    {/* absolute : positions the element relative to its nearest positioned ancestor */}
    <Image className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-odd:right-[initial] group-odd:-left-40
      transition 
      group-hover:scale-[1.04]
      group-hover:-translate-x-3
      group-hover:translate-y-3
      group-hover:-rotate-2

      group-even:group-hover:translate-x-3
      group-even:group-hover:translate-y-3
      group-even:group-hover:rotate-2

    " src={imageUrl} alt={title} quality={95}/>
    
    </motion.section>
}