import React from 'react'
import SectionHeading from './Section-Heading';

export default function About() {  
  return (
    <section id="about" className=" w-auto mb-28 max-w-[30rem] text-center leading-8 sm:mb-40 scroll-mt-28 px-4 sm:px-0">
      <div className="font-mono flex flex-col">
        <SectionHeading> About Me </SectionHeading>

        <p className="mb-3">
          <span className="font-mono font-medium">
            I am currently pursuing a <span className="font-bold">Bachelor of Science</span> 
            in <span className="font-bold">Statistics</span> at the <span className="font-bold">University of British Columbia</span>, where I have developed a strong foundation
            in <span className="font-bold">data analysis</span>, <span className="font-bold">programming</span>, and <span className="font-bold">problem-solving</span>. My passion for technology led me to gain 
            practical experience as an <span className="font-bold">IT intern</span>, where I managed databases and contributed to digital transformation projects.
          </span>
        </p>

        <p>
          <span className="font-mono font-medium">
            Outside of my academic and professional pursuits, I find balance in outdoor activities like <span className="font-bold">skateboarding</span> and <span className="font-bold">hiking</span>. These hobbies not only keep me active but also allow me to clear my mind and stay creative. I am always eager to learn new technologies and am currently seeking a <span className="font-bold">full-time position</span> as a <span className="font-bold">software developer</span> where I can continue to grow and contribute my skills to impactful projects.
          </span>
        </p>
      </div>
    </section>
  )
}
