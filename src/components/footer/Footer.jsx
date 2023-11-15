import React from "react";
import "./footer.css";
import { Button, Card } from "react-bootstrap";

const Contact = () => {
  
  return (
    <div className="contact d-flex align-items-center" id="contact">
      <div
        className="d-flex flex-column align-items-sm-start"
        style={{ gap: "1rem" }}
      >
        <h1>Let's Work Together</h1>
        <p>
          Lorem ipsum iskim bla bla edios
          <br />
          mala mallm isko braab gebru chiska retu eru mala
        </p>
        <h6 className="text-info" style={{ cursor: "pointer" }}>
          muhazvla313@gmail.com <i className="fa-solid fa-arrow-right"></i>
        </h6>
        <div className="links">
          <i
            href="https://github.com/muhazAhmed"
            className="fa-brands fa-github"
            target="_blank"
          ></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>

      <Card>
        <Card.Body>
          <Card.Title>Send me a message</Card.Title>
          <input type="email" autoComplete="off" placeholder="Email" required />
          <textarea placeholder="Your Message" />
        </Card.Body>
        <Button>Submit</Button>
      </Card>
    </div>
  );
};

export default Contact;
