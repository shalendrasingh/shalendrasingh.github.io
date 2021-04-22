import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import emailjs from "emailjs-com";

const Contacts = () => {
   function sendEmail(e) {
      e.preventDefault();

      emailjs
         .sendForm(
            "service_2b13lqn",
            "template_6bhrom2",
            e.target,
            "user_f35pigzDPejEOMcjkOADK"
         )
         .then(
            (result) => {
               // console.log(result.text);
            },
            (error) => {
               console.log(error.text);
            }
         );
      e.target.reset();
   }
   return (
      <div>
         <Container>
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Row className=" bg-light">
               <Col>
                  <div id="contact">
                     <Jumbotron className="contact-jumbotron mt-5">
                        <Row>
                           <Col className="d-flex justify-content-center flex-wrap">
                              <div className="m-2">
                                 <a
                                    href="mailto:shalendrasingh.aec@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    <Button
                                       variant="outline-danger"
                                       title="shalendrasingh.aec@gmail.com"
                                    >
                                       <EmailIcon /> Email Me
                                    </Button>
                                 </a>
                              </div>
                              <div className="m-2">
                                 <a
                                    href="https://www.linkedin.com/in/ershalendrasingh/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    <Button
                                       variant="outline-primary"
                                       title="Visit my LinkenIn"
                                    >
                                       <LinkedInIcon /> LinkedIn
                                    </Button>
                                 </a>
                              </div>

                              <div className="m-2">
                                 <a
                                    href="https://github.com/shalendrasingh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    <Button
                                       variant="outline-dark"
                                       title="My other projects"
                                    >
                                       <GitHubIcon /> GitHub
                                    </Button>
                                 </a>
                              </div>
                           </Col>
                        </Row>
                     </Jumbotron>
                  </div>
               </Col>
               <Col>
                  <Jumbotron className="contact-jumbotron mt-5">
                     <Form onSubmit={sendEmail}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                           <Form.Label>Full Name</Form.Label>
                           <Form.Control
                              type="text"
                              placeholder="Mr. Jhon"
                              name="user_name"
                              required
                           />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                           <Form.Label>Mobile</Form.Label>
                           <Form.Control
                              type="text"
                              placeholder="+91 961x8xxx1"
                              name="contact_number"
                              required
                           />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                           <Form.Label>Email address</Form.Label>
                           <Form.Control
                              type="email"
                              placeholder="jhon@example.com"
                              name="user_email"
                              required
                           />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                           <Form.Label>Message</Form.Label>
                           <Form.Control
                              as="textarea"
                              name="message"
                              rows={3}
                              required
                           />
                        </Form.Group>
                        <Button variant="primary" value="send" type="submit">
                           Send
                        </Button>
                     </Form>
                  </Jumbotron>
               </Col>
            </Row>
            <Row className="d-flex justify-content-center">
               <p className="pt-3 text-center ">
                  Design and Developed By Shalendra Singh
               </p>
            </Row>
         </Container>
      </div>
   );
};

export { Contacts };
