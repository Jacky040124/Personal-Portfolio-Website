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
      <VerticalTimeline lineColor="#000"> {/* Set lineColor to black */}
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement 
              date={item.date} 
              icon={item.icon} 
              visible={true}
              contentStyle={{ background: "#fff", color: "#000" }} 
              contentArrowStyle={{ borderRight: "7px solid  #000" }} 
              iconStyle={{ background: "#fff", color: "#000" }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
