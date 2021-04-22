import React from "react";
import "./Home.css";
import ProfilePic from "../../assets/images/Profile/ff.png";
import { TypingTitle } from "./TypingTitle";
import Nav from "react-bootstrap/Nav";

function Home() {
   return (
      <div id="home">
         <section className="home-section section ">
            <div className="container">
               <div className="row full-screen ">
                  <div className="home-text " style={{ color: "#F6F6F6" }}>
                     <h3>Hello</h3>
                     <h2>I'm Shalendra Singh</h2>
                     <h1 className="title">
                        <TypingTitle />
                     </h1>
                     .
                     <Nav.Link href="#about" style={{ textDecoration: "none" }}>
                        <div className="about-me-btn">More About me</div>
                     </Nav.Link>
                  </div>
                  <div className="home-img ">
                     <div className="img-box shadow">
                        <img src={ProfilePic} alt="profile-pic" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

export { Home };
