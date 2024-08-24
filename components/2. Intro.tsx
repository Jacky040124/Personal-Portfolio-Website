/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Image from 'next/image'
import { HiDownload } from "react-icons/hi"
import { FaLinkedin, FaInstagram, FaGithubSquare} from "react-icons/fa";

export default function Intro() {  
  return (
    <section id="home" className="scroll-mt-[100rem]"> 
      
      <div className="flex item-center justify-center p-10">
        <div> 
          <Image 
          src="/Jacky.jpeg" 
          alt="Jacky Photo" 
          width='192'
          height='192'
          quality='95'
          priority={true}
          className = "h-48 w-48 rounded-full border-[0.35rem] border-white shadow-xl"
          /> 
        </div>
      </div>

      <p className="mb-10 mt-4 px-4 text-xl font-mono !leading-[1.5] sm:text-xl"> 
        <b> Hello🤗, My name is Jacky Zhong</b>
        , Second-year Statistics student at the University of British Columbia, 
        passionate about leveraging data to drive meaningful insights and solutions. 
        I dedicated to developing innovative software and statistical models that 
        contribute to a more efficient and informed future. Excited to collaborate on 
        <b> impactful projects and create opportunities </b>
        that empower both my peers and the community.

      </p>

      <div className="flex justify-center items-center" >
        <a href="/resume.pdf" download="My_Resume.pdf">
          <button className="group bg-gray-900 text-white px-32 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"> Resume <HiDownload /> </button>
        </a>

        <a href="https://www.linkedin.com/in/zhong808800/">
        <button className="group px-3 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition">  <FaLinkedin className="text-4xl text-black ml-10" />  </button>
        </a>

        <a href="https://github.com/Jacky040124">
        <button className="group px-3 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"> <FaGithubSquare className="text-4xl text-black"/> </button>
        </a>

        <a href="https://www.instagram.com/jacky_808800/">
        <button className="group px-3 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"> <FaInstagram className="text-4xl text-black"/> </button>
        </a>
      </div>
      
    </section>
  )
}