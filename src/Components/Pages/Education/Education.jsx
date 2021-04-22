import React from "react";
import "./Education.css";
import {
   VerticalTimeline,
   VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdStar } from "react-icons/md";
const Education = () => {
   return (
      <div id="education" className="educations mt-4">
         <div className="d-flex justify-content-center text-white m-5 ">
            <h1 className="mt-3">EDUCATIONS</h1>
         </div>
         <div className="container experience-wrapper">
            <VerticalTimeline>
               <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                     background: "rgb(33, 150, 243)",
                     color: "#fff",
                  }}
                  contentArrowStyle={{
                     borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="October 2020  - May 2021"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<MdSchool />}
               >
                  <h3 className="vertical-timeline-element-title">
                     MERN Stack development
                  </h3>
                  <p>
                     Learning MERN Stack development from Masai School,
                     Bengaluru
                  </p>
               </VerticalTimelineElement>

               {/* <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="October 2020  - May 2021"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<MdSchool />}
               >
                  <h3 className="vertical-timeline-element-title">
                     MERN Stack development
                  </h3>

                  <p>
                     Learning MERN Stack development from Masai School,
                     Bengaluru
                  </p>
               </VerticalTimelineElement> */}
               <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="20016 - 2020"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<MdSchool />}
               >
                  <h3 className="vertical-timeline-element-title">
                     Bachelor’s Degree
                  </h3>
                  <p>
                     Completed my B.Tech in Computer science & engg. from Anand
                     Engineering College, Agra
                  </p>
               </VerticalTimelineElement>
               <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2014 - 2016"
                  iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                  icon={<MdSchool />}
               >
                  <h3 className="vertical-timeline-element-title">
                     Intermediate School
                  </h3>

                  <p>
                     Completed Intermediate School Education from Rama Ji
                     Barnwal Memorial Sishan Sansthan Inter College, Kushinagar
                  </p>
               </VerticalTimelineElement>
               <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2011 - 2013"
                  iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                  icon={<MdSchool />}
               >
                  <h3 className="vertical-timeline-element-title">
                     High School
                  </h3>

                  <p>
                     Completed High School Education from Blooming Bud's
                     Academy, Kahliabad
                  </p>
               </VerticalTimelineElement>
               <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2009 - 2010"
                  iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                  icon={<MdSchool />}
               >
                  <h4 className="vertical-timeline-element-title">
                     First introduction with computer during my schooling .
                  </h4>
                  <p>Typing my name in Wordpad, Paint Design, Playing Game </p>
               </VerticalTimelineElement>
               <VerticalTimelineElement
                  iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                  icon={<MdStar />}
               />
            </VerticalTimeline>
         </div>
      </div>
   );
};

export { Education };
