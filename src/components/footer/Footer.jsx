import React from "react";
import "./footer.css";
import { Button, Card } from "react-bootstrap";

const Contact = () => {
  const email = "muhazvla313@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="contact d-flex align-items-center" id="contact">
      <div
        className="d-flex flex-column align-items-sm-start"
        style={{ gap: "1rem" }}
      >
        <h1>Let's Work Together</h1>
        <p>
          Have a project in mind, or do you want to work with me?
          <br />
          Feel free to reach out by writing an email.
        </p>
        <h6
          className="text-info"
          style={{ cursor: "pointer" }}
          onClick={handleEmailClick}
        >
          {email} <i className="fa-solid fa-arrow-right"></i>
        </h6>
        <div className="links">
          <a
            href="https://github.com/muhazAhmed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/muhazahmed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com/@gitunemployed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
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
