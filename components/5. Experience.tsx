"use client";

import React from "react";
import SectionHeading from "./Section-Heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline 
        lineColor="#000" 
        layout={"1-column"}  // Use a single column layout for smaller screens
      > 
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement 
              date={item.date} 
              icon={item.icon} 
              visible={true}
              contentStyle={{ 
                background: "#fff", 
                color: "#000", 
                padding: "1rem", // Ensure padding is appropriate for smaller screens 
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" 
              }} 
              contentArrowStyle={{ borderRight: "7px solid  #000" }} 
              iconStyle={{ 
                background: "#fff", 
                color: "#000",
                fontSize: "1.5rem",  // Adjust icon size for smaller screens
              }}
              className="sm:mx-4 sm:my-2 mx-2 my-2"  // Add spacing adjustments for smaller screens
            >
              <h3 className="font-semibold capitalize sm:text-lg text-base">{item.title}</h3>
              <p className="font-normal !mt-0 sm:text-base text-sm">{item.location}</p>
              <p className="!mt-1 !font-normal sm:text-base text-sm text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
