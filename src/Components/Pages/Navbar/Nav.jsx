import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "./logo.png";
import "./Nav.css";

const MyNavbar = () => {
   return (
      <div>
         <Navbar
            fixed="top"
            expand="md"
            className="animate-navbar nav-theme justify-content-between"
         >
            <div style={{ marginLeft: "0px" }}>
               <Navbar.Brand href="#home">
                  <img className="logo w-50 " src={Logo} alt="logo" />
               </Navbar.Brand>
            </div>
            <div>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />

               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto ">
                     <Nav.Link href="#home">Home</Nav.Link>
                     <Nav.Link href="#about">About</Nav.Link>
                     <Nav.Link href="#skills">Skills</Nav.Link>
                     <Nav.Link href="#education">Educations</Nav.Link>

                     <Nav.Link href="#projects">Projects</Nav.Link>
                     <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </div>
         </Navbar>
      </div>
   );
};

export { MyNavbar };
