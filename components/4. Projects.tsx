import React, {useRef} from 'react'
import { projectsData } from "@/lib/data"
import SectionHeading from './Section-Heading';
import Project from '@/components/Project';

export default function Projects() {  
  return (
    <section id="projects" className="scroll-mt-28"> 
      <SectionHeading> My projects</SectionHeading>

      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
          {/* ...project access all the project in data.ts */}
        </React.Fragment>
      ))}
    </section>
  )
}

