import React from "react";
import "./About.css";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Resume from "../../assets/Shalendra_Singh_Resume.pdf";
const About = () => {
   return (
      <div id="about">
         <section className="about-section section ">
            <div className="container">
               <div className="row">
                  <div className="section-title">
                     <h2 data-heading="main info">About me</h2>
                  </div>
               </div>

               <div className="about-info">
                  <p>
                     <h6>Hi! My name is Shalendra Singh</h6>
                     Aspiring Full Stack Developer, Capable of writing clean
                     code using javaScript, ReactJS, Redux, HTML, CSS on the
                     frontend and NodeJS, Express, and MongoDB on the backend to
                     build single-page applications. Efficient team manager with
                     experience in handling a team. Very Passionate about coding
                     and strongly interested in working in a product-based
                     company.
                  </p>
                  <div className="about-desc">
                     <div className="about-desc-icon">
                        <CallIcon />
                        <sapn className="about-desc-span">
                           +91 961 6850 761
                        </sapn>
                     </div>
                     <div className="about-desc-icon">
                        <EmailIcon />
                        <sapn className="about-desc-span">
                           shalendrasingh.aec@gmail.com
                        </sapn>
                     </div>
                     <div className="about-desc-icon">
                        <LocationOnIcon />
                        <sapn className="about-desc-span">
                           Kushinagar, Uttar Pradesh
                        </sapn>
                     </div>
                  </div>

                  <div className="about-links">
                     <a
                        href={Resume}
                        download="Shalendra_Singh_Resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-btn"
                     >
                        Download Resume
                     </a>
                     <a
                        href="https://www.linkedin.com/in/ershalendrasingh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-btn"
                     >
                        LinkedIn
                     </a>
                     <a
                        href="https://www.github.com/shalendrasingh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-btn"
                     >
                        Github
                     </a>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export { About };
